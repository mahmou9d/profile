import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../Title/Title";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiGit,
  SiRedux,
  SiJavascript,
  SiLinux,
  SiFigma,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import {
  FiFolder,
  FiFile,
  FiChevronRight,
  FiChevronDown,
  FiInfo,
} from "react-icons/fi";
import "./Skills.css";

type SkillFile = {
  name: string;
  size: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
  code: string;
};

type Folder = {
  name: string;
  files: SkillFile[];
};

const EXPLORER_DATA: Folder[] = [
  {
    name: "frontend",
    files: [
      {
        name: "React.tsx",
        size: "4.2 KB",
        icon: SiReact,
        color: "#61dafb",
        code: `// React Functional Component
import React, { useState } from 'react';

export const InteractiveUI: React.FC = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="flex items-center gap-2">
      <span>React state management & virtual DOM optimization</span>
      <button onClick={() => setActive(!active)}>Toggle state</button>
    </div>
  );
};`,
      },
      {
        name: "Next.js",
        size: "5.8 KB",
        icon: SiNextdotjs,
        color: "#ffffff",
        code: `// Next.js App Router Page
import { Suspense } from 'react';
import { fetchServerData } from '@/lib/api';

export default async function Page() {
  const data = await fetchServerData();
  return (
    <main>
      <h1>Server-Side Rendered (SSR) Dashboard</h1>
      <Suspense fallback={<p>Optimizing load performance...</p>}>
        <DataList items={data} />
      </Suspense>
    </main>
  );
}`,
      },
      {
        name: "TypeScript.ts",
        size: "3.1 KB",
        icon: SiTypescript,
        color: "#3178c6",
        code: `// Strong-typed state configuration
export interface ServerResponse<T> {
  data: T;
  status: 200 | 400 | 500;
  message: string;
}

export type UserRole = 'admin' | 'developer' | 'guest';

export function configureSession(role: UserRole): boolean {
  return role === 'developer';
}`,
      },
      {
        name: "ReduxToolkit.ts",
        size: "4.6 KB",
        icon: SiRedux,
        color: "#764abc",
        code: `// Global state slice configuration
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    }
  }
});`,
      },
      {
        name: "Tailwind.css",
        size: "2.5 KB",
        icon: SiTailwindcss,
        color: "#38bdf8",
        code: `/* Tailwind configuration utility classes */
@layer base {
  body {
    @apply bg-slate-950 text-slate-100 antialiased;
  }
}

.custom-card {
  @apply backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl;
}`,
      },
    ],
  },
  {
    name: "backend",
    files: [
      {
        name: "Node.js",
        size: "6.1 KB",
        icon: SiNodedotjs,
        color: "#68a063",
        code: `// Node asynchronous stream control
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  const src = fs.createReadStream('./data.json');
  src.pipe(res);
});

server.listen(8080);`,
      },
      {
        name: "Express.ts",
        size: "4.8 KB",
        icon: "/images/expressdotjs.svg",
        color: "#ffffff",
        code: `// Express REST API controller middleware
import express, { Request, Response } from 'express';
const app = express();

app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'healthy', 
    uptime: process.uptime() 
  });
});`,
      },
    ],
  },
  {
    name: "database",
    files: [
      {
        name: "MongoDB.json",
        size: "3.4 KB",
        icon: SiMongodb,
        color: "#47a248",
        code: `// MongoDB document collection definition
{
  "_id": "65e6fc85ab651d2f099719ea",
  "username": "mahmou9d",
  "skills": ["react", "nextjs", "nodejs", "docker"],
  "metrics": {
    "activeProjects": 8,
    "commits": 1240
  }
}`,
      },
    ],
  },
  {
    name: "devops",
    files: [
      {
        name: "Docker.dockerfile",
        size: "2.1 KB",
        icon: SiDocker,
        color: "#2496ed",
        code: `# Dockerfile multi-stage production build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80`,
      },
      {
        name: "Git.gitconfig",
        size: "1.2 KB",
        icon: SiGit,
        color: "#f05032",
        code: `# Git user configurations
[user]
	name = Mahmoud Mohamed
	email = mahmoud.mohamed@example.com
[alias]
	co = checkout
	br = branch
	ci = commit
	st = status`,
      },
    ],
  },
];

type TechItem = {
  name: string;
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
};

const TECH_STACK: TechItem[] = [
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Redux", Icon: SiRedux, color: "#764abc" },
  { name: "HTML5", Icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: SiCss3, color: "#1572b6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68a063" },
  { name: "Express", Icon: "/images/expressdotjs.svg", color: "#ffffff" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Docker", Icon: SiDocker, color: "#2496ed" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "Figma", Icon: SiFigma, color: "#f24e1e" },
];

const DOUBLED = [...TECH_STACK, ...TECH_STACK];
const DOUBLED_REV = [...TECH_STACK].reverse().concat([...TECH_STACK].reverse());

const TechPill = memo(({ item }: { item: TechItem }) => (
  <div className="tech-pill">
    <item.Icon className="tech-pill-icon" style={{ color: item.color }} />
    <span className="tech-pill-name">{item.name}</span>
  </div>
));
TechPill.displayName = "TechPill";

const Skills = () => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    frontend: true,
    backend: true,
    database: false,
    devops: false,
  });
  const [selectedFile, setSelectedFile] = useState<SkillFile>(
    EXPLORER_DATA[0].files[0],
  );

  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const SelectedFileIcon = selectedFile.icon;

  return (
    <section id="skills" className="skills-section">
      {/* Title */}
      <Title
        className="skills-title-wrapper"
        titleClassName="skills-heading"
        accentClassName="skills-heading-accent"
        subtitleClassName="skills-desc"
        title="Technical"
        accentText="Explorer"
        subtitle="Browse through my technology stack file-by-file to see real implementations."
        tag="h2"
        animate={true}
        titleDelay={0.07}
        subtitleDelay={0.13}
      />

      {/* Dual counter-scrolling marquee */}
      <div className="marquee-container" style={{ marginBottom: "1.5rem" }}>
        <div className="marquee-wrapper">
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />
          <div className="marquee-track">
            {DOUBLED.map((item, i) => (
              <TechPill key={i} item={item} />
            ))}
          </div>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />
          <div className="marquee-track marquee-track-reverse">
            {DOUBLED_REV.map((item, i) => (
              <TechPill key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="skills-bento-grid">
        {/* Card 1: Interactive File Explorer (Spans 2 columns) */}
        <div className="explorer-card">
          <div className="explorer-window">
            {/* Header bar */}
            <div className="explorer-header">
              <div className="explorer-buttons">
                <span className="exp-btn close"></span>
                <span className="exp-btn minimize"></span>
                <span className="exp-btn maximize"></span>
              </div>
              <span className="explorer-title">workspace - mahmoud-stack</span>
            </div>

            {/* Main Window Splitter */}
            <div className="explorer-body">
              {/* Sidebar */}
              <div className="explorer-sidebar">
                <div className="sidebar-section-title">EXPLORER</div>
                <div className="folders-list">
                  {EXPLORER_DATA.map((folder) => (
                    <div key={folder.name} className="folder-item-wrapper">
                      {/* Folder Name */}
                      <button
                        onClick={() => toggleFolder(folder.name)}
                        className={`folder-row ${openFolders[folder.name] ? "open" : ""}`}
                      >
                        {openFolders[folder.name] ? (
                          <FiChevronDown size={14} />
                        ) : (
                          <FiChevronRight size={14} />
                        )}
                        <FiFolder size={14} className="folder-icon" />
                        <span className="folder-name-text">{folder.name}</span>
                      </button>

                      {/* Folder Files */}
                      <AnimatePresence initial={false}>
                        {openFolders[folder.name] && (
                          <motion.div
                            className="files-list"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {folder.files.map((file) => (
                              <button
                                key={file.name}
                                onClick={() => setSelectedFile(file)}
                                className={`file-row ${selectedFile.name === file.name ? "active" : ""}`}
                              >
                                <FiFile
                                  className="file-type-icon"
                                  style={{ color: file.color }}
                                />
                                <span className="file-name-text">
                                  {file.name}
                                </span>
                                <span className="file-size-tag">
                                  {file.size}
                                </span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editor Workspace */}
              <div className="explorer-editor">
                {/* Tabs bar */}
                <div className="editor-tabs">
                  <div className="active-tab">
                    {SelectedFileIcon && (
                      <SelectedFileIcon
                        className="tab-icon"
                        style={{ color: selectedFile.color }}
                      />
                    )}
                    <span className="tab-name">{selectedFile.name}</span>
                  </div>
                </div>

                {/* Editor Content */}
                <div className="editor-content">
                  <pre>
                    <code>
                      {selectedFile.code.split("\n").map((line, idx) => (
                        <div key={idx} className="editor-line">
                          <span className="editor-line-number">{idx + 1}</span>
                          <span className="editor-line-text">{line}</span>
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Right stacked sidebar info cards */}
        <div className="info-cards-stack">
          {/* Subcard 2: Tools & Utilities */}
          <div className="skills-subcard tools-card">
            <h3>Design & Workflow Tools</h3>
            <div className="tools-grid">
              <div className="tool-item">
                <SiGit className="tool-icon" style={{ color: "#f05032" }} />
                <span>Git</span>
              </div>
              <div className="tool-item">
                <SiFigma className="tool-icon" style={{ color: "#f24e1e" }} />
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
