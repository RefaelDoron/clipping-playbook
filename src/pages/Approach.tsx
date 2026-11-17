import { Callout, PageHeader, SortableTable, Steps } from "../components/ui";
import { CREATORS, DEALS, PAY_LATER, PHASES } from "../data";

export function Approach() {
  return (
    <article className="page">
      <PageHeader
        kicker="04 · Approach"
        title="Best overall approach"
        lede="Test cheap, pay for a tool only if views show up, pitch with a tracker, and only then talk about building."
      />

      <Steps steps={PHASES} />

      <h2>Who to clip and who pays later</h2>
      <p className="meta">
        Rates and leftover budgets are dated snapshots. Campaigns refill and die daily — open the
        live page before you cut.
      </p>
      <SortableTable
        columns={["Creator / brand", "Where", "Rate and cap (dated)", "Why"]}
        rows={CREATORS.map((c) => [c.name, c.where, c.rate, c.why])}
      />

      <div className="cards" style={{ marginBottom: 28 }}>
        {PAY_LATER.map((p) => (
          <article className="pay-card" key={p.lead}>
            <p className="lead">{p.lead}</p>
            <h3>{p.title}</h3>
            <p className="meta">{p.detail}</p>
          </article>
        ))}
      </div>

      <h2>Deal structures</h2>
      <SortableTable
        columns={["Structure", "Typical figures (dated)", "When to use"]}
        rows={DEALS.map((d) => [d.structure, d.figures, d.when])}
      />

      <Callout lead="Proof is the product">
        <p>
          Direct deals are the best money and the most stable, but you need proof first. Log every
          clip. Pitch with views and links, not with promises.
        </p>
      </Callout>
    </article>
  );
}
