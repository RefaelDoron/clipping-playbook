import { Callout, Estimate, PageHeader, Pipeline, ProsCons, SortableTable } from "../components/ui";
import { BUILD_CONS, BUILD_FLOW, BUILD_PIECES, BUILD_PROS } from "../data";

export function Build() {
  return (
    <article className="page">
      <PageHeader
        kicker="03 · Own clipper"
        title="Building our own clipper with Grok Bot"
        lede="The pipeline is real and the APIs exist. The bottleneck is viral-moment picking, posting audits, and time spent not posting."
      />

      <Callout lead="Verdict: not now" tone="info">
        <p>
          Break-even, estimated: a tool costs about $29–$35 for 10–30 source hours. Our own build
          would save about $25–$80 a month at that volume, which doesn't repay the build time. It
          starts to make sense above about 50 source hours a month (several accounts, or clipping
          for paying clients), or if we want it as a product. Middle path: keep a paid tool for the
          clipping, and later have Grok Bot automate the boring parts (finding campaigns, logging
          stats, filling the tracker) around it.
        </p>
      </Callout>

      <Pipeline steps={BUILD_FLOW} />

      <h2>What each piece actually costs</h2>
      <SortableTable
        columns={["Piece", "Real cost / constraint (dated)", "Difficulty"]}
        rows={BUILD_PIECES.map((p) => [p.piece, p.cost, p.difficulty])}
      />

      <ProsCons pros={BUILD_PROS} cons={BUILD_CONS} />

      <Estimate>
        LLM moment-picking cost (“a few cents per hour”), VPS cost ($5–$20/mo), Grok Bot MVP time
        (1–2 weeks of supervised work), and the $25–$80/month savings / ~50 source-hour break-even
        are our estimates — not vendor quotes.
      </Estimate>
    </article>
  );
}
