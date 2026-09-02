import React from "react";
import {  Mail, Camera } from "lucide-react";

const PROJECTS = [
  {
    name: "EduGaon School of Technology",
    stack: "React, Tailwind CSS",
    desc: "Institute website with courses, mentors, campuses and admissions pages.",
  },
  {
    name: "NextGen Learning Platform",
    stack: "React, Vite, Tailwind",
    desc: "Edutech frontend with auth, user and admin dashboards, course selection.",
  },
  {
    name: "Edutech Admin Dashboard",
    stack: "React, Recharts",
    desc: "Dashboard with profile uploads, role-based access and live charts.",
  },
  {
    name: "Realtime Chat App",
    stack: "React",
    desc: "WhatsApp-style messaging UI with real-time state syncing.",
  },
];

const SKILLS = ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MySQL", "MongoDB", "Git"];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-200 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-16">
          <div className="w-28 h-28 rounded-full border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-gray-500 shrink-0">
            <Camera size={22} strokeWidth={1.5} />
            <span className="text-[10px] mt-1 text-center px-2">your photo</span>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-white mb-1">Mohammad Irfan</h1>
            <p className="text-orange-400 font-medium mb-3">Full Stack Developer</p>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              I build web apps end-to-end — from React interfaces to the APIs and databases behind them. Based in Bihar, India.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start mt-4">
              <a href="#" className="p-2 rounded-md border border-gray-700 hover:border-orange-400 hover:text-orange-400 transition-colors">
               
              </a>
              <a href="#" className="p-2 rounded-md border border-gray-700 hover:border-orange-400 hover:text-orange-400 transition-colors">
               
              </a>
              <a href="#" className="p-2 rounded-md border border-gray-700 hover:border-orange-400 hover:text-orange-400 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </header>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6">Projects</h2>
          <div className="space-y-4">
            {PROJECTS.map((p) => (
              <div key={p.name} className="border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-medium text-white">{p.name}</h3>
                  <span className="text-xs text-orange-400">{p.stack}</span>
                </div>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span key={s} className="text-sm border border-gray-700 rounded-full px-4 py-1.5 text-gray-300">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Let's build something</h2>
          <p className="text-gray-400 text-sm mb-5">Open to freelance work and full-time roles.</p>
          <a
            href="mailto:hello@example.com"
            className="inline-block bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-orange-400 transition-colors"
          >
            Send a message
          </a>
        </section>
      </div>
    </div>
  );
}