import { useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: ReactNode;
}) {
  return (
    <header className="page-hero">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <div className="lede">{lede}</div>
    </header>
  );
}

export function Callout({
  lead,
  children,
  tone = "default",
}: {
  lead: string;
  children: ReactNode;
  tone?: "default" | "info" | "danger";
}) {
  return (
    <aside className={`callout ${tone === "default" ? "" : tone}`.trim()}>
      <p className="lead">{lead}</p>
      <div>{children}</div>
    </aside>
  );
}

export function Estimate({ children }: { children: ReactNode }) {
  return (
    <p className="note">
      <strong>ESTIMATE / ASSUMPTION</strong>
      {children}
    </p>
  );
}

export function Pipeline({ steps }: { steps: { label: string; detail: string }[] }) {
  return (
    <ol className="pipeline">
      {steps.map((s, i) => (
        <li className="pipe" key={s.label}>
          <i>{String(i + 1).padStart(2, "0")}</i>
          <div>
            <b>{s.label}</b>
            {s.detail ? <small>{s.detail}</small> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Steps({ steps }: { steps: { title: string; detail: string }[] }) {
  return (
    <ol className="steps">
      {steps.map((s) => (
        <li className="step" key={s.title}>
          <div>
            <h3>{s.title}</h3>
            <p>{s.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Accordion({
  items,
}: {
  items: { title: string; body: ReactNode }[];
}) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="acc-item" key={item.title}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.title}
              <span>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? <div className="acc-body">{item.body}</div> : null}
          </div>
        );
      })}
    </div>
  );
}

export function SortableTable({
  columns,
  rows,
  emphasize,
  footer,
}: {
  columns: string[];
  rows: (string | number)[][];
  emphasize?: number;
  footer?: (string | number)[];
}) {
  const [sort, setSort] = useState<{ i: number; dir: 1 | -1 } | null>(null);

  const sorted = useMemo(() => {
    if (!sort) return rows;
    const copy = [...rows];
    copy.sort((a, b) => {
      const av = a[sort.i];
      const bv = b[sort.i];
      const an = typeof av === "number" ? av : parseFloat(String(av).replace(/[^0-9.-]/g, ""));
      const bn = typeof bv === "number" ? bv : parseFloat(String(bv).replace(/[^0-9.-]/g, ""));
      if (Number.isFinite(an) && Number.isFinite(bn) && String(av).search(/[A-Za-z]/) === -1) {
        return (an - bn) * sort.dir;
      }
      return String(av).localeCompare(String(bv), undefined, { numeric: true }) * sort.dir;
    });
    return copy;
  }, [rows, sort]);

  const toggle = (i: number) => {
    setSort((prev) => {
      if (!prev || prev.i !== i) return { i, dir: 1 };
      if (prev.dir === 1) return { i, dir: -1 };
      return null;
    });
  };

  return (
    <div className="table-wrap" tabIndex={0}>
      <table>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={c}
                onClick={() => toggle(i)}
                aria-sort={
                  sort?.i === i ? (sort.dir === 1 ? "ascending" : "descending") : "none"
                }
                scope="col"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className={emphasize === ci ? "em-col" : undefined}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
          {footer ? (
            <tr>
              {footer.map((cell, ci) => (
                <td key={ci}>
                  <strong>{cell}</strong>
                </td>
              ))}
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

export function Progress({ value, label }: { value: number; label: string }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div>
      <div className="section-title" style={{ marginBottom: 4 }}>
        <span className="meta">{label}</span>
        <span className="meta">{Math.round(pct)}%</span>
      </div>
      <div className="progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="field">
      {label}
      {children}
    </label>
  );
}

export function Tabs({
  tabs,
  value,
  onChange,
}: {
  tabs: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="tabs" role="tablist">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          role="tab"
          aria-selected={value === t.id}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export function MoreLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <p>
      <Link to={to}>{children} →</Link>
    </p>
  );
}

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="proscons">
      <div className="pc pro">
        <h3>Why we might build</h3>
        <ul>
          {pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="pc con">
        <h3>Why not yet</h3>
        <ul>
          {cons.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
