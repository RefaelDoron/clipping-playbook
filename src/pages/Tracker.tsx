import { useEffect, useMemo, useState } from "react";
import { Field, PageHeader, SortableTable } from "../components/ui";
import { SHEET_FORMULA, SHEET_HEADER, SHEET_SUM } from "../data";
import { csvEscape, downloadText, loadJson, money, num, saveJson } from "../lib";

type ClipRow = {
  id: string;
  date: string;
  creator: string;
  platform: string;
  url: string;
  views: number;
  watch: number;
  retention: number;
  likes: number;
  shares: number;
  campaign: string;
  cpm: string;
  earnings: number;
};

const KEY = "clipping-playbook:tracker";
const PLATFORMS = ["TikTok", "Instagram", "YouTube Shorts", "X"];

const EMPTY_FORM = {
  date: "",
  creator: "",
  platform: "TikTok",
  url: "",
  views: "",
  watch: "",
  retention: "",
  likes: "",
  shares: "",
  campaign: "",
  cpm: "",
  earnings: "",
};

export function Tracker() {
  const [rows, setRows] = useState<ClipRow[]>(() => loadJson(KEY, []));
  const [form, setForm] = useState(EMPTY_FORM);
  const [editing, setEditing] = useState<string | null>(null);

  useEffect(() => {
    saveJson(KEY, rows);
  }, [rows]);

  const totals = useMemo(() => {
    const v = rows.reduce((a, r) => a + r.views, 0);
    const e = rows.reduce((a, r) => a + r.earnings, 0);
    const l = rows.reduce((a, r) => a + r.likes, 0);
    const s = rows.reduce((a, r) => a + r.shares, 0);
    const ret = rows.length ? rows.reduce((a, r) => a + r.retention, 0) / rows.length : 0;
    const w = rows.length ? rows.reduce((a, r) => a + r.watch, 0) / rows.length : 0;
    return { v, e, l, s, ret, w };
  }, [rows]);

  const set = (key: keyof typeof EMPTY_FORM) => (
    e: { target: { value: string } },
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const toRow = (id: string): ClipRow => ({
    id,
    date: form.date,
    creator: form.creator,
    platform: form.platform,
    url: form.url,
    views: num(form.views),
    watch: num(form.watch),
    retention: num(form.retention),
    likes: num(form.likes),
    shares: num(form.shares),
    campaign: form.campaign,
    cpm: form.cpm,
    earnings: num(form.earnings),
  });

  const submit = () => {
    if (editing) {
      setRows((rs) => rs.map((r) => (r.id === editing ? toRow(editing) : r)));
      setEditing(null);
    } else {
      setRows((rs) => [...rs, toRow(crypto.randomUUID())]);
    }
    setForm((f) => ({
      ...EMPTY_FORM,
      date: f.date,
      creator: f.creator,
      platform: f.platform,
      campaign: f.campaign,
    }));
  };

  const edit = (row: ClipRow) => {
    setEditing(row.id);
    setForm({
      date: row.date,
      creator: row.creator,
      platform: row.platform,
      url: row.url,
      views: String(row.views || ""),
      watch: String(row.watch || ""),
      retention: String(row.retention || ""),
      likes: String(row.likes || ""),
      shares: String(row.shares || ""),
      campaign: row.campaign,
      cpm: row.cpm,
      earnings: String(row.earnings || ""),
    });
  };

  const remove = (id: string) => {
    setRows((rs) => rs.filter((r) => r.id !== id));
    if (editing === id) {
      setEditing(null);
      setForm(EMPTY_FORM);
    }
  };

  const csv = useMemo(() => {
    const lines = [
      SHEET_HEADER,
      ...rows.map((r) =>
        [
          r.date,
          r.creator,
          r.platform,
          r.url,
          r.views,
          r.watch,
          r.retention,
          r.likes,
          r.shares,
          r.campaign,
          r.cpm,
          r.earnings,
        ]
          .map(csvEscape)
          .join(","),
      ),
    ];
    return lines.join("\n");
  }, [rows]);

  return (
    <article className="page">
      <PageHeader
        kicker="08 · Tracker"
        title="Clip tracking sheet"
        lede="The Google Sheet is the record you'll pitch with. This page is a local scratchpad: add, edit, delete, and export CSV. Rows save in this browser only."
      />

      <h2>Google Sheets layout</h2>
      <p>Paste this header into row 1.</p>
      <pre className="code">{SHEET_HEADER}</pre>
      <p>Earnings formula (views ÷ 1,000 × CPM × 0.9 for the fee):</p>
      <code className="formula">{SHEET_FORMULA}</code>
      <p>Column totals:</p>
      <code className="formula">{SHEET_SUM}</code>

      <h2>{editing ? "Edit clip" : "Add a clip"}</h2>
      <div className="form-grid cols-4">
        <Field label="Date">
          <input type="date" value={form.date} onChange={set("date")} />
        </Field>
        <Field label="Creator / source">
          <input value={form.creator} onChange={set("creator")} />
        </Field>
        <Field label="Platform">
          <select value={form.platform} onChange={set("platform")}>
            {PLATFORMS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </Field>
        <Field label="Post URL">
          <input value={form.url} onChange={set("url")} />
        </Field>
        <Field label="Views">
          <input type="number" min={0} value={form.views} onChange={set("views")} />
        </Field>
        <Field label="Avg watch time (s)">
          <input type="number" min={0} value={form.watch} onChange={set("watch")} />
        </Field>
        <Field label="Retention %">
          <input type="number" min={0} max={100} value={form.retention} onChange={set("retention")} />
        </Field>
        <Field label="Likes">
          <input type="number" min={0} value={form.likes} onChange={set("likes")} />
        </Field>
        <Field label="Shares">
          <input type="number" min={0} value={form.shares} onChange={set("shares")} />
        </Field>
        <Field label="Campaign">
          <input value={form.campaign} onChange={set("campaign")} />
        </Field>
        <Field label="CPM ($/1K)">
          <input type="number" min={0} step={0.01} value={form.cpm} onChange={set("cpm")} />
        </Field>
        <Field label="Earnings ($)">
          <input type="number" min={0} step={0.01} value={form.earnings} onChange={set("earnings")} />
        </Field>
      </div>
      <div className="inline-actions">
        <button type="button" className="btn btn-primary" onClick={submit}>
          {editing ? "Save changes" : "Add clip"}
        </button>
        {editing ? (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setEditing(null);
              setForm(EMPTY_FORM);
            }}
          >
            Cancel edit
          </button>
        ) : null}
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => setRows([])}
          disabled={rows.length === 0}
        >
          Clear all
        </button>
        <button
          type="button"
          className="btn btn-lime"
          onClick={() => downloadText("clip-tracker.csv", csv)}
          disabled={rows.length === 0}
        >
          Export CSV
        </button>
      </div>

      <div className="totals">
        <div className="total">
          <span>Clips</span>
          <b>{rows.length}</b>
        </div>
        <div className="total">
          <span>Views</span>
          <b>{totals.v.toLocaleString()}</b>
        </div>
        <div className="total">
          <span>Earnings</span>
          <b>{money(totals.e)}</b>
        </div>
        <div className="total">
          <span>Avg retention</span>
          <b>{totals.ret.toFixed(1)}%</b>
        </div>
      </div>

      {rows.length > 0 ? (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {[
                  "Date",
                  "Creator",
                  "Platform",
                  "Views",
                  "Watch",
                  "Ret %",
                  "Likes",
                  "Shares",
                  "Campaign",
                  "Earnings",
                  "",
                ].map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>{r.date}</td>
                  <td>
                    {r.creator}
                    {r.url ? (
                      <>
                        <br />
                        <a href={r.url} target="_blank" rel="noreferrer">
                          post
                        </a>
                      </>
                    ) : null}
                  </td>
                  <td>{r.platform}</td>
                  <td>{r.views.toLocaleString()}</td>
                  <td>{r.watch}s</td>
                  <td>{r.retention}%</td>
                  <td>{r.likes.toLocaleString()}</td>
                  <td>{r.shares.toLocaleString()}</td>
                  <td>{r.campaign}</td>
                  <td className="em-col">{money(r.earnings)}</td>
                  <td>
                    <div className="row-actions">
                      <button type="button" onClick={() => edit(r)}>
                        Edit
                      </button>
                      <button type="button" onClick={() => remove(r.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>{rows.length} clips</td>
                <td />
                <td>
                  <strong>{totals.v.toLocaleString()}</strong>
                </td>
                <td>{totals.w.toFixed(1)}s avg</td>
                <td>{totals.ret.toFixed(1)}% avg</td>
                <td>{totals.l.toLocaleString()}</td>
                <td>{totals.s.toLocaleString()}</td>
                <td />
                <td>
                  <strong>{money(totals.e)}</strong>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="meta">No clips yet. Add one above — it stays in this browser.</p>
      )}

      {/* Keep SortableTable imported usage for the sheet reminder snapshot */}
      <h2>Column map</h2>
      <SortableTable
        columns={["Column", "Sheet letter", "Notes"]}
        rows={[
          ["Date", "A", "Use ISO dates so it sorts"],
          ["Creator/Source", "B", "Campaign or creator name"],
          ["Platform", "C", "TikTok / Instagram / YouTube Shorts / X"],
          ["Post URL", "D", "The live post, not the file"],
          ["Views", "E", "Used in the earnings formula"],
          ["Avg watch time (s)", "F", "From native analytics"],
          ["Retention %", "G", "Average across the clip"],
          ["Likes", "H", ""],
          ["Shares", "I", ""],
          ["Campaign", "J", "Marketplace campaign name"],
          ["CPM ($/1K)", "K", "Listed rate for that campaign"],
          ["Earnings ($)", "L", SHEET_FORMULA],
        ]}
      />
    </article>
  );
}
