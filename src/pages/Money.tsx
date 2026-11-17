import { Link } from "react-router-dom";
import { Accordion, Callout, PageHeader, Pipeline, SortableTable, Steps } from "../components/ui";
import { MONEY_FLOW, MONEY_ROUTES, PLATFORM_RULES, SAFETY_STEPS } from "../data";

export function Money() {
  return (
    <article className="page">
      <PageHeader
        kicker="01 · Money & rules"
        title="How clipping makes money"
        lede="You get paid per thousand qualifying views on clips you post from your own accounts — if you have permission, pass review, and clear each platform's reused-content rules."
      />

      <Callout lead="The model">
        <p>
          Marketplaces give you licensed footage and a rate card. You cut 9:16 clips, post them,
          submit the links, and collect per 1K views after review. Direct deals pay better once you
          have proof. Own-channel ad money is not the early path: reposted clips are excluded.
        </p>
      </Callout>

      <Pipeline steps={MONEY_FLOW} />

      <h2>Payout routes</h2>
      <p className="meta">Click a column header to sort. Dates live in the “key numbers” column.</p>
      <SortableTable
        columns={["Money route", "How you get paid", "Key numbers (dated)", "Honest take"]}
        rows={MONEY_ROUTES.map((r) => [r.route, r.paid, r.numbers, r.take])}
      />

      <h2>Platform rules on reused content</h2>
      <Accordion
        items={PLATFORM_RULES.map((r) => ({
          title: r.platform,
          body: (
            <>
              <p>
                <strong>Rule. </strong>
                {r.rule}
              </p>
              <p>
                <strong>What it means for us. </strong>
                {r.means}
              </p>
            </>
          ),
        }))}
      />
      <SortableTable
        columns={["Platform", "Rule", "What it means for us"]}
        rows={PLATFORM_RULES.map((r) => [r.platform, r.rule, r.means])}
      />
      <Callout lead="Fair use is not a permission slip" tone="danger">
        <p>
          Fair use is a US legal defense that a judge weighs case by case. Short clips with no
          commentary are weak fair-use cases. Get permission instead.
        </p>
      </Callout>

      <h2>How to stay safe</h2>
      <Steps steps={SAFETY_STEPS} />

      <p>
        Next: <Link to="/checklist">day-one setup</Link> · <Link to="/tools">tools and costs</Link>
      </p>
    </article>
  );
}
