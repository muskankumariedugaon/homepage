import React from "react";
import {
  GraduationCap,
  Users,
  UserRoundCheck,
  BookOpen,
  Trophy,
  MonitorPlay,
  FileText,
  Headphones,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "200+ Centres",
    description: (
      <>
        Across India with
        <br />
        175+ cities
      </>
    ),
  },
  {
    icon: Users,
    title: "1M+ Students",
    description: (
      <>
        Trust and learn
        <br />
        with us
      </>
    ),
  },
  {
    icon: UserRoundCheck,
    title: "5000+ Teachers",
    description: (
      <>
        Expert faculty
        <br />
        members
      </>
    ),
  },
  {
    icon: BookOpen,
    title: "100+ Courses",
    description: (
      <>
        Offline tech-enabled
        <br />
        courses
      </>
    ),
  },
  {
    icon: Trophy,
    title: "Top Results",
    description: (
      <>
        Proven track record
        <br />
        every year
      </>
    ),
  },
  {
    icon: MonitorPlay,
    title: "Smart Classrooms",
    description: (
      <>
        Tech-enabled learning
        <br />
        environment
      </>
    ),
  },
  {
    icon: FileText,
    title: "Study Material",
    description: (
      <>
        Industry-aligned
        <br />
        study resources
      </>
    ),
  },
  {
    icon: Headphones,
    title: "Student Support",
    description: (
      <>
        24x7 academic
        <br />
        assistance
      </>
    ),
  },
];

const Features = () => {
  return (
    <section className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1080px] rounded-[22px] bg-white px-5 py-8 shadow-[0_10px_35px_rgba(15,23,42,0.12)] sm:px-8 sm:py-10 lg:px-10 lg:py-9">

        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-[24px] font-extrabold tracking-[-0.5px] text-slate-900 sm:text-[27px]">
            Everything you need to know
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-7 bg-slate-200"></span>

            <p className="text-[11px] font-medium text-slate-500 sm:text-[12px]">
              Trusted by{" "}
              <span className="font-bold text-blue-700">1M+ students</span>{" "}
              across India
            </p>

            <span className="h-px w-7 bg-slate-200"></span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group min-h-[105px] rounded-[11px] border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-full items-start gap-3">

                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[9px] bg-blue-50">
                    <Icon
                      size={20}
                      strokeWidth={2.2}
                      className="text-blue-700"
                    />
                  </div>

                  {/* Text */}
                  <div className="pt-0.5">
                    <h3 className="text-[12px] font-extrabold leading-tight text-slate-900 sm:text-[13px]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-[1.45] text-slate-500 sm:text-[11px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="flex min-w-[175px] items-center justify-center gap-2 rounded-[6px] bg-blue-700 px-6 py-3 text-[11px] font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-800 hover:shadow-lg"
          >
            Explore More
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;