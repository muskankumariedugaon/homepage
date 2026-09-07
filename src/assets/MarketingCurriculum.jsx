import { Check } from "lucide-react";

const modules = [
  {
    no: "01",
    title: "Conversion Engine & Funnels",
    text:
      "Learn why conversion principles, high-quality custom landing pages, and structured retargeting sales flow.",
    points: [
      "Landing UX & Layout",
      "Web Psychology",
      "A/B Testing Rigor",
    ],
  },

  {
    no: "02",
    title: "Paid Acquisition (Meta & Google)",
    text:
      "Structure scalable media buying frameworks, develop creative testing systems, and master custom algorithms.",
    points: [
      "Targeting & Creative",
      "Bidding Architecture",
      "Pixel & API Setup",
    ],
  },

  {
    no: "03",
    title: "Search Engine Optimization",
    text:
      "Implement professional technical, on-page, and high-quality backlink pipelines that amplify major search engines.",
    points: [
      "Technical Auditing",
      "Semantic Clustering",
      "Backlink Outreach",
    ],
  },

  {
    no: "04",
    title: "Lifecycle & Email Marketing",
    text:
      "Design complex user retention loops, triggers, behavior flows, and powerful list segments.",
    points: [
      "Flow Automation",
      "List Health & Personas",
      "High-Converting Copy",
    ],
  },

  {
    no: "05",
    title: "Analytics, Attribution & Data",
    text:
      "Translate tracking setup, solve cookie tracking blocks, and deliver actionable ROI clarity to leadership boards.",
    points: [
      "Server-Side GTM",
      "GA4 Deep-Dive",
      "UTM Structuring",
    ],
  },

  {
    no: "06",
    title: "Brand & Creative Production",
    text:
      "Produce hyper-optimized social media static ads using modern creative AI and professional suites.",
    points: [
      "Video Editing Principles",
      "Hook Crafting",
      "Ad Quality Benchmarks",
    ],
  },
];

export default function Curriculum() {
  return (
    <section
      className="
        w-full
        bg-white
        px-8
        py-16
        sm:py-18
        md:py-20

        max-md:px-6
        max-sm:px-5
        max-sm:py-14
      "
    >
      <div className="mx-auto max-w-[1050px]">

        {/* ================= HEADING ================= */}
        <div
          className="
            mb-10
            text-center

            max-md:mb-8
            max-sm:mb-7
          "
        >
          <p
            className="
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.12em]
              text-[#2870df]

              max-md:text-[10px]
              max-sm:text-[9px]
            "
          >
            HYPERLABS ROADMAP
          </p>

          <h2
            className="
              heading-font
              mt-3
              text-[30px]
              font-extrabold
              leading-[1.1]
              tracking-[-0.5px]
              text-[#111827]

              max-lg:text-[28px]
              max-md:text-[26px]
              max-sm:text-[23px]
            "
          >
            Inside The Curriculum
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[650px]
              text-[13px]
              leading-[1.5]
              text-[#747b86]

              max-md:text-[12px]
              max-sm:mt-3
              max-sm:text-[11px]
            "
          >
            A masterfully planned structure mapping growth foundations
            to high-yield enterprise marketing loops.
          </p>
        </div>

        {/* ================= BLUE CURRICULUM BOX ================= */}
        <div
          className="
            rounded-[16px]
            bg-[#2764dc]
            p-7
            shadow-[0_10px_30px_rgba(37,99,235,.18)]

            max-lg:p-6
            max-md:p-5
            max-sm:rounded-[13px]
            max-sm:p-4
          "
        >
          <div
            className="
              grid
              grid-cols-3
              gap-5

              max-lg:gap-4
              max-md:grid-cols-2
              max-sm:grid-cols-1
              max-sm:gap-4
            "
          >
            {modules.map((item) => (
              <article
                key={item.no}
                className="
                  min-h-[205px]
                  rounded-[12px]
                  bg-white
                  p-5
                  shadow-[0_4px_12px_rgba(15,23,42,.08)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-[0_8px_20px_rgba(15,23,42,.12)]

                  max-lg:min-h-[200px]
                  max-lg:p-[18px]

                  max-md:min-h-[205px]

                  max-sm:min-h-[190px]
                  max-sm:p-5
                "
              >
                {/* ================= MODULE TOP ================= */}
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.04em]
                      text-[#3671dd]

                      max-lg:text-[9px]
                      max-sm:text-[9px]
                    "
                  >
                    MODULE {item.no}
                  </span>

                  <span
                    className="
                      rounded-[6px]
                      bg-[#edf4ff]
                      px-2.5
                      py-1.5
                      text-[8px]
                      font-bold
                      whitespace-nowrap
                      text-[#3671dd]

                      max-lg:text-[7px]
                      max-sm:px-2
                      max-sm:text-[7px]
                    "
                  >
                    3 Core Areas
                  </span>
                </div>

                {/* ================= TITLE ================= */}
                <h3
                  className="
                    heading-font
                    text-[17px]
                    font-extrabold
                    leading-[1.18]
                    tracking-[-0.2px]
                    text-[#1d2734]

                    max-lg:text-[16px]
                    max-md:text-[17px]
                    max-sm:text-[16px]
                  "
                >
                  {item.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}
                <p
                  className="
                    mt-3
                    text-[11px]
                    leading-[1.5]
                    text-[#737b86]

                    max-lg:text-[10px]
                    max-md:text-[11px]
                    max-sm:text-[10px]
                  "
                >
                  {item.text}
                </p>

                {/* ================= POINTS ================= */}
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[10px]
                        font-medium
                        leading-[1.3]
                        text-[#56606d]

                        max-lg:text-[9px]
                        max-sm:text-[9px]
                      "
                    >
                      <Check
                        size={14}
                        strokeWidth={3}
                        className="
                          shrink-0
                          text-[#3574df]
                        "
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}