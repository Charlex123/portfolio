<div align="center">

# Charles Muoka

### Machine Learning & Software Engineer

**I build and ship production systems where the hard part is real** — FHIR-compliant
clinical platforms, multi-agent AI infrastructure, industrial knowledge graphs and on-chain
applications.

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-e69704?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-coral.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muokacharles)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Charlex123)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:charlesmuoka1@gmail.com)

</div>

---

## About

I am a **machine learning and software engineer**. I started building for clients in 2017
and have never stopped writing code — today I lead engineering at NostraHealth while still
architecting and shipping the systems myself.

My work sits where the problems are genuinely hard: a FHIR R4 clinical backend routing across
four AI providers, a multilingual tutor that runs offline on a student's device, an industrial
knowledge graph that gives one compressor a single identity across SAP, Maximo and PI System,
and Solana programs deployed to mainnet. Full stack in the real sense — data model, inference,
infrastructure and the interface on top.

I also publish what is safe to publish. **Tova** and **TovaClaw** are open-source agent
frameworks, **nosi** is an open real-time avatar toolkit, and the **NostraHealthAI SDKs** ship
in Python, TypeScript, Java and PHP. The commercial products stay closed, but I am always glad
to walk through their architecture.

| | |
|---|---|
| **Role** | Machine Learning & Software Engineer — NostraHealth · Zetranet Solutions Ltd |
| **Building since** | 2017 |
| **Products shipped** | 22 flagship platforms |
| **Commits on active platforms** | 4,500+ |
| **Languages in production** | TypeScript, Python, JavaScript, Dart, PHP, Solidity/Rust |
| **Contact** | charlesmuoka1@gmail.com · +234 806 638 7342 |

---

## Selected Work

Products are grouped the way the work actually divides. Items marked **🔒 Proprietary** are
shipped commercial products whose source code is closed — the architecture is described here
and I am happy to walk through it on a call.

### AI & Agent Platforms

| Product | What it is | Stack | Access |
|---|---|---|---|
| **Satryx Forge™** | Vendor-neutral operating-intelligence layer for oil & gas. Sits above SAP, Maximo, AVEVA, PI System and Primavera; connects them, surfaces hidden relationships, preserves engineering knowledge. Industrial Knowledge Graph, 26 A–Z modules, six intelligence layers, every answer cited with source, assumptions, confidence and reviewer. | Next.js · TypeScript · Python compute plane · Knowledge Graph · Docker | 🔒 Proprietary |
| **MirrorMingo** | Multilingual AI tutor for K-12, independent and undergraduate learners. Built for OpenAI Build Week and submitted to the Devpost OpenAI hackathon. Tutors in Nigerian Pidgin, Yoruba, Igbo, Hausa and Nigerian English. Offline-first — PostgreSQL in cloud, SQLite lesson packs on device. `1,589 commits` | Python · TypeScript · PostgreSQL · SQLite · PWA · Speech AI | 🔒 Proprietary |
| **Nostra Tova Platform** | Production monorepo behind the Tova agent family — 16 shipping packages: agent runtime, first-party Python/TypeScript SDKs, VocaBusta African-language speech, translation, benchmark harness, MirrorMind and Specio desktop apps, admin and analytics consoles. `1,002 commits` | Python · TypeScript · LangGraph · Docker · Electron | 🔒 Proprietary |
| **NEIP** | National Education Intelligence Platform. Turns school-level records into national intelligence for Nigerian ministries — federal, state, LGA and school views, a closed intervention loop, and a data-governance architecture built to survive a DPO's questions. | React · TypeScript · Vite · RBAC | 🔒 Proprietary |
| **ClawPod** | GPU pod scheduler and autoscaler provisioning inference capacity across RunPod and AWS behind one API. Provider-agnostic scaler, Redis-backed state, scheduled reconciliation, operator CLI. | Python · FastAPI · Redis · RunPod · AWS · Docker | 🔒 Proprietary |
| **Agents Orchestration** | Control surface for composing and supervising multi-agent workflows, routing work between specialised agents with a human in the loop. | React · TypeScript · Vite | 🔒 Proprietary |

### Health Tech

| Product | What it is | Stack | Access |
|---|---|---|---|
| **[NostraHealth](https://www.nostrahealth.com/)** | Flagship AI-assisted medical platform serving patients, clinicians and partner organisations. I lead the engineering team behind it. | React · TypeScript · Node.js · AI/LLM | 🔒 Proprietary |
| **NostraHealth API** | The clinical backend powering every surface: FHIR R4 data layer with Google Healthcare API, multi-provider AI routing across Anthropic, OpenAI, Gemini and xAI, live consultation over Agora, subscription billing, doctor–patient access control, barcode drug verification. `1,228 commits` | Node.js · TypeScript · FHIR R4 · Agora | 🔒 Proprietary |
| **NostraHealth HMS** | Full hospital management system — admissions (ADT), bed census, CPOE, SOAP clinical notes, ED triage, pharmacy, operating room scheduling, radiology, Nigerian HMO integration, quality and compliance, patient portal. | React · TypeScript · Vite · FHIR R4 | 🔒 Proprietary |
| **NostraHealth for Organisations** | B2B console where partner hospitals and developers manage API keys, usage analytics, audit logs and teams. Hospital tier unlocks FHIR records, departments and staff. | React · TypeScript · Zustand · React Query · Tailwind · Recharts | 🔒 Proprietary |
| **Nostra Mobile** | Flutter patient application shipping consultation, ordering and records to iOS and Android from one codebase. `318 commits` | Flutter · Dart · Firebase | 🔒 Proprietary |
| **Satryx AI Mobile** | Native Flutter agent client on the Nostra Tova API — chat, lessons, business workspaces, in-app purchase entitlements across App Store and Play, Firebase push. | Flutter · Dart · Firebase · IAP | 🔒 Proprietary |

### Open Source

| Project | What it is | Stack |
|---|---|---|
| **[Tova](https://github.com/Charlex123/tova)** | Open-source AI agent framework for healthcare order automation, built on LangGraph and deliberately provider-agnostic. Implement a few interfaces to wire the agent to any backend, database and LLM. | Python · LangGraph |
| **[TovaClaw](https://github.com/Charlex123/tovaclaw)** · [live](https://tovaclaw.vercel.app) | Modular open agent platform — healthcare, travel, email, productivity and enterprise ops. Upload JSON/CSV/PDF/TXT and query it via RAG. Every capability is a module; zero overhead for what you leave off. | Python · LangGraph · RAG |
| **[nosi](https://github.com/Charlex123/nosi)** | Real-time AI avatar toolkit. One face image plus audio becomes a talking video with realistic lip sync, head motion and blinks — LivePortrait, MuseTalk, optional EchoMimicV3, BiRefNet background removal. | Python · PyTorch · CUDA · FastAPI |
| **[nostra-ai-avatar](https://github.com/Charlex123/nostra-ai-avatar)** | GPU-accelerated talking avatar video generation with LivePortrait, MuseTalk and ElevenLabs TTS. | Python · PyTorch · CUDA |
| **NostraHealthAI SDKs** | Official client libraries for the NostraHealthAI platform, maintained across four ecosystems from a single API contract: [Python](https://github.com/Charlex123/nostrahealthai-python) · [Node/TS](https://github.com/Charlex123/nostrahealthai-node) · [Java](https://github.com/Charlex123/nostrahealthai-java) · [PHP](https://github.com/Charlex123/nostrahealthai-php) | Python · TypeScript · Java · PHP |

### Blockchain & Web3

| Project | What it is | Stack | Access |
|---|---|---|---|
| **[DogeBrics](https://dogebricsnext.vercel.app/)** | Full Solana token ecosystem — Anchor programs in Rust deployed on-chain, Next.js dApp with wallet integration, companion Telegram bot and Python backend. | Solana · Anchor · Rust · Next.js · Python | 🔒 Proprietary |
| **[FifaReward](https://fifarewardfrontend.vercel.app)** | Blockchain rewards platform built end to end — reward smart contracts, web application, AWS infrastructure, GitHub Actions CI/CD and a Telegram tap-to-earn game. | Solidity · TypeScript · Python · AWS | Open |
| **[TafaXtra](https://tafafrontend.vercel.app/)** | Blockchain community and token platform with its own front end and API. | JavaScript · React · Node.js · Web3 | Open |

### Web & Product

| Project | What it is | Stack | Access |
|---|---|---|---|
| **[Outreach Mail Sender](https://outreach-frontend.vercel.app/)** | Chrome extension that runs outreach mail campaigns from the browser, backed by its own scheduling and delivery API. | JavaScript · React · Chrome Extension · Node.js | Open |
| **[Perfect Wetsuit](https://perfectwetsuitv2.vercel.app/)** | Next.js storefront and brand site delivered for a wetsuit company, design through deployment. | Next.js · React | 🔒 Proprietary |
| **[XSO Apartments](https://xsoapartments.vercel.app)** | Property listing and booking front end for short-let apartments. | React · TypeScript · Vite | Open |

---

## Technical Skills

**AI & Machine Learning** — LangGraph & agent design · LLM integration (Anthropic, OpenAI,
Gemini, xAI) · RAG & vector retrieval · PyTorch & CUDA inference · speech and computer vision

**Backend & APIs** — Node.js · TypeScript · Python · FastAPI · NestJS · PHP · FHIR R4 ·
PostgreSQL · Redis · SQLite

**Frontend & Product** — React · Next.js · TypeScript · Vite · Zustand · React Query ·
Tailwind · PWA & offline-first

**Mobile** — Flutter · Dart · Firebase · in-app purchase & entitlements

**Blockchain** — Solidity & EVM · Solana & Anchor (Rust) · Web3 & wallet integration · token
and reward mechanics

**Cloud & Infrastructure** — Docker · AWS · Google Cloud · Azure · GPU orchestration (RunPod) ·
CI/CD & GitHub Actions

---

## Experience

**Principal Engineer** — Zetranet Solutions Ltd · *2025 — Present*
Architecture, implementation and delivery of the AI product portfolio across education,
industrial operations and government: Satryx Forge, MirrorMingo, NEIP, the Nostra Tova agent
monorepo and the ClawPod GPU inference tier.

**Machine Learning & Software Engineer** — NostraHealth · *2024 — Present*
Lead the engineering organisation and remain hands-on. Architected the FHIR R4 clinical
backend with multi-provider AI routing; delivered the Hospital Management System and the B2B
organisation console; supervised and contributed to the Flutter mobile app; published official
SDKs in four languages.

**Software Developer** — FifaReward · *2021 — 2024*
Wrote and deployed the reward smart contracts, built the web application front to back,
provisioned AWS infrastructure, set up the GitHub Actions CI/CD pipeline, and built the
Telegram tap-to-earn game in Python.

**Freelance Web Developer** — Fiverr · *2017 — 2021*
Designed, built and maintained websites and web applications for clients across several
industries.

---

## Education & Certification

- **B.Pharm, Pharmacy** — University of Nigeria, Nsukka · *2012 — 2017*
- **Web Development** — freeCodeCamp · *2014 — 2017*
- **Python for Everybody** — Coursera · *2024*
- **AWS Certified** — Coursera · *2024*
- **Azure Certified** — Coursera · *2024*
- **Blockchain Development** — Cyfrin & Chainlink · *2025*

---

## About This Site

The portfolio itself is a React + Vite single-page application.

**Features**

- Category-filtered project gallery with proprietary/open-source access badges
- Expandable architecture notes per product, so closed-source work is still legible
- Live-site hover previews for anything publicly deployed
- Generated cover art for products without a public screenshot
- Dark/light theme with system-aware tokens
- Framer Motion transitions, custom cursor, scroll-spy navigation
- Structured data (`schema.org/Person`), Open Graph and Twitter cards, sitemap and robots
- Reduced-motion and focus-visible support throughout

**Stack** — React 18 · Vite 5 · Framer Motion · React Icons · Swiper · EmailJS

### Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # eslint
```

---

## Get In Touch

Have a platform to build, a team to lead, or an architecture to pressure-test?

- **Email** — [charlesmuoka1@gmail.com](mailto:charlesmuoka1@gmail.com)
- **WhatsApp** — [+234 806 638 7342](https://api.whatsapp.com/send?phone=2348066387342)
- **LinkedIn** — [muokacharles](https://www.linkedin.com/in/muokacharles)
- **GitHub** — [Charlex123](https://github.com/Charlex123)

<div align="center">

**Built and maintained by Charles Muoka**

</div>
