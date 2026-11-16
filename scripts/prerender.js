import fs from "fs";
import path from "path";
import process from "node:process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const projects = [
  {
    id: "foundr",
    title: "Foundr",
    description:
      "A fractional real estate platform featuring JWT-authenticated Edge RBAC across 3 roles, atomic MongoDB increments for concurrent funding, and 2dsphere geospatial queries.",
  },
  {
    id: "mergemind",
    title: "MergeMind",
    description:
      "An automated PR review engine coordinating 2 isolated MCP stdio tool servers across 6 review dimensions, retrieving historical reviews via Qdrant cosine search.",
  },
  {
    id: "awaz",
    title: "Awaz",
    description:
      "A full-stack student grievance platform featuring partitioned student and administrative portals, role-based authorization, and real-time status tracking.",
  },
  {
    id: "echoe",
    title: "Echoe",
    description:
      "A real-time messaging application engineered with Firebase Firestore snapshot listeners, a scalable document model, and a responsive client interface.",
  },
];

const indexPath = path.join(distDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html does not exist. Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(indexPath, "utf-8");

projects.forEach((p) => {
  const targetDir = path.join(distDir, "work", p.id);
  fs.mkdirSync(targetDir, { recursive: true });

  const projectUrl = `https://personal-portfolio-0906.netlify.app/work/${p.id}`;
  const pageTitle = `${p.title} — Engineering Case Study | Chandan Meher`;
  const pageDesc = `${p.title}: ${p.description}`;

  let html = template;

  // Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${pageTitle}</title>`);

  // Canonical
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/>/i,
    `<link rel="canonical" href="${projectUrl}" />`
  );

  // Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/>/i,
    `<meta name="description" content="${pageDesc}" />`
  );

  // Open Graph
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/>/i,
    `<meta property="og:url" content="${projectUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/>/i,
    `<meta property="og:title" content="${pageTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/>/i,
    `<meta property="og:description" content="${pageDesc}" />`
  );

  // Twitter
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content=".*?"\s*\/>/i,
    `<meta name="twitter:url" content="${projectUrl}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/i,
    `<meta name="twitter:title" content="${pageTitle}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/i,
    `<meta name="twitter:description" content="${pageDesc}" />`
  );

  const outFile = path.join(targetDir, "index.html");
  fs.writeFileSync(outFile, html, "utf-8");
  console.log(`Prerendered: /work/${p.id} -> ${outFile}`);
});

console.log("All 4 case studies successfully prerendered with static canonical and social metadata!");
