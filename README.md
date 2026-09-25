<div align="center">

# Harsh Singh

### Data Analyst · SQL · Python · Power BI · Excel

A/B Testing & Experiment Analysis · AI Automation with n8n & LLM APIs · B.Tech Computer Engineering ’26

[![Live website](https://img.shields.io/badge/Live%20website-harsh--singh--analyst.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://harsh-singh-analyst.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Harsh%20Singh-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harsh-singh-4836ab31a/)
[![Email](https://img.shields.io/badge/Email-hsp1112003%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hsp1112003@gmail.com)

📍 Gwalior, Madhya Pradesh, India · 🟢 Open to Data Analyst and Business Analyst roles, anywhere in India

</div>

---

## About me

I analyse data to answer business questions: **did the change work, why, and what should we do next.**

My most recent project was a pre-registered checkout A/B test on a 16,000-user simulated sample. I found a **+1.68pp** conversion lift (95% CI +0.64 to +2.71pp). Most of it came from mobile users (**+4.19pp**), and I sized a **~46,000-user** follow-up to protect average order value.

Before analytics, I ran Meta and Google Ads for three clients as a freelancer, managing **₹50,000+** in monthly spend. One campaign drove **100+ paid bookings** for an interview-prep product. That work taught me that *a number on a dashboard only matters if it changes a decision.*

I also build AI automations, including a multi-agent assistant in n8n that routes requests across Gmail, Google Calendar and Fireflies.

## By the numbers

| 16,000 | +1.68pp | ₹50,000+ | 100+ |
|:---:|:---:|:---:|:---:|
| simulated users in my checkout A/B test | conversion lift (95% CI +0.64 to +2.71pp) | monthly ad spend managed across Meta & Google Ads | paid bookings driven for an interview-prep product |

## Featured work

### 🧪 Checkout Redesign A/B Test — *experiment analysis*

A pre-registered analysis of a checkout redesign on a 16,000-user simulated sample, built to show how a ship / don't-ship decision is reached — not to manufacture a clean win.

**Recommendation:** hold the rollout and run one confirmatory test first.

| Metric | Result | Detail | Verdict |
|---|---|---|---|
| Conversion rate | **+1.68pp** | 11.95% → 13.63%, 95% CI +0.64 to +2.71pp | ✅ Confirmed |
| Mobile conversion lift | **+4.19pp** | interaction p < 0.0001 | ✅ Real modifier |
| Average order value | **−4.35%** | 95% CI −10.1% to +1.7% | ⚠️ Inconclusive |

- Analysis plan committed to git before any data or analysis code existed
- Estimator validated with a 1,000-run simulation: 94.1% interval coverage (target 95%)
- Interaction test found the one real effect modifier — device — where per-segment tests gave four false positives
- Sized a ~46,000-user follow-up to protect average order value

`Python` `pandas` `SciPy` `statsmodels` `DuckDB SQL` `matplotlib`

### 🤖 Multi-Agent AI Assistant — *AI automation*

A multi-agent workflow in n8n that handles email, calendar and meeting-notes tasks from a single chat. A Master Orchestrator reads each request and routes it to the right specialist agent — and can chain agents together for combined requests.

```
            Chat message received
                     │
         Master Orchestrator Agent
        ┌────────────┼─────────────┐
   Email Agent  Calendar Agent  Meetings Agent
  5 Gmail tools  5 Google       2 Fireflies
                 Calendar tools  tools
```

- Master Orchestrator classifies each message by intent and delegates in priority order
- Three specialist agents, each with its own LLM and short-term chat memory
- Chains agents for compound requests, e.g. summarise a meeting then draft the follow-up email

`n8n` `LLM APIs` `Gmail` `Google Calendar` `Fireflies`

## Skills

| Area | Tools & methods |
|---|---|
| **A/B Testing & Experiment Analysis** ⭐ | Pre-registration · Power & sample size · Confidence intervals · Bootstrap · Interaction tests · FDR correction · SRM checks · Simulation validation |
| **SQL** ⭐ | DuckDB |
| **Workflow Automation** ⭐ | n8n · LLM APIs · Gmail · Google Calendar · Fireflies |
| **Python** | pandas · SciPy · statsmodels · matplotlib · Jupyter |
| **BI & Spreadsheets** | Power BI · Excel |
| **Marketing Analytics** | Meta Ads · Google Ads · cost per result · CTR · ROAS |

⭐ = top skills

## Experience

**Digital Marketing Consultant** — Self-employed · *May 2024 – Mar 2025 (11 months)*

- Managed ₹50,000+/month in ad spend across Meta Ads and Google Ads for 3 clients — a specialty café, a defence-exam coaching business and a tuition centre — as the sole operator.
- Drove 100+ paid bookings for an IB mock-interview product.
- Tracked cost per result, CTR and ROAS to reallocate budget between campaigns.

## Education & certifications

**Lakshmi Narain College of Technology** — Bachelor of Technology, Computer Engineering · *Nov 2022 – Jul 2026*

- 📜 Data Analyst
- 📜 Deloitte Data Analytics Job Simulation

---

## About this website

This repository is the source code of my portfolio website — live at **[harsh-singh-analyst.vercel.app](https://harsh-singh-analyst.vercel.app)**.

**Built with:** Next.js · React · TypeScript · Tailwind CSS · Motion · hosted on Vercel

<details>
<summary>Run it locally</summary>

```bash
npm install
npm run dev
```

Then open http://localhost:3000. All site text lives in `src/lib/content.ts`.

</details>

<div align="center">

**Let's talk →** [Live website](https://harsh-singh-analyst.vercel.app) · [hsp1112003@gmail.com](mailto:hsp1112003@gmail.com) · [LinkedIn](https://www.linkedin.com/in/harsh-singh-4836ab31a/)

</div>
