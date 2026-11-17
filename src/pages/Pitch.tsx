import { useMemo, useState, type ChangeEvent } from "react";
import { Field, PageHeader } from "../components/ui";

type Draft = {
  show: string;
  name: string;
  niche: string;
  days: string;
  clips: string;
  totalViews: string;
  topViews: string;
  topLink: string;
  watch: string;
  retention: string;
  over10k: string;
  followers: string;
  clip1: string;
  clip2: string;
  clip3: string;
  sheet: string;
  perWeek: string;
  trialCpm: string;
  cap: string;
  freeClips: string;
  retainer: string;
  retainerClips: string;
  cpm: string;
};

const DEFAULTS: Draft = {
  show: "[show]",
  name: "[Name]",
  niche: "[niche]",
  days: "[N]",
  clips: "[#]",
  totalViews: "[X]",
  topViews: "[Y]",
  topLink: "[link]",
  watch: "[Z]",
  retention: "[R]",
  over10k: "[#]",
  followers: "[you/brand]",
  clip1: "[clip 1]",
  clip2: "[clip 2]",
  clip3: "[clip 3]",
  sheet: "[sheet link]",
  perWeek: "15",
  trialCpm: "[X]",
  cap: "[cap]",
  freeClips: "10",
  retainer: "[retainer]",
  retainerClips: "60",
  cpm: "[CPM]",
};

function buildPitch(d: Draft): string {
  return `Subject: Clipped your ${d.show} — ${d.totalViews} views in ${d.days} days

Hey ${d.name},

We're Refael and Mateen. We clip ${d.niche} content. Over the last ${d.days} days we posted ${d.clips} clips of ${d.show} / similar creators:

- Total views: ${d.totalViews}   (top clip: ${d.topViews} views — ${d.topLink})
- Avg watch time: ${d.watch}s, avg retention ${d.retention}%
- ${d.over10k} clips over 10K views; new followers driven to ${d.followers}
- Links: ${d.clip1} ${d.clip2} ${d.clip3}  | Full tracker: ${d.sheet}

Offer: we'll clip every episode — ${d.perWeek} clips/week across TikTok, Reels and Shorts, posted from your account or ours, captions and hooks included.

Trial: 2 weeks at $${d.trialCpm} per 1K views (capped at $${d.cap}), or ${d.freeClips} clips free.
After that: $${d.retainer}/month for ${d.retainerClips} clips, or $${d.cpm} per 1K views — your pick.

Happy to send raw files for approval before anything goes live.
— Refael & Mateen`;
}

export function Pitch() {
  const [draft, setDraft] = useState<Draft>(DEFAULTS);
  const [copied, setCopied] = useState(false);
  const text = useMemo(() => buildPitch(draft), [draft]);

  const set = (key: keyof Draft) => (e: ChangeEvent<HTMLInputElement>) => {
    setDraft((d) => ({ ...d, [key]: e.target.value }));
  };

  const field = (key: keyof Draft, label: string) => (
    <Field label={label}>
      <input
        value={draft[key]}
        placeholder={DEFAULTS[key]}
        onFocus={(e) => e.currentTarget.select()}
        onChange={set(key)}
      />
    </Field>
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className="page">
      <PageHeader
        kicker="07 · Pitch"
        title="Creator pitch template"
        lede="Proof first: lead with views and links, keep it under 150 words, and make the first step low risk (free sample or a capped CPM trial)."
      />

      <div className="form-grid cols-3">
        {field("show", "Show / source")}
        {field("name", "Creator name")}
        {field("niche", "Niche")}
        {field("days", "Days")}
        {field("clips", "# clips posted")}
        {field("totalViews", "Total views (X)")}
        {field("topViews", "Top clip views (Y)")}
        {field("topLink", "Top clip link")}
        {field("watch", "Avg watch (Z seconds)")}
        {field("retention", "Avg retention (R %)")}
        {field("over10k", "Clips over 10K")}
        {field("followers", "Followers driven to")}
        {field("clip1", "Clip 1 link")}
        {field("clip2", "Clip 2 link")}
        {field("clip3", "Clip 3 link")}
        {field("sheet", "Tracker sheet link")}
        {field("perWeek", "Clips / week")}
        {field("trialCpm", "Trial CPM $")}
        {field("cap", "Trial cap $")}
        {field("freeClips", "Free clips")}
        {field("retainer", "Retainer $ / mo")}
        {field("retainerClips", "Retainer clips")}
        {field("cpm", "Ongoing CPM $")}
      </div>

      <div className="inline-actions">
        <button type="button" className="btn btn-lime" onClick={copy}>
          Copy pitch to clipboard
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => setDraft(DEFAULTS)}>
          Reset fields
        </button>
      </div>

      <pre className="preview">{text}</pre>
      {copied ? <div className="toast">Copied to clipboard</div> : null}
    </article>
  );
}
