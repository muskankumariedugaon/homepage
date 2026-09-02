import React from "react";

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#ff9900]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#ff9900]/10 blur-3xl" />
{/* 
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex rounded-full border border-[#ff9900]/40 bg-[#ff9900]/10 px-4 py-2 text-sm font-semibold text-[#ff9900]">
              About EduGaon
            </span> */}

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Learners.
              <span className="block text-[#ff9900]">
                Building Better Futures.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              EduGaon is a modern learning platform focused on making quality
              education accessible, practical, and meaningful for every
              learner.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#ff9900]">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Education should be simple, accessible and impactful.
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              EduGaon is built with a simple idea — learning should not be
              limited by location, background, or access to resources. We aim
              to create an environment where students can learn, explore their
              potential, and move confidently toward their goals.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From foundational learning to skill development, EduGaon brings
              together useful educational resources and a learner-first
              experience in one place.
            </p>

            <button className="mt-8 rounded-lg bg-[#ff9900] px-6 py-3 font-semibold text-black transition hover:bg-black hover:text-white">
              Explore EduGaon
            </button>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="rounded-3xl bg-gray-100 p-5 sm:p-8">
              <div className="rounded-2xl bg-black p-8 sm:p-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff9900] text-2xl font-bold">
                  E
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Learn. Grow. Achieve.
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  Creating opportunities for learners through accessible
                  education and practical knowledge.
                </p>

                <div className="mt-8 h-2 overflow-hidden rounded-full bg-gray-700">
                  <div className="h-full w-3/4 rounded-full bg-[#ff9900]" />
                </div>

                <p className="mt-3 text-sm text-gray-500">
                  Your journey starts here.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 hidden rounded-xl bg-[#ff9900] px-5 py-3 font-bold shadow-lg sm:block">
              Education for Everyone
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff9900]">
              Our Purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Our Mission & Vision
            </h2>

            <p className="mt-4 text-gray-600">
              We are working towards a future where every learner gets the
              opportunity to learn and grow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-[#ff9900]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-6-6h12"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-2xl font-bold">Our Mission</h3>

              <p className="mt-4 leading-7 text-gray-600">
                To make quality education easier to access and understand by
                providing learners with useful knowledge, resources, and
                opportunities for growth.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff9900] text-black">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>

              <p className="mt-4 leading-7 text-gray-600">
                To build a trusted learning ecosystem where students can
                discover their potential, develop valuable skills, and create
                a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why EduGaon */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff9900]">
              Why EduGaon
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Designed around the learner.
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Everything we build is focused on making the learning experience
              more useful, simple, and accessible.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Accessible",
                text: "Learning resources designed to be easy to access and understand.",
              },
              {
                number: "02",
                title: "Practical",
                text: "Focus on knowledge and skills that learners can actually use.",
              },
              {
                number: "03",
                title: "Learner First",
                text: "Our experience is designed around the needs of students.",
              },
              {
                number: "04",
                title: "Growth Focused",
                text: "Helping learners continuously improve and move forward.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-gray-800 bg-gray-950 p-6 transition hover:border-[#ff9900]"
              >
                <span className="text-sm font-bold text-[#ff9900]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff9900]">
            Our Values
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            What we believe in
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Simplicity",
              text: "We believe education becomes more powerful when it is simple and easy to understand.",
            },
            {
              title: "Opportunity",
              text: "Every learner deserves access to opportunities that can help them grow.",
            },
            {
              title: "Innovation",
              text: "We continuously look for better ways to make learning engaging and effective.",
            },
            {
              title: "Integrity",
              text: "We value honesty, transparency, and trust in everything we do.",
            },
            {
              title: "Community",
              text: "We believe that learning becomes stronger when people learn and grow together.",
            },
            {
              title: "Excellence",
              text: "We strive to improve continuously and create meaningful experiences for learners.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-gray-200 p-7 transition hover:border-[#ff9900] hover:shadow-lg"
            >
              <div className="mb-5 h-1 w-10 rounded-full bg-[#ff9900] transition-all group-hover:w-16" />

              <h3 className="text-xl font-bold">{value.title}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#ff9900]">
          <div className="relative px-6 py-14 text-center sm:px-12 lg:py-20">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-black/10" />

            <div className="relative">
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                Ready to start your learning journey?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-black/70">
                Discover resources, build your skills, and take the next step
                toward your goals with EduGaon.
              </p>

              <button className="mt-8 rounded-lg bg-black px-7 py-3.5 font-semibold text-white transition hover:bg-gray-800">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:px-8 md:flex-row lg:px-12">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff9900] font-bold">
              E
            </div>

            <span className="text-lg font-bold">EduGaon</span>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EduGaon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Aboutus;


