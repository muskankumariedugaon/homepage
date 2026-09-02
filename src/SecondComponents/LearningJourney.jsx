import {
  CheckCircle2,
  Target,
  TrendingUp,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const journeyCards = [
  {
    number: "01",
    title: "Learn",
    description:
      "Understand concepts with structured lessons, expert guidance and interactive learning.",
    icon: CheckCircle2,
  },
  {
    number: "02",
    title: "Build",
    description:
      "Apply your knowledge through practice, projects and technology-enabled activities.",
    icon: Target,
  },
  {
    number: "03",
    title: "Achieve",
    description:
      "Measure your performance, identify gaps and continuously improve your results.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Innovate",
    description:
      "Develop creative thinking and future-ready skills to solve real-world problems.",
    icon: Lightbulb,
  },
];

function LearningJourney() {
  return (
    <section
      id="learning-journey"
      className="relative overflow-hidden bg-white py-20"
    >
      {/* Background */}

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#edf4ff] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1458bd]">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#10294f] sm:text-4xl lg:text-5xl">
            From Learning
            <span className="text-[#1458bd]">
              {" "}to Achievement
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            A complete learning journey designed to help students
            continuously learn, practice, improve and achieve.
          </p>

        </div>

        {/* Cards */}

        <div className="relative mt-14">

          {/* Connecting line */}

          <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-[#d8e5f5] lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {journeyCards.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    rounded-2xl
                    border
                    border-[#e2e9f3]
                    bg-white
                    p-6
                    transition-all
                    duration-300

                    hover:-translate-y-2
                    hover:border-[#b7cff1]
                    hover:shadow-[0_20px_45px_rgba(20,88,189,.10)]
                  "
                >

                  {/* Number / Icon */}

                  <div className="relative z-10 flex items-center justify-between">

                    <div className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#edf4ff]
                      text-[#1458bd]
                      transition
                      group-hover:bg-[#1458bd]
                      group-hover:text-white
                    ">
                      <Icon size={21} />
                    </div>

                    <span className="text-3xl font-black text-[#edf2f8]">
                      {item.number}
                    </span>

                  </div>

                  {/* Content */}

                  <h3 className="mt-6 text-lg font-black text-[#16345c]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-gray-500">
                    {item.description}
                  </p>

                  <button
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-1
                      text-[10px]
                      font-bold
                      text-[#1458bd]
                    "
                  >
                    Explore
                    <ArrowRight
                      size={13}
                      className="transition group-hover:translate-x-1"
                    />
                  </button>

                </div>
              );

            })}

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-10 rounded-2xl bg-[#10294f] p-6 sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8eb8f4]">
                Your journey starts here
              </p>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Learn. Build. Achieve. Innovate.
              </h3>

              <p className="mt-2 max-w-xl text-xs leading-5 text-white/60">
                Follow a structured learning journey designed
                around your goals and progress.
              </p>

            </div>

            <button
              onClick={() => {
                document
                  .getElementById("curriculum")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-white
                px-5
                py-3
                text-xs
                font-bold
                text-[#10294f]
                transition
                hover:bg-[#edf4ff]
              "
            >
              Explore Curriculum
              <ArrowRight size={15} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LearningJourney;