import {
  GraduationCap,
  Rocket,
  Trophy,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const curriculumTabs = [
  {
    id: "foundation",
    title: "Foundation",
    subtitle: "Build strong basics",
    icon: GraduationCap,
  },
  {
    id: "build",
    title: "Build",
    subtitle: "Develop practical skills",
    icon: Rocket,
  },
  {
    id: "achieve",
    title: "Achieve",
    subtitle: "Turn skills into results",
    icon: Trophy,
  },
  {
    id: "innovate",
    title: "Innovate",
    subtitle: "Create what's next",
    icon: Sparkles,
  },
];

function CurriculumTabs({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="w-full">

      {/* Desktop + Mobile Tabs */}

      <div
        className="
          flex
          gap-3
          overflow-x-auto
          pb-2

          lg:block
          lg:space-y-3
          lg:overflow-visible
          lg:pb-0
        "
      >

        {curriculumTabs.map((tab) => {

          const Icon = tab.icon;

          const isActive =
            activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id)
              }
              className={`
                group
                relative
                flex
                min-w-[190px]
                items-center
                gap-3
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                duration-300

                lg:min-w-0
                lg:w-full

                ${
                  isActive
                    ? `
                      border-[#9bb9e4]
                      bg-white
                      shadow-[0_12px_30px_rgba(20,88,189,.10)]
                    `
                    : `
                      border-transparent
                      bg-white
                      hover:border-[#d8e3f2]
                      hover:shadow-md
                    `
                }
              `}
            >

              {/* Active Indicator */}

              {isActive && (
                <span
                  className="
                    absolute
                    bottom-3
                    left-0
                    top-3
                    w-1
                    rounded-r-full
                    bg-[#1458bd]
                  "
                />
              )}


              {/* Icon */}

              <div
                className={`
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-[#eaf2ff]
                        text-[#1458bd]
                      `
                      : `
                        bg-[#f2f5f9]
                        text-gray-500
                        group-hover:bg-[#edf4ff]
                        group-hover:text-[#1458bd]
                      `
                  }
                `}
              >
                <Icon size={19} />
              </div>


              {/* Text */}

              <div className="min-w-0 flex-1">

                <h3
                  className={`
                    truncate
                    text-sm
                    font-extrabold

                    ${
                      isActive
                        ? "text-[#123c73]"
                        : "text-gray-600"
                    }
                  `}
                >
                  {tab.title}
                </h3>

                <p className="mt-1 truncate text-[9px] text-gray-400">
                  {tab.subtitle}
                </p>

              </div>


              {/* Arrow */}

              <ChevronRight
                size={16}
                className={`
                  shrink-0
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "translate-x-0 text-[#1458bd] opacity-100"
                      : "-translate-x-1 text-gray-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }
                `}
              />

            </button>
          );
        })}

      </div>

    </div>
  );
}

export default CurriculumTabs;