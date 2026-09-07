import { useState } from "react";

const questions = [
  {
    question: "Do we get to work with real security budgets and sandbox servers?",
    answer:
      "Yes. Students work through practical security scenarios using realistic enterprise environments and guided sandbox exercises.",
  },
  {
    question: "What technical background is required for this program?",
    answer:
      "Basic computer and networking knowledge is helpful, but the curriculum is designed to progressively build your cybersecurity skills.",
  },
  {
    question: "How does the career placement support work?",
    answer:
      "The program includes resume guidance, interview preparation, portfolio projects and practical career support.",
  },
  {
    question: "What schedules do live virtual classes follow?",
    answer:
      "Classes are arranged around practical learning sessions with flexible schedules designed for students and working professionals.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[720px]">
        
        <div className="text-center">
          <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#155eef]">
            Questions Answered
          </p>

          <h2 className="mt-2 text-[25px] font-extrabold tracking-[-0.035em] text-[#101828] sm:text-[30px]">
            Frequently Asked Questions
          </h2>

          <p className="mt-2 text-[10px] font-medium leading-5 text-[#667085] sm:text-[11px]">
            Everything you need to know about our cybersecurity certification.
          </p>
        </div>

        <div className="mt-9 space-y-2">
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[4px] border border-[#edf0f5] bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-4 py-3.5 text-left"
                >
                  <span className="text-[8px] font-extrabold leading-4 tracking-[0.005em] text-[#101828] sm:text-[9px]">
                    {item.question}
                  </span>

                  <span className="shrink-0 text-[10px] font-bold text-[#155eef]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#f2f4f7] px-4 pb-4 pt-3">
                    <p className="text-[8px] font-medium leading-[1.65] text-[#667085] sm:text-[9px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}