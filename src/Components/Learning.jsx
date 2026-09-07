import React from "react";
import { learningData } from "../data/learningData";
const icons = ["◉", "⌁", "✦", "◌", "▣", "⚿", "◉", "◫", "□"];

export default function Learning() {
  return (
    <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#155eef]">
            Inside This Program
          </p>

          <h2 className="mt-2 text-[25px] font-extrabold leading-tight tracking-[-0.035em] text-[#101828] sm:text-[30px]">
            What You'll Learn
          </h2>

          <p className="mt-2 text-[10px] font-medium leading-5 tracking-[0.01em] text-[#667085] sm:text-[11px]">
            A structured curriculum engineered to take you from security
            novice to professional hands-on defender.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {learningData.map((item, index) => (
            <article
              key={item.number}
              className="group min-h-[145px] rounded-[5px] border border-[#edf0f5] bg-white p-4 shadow-[0_2px_8px_rgba(16,24,40,0.025)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(16,24,40,0.07)] sm:min-h-[160px] sm:p-5"
            >
              <div className="flex items-start justify-between">
                
                <div className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#f1f6ff] text-[11px] font-bold text-[#155eef]">
                  {icons[index]}
                </div>

                <span className="text-[10px] font-extrabold tracking-[0.02em] text-[#155eef]">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-3 text-[11px] font-extrabold leading-[1.3] tracking-[-0.01em] text-[#101828] sm:text-[12px]">
                {item.title}
              </h3>

              <p className="mt-2 text-[8px] font-medium leading-[1.6] tracking-[0.01em] text-[#667085] sm:text-[9px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}