
import React, { useEffect, useRef, useState } from "react";
import {
  
  Mail,
  Circle,
  FileJson,
  FileCode,
  FileText,
  Folder,
  FolderOpen,
} from "lucide-react";

const TABS = [
  {
    id: "about",
    label: "about.js",
    icon: FileCode,
  },
  {
    id: "projects",
    label: "projects.js",
    icon: FileCode,
  },
  {
    id: "skills",
    label: "skills.json",
    icon: FileJson,
  },
  {
    id: "contact",
    label: "contact.md",
    icon: FileText,
  },
];

const PROJECTS = [
  {
    name: "EduGaon School of Technology",
    stack: ["React", "Tailwind CSS"],
    desc: "Full institute website — courses, mentors, campuses, admissions and a founder's-message section, built with a dark terminal-inspired UI.",
    tag: "web",
  },
  {
    name: "NextGen Learning Platform",
    stack: ["React", "Vite", "Tailwind"],
    desc: "Edutech frontend with auth, user + admin dashboards, course selection and a swappable API layer ready for an Express + MongoDB backend.",
    tag: "platform",
  },
  {
    name: "Edutech Admin Dashboard",
    stack: ["React", "Vite", "Recharts"],
    desc: "Dashboard integrated with an Express/MySQL backend — profile uploads, role-based access, and live charts for student data.",
    tag: "dashboard",
  },
  {
    name: "Realtime Chat App",
    stack: ["React", "Polling API"],
    desc: "WhatsApp-style messaging UI with shared state syncing, built as a lightweight real-time artifact.",
    tag: "app",
  },
];

const SKILLS = {
  frontend: [
    "React",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "HTML5 / CSS3",
  ],
  backend: ["Node.js", "Express"],
  database: ["MySQL", "MongoDB"],
  tools: ["Git", "Vite", "VS Code"],
};

function useTypewriter(text, speed = 45, startDelay = 400) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let index = 0;
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;

        setOutput(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return output;
}

function TrafficLights() {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
      <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
    </div>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  indent = 0,
  active = false,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 w-full text-left py-1.5 pr-2 rounded text-[13px] transition-colors ${
        active
          ? "bg-[#f7813a]/15 text-[#f7813a]"
          : "text-[#8b949e] hover:text-[#c9d1d9] hover:bg-white/[0.03]"
      }`}
      style={{
        paddingLeft: `${8 + indent * 14}px`,
      }}
    >
      <Icon size={14} strokeWidth={2} />
      <span>{label}</span>
    </button>
  );
}

function LineNo({ n }) {
  return (
    <span className="select-none inline-block w-8 text-right pr-4 text-[#4b5363] text-[13px]">
      {n}
    </span>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const typedText = useTypewriter(
    "Building fast, scalable web apps with React & Node.js...",
    40,
    600
  );

  const scrollToSection = (id) => {
    setActiveTab(id);

    const section = sectionRefs[id]?.current;

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0d1117] text-[#c9d1d9]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .font-body {
          font-family: 'Inter', sans-serif;
        }

        .font-mono-code {
          font-family: 'JetBrains Mono', monospace;
        }

        .cursor-blink::after {
          content: "";
          display: inline-block;
          width: 8px;
          height: 16px;
          background: #f7813a;
          margin-left: 3px;
          vertical-align: -2px;
          animation: blink 1s steps(1) infinite;
        }

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }

          50%,
          100% {
            opacity: 0;
          }
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #30363d;
          border-radius: 8px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="font-mono-code max-w-6xl mx-auto min-h-screen border-x border-[#21262d] flex flex-col">

        {/* ================= TITLE BAR ================= */}

        <header className="flex items-center justify-between px-4 py-3 border-b border-[#21262d] bg-[#0d1117]">
          <div className="flex items-center gap-4">
            <TrafficLights />

            <span className="text-[#8b949e] text-[12px] hidden sm:inline">
              mohammad-irfan-portfolio — vscode
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#6e7681]">
            <Circle
              size={8}
              className="fill-[#27c93f] text-[#27c93f]"
            />
            available for work
          </div>
        </header>

        {/* ================= TOP TABS ================= */}

        <nav className="flex overflow-x-auto border-b border-[#21262d] bg-[#0d1117] scrollbar-thin">
          {TABS.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => scrollToSection(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-[13px] border-r border-[#21262d] whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#161b22] text-[#f7813a] border-t-2 border-t-[#f7813a]"
                    : "text-[#6e7681] hover:text-[#c9d1d9] border-t-2 border-t-transparent"
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* ================= MAIN LAYOUT ================= */}

        <div className="flex flex-1 min-h-0">

          {/* ================= SIDEBAR ================= */}

          <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-[#21262d] bg-[#0d1117] py-3 px-2">

            <div className="flex items-center gap-1.5 text-[12px] text-[#8b949e] px-2 pb-2 tracking-wide">
              <FolderOpen size={14} />
              portfolio
            </div>

            <div className="flex flex-col gap-0.5">

              <SidebarItem
                icon={Folder}
                label="src"
                indent={0}
                active={false}
              />

              <SidebarItem
                icon={FileCode}
                label="about.js"
                indent={1}
                active={activeTab === "about"}
                onClick={() => scrollToSection("about")}
              />

              <SidebarItem
                icon={FileCode}
                label="projects.js"
                indent={1}
                active={activeTab === "projects"}
                onClick={() => scrollToSection("projects")}
              />

              <SidebarItem
                icon={FileJson}
                label="skills.json"
                indent={1}
                active={activeTab === "skills"}
                onClick={() => scrollToSection("skills")}
              />

              <SidebarItem
                icon={FileText}
                label="contact.md"
                indent={1}
                active={activeTab === "contact"}
                onClick={() => scrollToSection("contact")}
              />

            </div>

            <div className="mt-auto px-2 pt-4 text-[11px] text-[#4b5363] leading-relaxed">
              Bihar, India
              <br />
              Full Stack Developer
            </div>
          </aside>

          {/* ================= CONTENT ================= */}

          <main className="flex-1 min-w-0 overflow-y-auto scrollbar-thin bg-[#0d1117]">

            {/* ================= ABOUT ================= */}

            <section
              ref={sectionRefs.about}
              className="px-5 sm:px-10 py-12 sm:py-14 border-b border-[#161b22]"
            >
              <div className="flex flex-col sm:flex-row gap-10 items-start">

                {/* ABOUT CODE */}

                <div className="flex-1 min-w-0">

                  <div className="text-[13px] text-[#4b5363] mb-1">
                    <LineNo n={1} />

                    <span className="text-[#ff7b72]">
                      const
                    </span>{" "}

                    <span className="text-[#79c0ff]">
                      developer
                    </span>{" "}
                    = {"{"}
                  </div>

                  <div className="pl-8 text-[15px] sm:text-[17px] space-y-2">

                    <div className="break-words">
                      <LineNo n={2} />

                      <span className="text-[#7ee787]">
                        name
                      </span>
                      :{" "}

                      <span className="text-[#a5d6ff] font-body font-semibold text-2xl sm:text-3xl">
                        "Rahul Gandhi"
                      </span>
                      ,
                    </div>

                    <div>
                      <LineNo n={3} />

                      <span className="text-[#7ee787]">
                        role
                      </span>
                      :{" "}

                      <span className="text-[#a5d6ff] font-body">
                        "Full Stack Developer"
                      </span>
                      ,
                    </div>

                    <div>
                      <LineNo n={4} />

                      <span className="text-[#7ee787]">
                        based
                      </span>
                      :{" "}

                      <span className="text-[#a5d6ff]">
                        "Bihar, India"
                      </span>
                      ,
                    </div>

                  </div>

                  {/* BIO */}

                  <div className="pl-8 pt-5 font-body text-[14px] sm:text-[15px] text-[#8b949e] leading-relaxed max-w-xl">

                    <LineNo n={5} />

                    <span className="text-[#7ee787]">
                      bio
                    </span>
                    :{" "}

                    <span className="text-[#a5d6ff]">
                      "Building web products end-to-end — from React
                      interfaces to the APIs and databases behind them.
                      I like dark UIs, clean code and shipping things
                      that actually work."
                    </span>
                    ,
                  </div>

                  <div className="text-[13px] text-[#4b5363] mt-2">
                    <LineNo n={6} />
                    {"}"};
                  </div>

                  {/* SOCIAL LINKS */}

                  <div className="flex flex-wrap gap-3 pt-8 pl-8">

                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#30363d] text-[13px] text-[#c9d1d9] hover:border-[#f7813a] hover:text-[#f7813a] transition-colors font-body"
                    >
                     
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#30363d] text-[13px] text-[#c9d1d9] hover:border-[#f7813a] hover:text-[#f7813a] transition-colors font-body"
                    >
                     
                      LinkedIn
                    </a>

                    <a
                      href="mailto:hello@example.com"
                      className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#30363d] text-[13px] text-[#c9d1d9] hover:border-[#f7813a] hover:text-[#f7813a] transition-colors font-body"
                    >
                      <Mail size={15} />
                      Email
                    </a>

                  </div>
                </div>

                {/* ================= PROFILE IMAGE ================= */}

                <div className="shrink-0 mx-auto sm:mx-0">

                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-[#30363d] bg-[#161b22] hover:border-[#f7813a] transition-colors">

                    <img
                      src="/image.png"
                      alt="Rahul Gandhi"
                      className="w-full h-full object-cover"
                    />

                  </div>

                  <p className="text-[10px] text-[#4b5363] font-body text-center mt-2">
                    profile.jpg
                  </p>

                </div>

              </div>
            </section>

            {/* ================= PROJECTS ================= */}

            <section
              ref={sectionRefs.projects}
              className="px-5 sm:px-10 py-12 sm:py-14 border-b border-[#161b22]"
            >

              <div className="text-[13px] text-[#4b5363] mb-6">
                <LineNo n={1} />

                <span className="text-[#ff7b72]">
                  export const
                </span>{" "}

                <span className="text-[#79c0ff]">
                  projects
                </span>{" "}
                = [
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pl-4">

                {PROJECTS.map((project, index) => (
                  <article
                    key={project.name}
                    className="border border-[#21262d] rounded-lg p-5 bg-[#0f141a] hover:border-[#f7813a]/40 transition-colors"
                  >

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-[10px] uppercase tracking-wider font-body text-[#f7813a]/80 bg-[#f7813a]/10 px-2 py-0.5 rounded">
                        {project.tag}
                      </span>

                      <span className="text-[11px] text-[#4b5363]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    <h3 className="font-body font-semibold text-[16px] text-[#e6edf3] mb-2">
                      {project.name}
                    </h3>

                    <p className="font-body text-[13px] text-[#8b949e] leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">

                      {project.stack.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-body text-[#7ee787] bg-[#7ee787]/10 px-2 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </article>
                ))}

              </div>

              <div className="text-[13px] text-[#4b5363] mt-6">
                ];
              </div>

            </section>

            {/* ================= SKILLS ================= */}

            <section
              ref={sectionRefs.skills}
              className="px-5 sm:px-10 py-12 sm:py-14 border-b border-[#161b22]"
            >

              <div className="text-[13px] text-[#4b5363] mb-4">
                {"{"}
              </div>

              <div className="pl-6 space-y-6">

                {Object.entries(SKILLS).map(([category, skills]) => (
                  <div key={category}>

                    <div className="text-[13px] mb-2">
                      <span className="text-[#7ee787]">
                        "{category}"
                      </span>
                      : [
                    </div>

                    <div className="pl-6 flex flex-wrap gap-2">

                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-body text-[13px] text-[#c9d1d9] border border-[#30363d] rounded-md px-3 py-1.5 hover:border-[#f7813a] hover:text-[#f7813a] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                    <div className="text-[13px] text-[#4b5363] mt-1">
                      ],
                    </div>

                  </div>
                ))}

              </div>

              <div className="text-[13px] text-[#4b5363] mt-4">
                {"}"}
              </div>

            </section>

            {/* ================= CONTACT ================= */}

            <section
              ref={sectionRefs.contact}
              className="px-5 sm:px-10 py-12 sm:py-14"
            >

              <h2 className="font-body font-semibold text-2xl text-[#e6edf3] mb-2">
                # Let's build something
              </h2>

              <p className="font-body text-[14px] text-[#8b949e] mb-6 max-w-md leading-relaxed">
                Open to freelance work, collabs and full-time roles.
                Drop a message — I usually reply within a day.
              </p>

              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 font-body text-[14px] px-5 py-3 rounded-md bg-[#f7813a] text-[#0d1117] font-semibold hover:bg-[#ff9a5c] transition-colors"
              >
                <Mail size={16} />
                Send a message
              </a>

            </section>

            {/* ================= TERMINAL FOOTER ================= */}

            <footer className="border-t border-[#21262d] bg-[#0a0d12] px-5 sm:px-10 py-4">

              <div className="text-[13px] text-[#4b5363] overflow-x-auto whitespace-nowrap">

                <span className="text-[#7ee787]">
                  irfan@portfolio
                </span>

                <span className="text-[#6e7681]">
                  :
                </span>

                <span className="text-[#79c0ff]">
                  ~
                </span>

                <span className="text-[#6e7681]">
                  $ 
                </span>

                <span className="text-[#c9d1d9]">
                  {typedText}
                </span>

                <span className="cursor-blink" />

              </div>

            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}

