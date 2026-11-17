import { Link } from "react-router-dom";
import { RESEARCH_DATE, SECTIONS, VERDICTS } from "../data";

const TICKER = [
  "Content Rewards",
  "Vyro",
  "CLIPPING",
  "TikTok",
  "Reels",
  "Shorts",
  "OpusClip",
  "Vizard",
  "CapCut",
  "Finance niche",
  "Permission only",
];

export function Home() {
  const loop = [...TICKER, ...TICKER];
  return (
    <article className="page">
      <section className="home-hero">
        <p className="eyebrow">Private · Refael & Mateen · Researched {RESEARCH_DATE}</p>
        <h1>
          Clip the internet.
          <br />
          <span className="grad">Get paid.</span>
        </h1>
        <p className="lede">
          How clipping actually pays, the platform rules that can sink an account, what the AI
          tools cost, whether to build our own clipper, and a 7-day plan to get real numbers.
        </p>
        <div className="cta-row">
          <Link className="btn btn-primary" to="/checklist">
            Start day one
          </Link>
          <Link className="btn btn-ghost" to="/money">
            Read the rules
          </Link>
          <Link className="btn btn-lime" to="/tools">
            Open the calculator
          </Link>
        </div>
        <div className="stats">
          <div className="stat">
            <b>710</b>
            <span>live Content Rewards campaigns ({RESEARCH_DATE})</span>
          </div>
          <div className="stat">
            <b>$1.00</b>
            <span>median pay per 1K views; middle half $1–$2</span>
          </div>
          <div className="stat">
            <b>10%</b>
            <span>Content Rewards fee, taken off the top</span>
          </div>
          <div className="stat">
            <b>$29–$35</b>
            <span>one tool is enough for the test</span>
          </div>
        </div>
      </section>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee">
          {loop.map((t, i) => (
            <span key={i}>{t} ✦</span>
          ))}
        </div>
      </div>

      <div className="section-title">
        <h2>Headline verdicts</h2>
      </div>
      <div className="verdicts">
        {VERDICTS.map((v) => (
          <article className="verdict" key={v.title}>
            <p className="kicker">{v.kicker}</p>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </article>
        ))}
      </div>

      <p className="note">
        All prices and rates were checked between Oct 17 and Nov 16, 2026, and the source and date
        sit next to each one. Campaign budgets change daily, so check a campaign page before you
        clip for it. Anything marked estimate or assumption is ours, not a published figure.
      </p>

      <div className="section-title">
        <h2>Enter a section</h2>
        <Link to="/week">This week's plan →</Link>
      </div>
      <div className="cards">
        {SECTIONS.map((s) => (
          <Link className="card-link" to={s.path} key={s.path}>
            <span className="card-num">{s.num}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.blurb}</p>
            </div>
            <span className="tag">{s.tag}</span>
          </Link>
        ))}
      </div>
    </article>
  );
}
