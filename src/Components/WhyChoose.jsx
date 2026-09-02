import React from "react";
import image2 from "../assets/image2.png";

const features = [
  {
  icon: "👨‍🏫",
  title: <strong className="font-bold">Expert Educators</strong>,
  description: (
    <span className="font-semibold">
      Our expert educators have trained many people <br>
      </br>who are now placed in good companies.
    </span>
  ),
},
  {
  icon: "🌐",
  title: <strong className="font-bold">Learn Anytime, Anywhere</strong>,
  description: (
    <span className="font-semibold">
      Access our courses anytime, anywhere, and learn at your convenience.
    </span>
  ),
},
{
  icon: "💻",
  title: <strong className="font-bold">Practical Skills</strong>,
  description: (
    <span className="font-semibold">
      Gain practical skills through hands-on training and real-world applications.
    </span>
  ),
},
{
  icon: "🏅",
  title: <strong className="font-bold">ISO Certificate</strong>,
  description: (
    <span className="font-semibold">
      Officially recognized with an ISO Certificate, ensuring top-quality education standards.
    </span>
  ),
},
];

function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff] py-12 md:py-14">
      
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-7 bg-blue-800"></span>

            <span className="text-xs font-bold tracking-[2px] text-blue-900">
              WHY CHOOSE NEXT GEN ACADEMY?
            </span>

            <span className="h-[2px] w-7 bg-blue-800"></span>
          </div>

          <h2 className="text-3xl font-extrabold text-black md:text-4xl">
            Why Choose{" "}
            <span className="text-blue-800">
              Next Gen Academy?
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
            Rinkey Dubey, the director of our startup, has over{" "}
            <strong>16+ years of hands-on teaching experience</strong>{" "}
            and has guided numerous companies and millions of people worldwide.
          </p>
        </div>

        {/* Features + Image */}
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">

          {/* Features */}
          <div className="space-y-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 md:text-base">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600 md:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Read More Button */}
            <button
              type="button"
              className="mt-2 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-900 to-blue-700 py-3 text-sm font-bold text-white"
            >
              Read More
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={image2}
              alt="Why Choose Next Gen Academy"
              className="w-full max-w-[560px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;