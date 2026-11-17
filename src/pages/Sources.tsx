import { PageHeader } from "../components/ui";
import { SOURCES } from "../data";

export function Sources() {
  return (
    <article className="page">
      <PageHeader
        kicker="11 · Sources"
        title="Every figure has a date"
        lede="Prices and rates were checked between Oct 17 and Nov 16, 2026. Open the live page before you spend or clip — campaign budgets move daily."
      />
      <div className="sources">
        {SOURCES.map((s) => (
          <a className="source" key={s.href} href={s.href} target="_blank" rel="noreferrer">
            <span>
              <strong>{s.title}</strong>
              <br />
              <span className="meta">{s.site}</span>
            </span>
            <small>{s.date || "undated (vendor docs)"}</small>
          </a>
        ))}
      </div>
    </article>
  );
}
