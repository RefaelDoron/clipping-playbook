import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Callout, Estimate, Field, PageHeader, SortableTable, Tabs } from "../components/ui";
import { CALC_TOOLS, SCHEDULERS, TOOL_CATALOG } from "../data";
import { money, num } from "../lib";

export function Tools() {
  const [tab, setTab] = useState("calc");
  const [budget, setBudget] = useState("100");
  const [cph, setCph] = useState("8");
  const [keep, setKeep] = useState("50");
  const [srcLen, setSrcLen] = useState("60");
  const [sched, setSched] = useState("none");

  const results = useMemo(() => {
    const b = num(budget);
    const perHour = Math.max(num(cph), 0.1);
    const keepRate = Math.min(Math.max(num(keep), 0), 100) / 100;
    const len = Math.max(num(srcLen), 1);
    const schedCost = SCHEDULERS.find((s) => s.value === sched)?.cost ?? 0;
    const avail = b - schedCost;
    return CALC_TOOLS.map((t) => {
      let best = { plan: "Over budget", cost: 0, hours: 0, clips: 0 };
      for (const p of t.plans) {
        const units = p.stack ? Math.floor(avail / p.price) : p.price <= avail ? 1 : 0;
        if (units <= 0) continue;
        let hours = 0;
        let clips = 0;
        if (p.minutes) {
          hours = (units * p.minutes) / 60;
          clips = hours * perHour;
        } else if (p.clips) {
          clips = units * p.clips * keepRate;
          hours = clips / perHour;
        }
        if (clips > best.clips) {
          best = {
            plan: units > 1 ? `${p.name} ×${units}` : p.name,
            cost: units * p.price + schedCost,
            hours,
            clips,
          };
        }
      }
      return { tool: t.name, posting: t.posting, ...best, videos: (best.hours * 60) / len };
    });
  }, [budget, cph, keep, srcLen, sched]);

  return (
    <article className="page">
      <PageHeader
        kicker="02 · Tools & costs"
        title="Clipping tools and what $100 buys"
        lede="Prices come from each vendor's pricing page or help center, checked Oct 20 – Nov 15, 2026. Yearly billing is about 50% cheaper on OpusClip Pro, Vizard and Klap. Only commit to a year once the test works."
      />

      <Tabs
        tabs={[
          { id: "calc", label: "Cost calculator" },
          { id: "catalog", label: "Full catalog" },
        ]}
        value={tab}
        onChange={setTab}
      />

      {tab === "catalog" ? (
        <>
          <SortableTable
            columns={["Tool", "How it works", "Plans (monthly billing)", "Billing unit", "Posting"]}
            rows={TOOL_CATALOG.map((t) => [t.tool, t.how, t.plans, t.unit, t.posting])}
          />
          <p>
            Want payout math instead of tool math?{" "}
            <Link to="/earnings">Open the earnings estimator</Link>.
          </p>
        </>
      ) : (
        <>
          <div className="form-grid cols-3">
            <Field label="Monthly budget ($)">
              <input
                type="number"
                min={0}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </Field>
            <Field label="Usable clips per hour of footage">
              <input type="number" min={0.1} step={0.1} value={cph} onChange={(e) => setCph(e.target.value)} />
            </Field>
            <Field label="Avg source video length (min)">
              <input type="number" min={1} value={srcLen} onChange={(e) => setSrcLen(e.target.value)} />
            </Field>
            <Field label="Klap: % of generated clips worth posting">
              <input type="number" min={0} max={100} value={keep} onChange={(e) => setKeep(e.target.value)} />
            </Field>
            <Field label="Separate scheduler">
              <select value={sched} onChange={(e) => setSched(e.target.value)}>
                {SCHEDULERS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <SortableTable
            columns={[
              "Tool",
              "Best plan in budget",
              "Monthly cost",
              "Source hours",
              "Source videos",
              "Usable clips",
              "Cost per clip",
              "Posting",
            ]}
            emphasize={5}
            rows={results.map((r) => [
              r.tool,
              r.plan,
              r.clips > 0 ? money(r.cost) : "—",
              r.clips > 0 ? r.hours.toFixed(1) : "—",
              r.clips > 0 ? r.videos.toFixed(0) : "—",
              r.clips > 0 ? Math.floor(r.clips).toString() : "0",
              r.clips > 0 ? money(r.cost / r.clips) : "—",
              r.posting,
            ])}
          />

          <Estimate>
            8 usable clips per hour of footage and 50% of Klap's generated clips worth posting are
            our estimates, so change them to match what you actually see. The calculator picks the
            plan that gives the most clips within the budget on monthly billing. Vizard has bigger
            credit tiers, but we didn't capture their prices, so it's capped at the entry tier.
          </Estimate>

          <Callout lead="Worked example: $100/month, defaults">
            <p>
              OpusClip Pro ×3 = $87 for 15 source hours, about 120 clips at $0.73 each. Vizard
              Creator = $29 for 10 hours, about 80 clips at $0.36. Klap Pro = $79 for 300 generated
              clips, about 150 usable at $0.53. Munch Premium = $85, about 133 clips at $0.64.
              Descript Creator = $35 for 30 hours, about 240 clips at $0.15, but you pick the
              moments yourself and post by hand. Two people posting 2 clips a day each need about
              120 clips a month, so one $29–$35 plan covers the test. The tool isn't what limits
              you.
            </p>
          </Callout>
        </>
      )}
    </article>
  );
}
