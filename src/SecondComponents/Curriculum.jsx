import { useState } from "react";
import {
  GraduationCap,
  Rocket,
  Trophy,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import CurriculumContent from "./CurriculumContent";

const tabs = [
  {
    id: "foundation",
    title: "Foundation",
    icon: GraduationCap,
  },
  {
    id: "build",
    title: "Build",
    icon: Rocket,
  },
  {
    id: "achieve",
    title: "Achieve",
    icon: Trophy,
  },
  {
    id: "innovate",
    title: "Innovate",
    icon: Sparkles,
  },
];

function Curriculum() {
  const [activeTab, setActiveTab] = useState("build");

  return (
    <section
      id="curriculum"
      className="relative overflow-hidden bg-[#f8faff] py-20"
    >
      {/* Background Dots */}
      <div className="absolute left-0 top-20 h-32 w-32 opacity-40">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-[#9bb4d8]"
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==============================
            SECTION HEADING
        ============================== */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1458bd]">
            The learning journey
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#10294f] sm:text-4xl lg:text-5xl">
            Industry First.
            <span className="text-[#1458bd]">
              {" "}
              Advanced Curriculum
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            A structured and technology-enabled curriculum designed
            to help students learn, build, achieve and innovate.
          </p>

        </div>

        {/* ==============================
            MAIN CURRICULUM
        ============================== */}

        <div className="mt-12 grid gap-6 lg:grid-cols-[220px_1fr]">

          {/* ==============================
              LEFT SIDEBAR
          ============================== */}

          <aside className="flex gap-3 overflow-x-auto pb-2 lg:block lg:space-y-3 lg:overflow-visible">

            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    group
                    flex
                    min-w-[170px]
                    items-center
                    gap-3
                    rounded-xl
                    border
                    p-4
                    text-left
                    transition-all
                    duration-300
                    lg:w-full

                    ${
                      active
                        ? "border-[#8eace0] bg-white shadow-md"
                        : "border-transparent bg-white hover:border-[#d8e3f2] hover:shadow-sm"
                    }
                  `}
                >

                  {/* Icon */}

                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      transition

                      ${
                        active
                          ? "bg-[#eaf2ff] text-[#1458bd]"
                          : "bg-[#f1f4f8] text-gray-500"
                      }
                    `}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Text */}

                  <div className="flex-1">

                    <p
                      className={`
                        text-sm
                        font-bold

                        ${
                          active
                            ? "text-[#123c73]"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {tab.title}
                    </p>

                    <p className="mt-1 text-[10px] text-gray-400">
                      Learning stage
                    </p>

                  </div>

                  {/* Arrow */}

                  {active && (
                    <ChevronRight
                      size={16}
                      className="text-[#1458bd]"
                    />
                  )}

                </button>
              );
            })}

          </aside>

          {/* ==============================
              RIGHT CONTENT
          ============================== */}

          <div className="min-w-0">

            <div
              className="
                rounded-2xl
                border
                border-[#dbe6f5]
                bg-white
                p-5
                shadow-[0_15px_40px_rgba(31,61,105,.08)]
                sm:p-7
              "
            >

              <CurriculumContent
                activeTab={activeTab}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Curriculum;