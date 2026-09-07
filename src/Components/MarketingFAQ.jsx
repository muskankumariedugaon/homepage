import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Do we really manage real budget?",
    a:
      "Yes. In the Career Accelerator, NextGen Academy funds a real performance test budget for your cohort to execute. There are no paper accounts or artificial scenarios.",
  },

  {
    q: "What background is required?",
    a:
      "No complex coding experience is assumed. Some fundamental familiarity with online business platforms or general social channels helps, but we cover structured steps from ground-up.",
  },

  {
    q: "How does the placement support function?",
    a:
      "Our dedicated support specialists coordinate direct pipelines with 45+ hiring partners, optimize your online CV/portfolio, and host continuous rigorous mock interview drills.",
  },

  {
    q: "What schedules do live classes follow?",
    a:
      "Cohort sync calls are positioned on Tuesday and Thursday evenings at 7:00 PM EST. All live technical sessions are recorded and made immediately available for next-day review.",
  },
];

export default function MarketingFAQ() {
  const [open, setOpen] = useState(null);

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
            RESOLVING DOUBTS
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
            Frequently Asked Questions
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[650px]
              text-[13px]
              font-normal
              leading-[1.5]
              text-[#747b86]

              max-md:text-[12px]
              max-sm:mt-3
              max-sm:text-[11px]
            "
          >
            Everything you need to know about NextGen performance
            marketing cohort certifications.
          </p>
        </div>

        {/* ================= FAQ LIST ================= */}
        <div
          className="
            mx-auto
            max-w-[760px]
            space-y-4

            max-md:space-y-3
          "
        >
          {faqs.map((item, index) => (
            <div
              key={item.q}
              className="
                overflow-hidden
                rounded-[12px]
                border
                border-[#e3e8ef]
                bg-white
                shadow-[0_4px_14px_rgba(15,23,42,.05)]
                transition-all
                duration-200
              "
            >
              {/* QUESTION */}
              <button
                type="button"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  flex
                  min-h-[62px]
                  w-full
                  items-center
                  justify-between
                  gap-5
                  px-6
                  py-4
                  text-left
                  transition-colors
                  hover:bg-[#fafcff]

                  max-md:min-h-[58px]
                  max-md:px-5

                  max-sm:min-h-[55px]
                  max-sm:gap-3
                  max-sm:px-4
                  max-sm:py-3
                "
              >
                <span
                  className="
                    text-[15px]
                    font-extrabold
                    leading-[1.3]
                    text-[#27303c]

                    max-md:text-[14px]
                    max-sm:text-[12px]
                  "
                >
                  {item.q}
                </span>

                <span
                  className="
                    flex
                    h-[30px]
                    w-[30px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f0f5ff]

                    max-sm:h-[27px]
                    max-sm:w-[27px]
                  "
                >
                  <ChevronDown
                    size={18}
                    strokeWidth={2.5}
                    className={`
                      text-[#2870df]
                      transition-transform
                      duration-200

                      ${
                        open === index
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </span>
              </button>

              {/* ANSWER */}
              {open === index && (
                <div
                  className="
                    border-t
                    border-[#edf0f4]
                    bg-[#fcfdff]
                    px-6
                    pb-5
                    pt-4

                    max-md:px-5
                    max-sm:px-4
                    max-sm:pb-4
                    max-sm:pt-3
                  "
                >
                  <p
                    className="
                      text-[13px]
                      leading-[1.6]
                      text-[#727985]

                      max-md:text-[12px]
                      max-sm:text-[11px]
                    "
                  >
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
} 