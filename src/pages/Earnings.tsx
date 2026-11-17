import { useMemo, useState } from "react";
import { Callout, Estimate, Field, PageHeader } from "../components/ui";
import { money, num } from "../lib";

export function Earnings() {
  const [posted, setPosted] = useState("60");
  const [approval, setApproval] = useState("80");
  const [views, setViews] = useState("2000");
  const [cpm, setCpm] = useState("1.00");

  const payout = useMemo(() => {
    const approved = num(posted) * (num(approval) / 100);
    const gross = approved * (num(views) / 1000) * num(cpm);
    return { approved, gross, net: gross * 0.9 };
  }, [posted, approval, views, cpm]);

  return (
    <article className="page">
      <PageHeader
        kicker="09 · Earnings"
        title="What it could earn"
        lede="A simple model: posted clips × approval rate × average views × listed CPM, then the 10% Content Rewards fee."
      />

      <div className="form-grid cols-4">
        <Field label="Clips posted per month">
          <input type="number" min={0} value={posted} onChange={(e) => setPosted(e.target.value)} />
        </Field>
        <Field label="Approval rate (%)">
          <input
            type="number"
            min={0}
            max={100}
            value={approval}
            onChange={(e) => setApproval(e.target.value)}
          />
        </Field>
        <Field label="Avg views per clip">
          <input type="number" min={0} value={views} onChange={(e) => setViews(e.target.value)} />
        </Field>
        <Field label="CPM ($ per 1K views)">
          <input type="number" min={0} step={0.01} value={cpm} onChange={(e) => setCpm(e.target.value)} />
        </Field>
      </div>

      <div className="totals">
        <div className="total">
          <span>Approved clips</span>
          <b>{payout.approved.toFixed(0)}</b>
        </div>
        <div className="total">
          <span>Gross payout</span>
          <b>{money(payout.gross)}</b>
        </div>
        <div className="total">
          <span>After 10% Content Rewards fee</span>
          <b>{money(payout.net)}</b>
        </div>
        <div className="total">
          <span>Net per posted clip</span>
          <b>{num(posted) > 0 ? money(payout.net / num(posted)) : "—"}</b>
        </div>
      </div>

      <Estimate>
        Defaults (60 posted, 80% approval, 2,000 views, $1.00 CPM) are assumptions for new
        accounts, not published averages.
      </Estimate>

      <Callout lead="What the published data actually says">
        <p>
          For comparison, the median campaign got 6,405 views per approved clip (clipping-only, Oct
          17, 2026), but that median only counts approved clips. Per-clip caps also mean views
          actually cost brands $0.67 per 1K across clipping campaigns, so real pay per view is
          below the listed rate. Below 1,000 views (CLIPPING) or 5,000 views (Vyro), a clip earns
          $0.
        </p>
      </Callout>

      <div className="inline-actions">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            setPosted("60");
            setApproval("80");
            setViews("2000");
            setCpm("1.00");
          }}
        >
          Reset to new-account defaults
        </button>
        <button
          type="button"
          className="btn btn-lime"
          onClick={() => {
            setViews("6405");
            setCpm("1.00");
          }}
        >
          Use median 6,405 views / approved clip
        </button>
      </div>
    </article>
  );
}
