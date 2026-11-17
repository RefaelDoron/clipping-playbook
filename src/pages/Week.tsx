import { useEffect, useMemo, useState } from "react";
import { Callout, PageHeader, Progress, SortableTable } from "../components/ui";
import { WEEK } from "../data";
import { loadJson, saveJson } from "../lib";

const KEY = "clipping-playbook:week";

export function Week() {
  const [done, setDone] = useState<Record<string, boolean>>(() => loadJson(KEY, {}));

  useEffect(() => {
    saveJson(KEY, done);
  }, [done]);

  const pct = useMemo(() => {
    const keys = WEEK.flatMap((d) => [`r-${d.day}`, `m-${d.day}`]);
    const n = keys.filter((k) => done[k]).length;
    return (n / keys.length) * 100;
  }, [done]);

  const toggle = (k: string) => setDone((p) => ({ ...p, [k]: !p[k] }));

  return (
    <article className="page">
      <PageHeader
        kicker="10 · Next 7 days"
        title="The week that produces numbers"
        lede="Goal for the week: about 15 clips each, every one logged. Checks save in this browser."
      />

      <Callout lead="Decision rule (our suggestion)">
        <p>
          If the average is under 1,000 views after 30 clips, fix hooks or change niche before
          paying for anything.
        </p>
      </Callout>

      <Progress value={pct} label="Week tasks checked" />

      <div className="check-list">
        {WEEK.map((d) => (
          <article className="week-day" key={d.day}>
            <header>
              <h3>Day {d.day}</h3>
            </header>
            <div className="cols">
              <label className={`check-item${done[`r-${d.day}`] ? " done" : ""}`}>
                <input
                  type="checkbox"
                  checked={Boolean(done[`r-${d.day}`])}
                  onChange={() => toggle(`r-${d.day}`)}
                />
                <div>
                  <h4>Refael</h4>
                  <p className="meta">{d.refael}</p>
                </div>
              </label>
              <label className={`check-item${done[`m-${d.day}`] ? " done" : ""}`}>
                <input
                  type="checkbox"
                  checked={Boolean(done[`m-${d.day}`])}
                  onChange={() => toggle(`m-${d.day}`)}
                />
                <div>
                  <h4>Mateen</h4>
                  <p className="meta">{d.mateen}</p>
                </div>
              </label>
            </div>
          </article>
        ))}
      </div>

      <div className="inline-actions">
        <button type="button" className="btn btn-ghost" onClick={() => setDone({})}>
          Reset week
        </button>
      </div>

      <h2>Same plan as a table</h2>
      <SortableTable
        columns={["Day", "Refael", "Mateen"]}
        rows={WEEK.map((d) => [d.day, d.refael, d.mateen])}
      />
    </article>
  );
}
