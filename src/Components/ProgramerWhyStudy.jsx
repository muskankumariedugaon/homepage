import { GraduationCap, BadgeCheck, BriefcaseBusiness } from "lucide-react";
import { whyStudy } from "../data/acadmyData";
const icons = {
  "Expert Instructors": GraduationCap,
  "Recognized Certification": BadgeCheck,
  "Placement Support": BriefcaseBusiness,
};

export default function WhyStudy() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl text-center md:px-6">

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
          The craftcraft difference
        </p>

        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
          Why Study With Us
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
          Designed from the ground up to prepare you for modern design and
          engineering challenges
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-10">
          {whyStudy.map((item) => {
            const Icon = icons[item.title];

            return (
              <div
                key={item.title}
                className="flex flex-col items-center"
              >
                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                  {Icon && (
                    <Icon
                      size={28}
                      strokeWidth={2}
                      className="text-blue-700"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-bold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-gray-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}