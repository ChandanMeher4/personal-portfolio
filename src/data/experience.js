export const experiences = [
  {
    period: "Apr. 2026 — Oct. 2026",
    organization: "ModelSuite.ai",
    role: "Full Stack Developer Intern — Project Manager, Talent-Portal UI team",
    location: "Bengaluru, India",
    description:
      "Led the Talent-Portal UI team (2–3 interns) and owned multiple key products end-to-end, from system architecture to frontend interfaces, query caching, and backend API delivery.",
    highlights: [
      "Owned OFM-Recruiting end-to-end, delivering system architecture, website, and backend solo within 8 weeks; built a creator link page.",
      "Introduced a shared UI component library on Talent-Portal that cut the codebase by 28%, and led a UI/UX revamp across 10+ admin modules (dashboards, hiring workflows, Kanban boards).",
      "Reduced candidate evaluation time from 4.5s to 2.9s (35% faster) through client-side query caching and asynchronous payload processing.",
      "Built a real-time chat system on Socket.io with optimistic UI, reconnect deduplication, and presence tracking; resolved WebSocket race conditions with integration tests.",
      "Engineered a hybrid RAG search pipeline (semantic retrieval + query expansion) for internal knowledge-base search with automated retrieval-quality tests.",
      "Rolled out a 5-tier admin permission system with self-service password management, remote session revocation, and audit logs.",
    ],
  },
  {
    period: "2026",
    organization: "GirlScript Summer of Code (GSSoC 2026)",
    role: "Open Source Contributor — Ranked Top 500 of 43,000+ Global Participants (Top 1.1%)",
    location: "Global / Remote",
    description:
      "Recognized in the Top 1.1% globally for code contribution velocity and problem-solving. Delivered 9 merged PRs across critical engineering modules during InternHack.",
    highlights: [
      "Ranked Top 500 among 43,000+ developers globally in GSSoC 2026.",
      "InternHack (9 Merged PRs): Built AI code review panel with Gemini + Zod schema validation.",
      "Implemented semantic caching layer backed by Qdrant vector database.",
      "Authored quota-window rate-limiting middleware to protect upstream LLM inference quotas.",
    ],
  },
  {
    period: "2026",
    organization: "AI-STHETICA 2026 (SJBIT Hackathon)",
    role: "Top 3 of 75 Teams (AIvora Dialogue System)",
    location: "Bengaluru, India",
    description:
      "Engineered AIvora, an emotion-aware dialogue and 3D avatar system operating within strict sub-2-second conversational SLAs.",
    highlights: [
      "Built an ultra-low latency real-time voice pipeline (Whisper STT → Llama 3.3 emotion classifier across 12 classes → dual-route TTS), hitting ~1.6–2.4s latency.",
      "Designed a full-duplex WebSocket protocol streaming 3-axis emotion vectors to synchronize avatar lip-sync and dynamic gestures on a 3-person team.",
    ],
  },
  {
    period: "2026",
    organization: "Electrolithon Hackathon",
    role: "1st Place Winner",
    location: "Bengaluru, India",
    description:
      "Designed and deployed an end-to-end full-stack web application from scratch within a 24-hour sprint, placing 1st overall.",
    highlights: [
      "Architected clean database schemas, secure authentication, and responsive frontend views within 24 hours.",
      "Presented live architecture and product demo before an industry judging panel.",
    ],
  },
];
