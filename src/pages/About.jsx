import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../assets/academy-hero.jpeg";
import aboutImage from "../assets/students-classroom.jpeg";

// ======================================================
// HERO SECTION
// ======================================================

function Hero() {
  return (
    <section className="bg-[#effbff]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid min-h-[430px] items-center gap-8 py-10 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block rounded-md bg-[#b7e6f3] px-3 py-1.5 text-[9px] font-bold uppercase text-[#082d59]">
              ABOUT NEXTGEN ACADEMY
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] text-[#08088f] sm:text-4xl lg:text-5xl">
              Empowering Learners
              <br />
              to Build a{" "}
              <span className="text-[#11b7e4]">
                Better Future
              </span>
            </h1>

            <p className="mt-4 max-w-[480px] text-xs leading-5 text-gray-600 sm:text-sm">
              NextGen Academy is an online learning platform dedicated to
              providing accessible, high-quality education to students
              anywhere, everywhere.
            </p>

            <Link
              to="/courses"
              className="mt-6 inline-block rounded-md bg-[#08088f] px-4 py-2.5 text-[10px] font-bold text-white transition hover:bg-[#05056b]"
            >
              Explore Courses →
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="NextGen Academy"
              className="w-full max-w-[550px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

// ======================================================
// OFFER CARD
// ======================================================

function OfferCard({ icon, title, text }) {
  return (
    <div
      className="
        group cursor-pointer rounded-md border border-gray-200
        bg-white p-5 text-center shadow-sm
        transition-all duration-300 ease-in-out
        hover:-translate-y-2
        hover:border-[#10b7df]
        hover:bg-[#f5fcff]
        hover:shadow-lg
      "
    >
      <div
        className="
          mx-auto flex h-11 w-11 items-center justify-center
          rounded-full bg-[#b5e5f2]
          text-lg font-bold text-[#08088f]
          transition-all duration-300
          group-hover:bg-[#08088f]
          group-hover:text-white
        "
      >
        {icon}
      </div>

      <h3 className="mt-3 text-xs font-bold text-[#08088f]">
        {title}
      </h3>

      <p className="mt-2 text-[9px] leading-4 text-gray-500">
        {text}
      </p>
    </div>
  );
}

// ======================================================
// WHO WE ARE
// ======================================================

function WhoWeAre() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 lg:px-12">

        <div className="grid items-center gap-8 lg:grid-cols-2">

          {/* IMAGE */}
          <div>
            <img
              src={aboutImage}
              alt="Students learning"
              className="w-full rounded-md object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-[9px] font-extrabold uppercase text-[#10b7df]">
              WHO WE ARE
            </p>

            <h2 className="mt-1 text-2xl font-extrabold leading-tight text-[#08088f] sm:text-3xl">
              Learning That Goes
              <br />
              Beyond The Classroom
            </h2>

            <p className="mt-3 text-xs leading-5 text-gray-600">
              We believe education is more than just teaching books. It's
              about understanding concepts, practicing regularly and applying
              knowledge in real life.
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-600">
              Our goal is to make learning simple, engaging and effective with
              the help of expert instructors, quality study materials and
              modern technology.
            </p>

            {/* STATS */}
            <div className="mt-5 grid grid-cols-3">

              <div>
                <p className="text-lg font-bold text-[#08088f]">
                  10K+
                </p>

                <p className="text-[9px] text-gray-500">
                  Students
                </p>
              </div>

              <div className="border-l border-gray-300 pl-4">
                <p className="text-lg font-bold text-[#08088f]">
                  100+
                </p>

                <p className="text-[9px] text-gray-500">
                  Courses
                </p>
              </div>

              <div className="border-l border-gray-300 pl-4">
                <p className="text-lg font-bold text-[#08088f]">
                  50+
                </p>

                <p className="text-[9px] text-gray-500">
                  Expert Instructors
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* WHAT WE OFFER */}
        <div className="mt-12">

          <div className="text-center">
            <p className="text-[12px] font-extrabold uppercase text-[#08088f]">
              WHAT WE OFFER
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <OfferCard
              icon="▤"
              title="Online Courses"
              text="Learn from expert instructors with well-structured and industry-relevant courses."
            />

            <OfferCard
              icon="▥"
              title="Notes & Study Materials"
              text="Access high quality notes and study resources to strengthen your learning."
            />

            <OfferCard
              icon="✓"
              title="Tests & Assessments"
              text="Practice with quizzes, tests and assignments to track your progress."
            />

            <OfferCard
              icon="★"
              title="Certificates"
              text="Earn certificates and boost your skills for academic and career growth."
            />

          </div>
        </div>

      </div>
    </section>
  );
}

// ======================================================
// MISSION & VISION
// ======================================================

function MissionVision() {
  return (
    <section className="bg-white px-4 py-4">
      <div className="mx-auto max-w-[1180px] overflow-hidden bg-[#08088f]">

        <div className="grid min-h-[220px] grid-cols-1 md:grid-cols-2">

          {/* MISSION */}
          <div
            className="
              flex items-center gap-7
              px-8 py-10
              sm:px-12
              md:border-r md:border-white/50
              lg:px-16
            "
          >

            {/* TARGET ICON */}
            <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#3434b9]">

              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-[3px] border-[#08c8ff]">

                <div className="flex h-[31px] w-[31px] items-center justify-center rounded-full border-[3px] border-[#08c8ff]">

                  <div className="h-[9px] w-[9px] rounded-full bg-[#08c8ff]" />

                </div>

              </div>

            </div>

            {/* MISSION CONTENT */}
            <div className="max-w-[350px]">

              <p className="text-[11px] font-bold uppercase text-[#09bce9]">
                OUR MISSION
              </p>

              <h2 className="mt-2 text-[20px] font-bold leading-[1.2] text-white sm:text-[22px]">
                Learn Today. Lead
                <br />
                Tomorrow.
              </h2>

              <p className="mt-4 text-[10px] leading-normal text-white sm:text-[11px]">
                Our mission is to make quality education accessible
                to everyone and help them build the skills and
                confidence to create a better tomorrow.
              </p>

            </div>
          </div>

          {/* VISION */}
          <div
            className="
              flex items-center gap-7
              px-8 py-10
              sm:px-12
              lg:px-16
            "
          >

            {/* EYE ICON */}
            <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#3434b9]">

              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-[3px] border-[#5252d1]">

                <svg
                  width="35"
                  height="25"
                  viewBox="0 0 28 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C2 10 6.5 2.5 14 2.5C21.5 2.5 26 10 26 10C26 10 21.5 17.5 14 17.5C6.5 17.5 2 10 2 10Z"
                    stroke="#08c8ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="14"
                    cy="10"
                    r="3.5"
                    stroke="#08c8ff"
                    strokeWidth="2.5"
                  />
                </svg>

              </div>
            </div>

            {/* VISION CONTENT */}
            <div className="max-w-[350px]">

              <p className="text-[11px] font-bold uppercase text-[#09bce9]">
                OUR VISION
              </p>

              <h2 className="mt-2 text-[20px] font-bold leading-[1.2] text-white sm:text-[22px]">
                Creating Better
                <br />
                Futures.
              </h2>

              <p className="mt-4 text-[10px] leading-normal text-white sm:text-[11px]">
                We envision a world where every student has the
                opportunity to learn, grow and achieve their full
                potential through the power of education.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// ======================================================
// FEATURE CARD
// ======================================================

function FeatureCard({ icon, title, text }) {
  return (
    <div
      className="
        group min-h-[175px] cursor-pointer rounded-lg
        border border-gray-200 bg-white px-4 py-6
        text-center shadow-md
        transition-all duration-300 ease-in-out
        hover:-translate-y-3
        hover:border-[#10b7df]
        hover:bg-[#f3fcff]
        hover:shadow-xl
      "
    >

      {/* ICON */}
      <div
        className="
          mx-auto flex h-14 w-14 items-center justify-center
          rounded-full bg-[#08088f] text-xl
          transition-all duration-300
          group-hover:scale-110
          group-hover:bg-[#10b7df]
          group-hover:shadow-md
        "
      >
        {icon}
      </div>

      {/* TITLE */}
      <h3
        className="
          mt-4 text-[11px] font-bold
          text-[#08088f]
          transition-colors duration-300
          group-hover:text-[#10a9d0]
        "
      >
        {title}
      </h3>

      {/* TEXT */}
      <p className="mt-2 text-[9px] leading-4 text-gray-500">
        {text}
      </p>

    </div>
  );
}

// ======================================================
// WHY CHOOSE NEXTGEN ACADEMY
// ======================================================

function WhyChoose() {
  const features = [
    {
      icon: "🎓",
      title: "Expert Instructors",
      text: "Learn from experienced and highly skilled instructors.",
    },
    {
      icon: "💻",
      title: "Practical Learning",
      text: "Real-world projects and practical learning experiences.",
    },
    {
      icon: "🏆",
      title: "Certifications",
      text: "Earn valuable certificates after completing courses.",
    },
    {
      icon: "👨‍🎓",
      title: "Learn Anywhere",
      text: "Access your learning anytime, anywhere on any device.",
    },
    {
      icon: "📚",
      title: "Study Resources",
      text: "High quality notes, quizzes and learning resources.",
    },
    {
      icon: "🎧",
      title: "Student Support",
      text: "Get support whenever you need help during learning.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 lg:px-12">

        {/* HEADING */}
        <div className="text-center">

          <p className="text-[12px] font-extrabold uppercase text-[#10b7df]">
            WHY CHOOSE NEXTGEN ACADEMY?
          </p>

          <h2 className="mt-1 text-2xl font-extrabold text-[#08088f]">
            Everything You Need to Succeed
          </h2>

        </div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}

        </div>

        {/* CTA */}
        <div className="mt-8 rounded-md bg-gradient-to-r from-[#08088f] to-[#0bbde1]">

          <div className="flex flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-8">

            <div className="flex items-center gap-4">

              <div className="hidden text-4xl sm:block">
                🎓
              </div>

              <div>

                <h3 className="text-lg font-extrabold text-white sm:text-xl">
                  Start Your{" "}
                  <span className="text-[#10d0ee]">
                    Learning Journey
                  </span>{" "}
                  Today
                </h3>

                <p className="text-[9px] text-white/80">
                  Join thousands of students and take the first step
                  towards your brighter future.
                </p>

              </div>
            </div>

            <Link
              to="/courses"
              className="rounded-md bg-[#08088f] px-6 py-2.5 text-[10px] font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#05056b]"
            >
              Get Start →
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}

// ======================================================
// ABOUT PAGE
// ======================================================

function About() {
  return (
    <div className="min-h-screen bg-white">

      <main>
        <Hero />
        <WhoWeAre />
        <MissionVision />
        <WhyChoose />
      </main>

    </div>
  );
}

export default About;