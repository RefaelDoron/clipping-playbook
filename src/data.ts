export const RESEARCH_RANGE = "Oct 17 – Nov 16, 2026";
export const RESEARCH_DATE = "Nov 16, 2026";

export const SECTIONS = [
  {
    path: "/money",
    num: "01",
    title: "How clipping makes money & the rules",
    blurb: "Five payout routes, Content ID vs strikes, YouTube / TikTok / IG reused-content rules, and how to stay safe.",
    tag: "Money",
  },
  {
    path: "/tools",
    num: "02",
    title: "Clipping tools & costs",
    blurb: "What each AI clipper actually bills, and a calculator for a monthly budget (default $100).",
    tag: "Tools",
  },
  {
    path: "/build",
    num: "03",
    title: "Build our own clipper",
    blurb: "The stack, real API constraints, pros/cons, and why it does not pay off yet.",
    tag: "Build",
  },
  {
    path: "/approach",
    num: "04",
    title: "Best approach & creators to clip",
    blurb: "Four phases, live campaigns with dated rates, who will pay later, and deal structures.",
    tag: "Plan",
  },
  {
    path: "/niche",
    num: "05",
    title: "Niche picker",
    blurb: "Finance vs entertainment vs the rest — rates, views, and our pick.",
    tag: "Niche",
  },
  {
    path: "/checklist",
    num: "06",
    title: "Day-one starter checklist",
    blurb: "Accounts, payouts, tools, Drive. No microphone needed. Checkboxes save in this browser.",
    tag: "Start",
  },
  {
    path: "/pitch",
    num: "07",
    title: "Creator pitch template",
    blurb: "Fill the numbers, copy the email. Proof first, low-risk trial.",
    tag: "Pitch",
  },
  {
    path: "/tracker",
    num: "08",
    title: "Clip tracker",
    blurb: "Log clips, totals, CSV export, plus the Google Sheets layout. Saved locally.",
    tag: "Track",
  },
  {
    path: "/earnings",
    num: "09",
    title: "Earnings estimator",
    blurb: "Posted clips × approval × views × CPM, minus the 10% Content Rewards fee.",
    tag: "Earn",
  },
  {
    path: "/week",
    num: "10",
    title: "7-day action plan",
    blurb: "What Refael and Mateen each do every day, and the decision rule at the end.",
    tag: "Week",
  },
] as const;

export const VERDICTS = [
  {
    kicker: "Pay",
    title: "Real money, small per clip",
    body: "The median campaign pays about $1 per 1,000 views, minus a 10% fee. A clip has to get thousands of views to earn a few dollars.",
  },
  {
    kicker: "Rights",
    title: "Permission only",
    body: "Only clip footage you have permission for: paid campaigns, or creators who say yes. Unlicensed reuploads risk the whole channel.",
  },
  {
    kicker: "Stack",
    title: "One cheap tool",
    body: "One tool at about $29–$35 a month is enough for the test. Two people posting 2 clips a day each need about 120 clips a month.",
  },
  {
    kicker: "Build",
    title: "Don't build yet",
    body: "A homemade clipper only pays off at high volume. Building it doesn't solve the hard part, which is getting views.",
  },
];

export const MONEY_FLOW = [
  { label: "Pick campaign", detail: "or creator with permission" },
  { label: "Get footage", detail: "campaign folder / creator link" },
  { label: "Cut + caption", detail: "9:16, hook in 2 sec" },
  { label: "Post", detail: "TikTok, Reels, Shorts" },
  { label: "Submit link", detail: "views tracked" },
  { label: "Get paid", detail: "per 1K views, after review" },
];

export const MONEY_ROUTES = [
  {
    route: "Content Rewards (Whop is only the payout processor)",
    paid: "Pay per 1,000 qualifying views on clips posted from your own accounts",
    numbers:
      "710 live campaigns; median $1.00/1K, middle half $1–$2 (Nov 16, 2026). 10% fee. Paid in 7-day rounds plus a 3-day hold, for up to 30 days after you submit. Median per-clip minimum $2, median cap $200.",
    take: "Biggest marketplace and easiest place to start. Most clips earn a few dollars.",
  },
  {
    route: "Vyro (MrBeast / Beast Industries)",
    paid: "Pay per 1K verified views",
    numbers:
      "12 campaigns at $1–$2.50/1K (Oct 26, 2026). A clip must be approved AND reach 5,000 views to earn. Pay waits until the campaign ends, then arrives 7–10 days later.",
    take: "Big-name footage, but the 5K-view floor means many clips earn $0.",
  },
  {
    route: "CLIPPING (clipping.net)",
    paid: "Per-view rate, or a fixed pool split by share of views",
    numbers: "Posts must clear 1,000 views. Paid by PayPal, USDT or USDC after the cycle closes and review.",
    take: "Same model as the others. Crypto payouts are a plus for some people.",
  },
  {
    route: "Direct deal with a creator",
    paid: "Per clip, monthly retainer, or per-1K views",
    numbers:
      "Freelance clips $15–$35 each (simple podcast clips); retainers are volume × per-clip rate (Kreatli, Oct 21, 2026). Top clippers get $500–$1,500/mo retainers (Business Insider, Mar 24, 2026).",
    take: "Best money and most stable, but you need proof first.",
  },
  {
    route: "Own-channel monetization",
    paid: "YouTube Shorts revenue pool; TikTok Creator Rewards",
    numbers:
      "YouTube: you keep 45% of your share of the Shorts pool, and from Feb 1, 2027 you need 10M qualified Shorts views in 90 days. TikTok: 10K followers, 100K views in 30 days, original videos over 1 minute.",
    take: "Not realistic early on, and reposted clips are excluded anyway (see platform rules).",
  },
];

export const PLATFORM_RULES = [
  {
    platform: "YouTube: copyright",
    rule: "A Content ID claim hits one video: it can block it, track it or redirect its money to the owner, and it normally isn't a strike. A takedown request is a strike. Three active strikes in 90 days can get the channel terminated.",
    means: "Unlicensed reuploads risk the whole channel, not just one video.",
  },
  {
    platform: "YouTube: reused content (YPP)",
    rule: "Monetizing channels need significant original commentary, real edits, or educational or entertainment value. The “inauthentic content” rename in July 2025 targets mass-produced, repetitive uploads.",
    means: "A channel of raw clips from other creators won't get into the Partner Program.",
  },
  {
    platform: "YouTube Shorts",
    rule: "Views on unedited clips or reuploads from other creators don't count toward Shorts revenue. Shorts over 1 minute with claimed content are blocked.",
    means: "Campaign clips are fine to post, but they won't earn ad money on YouTube too.",
  },
  {
    platform: "Instagram",
    rule: "An account that posts other people's content without real changes 10+ times in 30 days loses recommendations (Reels, Explore, suggestions). It can earn them back once most of its recent posts are original.",
    means: "Repost-heavy pages stop growing. Add real edits, captions and commentary.",
  },
  {
    platform: "TikTok",
    rule: "Creator Rewards requires original content, so reuploads don't qualify. TikTok's For You feed rules also hold back unoriginal content.",
    means: "Campaign payouts come from views, so For You reach is everything.",
  },
];

export const SAFETY_STEPS = [
  {
    title: "Only clip with permission",
    detail:
      "Join official campaigns (the footage folder counts as the license) or get a written yes from the creator. Don't take random YouTubers' videos.",
  },
  {
    title: "Transform every clip",
    detail:
      "Add burned-in captions, a hook title, reframing and tight cuts, and optionally your own commentary or context. Never repost a clip unchanged.",
  },
  {
    title: "No copyrighted music",
    detail:
      "Use trending sounds only where the platform allows them, or leave the music out. Music claims are the most common reason clips get blocked.",
  },
  {
    title: "Use separate accounts per niche",
    detail:
      "A clipping account per niche (for example, trading clips) is the safe setup. Never post clips on an account you'd hate to lose.",
  },
  {
    title: "Follow each campaign brief",
    detail:
      "Finance briefs ban “you'll make money” claims and buy/sell calls, and often require the brand to be visible. Breaking the brief means $0.",
  },
  {
    title: "No bought views or engagement",
    detail: "Campaigns reject clips with fake views and keep the payout.",
  },
];

export const CHECKLIST = [
  {
    id: "accounts",
    what: "Fresh social accounts",
    use: "1 TikTok, 1 Instagram (Professional/Creator), 1 YouTube channel each, all in one niche",
    cost: "$0",
    why: "Clean accounts, kept apart from personal ones. Warm them up by using them normally for a few days.",
  },
  {
    id: "marketplaces",
    what: "Marketplace accounts",
    use: "Content Rewards, Vyro, CLIPPING",
    cost: "$0",
    why: "Where the campaigns and payouts are. Connect the accounts you'll post from.",
  },
  {
    id: "payout",
    what: "Payout method",
    use: "PayPal or Stripe (Vyro), Whop payouts (Content Rewards)",
    cost: "$0",
    why: "Set it up before you need it.",
  },
  {
    id: "clipper",
    what: "AI clipper",
    use: "OpusClip Starter ($15) or Vizard free tier to start",
    cost: "$0–$29/mo",
    why: "Finds the moments, reframes to 9:16 and adds captions.",
  },
  {
    id: "editor",
    what: "Manual editor",
    use: "CapCut (desktop or phone)",
    cost: "Free tier",
    why: "Fixes hooks and cuts after the AI pass. Most good clips get a manual touch-up.",
  },
  {
    id: "storage",
    what: "Storage",
    use: "A shared Google Drive folder: /source, /clips, /posted",
    cost: "$0 (15 GB free)",
    why: "Lets both of you pick up the work.",
  },
  {
    id: "download",
    what: "Download tool",
    use: "Campaign folders and creator-provided links only",
    cost: "$0",
    why: "Stay inside campaign terms. Don't rip videos you have no rights to.",
  },
  {
    id: "devices",
    what: "Phone + laptop",
    use: "What you already have",
    cost: "$0",
    why: "Post natively from the phone app when you can.",
  },
  {
    id: "sheet",
    what: "Tracking sheet",
    use: "Google Sheet (layout on the Clip tracker page)",
    cost: "$0",
    why: "The proof you'll pitch creators with later.",
  },
];

export const NICHES = [
  {
    id: "finance",
    niche: "Finance / trading / crypto",
    rate: "$1.50/1K median, up to $6 (Nov 12, 2026)",
    rateValue: 1.5,
    views: 13123,
    viewsLabel: "13,123 (median campaign, Oct 17)",
    notes: "Moving fastest in our research: 47 open campaigns, about $111K budget left. Strict claim rules.",
    pick: true,
  },
  {
    id: "business",
    niche: "Business / founders",
    rate: "$1.50/1K",
    rateValue: 1.5,
    views: 4884,
    viewsLabel: "4,884",
    notes: "Podcast moments with founders. Good fit for a finance-adjacent account.",
    pick: false,
  },
  {
    id: "tech",
    niche: "Technology",
    rate: "$1.50/1K",
    rateValue: 1.5,
    views: 2971,
    viewsLabel: "2,971",
    notes: "Pays more, gets fewer views.",
    pick: false,
  },
  {
    id: "gaming",
    niche: "Gaming / streamers",
    rate: "$1.25/1K",
    rateValue: 1.25,
    views: 2938,
    viewsLabel: "2,938",
    notes: "Huge supply of clippers, so lots of competition.",
    pick: false,
  },
  {
    id: "entertainment",
    niche: "Entertainment",
    rate: "$1.00/1K",
    rateValue: 1.0,
    views: 7637,
    viewsLabel: "7,637",
    notes: "Cheapest views, biggest audience.",
    pick: false,
    second: true,
  },
  {
    id: "music",
    niche: "Music",
    rate: "$1.00/1K",
    rateValue: 1.0,
    views: 11476,
    viewsLabel: "11,476",
    notes: "Mostly sound-promo campaigns, not real clipping.",
    pick: false,
  },
];

export type Plan = { name: string; price: number; minutes?: number; clips?: number; stack?: boolean };
export type CalcTool = { name: string; plans: Plan[]; posting: string };

export const CALC_TOOLS: CalcTool[] = [
  {
    name: "OpusClip",
    posting: "Scheduler on Pro",
    plans: [
      { name: "Starter", price: 15, minutes: 150 },
      { name: "Pro (packs)", price: 29, minutes: 300, stack: true },
    ],
  },
  {
    name: "Vizard",
    posting: "Scheduler, 6 accounts",
    plans: [{ name: "Creator (entry tier)", price: 29, minutes: 600 }],
  },
  {
    name: "Klap",
    posting: "Posting, unlimited accounts",
    plans: [
      { name: "Basic", price: 29, clips: 100 },
      { name: "Pro", price: 79, clips: 300 },
      { name: "Pro+", price: 189, clips: 1000 },
    ],
  },
  {
    name: "Munch Studio",
    posting: "Planner + posting",
    plans: [
      { name: "Essential", price: 68, minutes: 500 },
      { name: "Premium", price: 85, minutes: 1000 },
    ],
  },
  {
    name: "Descript",
    posting: "No auto-posting",
    plans: [
      { name: "Hobbyist", price: 24, minutes: 600 },
      { name: "Creator", price: 35, minutes: 1800 },
    ],
  },
];

export const SCHEDULERS = [
  { value: "none", label: "None (use the tool's own posting)", cost: 0 },
  { value: "blotato", label: "Blotato Starter, $29/mo", cost: 29 },
  { value: "repurpose", label: "Repurpose.io Starter, $35/mo", cost: 35 },
];

export const TOOL_CATALOG = [
  {
    tool: "OpusClip",
    how: "Upload a video and AI picks clips with a virality score, reframes and captions them",
    plans: "Free 60 credits; Starter $15 / 150; Pro $29 / 300 per pack, stackable (yearly $14.50)",
    unit: "1 credit = 1 source minute",
    posting: "Scheduler on Pro",
  },
  {
    tool: "Vizard",
    how: "AI clipping, face tracking, captions, agent",
    plans: "Free 60; Creator $29 from 600 credits; Business $39 (yearly halves it)",
    unit: "1 credit = 1 uploaded minute",
    posting: "Scheduler, 6–20 accounts",
  },
  {
    tool: "Klap",
    how: "Paste a link or upload, and it makes captioned shorts",
    plans: "Basic $29 / 100 clips; Pro $79 / 300; Pro+ $189 / 1,000 (yearly halves it)",
    unit: "Per generated clip, even ones you delete",
    posting: "Posting, unlimited accounts",
  },
  {
    tool: "Submagic",
    how: "Mainly captions and polish; “Magic Clips” for clipping",
    plans: "Starter $19 / 45 credits; Pro $39 / 120; Business $69 / 300",
    unit: "Upload 3 credits; Magic Clip 8 credits",
    posting: "Publishing on Pro+",
  },
  {
    tool: "Munch Studio (formerly GetMunch)",
    how: "AI social manager with clipping built in",
    plans: "Essential $68 / 500 min; Premium $85 / 1,000 min",
    unit: "Source minutes",
    posting: "Planner + posting",
  },
  {
    tool: "Descript",
    how: "Text-based editor with a “Create Clips” tool; more manual",
    plans: "Hobbyist $24 / 10 hrs; Creator $35 / 30 hrs",
    unit: "Media minutes uploaded",
    posting: "None (export only)",
  },
  {
    tool: "Repurpose.io",
    how: "Auto-reposts one post to every platform",
    plans: "Starter $35; Pro $79; Agency $179",
    unit: "Accounts per network",
    posting: "This is the scheduler",
  },
  {
    tool: "Blotato",
    how: "Scheduler built for AI agents, with an API and MCP",
    plans: "Starter $29 (20 accounts); Creator $97; Agency $499",
    unit: "Flat, no per-post fee",
    posting: "This is the scheduler",
  },
];

export const BUILD_FLOW = [
  { label: "Upload / link", detail: "" },
  { label: "Transcribe", detail: "speech-to-text API" },
  { label: "LLM picks moments", detail: "hooks, timestamps" },
  { label: "ffmpeg cut", detail: "9:16 + face tracking" },
  { label: "Burn captions", detail: "" },
  { label: "Post via APIs", detail: "TikTok / IG / YT" },
];

export const BUILD_PIECES = [
  {
    piece: "Transcription",
    cost: "OpenAI gpt-4o-mini-transcribe about $0.003/min ($0.18 per hour of footage); whisper-1 $0.006/min. Both shut down Feb 26, 2027; the replacement, gpt-transcribe, is $0.0045/min ($0.27/hr).",
    difficulty: "Easy",
  },
  {
    piece: "Moment picking (LLM)",
    cost: "Estimate: a few cents per hour of transcript with a small model. Picking moments that actually go viral is the hard part, and it's the main thing OpusClip and Klap sell.",
    difficulty: "Hard to do well",
  },
  {
    piece: "Cutting, reframing, captions",
    cost: "ffmpeg plus open-source face tracking (e.g. MediaPipe) on a small server. Estimate: $5–$20/mo VPS on CPU. Open-source clippers like OpenShorts (MIT) already exist.",
    difficulty: "Medium",
  },
  {
    piece: "YouTube posting",
    cost: "Data API: 100 uploads per day by default, 1 unit each (own quota bucket since Jun 2026). Since Nov 2, 2026, uploads from unverified projects can be public.",
    difficulty: "Easy",
  },
  {
    piece: "TikTok posting",
    cost: "Content Posting API: until TikTok audits the app, posts are private-only (SELF_ONLY), the account must be private, and at most 5 users per day. Audit needed for public posts. About 15 posts per account per day.",
    difficulty: "Hard (audit)",
  },
  {
    piece: "Instagram posting",
    cost: "Graph API needs a Professional account linked to a Facebook Page, plus a Meta app. Publishing limit is 50–100 posts per 24 hrs (docs disagree; check the live quota endpoint).",
    difficulty: "Medium",
  },
];

export const BUILD_PROS = [
  "Marginal cost under $1 per hour of footage, versus about $2.90/hr on OpusClip Pro monthly",
  "No credit caps; we control the prompts (e.g. “find trading takes”)",
  "Could become its own product if it's good",
  "Grok Bot can build an MVP through a cloud agent in roughly 1–2 weeks of supervised work (estimate)",
];

export const BUILD_CONS = [
  "Won't match OpusClip or Vizard on picking viral moments, face tracking or caption styles at first",
  "TikTok audit and Meta app review are slow, and failures are silent",
  "Ongoing maintenance: API changes, model shutdowns (one happens Feb 2027), broken downloads",
  "Hours spent building are hours not spent posting, and views are the real bottleneck",
];

export const PHASES = [
  {
    title: "Phase 1, weeks 1–2: manual test ($0–$15)",
    detail: "Free tiers plus CapCut. 5–10 clips each on 2–3 finance campaigns. Measure approval rate and views.",
  },
  {
    title: "Phase 2, weeks 3–6: one paid tool (about $29–$35/mo)",
    detail: "If clips average 2K+ views, add OpusClip Pro or Vizard Creator. Aim for 2–3 clips a day per person. Log everything.",
  },
  {
    title: "Phase 3, month 2+: direct deals",
    detail: "With 30+ clips and real numbers, pitch 5–10 mid-size creators for a retainer or rev share.",
  },
  {
    title: "Phase 4, only if volume justifies it: own build",
    detail: "Over about 50 source hours a month, or as a product. Grok Bot builds it on a branch, and nothing ships without your go.",
  },
];

export const CREATORS = [
  {
    name: "FundingPips (prop firm)",
    where: "Content Rewards",
    rate: "$6/1K, $100 cap; about $1.8K left (Nov 12)",
    why: "Highest finance rate. Cap hits at about 16.7K views.",
  },
  {
    name: "TJR (day trader, streamer)",
    where: "Content Rewards",
    rate: "$0.75/1K, $750 cap; about $40K left (Nov 12)",
    why: "Big budget, high cap, good for viral clips.",
  },
  {
    name: "FOMO x ClipFarm",
    where: "Content Rewards",
    rate: "$2/1K, $300 cap (Nov 12)",
    why: "Founder and trader podcast stories.",
  },
  {
    name: "Front Runners (crypto)",
    where: "Content Rewards",
    rate: "$1.50/1K incl. X, $750 cap",
    why: "Crypto. Pays for X posts too.",
  },
  {
    name: "ThreadGuy (crypto streamer)",
    where: "Content Rewards",
    rate: "$1/1K, $500 cap; only 5 creators had joined (Nov 14)",
    why: "Little competition.",
  },
  {
    name: "Cryptonary",
    where: "Content Rewards",
    rate: "$1.50/1K, $75 cap",
    why: "Official streams and podcast.",
  },
  {
    name: "blocmates",
    where: "Whop",
    rate: "$10/1K, $200 cap",
    why: "High rate. Check it's still funded.",
  },
  {
    name: "MrBeast rounds",
    where: "Vyro",
    rate: "$1–$2.50/1K (Oct 26); last round's $25K spent",
    why: "Big footage, but the 5K-view floor.",
  },
  {
    name: "Duke Dennis, JasonTheWeen, SypherPK",
    where: "Content Rewards",
    rate: "$1.50/1K / pool / $7.5K budget",
    why: "Streamers. More competition.",
  },
];

export const PAY_LATER = [
  {
    lead: "Most likely to pay later",
    title: "Creators already running campaigns",
    detail: "They renew budgets, and top clippers get retainers. Your view data is the application.",
  },
  {
    lead: "Best direct-deal targets",
    title: "Mid-size trading, crypto and business podcasters with no clip team",
    detail:
      "Roughly 20K–300K subscribers, regular long episodes, and few or no Shorts. Big names like Mel Robbins already have teams.",
  },
  {
    lead: "Brands",
    title: "Prop firms, crypto apps, fintechs on Content Rewards",
    detail: "Already paying per view. A brand you've driven views for can move you to a fixed deal.",
  },
];

export const DEALS = [
  {
    structure: "Per 1K views (CPM)",
    figures: "$1–$4 per 1K (Business Insider, Mar 2026); $0.50–$3 common (Kreatli, Oct 2026)",
    when: "Marketplaces. Your first pitch to a creator.",
  },
  {
    structure: "Per clip",
    figures: "$15–$35 simple podcast clips; $50–$75+ gaming or motion (Kreatli, Oct 2026)",
    when: "Creator posts on their own channel.",
  },
  {
    structure: "Monthly retainer",
    figures: "$500–$1,500/mo for proven clippers (Business Insider); e.g. 80 clips × $22 = $1,760 (Kreatli)",
    when: "After 1–2 months of proof.",
  },
  {
    structure: "Rev share",
    figures: "No reliable published benchmark found. Treat any split as a negotiation.",
    when: "When you run a clip channel for them on their brand.",
  },
];

export const WEEK = [
  {
    day: "1",
    refael: "Create TikTok, IG Professional and YT accounts for the finance niche; create the shared Drive and Sheet",
    mateen: "Same for a second niche (podcasts / entertainment); sign up for Content Rewards, Vyro and CLIPPING",
  },
  {
    day: "2",
    refael: "Read the briefs for FundingPips, TJR and ThreadGuy; download the footage folders",
    mateen: "Read 2–3 campaign briefs in your niche; set up payout methods",
  },
  {
    day: "3",
    refael: "Cut 3 clips (OpusClip free + CapCut); post and submit",
    mateen: "Cut 3 clips; post and submit",
  },
  {
    day: "4",
    refael: "3 more clips; log yesterday's views",
    mateen: "3 more clips; log yesterday's views",
  },
  {
    day: "5",
    refael: "Review: which hooks held attention? Note approval and rejection reasons",
    mateen: "Same review; swap your best and worst clip with Refael",
  },
  {
    day: "6",
    refael: "3 clips using the winning hook style",
    mateen: "3 clips using the winning hook style",
  },
  {
    day: "7",
    refael: "Together: total views, approval rate, earnings. Decide: go to a paid tool, switch niche, or stop",
    mateen: "Together: shortlist 5 mid-size creators to pitch once there are 30+ clips",
  },
];

export const SHEET_HEADER =
  "Date,Creator/Source,Platform,Post URL,Views,Avg watch time (s),Retention %,Likes,Shares,Campaign,CPM ($/1K),Earnings ($)";

export const SHEET_FORMULA = "=E2/1000*K2*0.9";
export const SHEET_SUM = "=SUM(E2:E)";

export const PITCH_TEMPLATE = `Subject: Clipped your [show] — [X] views in [N] days

Hey [Name],

We're Refael and Mateen. We clip [niche] content. Over the last [N] days we posted [#] clips of [your show / similar creators]:

- Total views: [X]   (top clip: [Y] views — [link])
- Avg watch time: [Z]s, avg retention [R]%
- [#] clips over 10K views; [#] new followers driven to [you/brand]
- Links: [clip 1] [clip 2] [clip 3]  | Full tracker: [sheet link]

Offer: we'll clip every episode — [15] clips/week across TikTok, Reels and Shorts, posted from your account or ours, captions and hooks included.

Trial: 2 weeks at $[X] per 1K views (capped at $[cap]), or [10] clips free.
After that: $[retainer]/month for [60] clips, or [CPM] per 1K views — your pick.

Happy to send raw files for approval before anything goes live.
— Refael & Mateen`;

export const SOURCES = [
  {
    title: "Content Rewards clipping CPM data",
    site: "contentrewards.com",
    date: "Nov 16, 2026",
    href: "https://contentrewards.com/articles/clipping-cpm-rates-november-2026",
  },
  {
    title: "Finance clipping campaigns",
    site: "contentrewards.com",
    date: "Nov 13, 2026",
    href: "https://contentrewards.com/articles/finance-clipping-campaigns",
  },
  {
    title: "How clipping payouts work",
    site: "contentrewards.com",
    date: "Nov 2026",
    href: "https://contentrewards.com/articles/clipping-payouts-explained",
  },
  {
    title: "Clipping campaign data, 719 campaigns",
    site: "clippingcollective.com",
    date: "Oct 17, 2026",
    href: "https://clippingcollective.com/guides/clipping-campaign-data-2026",
  },
  {
    title: "Vyro clipping explained",
    site: "clyper.io",
    date: "Nov 10, 2026",
    href: "https://www.clyper.io/guides/vyro-clipping",
  },
  {
    title: "How CLIPPING works",
    site: "clipping.net",
    date: "",
    href: "https://clipping.net/docs/getting-started/how-it-works",
  },
  {
    title: "“Elite clippers” earn big paychecks",
    site: "Business Insider",
    date: "Mar 24, 2026",
    href: "https://www.businessinsider.com/clipping-creators-arrived-discord-money-earning-big-2026-3",
  },
  {
    title: "How much to pay clippers",
    site: "Kreatli",
    date: "Oct 21, 2026",
    href: "https://marketplace.kreatli.com/guides/how-much-to-pay-clippers",
  },
  {
    title: "YouTube Shorts monetization policies",
    site: "YouTube Help",
    date: "read Nov 16, 2026",
    href: "https://support.google.com/youtube/answer/12504220",
  },
  {
    title: "YouTube channel monetization policies",
    site: "YouTube Help",
    date: "",
    href: "https://support.google.com/youtube/answer/1311392",
  },
  {
    title: "Understand copyright strikes",
    site: "YouTube Help",
    date: "",
    href: "https://support.google.com/youtube/answer/2814000",
  },
  {
    title: "Inauthentic content clarification",
    site: "YouTube Community",
    date: "Jul 2025",
    href: "https://support.google.com/youtube/thread/356734251",
  },
  {
    title: "Instagram ranks original content",
    site: "The Verge",
    date: "Apr 30, 2024",
    href: "https://www.theverge.com/2024/4/30/24144571/instagram-algorithm-ranking-recommendations-reposted-content",
  },
  {
    title: "Creator Rewards Program",
    site: "TikTok Creator Academy",
    date: "",
    href: "https://www.tiktok.com/creator-academy/en/article/creator-rewards-program",
  },
  {
    title: "OpusClip credits",
    site: "help.opus.pro",
    date: "",
    href: "https://help.opus.pro/docs/article/how-are-credits-consumed",
  },
  {
    title: "OpusClip pricing",
    site: "opus.pro",
    date: "Nov 5, 2026",
    href: "https://www.opus.pro/pricing",
  },
  {
    title: "Klap billing and limits",
    site: "klap.app",
    date: "Nov 4, 2026",
    href: "https://klap.app/help/billing-refunds-cancel",
  },
  {
    title: "Vizard pricing",
    site: "vizard.ai",
    date: "Oct 30, 2026",
    href: "https://vizard.ai/pricing",
  },
  {
    title: "Submagic credit costs",
    site: "care.submagic.co",
    date: "Nov 15, 2026",
    href: "https://care.submagic.co/en/article/how-much-does-it-cost-to-use-submagic-1xm83pa/",
  },
  {
    title: "Munch Studio pricing",
    site: "munchstudio.com",
    date: "",
    href: "https://www.munchstudio.com/pricing",
  },
  {
    title: "Descript pricing",
    site: "descript.com",
    date: "Nov 5, 2026",
    href: "https://www.descript.com/pricing",
  },
  {
    title: "Repurpose.io pricing",
    site: "repurpose.io",
    date: "",
    href: "https://repurpose.io/pricing/",
  },
  {
    title: "Blotato billing and limits",
    site: "help.blotato.com",
    date: "",
    href: "https://help.blotato.com/settings/billing-and-credits",
  },
  {
    title: "OpenAI API pricing",
    site: "developers.openai.com",
    date: "Nov 2026",
    href: "https://developers.openai.com/api/docs/pricing",
  },
  {
    title: "TikTok content sharing guidelines",
    site: "developers.tiktok.com",
    date: "",
    href: "https://developers.tiktok.com/doc/content-sharing-guidelines",
  },
  {
    title: "YouTube Data API quota",
    site: "developers.google.com",
    date: "Nov 12, 2026",
    href: "https://developers.google.com/youtube/v3/determine_quota_cost",
  },
  {
    title: "Instagram content publishing",
    site: "developers.facebook.com",
    date: "",
    href: "https://developers.facebook.com/docs/instagram-platform/content-publishing/",
  },
  {
    title: "OpenShorts (open-source clipper)",
    site: "openshorts.app",
    date: "Oct 29, 2026",
    href: "https://www.openshorts.app/alternatives/getmunch",
  },
];
