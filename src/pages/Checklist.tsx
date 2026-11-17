import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader, Progress, SortableTable } from "../components/ui";
import { CHECKLIST } from "../data";
import { loadJson, saveJson } from "../lib";

const KEY = "clipping-playbook:checklist";

export function Checklist() {
  const [done, setDone] = useState<Record<string, boolean>>(() => loadJson(KEY, {}));

  useEffect(() => {
    saveJson(KEY, done);
  }, [done]);

  const pct = useMemo(() => {
    const n = CHECKLIST.filter((c) => done[c.id]).length;
    return (n / CHECKLIST.length) * 100;
  }, [done]);

  const toggle = (id: string) => {
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <article className="page">
      <PageHeader
        kicker="06 · Day one"
        title="Starter checklist"
        lede="Stand up accounts, payouts, a clipper, CapCut, and a shared Drive before you chase campaigns. Checkboxes save in this browser (localStorage) — nothing is sent anywhere."
      />

      <div className="mic-banner">
        <strong>No microphone or camera needed.</strong>
        <span className="meta">Clipping uses footage that already exists.</span>
      </div>

      <Progress value={pct} label={`${CHECKLIST.filter((c) => done[c.id]).length} of ${CHECKLIST.length} ready`} />

      <div className="check-list">
        {CHECKLIST.map((c) => (
          <label key={c.id} className={`check-item${done[c.id] ? " done" : ""}`}>
            <input
              type="checkbox"
              checked={Boolean(done[c.id])}
              onChange={() => toggle(c.id)}
            />
            <div>
              <div className="what">
                {c.what} <span className="tag">{c.cost}</span>
              </div>
              <p className="meta">
                <strong>Use: </strong>
                {c.use}
              </p>
              <p className="meta">
                <strong>Why: </strong>
                {c.why}
              </p>
            </div>
          </label>
        ))}
      </div>

      <div className="inline-actions">
        <button type="button" className="btn btn-ghost" onClick={() => setDone({})}>
          Clear checks
        </button>
        <Link className="btn btn-primary" to="/week">
          Open the 7-day plan
        </Link>
      </div>

      <h2>Same list as a table</h2>
      <SortableTable
        columns={["What", "Use", "Cost", "Why"]}
        rows={CHECKLIST.map((c) => [c.what, c.use, c.cost, c.why])}
      />
    </article>
  );
}
