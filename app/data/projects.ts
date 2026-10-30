export type Project = {
  name: string;
  tag: string;
  line: string;
  stack: string[];
  url?: string;
  image?: string; // e.g. "/projects/folaplay.png" (4:3), file goes in public/projects
  details?: string[];
};

export const featured: Project[] = [
  {
    name: "Folaplay",
    tag: "OTT, Streaming",
    line: "Video streaming platform in the vein of Netflix, built as fullstack developer.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Huawei Cloud"],
    url: "https://fola.superprismoralab.com",
  },
  {
    name: "Seedrym.io",
    tag: "Web3, RWA",
    line: "Real-world asset tokenization platform on Solana.",
    stack: ["Next.js", "Rust (Axum)", "Solana", "Supabase"],
    url: "https://seedrym.io",
    details: [
      "Fullstack: reactive Next.js frontend with high-performance Rust (Axum) microservices.",
      "Cryptographic wallet authentication and low-latency API routes for decentralized asset transactions.",
      "Smart contract state sync and backend validation for secure real-time token transactions.",
    ],
  },
  {
    name: "FireCo",
    tag: "Industrial IoT",
    line: "Fire alarm monitoring for desktop and mobile, live at industrial sites.",
    stack: ["Next.js", "Rust (Tauri)", "RS-485", "PLC"],
    details: [
      "Deployed at PT PLN UP2B DKI Jakarta & Banten, Baker Hughes and PT Surya Rengo Container.",
      "Reads raw telemetry straight from MCFA panels over RS-485.",
      "Custom parsing and real-time decryption to show live alarm status and system health.",
    ],
  },
];

export const more: Project[] = [
  { name: "HMIF-APP", tag: "Team Management System", line: "Organization platform: company profile, attendance, cash, letter and inventory records, and an event calendar.", stack: [] },
  { name: "Lentera-app", tag: "Learning Platform", line: "School platform for digital learning, course distribution and student analytics.", stack: ["Next.js", "NestJS", "MySQL"] },
  { name: "Artasaku", tag: "Expense Tracker", line: "Personal finance tool with charts, a transaction ledger and budget alerts.", stack: ["Next.js", "NestJS", "MySQL"] },
  { name: "Garmen", tag: "Supply Chain", line: "SCM for garment factories: raw material workflow, production logs, inventory.", stack: ["Laravel", "PHP", "MySQL", "Python"] },
  { name: "Inventory Control System", tag: "Web App", line: "Multi-factory system from raw stock to production, shipping and sales logs.", stack: ["Laravel", "PHP", "MySQL", "Node.js"] },
  { name: "DevOps Security Pipeline", tag: "DevOps, Security", line: "CI/CD with embedded security checks, containers and real-time data streaming.", stack: ["AWS", "Docker", "Kafka", "Linux"] },
];
