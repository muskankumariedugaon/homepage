import { useState } from "react";

import {
  BookOpen,
  Globe2,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Smartphone,
  Brain,
  Settings2,
  ChevronRight,
  Database,
  Users,
  Target,
} from "lucide-react";


/* =========================================================
   CURRICULUM DATA
========================================================= */

const contentData = {

  foundation: {
    title: "Foundation",

    subtitle:
      "Build a strong academic foundation",

    description:
      "Master the fundamentals with structured learning, expert guidance and consistent practice.",

    topics: [
      "Concept Clarity",
      "Core Subjects",
      "Daily Practice",
      "Mentor Support",
    ],

    cards: [
      {
        title: "Strong Fundamentals",
        description:
          "Build strong fundamentals with easy-to-understand concepts and structured lessons.",
        icon: Brain,
      },

      {
        title: "Daily Practice",
        description:
          "Regular practice helps students improve accuracy, speed and confidence.",
        icon: BookOpen,
      },

      {
        title: "Personal Guidance",
        description:
          "Get continuous support from experienced mentors throughout the learning journey.",
        icon: Users,
      },
    ],
  },


  build: {
    title: "Build",

    subtitle:
      "Build skills for the future",

    description:
      "Develop practical knowledge through technology-enabled learning and expert mentorship.",

    topics: [
      "Live Classes",
      "Practice Tests",
      "Performance Analytics",
      "Revision",
    ],

    cards: [
      {
        title: "What you learn",
        description:
          "Learn concepts through structured classes, practical examples and interactive sessions.",
        icon: Brain,
      },

      {
        title: "Build your skills",
        description:
          "Apply your knowledge through projects, assignments and regular assessments.",
        icon: Code2,
      },

      {
        title: "Track your progress",
        description:
          "Monitor your performance and understand exactly where you need improvement.",
        icon: BarChart3,
      },
    ],
  },


  achieve: {
    title: "Achieve",

    subtitle:
      "Turn preparation into results",

    description:
      "Use smart revision, assessments and personalised learning plans to achieve your goals.",

    topics: [
      "Smart Revision",
      "Subject Tests",
      "Progress Reports",
      "Personalised Plans",
    ],

    cards: [
      {
        title: "Focused Revision",
        description:
          "Revise important concepts with a focused and structured revision system.",
        icon: BookOpen,
      },

      {
        title: "Detailed Analysis",
        description:
          "Get detailed performance analysis after every important assessment.",
        icon: BarChart3,
      },

      {
        title: "Improvement Plan",
        description:
          "Identify weak areas and follow a personalised plan to improve your performance.",
        icon: Target,
      },
    ],
  },


  innovate: {
    title: "Innovate",

    subtitle:
      "Prepare for tomorrow",

    description:
      "Explore modern technology, problem solving and future-ready skills.",

    topics: [
      "Projects",
      "Problem Solving",
      "Technology",
      "Career Skills",
    ],

    cards: [
      {
        title: "Modern Learning",
        description:
          "Experience technology-enabled learning designed for today's students.",
        icon: Smartphone,
      },

      {
        title: "Complex Problem Solving",
        description:
          "Learn how to approach complex problems with logical and practical thinking.",
        icon: Brain,
      },

      {
        title: "Future Ready",
        description:
          "Develop skills that prepare you for higher education and future careers.",
        icon: BriefcaseBusiness,
      },
    ],
  },

};


/* =========================================================
   INNER TABS
========================================================= */

const innerTabs = [
  "What you learn",
  "How you learn",
  "Why it matters",
  "Projects",
];


/* =========================================================
   OUTCOMES
========================================================= */

const outcomes = [
  {
    title: "Web Development",
    icon: Globe2,
  },

  {
    title: "Programming",
    icon: Code2,
  },

  {
    title: "Data Analytics",
    icon: BarChart3,
  },

  {
    title: "Career Skills",
    icon: BriefcaseBusiness,
  },

  {
    title: "Digital Skills",
    icon: Smartphone,
  },

  {
    title: "Database",
    icon: Database,
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function CurriculumContent({ activeTab }) {

  const [innerTab, setInnerTab] =
    useState("What you learn");

  const [selected, setSelected] =
    useState(null);


  const data =
    contentData[activeTab];


  return (
    <>
      {/* =====================================================
          INNER TABS
      ===================================================== */}

      <div className="mb-6 overflow-x-auto">

        <div className="flex min-w-max gap-2 rounded-xl bg-[#f5f8fc] p-1">

          {innerTabs.map((tab) => {

            const active =
              innerTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setInnerTab(tab)}
                className={`
                  rounded-lg
                  px-4
                  py-2.5
                  text-[10px]
                  font-bold
                  transition

                  sm:px-5
                  sm:text-xs

                  ${
                    active
                      ? "bg-white text-[#1458bd] shadow-sm"
                      : "text-gray-500 hover:text-[#1458bd]"
                  }
                `}
              >
                {tab}
              </button>
            );

          })}

        </div>

      </div>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mb-6">

        <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-start sm:justify-between">

          <div>

            <div className="flex flex-wrap items-center gap-2">

              <span className="rounded-full bg-[#edf4ff] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#1458bd]">
                {data.title}
              </span>

              <span className="text-[9px] font-semibold text-gray-400">
                Learning stage
              </span>

            </div>


            <h3 className="mt-3 text-2xl font-black text-[#10294f] sm:text-3xl">
              {data.subtitle}
            </h3>


            <p className="mt-2 max-w-2xl text-xs leading-5 text-gray-500 sm:text-sm">
              {data.description}
            </p>

          </div>


          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf4ff] text-[#1458bd]">
            <BookOpen size={20} />
          </div>

        </div>

      </div>


      {/* =====================================================
          INNER TAB DESCRIPTION
      ===================================================== */}

      <div className="mb-6 rounded-xl border border-[#e4ebf5] bg-[#f8fbff] p-4">

        <div className="flex items-start gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1458bd] shadow-sm">
            <BookOpen size={17} />
          </div>


          <div>

            <h4 className="text-xs font-extrabold text-[#16345c] sm:text-sm">
              {innerTab}
            </h4>


            <p className="mt-1 text-[10px] leading-5 text-gray-500 sm:text-xs">

              {innerTab === "What you learn" &&
                `Understand the concepts and skills covered in the ${data.title} stage.`}

              {innerTab === "How you learn" &&
                "Learn through expert-led classes, practical activities, assessments and continuous support."}

              {innerTab === "Why it matters" &&
                "Connect classroom learning with practical skills and future academic and career opportunities."}

              {innerTab === "Projects" &&
                "Apply your knowledge by working on practical projects and real-world problems."}

            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          TOPICS
      ===================================================== */}

      <div className="mb-7">

        <p className="mb-3 text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">
          Included in this stage
        </p>


        <div className="flex flex-wrap gap-2">

          {data.topics.map((topic) => (

            <button
              key={topic}
              onClick={() =>
                setSelected({
                  title: topic,
                  description:
                    `${topic} is included in the ${data.title} learning stage.`,
                })
              }
              className="
                rounded-full
                border
                border-[#dbe5f2]
                bg-[#f8fbff]
                px-3
                py-2
                text-[9px]
                font-bold
                text-gray-600
                transition
                hover:border-[#a9c5ed]
                hover:bg-white
              "
            >
              {topic}
            </button>

          ))}

        </div>

      </div>


      {/* =====================================================
          CARDS
      ===================================================== */}

      <div>

        <div className="mb-3 flex items-center justify-between">

          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">
            Key components
          </p>

          <span className="text-[9px] font-semibold text-gray-400">
            {data.cards.length} areas
          </span>

        </div>


        <div className="grid gap-3 md:grid-cols-3">

          {data.cards.map((card) => {

            const Icon = card.icon;

            return (

              <button
                key={card.title}
                onClick={() =>
                  setSelected({
                    title: card.title,
                    description: card.description,
                  })
                }
                className="
                  group
                  rounded-xl
                  border
                  border-[#e2e9f3]
                  bg-white
                  p-4
                  text-left
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#b9cff0]
                  hover:shadow-[0_15px_35px_rgba(20,88,189,.10)]
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#eef5ff]
                    text-[#1458bd]
                    transition

                    group-hover:bg-[#1458bd]
                    group-hover:text-white
                  "
                >
                  <Icon size={18} />
                </div>


                <h4 className="mt-4 text-xs font-extrabold text-[#16345c] sm:text-sm">
                  {card.title}
                </h4>


                <p className="mt-2 text-[9px] leading-5 text-gray-500 sm:text-[10px]">
                  {card.description}
                </p>


                <span className="mt-4 inline-flex items-center gap-1 text-[9px] font-bold text-[#1458bd]">
                  Explore
                  <ChevronRight size={12} />
                </span>

              </button>

            );

          })}

        </div>

      </div>


      {/* =====================================================
          OUTCOMES
      ===================================================== */}

      <div className="mt-8">

        <p className="mb-3 text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">
          What you can explore
        </p>


        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">

          {outcomes.map((item) => {

            const Icon = item.icon;

            return (

              <button
                key={item.title}
                onClick={() =>
                  setSelected({
                    title: item.title,
                    description:
                      `${item.title} is part of the ${data.title} learning journey.`,
                  })
                }
                className="
                  group
                  rounded-lg
                  border
                  border-[#e5ebf4]
                  bg-white
                  p-3
                  text-center
                  transition

                  hover:border-[#aac5ed]
                  hover:bg-[#f7faff]
                  hover:shadow-sm
                "
              >

                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#f0f5fc] text-[#1458bd] transition group-hover:bg-[#e5efff]">

                  <Icon size={15} />

                </div>


                <p className="mt-2 text-[9px] font-bold text-[#17365f]">
                  {item.title}
                </p>

              </button>

            );

          })}

        </div>

      </div>


      {/* =====================================================
          LEARNING PROCESS
      ===================================================== */}

      <div className="mt-8">

        <p className="mb-3 text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">
          Learning process
        </p>


        <div className="grid gap-3 sm:grid-cols-4">

          {[
            ["01", "Learn", "Understand concepts"],
            ["02", "Practice", "Apply your knowledge"],
            ["03", "Evaluate", "Measure your progress"],
            ["04", "Improve", "Work on weak areas"],
          ].map(([number, title, text]) => (

            <button
              key={number}
              onClick={() =>
                setSelected({
                  title,
                  description: text,
                })
              }
              className="
                rounded-xl
                border
                border-[#e3eaf4]
                bg-[#fbfcff]
                p-4
                text-left
                transition
                hover:border-[#aac5ed]
                hover:bg-white
                hover:shadow-sm
              "
            >

              <span className="text-[9px] font-black text-[#1458bd]">
                {number}
              </span>


              <h4 className="mt-2 text-xs font-extrabold text-[#16365f]">
                {title}
              </h4>


              <p className="mt-1 text-[9px] text-gray-400">
                {text}
              </p>

            </button>

          ))}

        </div>

      </div>


      {/* =====================================================
          MODAL
      ===================================================== */}

      {selected && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-[#03132d]/70
            p-4
            backdrop-blur-sm
          "
          onClick={() => setSelected(null)}
        >

          <div
            onClick={(event) =>
              event.stopPropagation()
            }
            className="
              w-full
              max-w-md
              rounded-2xl
              bg-white
              p-6
              shadow-2xl
            "
          >

            <div className="flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4ff] text-[#1458bd]">
                <Settings2 size={20} />
              </div>


              <button
                onClick={() => setSelected(null)}
                className="text-2xl leading-none text-gray-400 hover:text-gray-700"
              >
                ×
              </button>

            </div>


            <h3 className="mt-5 text-xl font-black text-[#10294f]">
              {selected.title}
            </h3>


            <p className="mt-3 text-sm leading-6 text-gray-500">
              {selected.description}
            </p>


            <button
              onClick={() => setSelected(null)}
              className="
                mt-6
                w-full
                rounded-lg
                bg-[#1458bd]
                py-3
                text-xs
                font-bold
                text-white
                transition
                hover:bg-[#0c459d]
              "
            >
              Continue
            </button>

          </div>

        </div>

      )}

    </>
  );
}

export default CurriculumContent;