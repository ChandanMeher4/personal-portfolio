import foundrDesktop from "../assets/foundr-desktop.png";
import foundrMobile from "../assets/foundr-mobile.png";
import mergeMindDesktop from "../assets/mergemind-desktop.png";
import mergeMindMobile from "../assets/mergemind-mobile.png";
import awazDesktop from "../assets/awaz-desktop.png";
import awazMobile from "../assets/awaz-mobile.png";
import echoeDesktop from "../assets/echoe-desktop.png";
import echoeMobile from "../assets/echoe-mobile.png";

export const projects = [
  {
    id: "foundr",
    index: "01",
    category: "01 / PRODUCT DEVELOPMENT",
    title: "Foundr.",
    tagline: "Fractional real estate platform with geospatial indexing & Edge RBAC.",
    description:
      "A fractional real estate platform featuring JWT-authenticated Edge RBAC across 3 roles, atomic MongoDB increments for concurrent funding, and 2dsphere geospatial queries.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Groq"],
    liveUrl: "https://foundr-gamma.vercel.app/",
    githubUrl: "https://github.com/ChandanMeher4/foundr",
    desktopImage: foundrDesktop,
    mobileImage: foundrMobile,
    caseStudy: {
      problem:
        "High capital requirements and lack of transparency historically prevent individual retail investors from accessing commercial and residential real-estate markets. Investors lack accessible tools to model fractional returns, verify construction milestones, and safely participate in concurrent funding rounds.",
      constraints:
        "The application required strict role-based access control across 3 user tiers (Investor, Developer, Admin), real-time atomic balance increments to eliminate race conditions during concurrent funding spikes, and sub-100ms geospatial property discovery.",
      architecture:
        "Built with Next.js App Router and Edge Middleware for JWT role verification. MongoDB powers data persistence with a 2dsphere geospatial index spanning 3 property categories and 4 construction stages, while Groq LLM inference performs automated property risk analysis.",
      implementation:
        "Implemented JWT-authenticated Edge middleware intercepting route requests before execution. Wrote deal-closure logic that automatically transitions listings to 'Funded' upon hitting target capitalization, alongside atomic MongoDB `$inc` operators preventing over-subscription.",
      decisions:
        "Selected Next.js Edge middleware to handle RBAC checks closest to users with zero cold-start penalty. Utilized native MongoDB 2dsphere indexing rather than external GIS tools to keep data modeling unified and query latency minimal.",
      outcome:
        "Delivered a resilient investment simulation platform handling concurrent funding updates, multi-category geospatial queries, and automated prospectus assessments.",
    },
  },
  {
    id: "mergemind",
    index: "02",
    category: "02 / DEVELOPER TOOLING",
    title: "MergeMind.",
    tagline: "AI PR review engine with Model Context Protocol (MCP) & Qdrant RAG.",
    description:
      "An automated PR review engine coordinating 2 isolated MCP stdio tool servers across 6 review dimensions, retrieving historical reviews via Qdrant cosine search.",
    tech: ["Node.js", "React", "Qdrant", "MCP", "Socket.io"],
    liveUrl: "https://merge-mind-one.vercel.app/",
    githubUrl: "https://github.com/ChandanMeher4/mergemind",
    desktopImage: mergeMindDesktop,
    mobileImage: mergeMindMobile,
    caseStudy: {
      problem:
        "Engineering teams spend excessive time identifying syntax discrepancies, regression hazards, security vulnerabilities, and architectural deviations during pull request reviews. Large diffs trigger reviewer fatigue and delayed merge cycles.",
      constraints:
        "GitHub webhooks demand receipt acknowledgment within a strict 10-second timeout window. The review pipeline required asynchronous worker orchestration, vector retrieval across historical reviews, and deterministic multi-dimension feedback within ~10–14s.",
      architecture:
        "Engineered an MCP (Model Context Protocol) architecture hosting 2 isolated stdio tool servers coordinating 6 review dimensions (security, bugs, performance, architecture, testing, code quality). Qdrant vector database powers cosine retrieval of top-3 similar historical PR reviews.",
      implementation:
        "Constructed an asynchronous webhook handler that immediately responds 200 OK to GitHub before executing analysis workers. Integrated Socket.io for live progress streaming to client dashboards and automated inline markdown comment generation.",
      decisions:
        "Chose the Model Context Protocol (MCP) to isolate tool evaluation environments from LLM context orchestration. Applied Qdrant cosine vector search on past reviews to provide continuity and prevent repeated comments on known patterns.",
      outcome:
        "Achieved ~10–14s end-to-end review latency per PR, successfully tested across 15+ complex diffs while staying well within external webhook deadlines.",
    },
  },
  {
    id: "awaz",
    index: "03",
    category: "03 / APPLICATION DEVELOPMENT",
    title: "Awaz.",
    tagline: "Campus grievance resolution system with RBAC & status tracking.",
    description:
      "A full-stack student grievance platform featuring partitioned student and administrative portals, role-based authorization, and real-time status tracking.",
    tech: ["React", "Node.js", "Express", "Firebase"],
    liveUrl: "https://awaz-gamma.vercel.app/login",
    githubUrl: "https://github.com/ChandanMeher4/Awaz",
    desktopImage: awazDesktop,
    mobileImage: awazMobile,
    caseStudy: {
      problem:
        "Campus grievance submission is often opaque, chaotic, and unmonitored when handled via unstructured email threads or physical drop boxes. Students lack visibility into ticket status, while administrators lack audit trails and prioritization tools.",
      constraints:
        "Strict confidentiality requirements dictated role-based access control (RBAC). The system needed to guarantee that students cannot view peer grievances while giving administrators category-based filtering and status progression controls.",
      architecture:
        "React frontend paired with a modular Node.js/Express REST API. Firebase handles authentication and persistent document storage, backed by route-level authorization middleware validating token scopes.",
      implementation:
        "Created partitioned dashboards: a student portal for submitting categorized grievances and tracking progress, and an administrative console for reviewing, assigning, and resolving issues with status updates.",
      decisions:
        "Implemented custom JWT-based authorization middleware in Express to verify user roles prior to database query execution, preventing unauthorized access across portal boundaries.",
      outcome:
        "Deployed a reliable grievance management platform that provides students with clear status visibility and equips administrators with an organized resolution workflow.",
    },
  },
  {
    id: "echoe",
    index: "04",
    category: "04 / REAL-TIME APPLICATION",
    title: "Echoe.",
    tagline: "Real-time chat client with NoSQL state persistence.",
    description:
      "A real-time messaging application engineered with Firebase Firestore snapshot listeners, a scalable document model, and a responsive client interface.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://echoe-chat-app.netlify.app/",
    githubUrl: "https://github.com/ChandanMeher4/Echoe-Chat-App",
    desktopImage: echoeDesktop,
    mobileImage: echoeMobile,
    caseStudy: {
      problem:
        "Many messaging applications are burdened by bloated feature sets or complex custom WebSocket infrastructures that are difficult to maintain and scale for simple, focused peer communication.",
      constraints:
        "Required sub-200ms message synchronization, real-time presence awareness, mobile-first responsive design, and seamless cross-device authentication.",
      architecture:
        "A client-centric React architecture utilizing Firebase Firestore real-time snapshot listeners for reactive state synchronization and Firebase Authentication for identity management.",
      implementation:
        "Engineered Firestore document listeners that trigger granular component re-renders upon new message arrivals. Designed a dual-pane desktop view that effortlessly adapts to a single-view drill-down on mobile screens.",
      decisions:
        "Selected Firestore's reactive snapshot listeners over maintaining a self-hosted WebSocket cluster, eliminating server maintenance overhead while ensuring automatic offline data caching.",
      outcome:
        "Delivered a snappy, minimal chat application with instant synchronization, zero configuration overhead, and clean responsive ergonomics.",
    },
  },
];
