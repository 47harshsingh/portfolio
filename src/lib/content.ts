// All site copy lives here. Sources: LinkedIn PDF + the two public GitHub READMEs
// (checkout-ab-test, multiagent-workflow-n8n). Nothing in this file is invented.

export const profile = {
  name: "Harsh Singh",
  role: "Data Analyst",
  location: "Gwalior, Madhya Pradesh, India",
  email: "hsp1112003@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsh-singh-4836ab31a/",
  pitch:
    "I analyse data to answer business questions: did the change work, why, and what should we do next.",
  openTo: "Open to Data Analyst and Business Analyst roles, anywhere in India",
  statement: "A number on a dashboard only matters if it changes a decision.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = [
  "My most recent project was a pre-registered checkout A/B test on a 16,000-user simulated sample. I found a +1.68pp conversion lift (95% CI +0.64 to +2.71pp). Most of it came from mobile users (+4.19pp), and I sized a ~46,000-user follow-up to protect average order value. I built it with Python (pandas, SciPy, statsmodels) and DuckDB SQL.",
  "Before analytics, I ran Meta and Google Ads for three clients as a freelancer, managing ₹50,000+ in monthly spend. One campaign drove 100+ paid bookings for an interview-prep product. That work taught me that a number on a dashboard only matters if it changes a decision.",
  "I also build AI automations, including a multi-agent assistant in n8n that routes requests across Gmail, Google Calendar and Fireflies.",
];

export const stats = [
  { prefix: "", value: 16000, suffix: "", decimals: 0, label: "simulated users in my checkout A/B test" },
  { prefix: "+", value: 1.68, suffix: "pp", decimals: 2, label: "conversion lift, 95% CI +0.64 to +2.71pp" },
  { prefix: "₹", value: 50000, suffix: "+", decimals: 0, label: "monthly ad spend managed across Meta & Google Ads" },
  { prefix: "", value: 100, suffix: "+", decimals: 0, label: "paid bookings driven for an interview-prep product" },
];

export const abTest = {
  title: "Checkout Redesign A/B Test",
  tag: "Experiment analysis",
  stack: ["Python", "pandas", "SciPy", "statsmodels", "DuckDB SQL", "matplotlib"],
  summary:
    "A pre-registered analysis of a checkout redesign on a 16,000-user simulated sample, built to show how a ship / don't-ship decision is reached — not to manufacture a clean win.",
  recommendation: "Hold the rollout and run one confirmatory test first.",
  highlights: [
    "Analysis plan committed to git before any data or analysis code existed",
    "Estimator validated with a 1,000-run simulation: 94.1% interval coverage (target 95%)",
    "Interaction test found the one real effect modifier — device — where per-segment tests gave four false positives",
    "Sized a ~46,000-user follow-up to protect average order value",
  ],
  results: [
    { metric: "Conversion rate", result: "+1.68pp", detail: "11.95% → 13.63%", verdict: "Confirmed", tone: "good" },
    { metric: "Mobile conversion lift", result: "+4.19pp", detail: "interaction p < 0.0001", verdict: "Real modifier", tone: "good" },
    { metric: "Average order value", result: "−4.35%", detail: "95% CI −10.1% to +1.7%", verdict: "Inconclusive", tone: "warn" },
  ],
  ci: { low: 0.64, point: 1.68, high: 2.71, max: 3 },
};

export const agent = {
  title: "Multi-Agent AI Assistant",
  tag: "AI automation",
  stack: ["n8n", "LLM APIs", "Gmail", "Google Calendar", "Fireflies"],
  summary:
    "A multi-agent workflow in n8n that handles email, calendar and meeting-notes tasks from a single chat. A Master Orchestrator reads each request and routes it to the right specialist agent — and can chain agents together for combined requests.",
  highlights: [
    "Master Orchestrator classifies each message by intent and delegates in priority order",
    "Three specialist agents, each with its own LLM and short-term chat memory",
    "Chains agents for compound requests, e.g. summarise a meeting then draft the follow-up email",
  ],
  agents: [
    { name: "Email Agent", tools: "5 Gmail tools", icon: "gmail" },
    { name: "Calendar Agent", tools: "5 Google Calendar tools", icon: "calendar" },
    { name: "Meetings Agent", tools: "2 Fireflies tools", icon: "fireflies" },
  ],
  // Real test prompts from the project README and where the orchestrator routes them.
  routes: [
    { app: "gmail", prompt: "Show me my latest emails.", route: "Email Agent → Get many messages" },
    { app: "calendar", prompt: "Check my calendar availability between [start] and [end].", route: "Calendar Agent → Check availability" },
    { app: "fireflies", prompt: "List my latest Fireflies transcripts.", route: "Meetings Agent → Get list of transcripts" },
  ],
};

export const experience = {
  role: "Digital Marketing Consultant",
  org: "Self-employed",
  period: "May 2024 – Mar 2025",
  duration: "11 months",
  points: [
    "Managed ₹50,000+/month in ad spend across Meta Ads and Google Ads for 3 clients — a specialty café, a defence-exam coaching business and a tuition centre — as the sole operator.",
    "Drove 100+ paid bookings for an IB mock-interview product.",
    "Tracked cost per result, CTR and ROAS to reallocate budget between campaigns.",
  ],
};

export const education = {
  school: "Lakshmi Narain College of Technology",
  degree: "Bachelor of Technology, Computer Engineering",
  period: "Nov 2022 – Jul 2026",
};

export const certifications = ["Data Analyst", "Deloitte Data Analytics Job Simulation"];
