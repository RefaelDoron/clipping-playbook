import { useMemo, useState } from "react";
import { Callout, Estimate, PageHeader, SortableTable } from "../components/ui";
import { NICHES } from "../data";
import { money } from "../lib";

export function Niche() {
  const [selected, setSelected] = useState("finance");
  const [sortMode, setSortMode] = useState<"rate" | "views" | "implied">("rate");

  const ranked = useMemo(() => {
    const copy = [...NICHES];
    copy.sort((a, b) => {
      if (sortMode === "rate") return b.rateValue - a.rateValue || b.views - a.views;
      if (sortMode === "views") return b.views - a.views;
      return b.rateValue * (b.views / 1000) - a.rateValue * (a.views / 1000);
    });
    return copy;
  }, [sortMode]);

  const current = NICHES.find((n) => n.id === selected) ?? NICHES[0];
  const implied = current.rateValue * (current.views / 1000);

  return (
    <article className="page">
      <PageHeader
        kicker="05 · Niche picker"
        title="Pick a lane, then a second account"
        lede="Rates are each category's median listed rate. View counts are the median campaign's views per approved clip, from clippingcollective.com (Oct 17, 2026) and contentrewards.com (Nov 12, 2026)."
      />

      <Callout lead="Our pick">
        <p>
          Start with finance and crypto: it pays more per view and it's a topic Refael already
          follows. Run entertainment or podcasts as the second account.
        </p>
      </Callout>

      <div className="tabs" role="tablist" aria-label="Rank niches by">
        <button type="button" aria-selected={sortMode === "rate"} onClick={() => setSortMode("rate")}>
          Highest listed rate
        </button>
        <button type="button" aria-selected={sortMode === "views"} onClick={() => setSortMode("views")}>
          Highest views / approved clip
        </button>
        <button
          type="button"
          aria-selected={sortMode === "implied"}
          onClick={() => setSortMode("implied")}
        >
          Implied typical payout
        </button>
      </div>

      <div className="niche-grid">
        {ranked.map((n) => (
          <button
            key={n.id}
            type="button"
            className={`niche${n.id === selected ? " active" : ""}${n.pick ? " pick" : ""}`}
            onClick={() => setSelected(n.id)}
          >
            <div className="kicker">
              {n.pick ? "Recommended first account" : n.second ? "Good second account" : "Category"}
            </div>
            <h3>{n.niche}</h3>
            <p className="meta">{n.rate}</p>
            <p className="meta">{n.viewsLabel} views per approved clip</p>
            <p className="meta">{n.notes}</p>
          </button>
        ))}
      </div>

      <div className="totals" style={{ marginTop: 20 }}>
        <div className="total">
          <span>Selected</span>
          <b>{current.niche}</b>
        </div>
        <div className="total">
          <span>Implied typical payout per approved clip</span>
          <b>{money(implied)}</b>
        </div>
      </div>
      <Estimate>
        Implied typical payout multiplies the category's median listed rate by that category's
        median campaign views per approved clip. Those two medians come from different snapshots
        (Nov 12 rate data, Oct 17 view data) and do not mean every clip pays this.
      </Estimate>

      <h2>Full comparison</h2>
      <SortableTable
        columns={["Niche", "Typical rate", "Views per approved clip", "Notes"]}
        rows={NICHES.map((n) => [n.niche, n.rate, n.viewsLabel, n.notes])}
      />
    </article>
  );
}
