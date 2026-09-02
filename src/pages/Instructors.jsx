import React, { useState } from "react";
import {
  FaArrowRight,
  FaStar,
  FaSearch,
} from "react-icons/fa";

import instructor1 from "../assets/Image1.jpeg";
import instructor2 from "../assets/Image1.jpeg";

import Amit from "../assets/person1.jpeg";
import Priya from "../assets/person2.jpeg";
import Rahul from "../assets/person4.jpeg";
import Neha from "../assets/person3.jpeg";

// ======================================================
// INSTRUCTOR DATA
// ======================================================

const instructors = [
  {
    id: 1,
    name: "Amit Kumar",
    role: "Full Stack Developer",
    experience: "5+ Years Experience",
    category: "Web Development",
    students: "4.8K",
    rating: "4.9",
    image: Amit,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "UI/UX Designer",
    experience: "4+ Years Experience",
    category: "UI/UX Design",
    students: "3.2K",
    rating: "4.8",
    image: Priya,
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Data Scientist",
    experience: "6+ Years Experience",
    category: "Data Science",
    students: "2.9K",
    rating: "4.9",
    image: Rahul,
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Digital Marketing Expert",
    experience: "5+ Years Experience",
    category: "Digital Marketing",
    students: "4.1K",
    rating: "4.8",
    image: Neha,
  },
];

// ======================================================
// CATEGORIES
// ======================================================

const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Data Science",
  "Digital Marketing",
  "Graphic Design",
];

// ======================================================
// STUDENT REVIEWS
// ======================================================

const students = [
  {
    name: "Sonya Kapoor",
    role: "Full Stack Web Development",
    image: "https://i.pravatar.cc/100?img=47",
    review:
      "Amit's teaching style made complex backend concepts easy to follow. Thanks to him, my projects gained real confidence going into interviews.",
  },
  {
    name: "Naveen Mishra",
    role: "UI/UX & Product Design",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "Priya's guidance is top-notch. Her visual design insights and practical approach helped me build a strong portfolio and get hired.",
  },
  {
    name: "Meera Iyer",
    role: "Data Science & Analytics",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "Rahul explains data concepts with real-world examples. His way of teaching analytics and machine learning is truly exceptional.",
  },
];

// ======================================================
// INSTRUCTORS PAGE
// ======================================================

function Instructors() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // ====================================================
  // FILTER INSTRUCTORS
  // ====================================================

  const filteredInstructors = instructors.filter((instructor) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      instructor.name.toLowerCase().includes(searchText) ||
      instructor.role.toLowerCase().includes(searchText);

    const matchesCategory =
      activeCategory === "All" ||
      instructor.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-[#fffafa] via-[#f8fcff] to-[#eaf7fc]">

        {/* ================= BACKGROUND ================= */}

        <div className="absolute right-[5%] top-10 h-[420px] w-[420px] rounded-full bg-[#dff4fb] opacity-80 blur-[1px] sm:h-[520px] sm:w-[520px]" />

        <div className="absolute bottom-10 right-[32%] h-[250px] w-[250px] rounded-full bg-[#e8f7fc] opacity-80" />

        {/* Decorative dots */}

        <div className="absolute right-10 top-10 hidden grid-cols-4 gap-3 opacity-30 sm:grid">
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-[#7fc8df]"
            />
          ))}
        </div>

        {/* ================= MAIN CONTAINER ================= */}

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-2 lg:px-10 lg:py-16">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="max-w-[650px]">

            {/* Badge */}

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b7dbea] bg-[#edf8fc] px-5 py-2.5 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#000080]" />

              <span className="text-xs font-extrabold tracking-[2px] text-[#000080]">
                BEST OUR INSTRUCTORS
              </span>
            </div>

            {/* Heading */}

            <h1 className="font-serif text-[42px] font-bold leading-[1.05] text-[#000080] sm:text-[55px] lg:text-[64px]">
              Learn From Experts,

              <br />

              <span className="italic text-[#657b90]">
                Grow With
              </span>

              <br />

              <span className="italic text-[#657b90]">
                Experience
              </span>
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-[620px] text-base leading-7 text-[#52677a] sm:text-lg sm:leading-8">
              Meet our passionate educators and industry professionals
              who are dedicated to helping students learn practical skills
              and build successful careers.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              {/* Explore Instructor */}

              <button
                type="button"
                className="group flex w-fit items-center justify-center gap-4 rounded-full bg-[#000080] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#000080]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#000066] hover:shadow-xl"
              >
                Explore Instructor

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Become Instructor */}

              <button
                type="button"
                className="w-fit rounded-full border-2 border-[#000080] bg-white/60 px-8 py-3.5 text-base font-bold text-[#000080] transition duration-300 hover:-translate-y-1 hover:bg-[#000080] hover:text-white"
              >
                Become an Instructor
              </button>

            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="relative mx-auto h-[500px] w-full max-w-[620px] sm:h-[560px]">

            {/* Main blue circle */}

            <div className="absolute right-[2%] top-[15px] h-[300px] w-[300px] rounded-full bg-[#d9f2fa] sm:right-[5%] sm:h-[470px] sm:w-[470px]" />

            {/* Star icon */}

            <div className="absolute right-[40%] top-0 z-30 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#b7eaf6] bg-white shadow-sm sm:right-[45%] sm:h-16 sm:w-16">
              <FaStar className="text-xl text-[#c936bc] sm:text-2xl" />
            </div>

            {/* =================================================
                BACK / SMALL INSTRUCTOR
            ================================================= */}

            <div className="absolute left-[2%] top-[170px] z-20 sm:left-[8%] sm:top-[180px]">

              {/* Image Card */}

              <div className="h-[270px] w-[165px] overflow-hidden rounded-[28px] border-4 border-white bg-[#e8c7b3] shadow-xl sm:h-[350px] sm:w-[220px]">
                <img
                  src={instructor1}
                  alt="Instructor"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* 25K Card */}

              <div className="absolute -left-3 top-[140px] flex min-w-[140px] items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-8 sm:top-[155px] sm:min-w-[170px] sm:px-5 sm:py-4">
                <div>
                  <p className="text-xl font-extrabold text-[#000080] sm:text-2xl">
                    25K+
                  </p>

                  <p className="text-[10px] font-medium text-[#657b90] sm:text-xs">
                    Students
                    <br />
                    Trained
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                FRONT / LARGE INSTRUCTOR
            ================================================= */}

            <div className="absolute right-[0%] top-[100px] z-20">

              {/* 50+ Floating Card */}

              <div className="absolute -right-1 -top-14 z-40 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-8 sm:px-5 sm:py-4">
                <div>
                  <p className="text-xl font-extrabold text-[#000080] sm:text-2xl">
                    50+
                  </p>

                  <p className="text-[10px] font-medium text-[#657b90] sm:text-xs">
                    Expert
                    <br />
                    Instructors
                  </p>
                </div>
              </div>

              {/* Main Image */}

              <div className="h-[350px] w-[190px] overflow-hidden rounded-[30px] border-4 border-white bg-[#e8c7b3] shadow-2xl sm:h-[440px] sm:w-[255px]">
                <img
                  src={instructor2}
                  alt="Expert Instructor"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* 100+ Courses */}

              <div className="absolute -bottom-12 left-4 flex min-w-[145px] items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:left-8 sm:min-w-[170px] sm:px-5 sm:py-4">
                <div>
                  <p className="text-xl font-extrabold text-[#000080] sm:text-2xl">
                    100+
                  </p>

                  <p className="text-[10px] font-medium text-[#657b90] sm:text-xs">
                    Courses
                    <br />
                    Available
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FIND YOUR INSTRUCTOR
      ===================================================== */}

      <section className="relative bg-gradient-to-b from-[#ffffff] to-[#f8fcff] px-4 py-14 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-7xl text-center">

          {/* Badge */}

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#c7e2ed] bg-[#edf8fc] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#000080]" />

            <span className="text-[8px] font-extrabold tracking-[1.5px] text-[#000080] sm:text-[9px]">
              MEET OUR EXPERT INSTRUCTORS
            </span>
          </div>

          {/* Heading */}

          <h2 className="font-serif text-3xl font-bold text-[#000080] sm:text-4xl lg:text-[42px]">
            Find Your Instructor
          </h2>

          {/* Search */}

          <div className="relative mx-auto mt-4 w-full max-w-[370px]">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search instructor by name or expertise..."
              className="h-9 w-full rounded-full border border-[#d5e5ed] bg-white pl-9 pr-4 text-[9px] text-gray-600 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-[#000080] focus:ring-2 focus:ring-[#000080]/10"
            />

          </div>

          {/* ================= CATEGORIES ================= */}

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-3.5 py-1.5 text-[8px] font-bold transition sm:text-[9px] ${
                  activeCategory === category
                    ? "bg-[#000080] text-white shadow-md"
                    : "border border-[#cbdfea] bg-white text-[#000080] hover:bg-[#edf8fc]"
                }`}
              >
                {category}
              </button>
            ))}

          </div>
        </div>

        {/* =====================================================
            INSTRUCTOR CARDS
        ===================================================== */}

        <div className="mx-auto mt-8 max-w-[1450px]">

          {/* Responsive Grid */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {filteredInstructors.map((instructor) => (
              <div
                key={instructor.id}
                className="group overflow-hidden rounded-2xl border border-[#d8e7ee] bg-white p-2.5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* ================= IMAGE ================= */}

                <div className="relative overflow-hidden rounded-xl bg-[#edf6fa]">

                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Available */}

                  <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 shadow-sm">

                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                    <span className="text-[8px] font-semibold text-gray-700">
                      Available
                    </span>

                  </div>
                </div>

                {/* ================= CARD CONTENT ================= */}

                <div className="px-2 pb-2 pt-3">

                  {/* Name */}

                  <h3 className="truncate text-[14px] font-bold text-[#000080]">
                    {instructor.name}
                  </h3>

                  {/* Role */}

                  <p className="mt-1 truncate text-[10px] font-semibold text-gray-700">
                    {instructor.role}
                  </p>

                  {/* Experience */}

                  <p className="mt-1 truncate text-[9px] text-gray-400">
                    {instructor.experience}
                  </p>

                  {/* Divider */}

                  <div className="my-3 h-px bg-[#edf1f4]" />

                  {/* ================= RATING ================= */}

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-1">

                      <div className="flex gap-[2px]">
                        <FaStar className="text-[8px] text-[#000080]" />
                        <FaStar className="text-[8px] text-[#000080]" />
                        <FaStar className="text-[8px] text-[#000080]" />
                        <FaStar className="text-[8px] text-[#000080]" />
                        <FaStar className="text-[8px] text-[#000080]" />
                      </div>

                      <span className="text-[8px] font-bold text-gray-500">
                        {instructor.rating}
                      </span>

                    </div>

                    <span className="text-[7px] text-gray-400">
                      {instructor.students}
                    </span>

                  </div>

                  {/* ================= PROFILE BUTTON ================= */}

                  <button
                    type="button"
                    className="mt-3 flex h-9 w-full items-center justify-center gap-1 rounded-full border border-[#d6e7ef] bg-[#f4f9fb] text-[8px] font-bold text-[#000080] transition duration-300 hover:bg-[#000080] hover:text-white"
                  >
                    View Profile

                    <FaArrowRight className="text-[7px]" />
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* ================= NO INSTRUCTOR ================= */}

          {filteredInstructors.length === 0 && (
            <div className="py-10 text-center text-sm text-gray-500">
              No instructor found.
            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          FEATURED INSTRUCTOR
      ===================================================== */}

      <section className="bg-white px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto w-full max-w-[1180px]">

          <div className="rounded-[18px] bg-[#eef8fc] px-6 py-7 sm:px-8 md:px-10 lg:px-12">

            <div className="grid items-center gap-8 md:grid-cols-[255px_1fr] lg:grid-cols-[280px_1fr] lg:gap-9">

              {/* LEFT IMAGE */}

              <div className="flex justify-center md:justify-start">
                <div className="h-[275px] w-[220px] overflow-hidden rounded-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:h-[300px] sm:w-[235px] lg:h-[310px] lg:w-[250px]">

                  <img
                    src={Amit}
                    alt="Arjun Mehta"
                    className="h-full w-full object-cover"
                  />

                </div>
              </div>

              {/* RIGHT CONTENT */}

              <div className="text-center md:text-left">

                {/* FEATURED BADGE */}

                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#a9c9ef] bg-[#edf5ff] px-3 py-1 text-[8px] font-bold uppercase tracking-[1.5px] text-[#193b9d]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1839a0]" />
                  Featured Instructor
                </div>

                {/* HEADING */}

                <h2 className="font-serif text-[27px] font-bold leading-[1.08] text-[#10277f] sm:text-[30px] lg:text-[32px]">
                  Learn From Industry
                  <br />
                  Professionals
                </h2>

                {/* DESCRIPTION */}

                <p className="mx-auto mt-3 max-w-[470px] text-[10px] leading-[1.65] text-[#52617d] sm:text-[11px] md:mx-0 lg:text-[12px]">
                  Our instructors bring real-world experience into the
                  classroom, helping students understand practical concepts
                  and develop career-ready skills.
                </p>

                {/* INSTRUCTOR NAME */}

                <div className="mt-4">
                  <h3 className="font-serif text-[14px] font-bold text-[#172b83]">
                    Arjun Mehta
                  </h3>

                  <p className="mt-0.5 text-[9px] text-[#65718a]">
                    Lead Instructor & Data Scientist
                  </p>
                </div>

                {/* STATS */}

                <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">

                  <div>
                    <p className="font-serif text-[14px] font-bold text-[#07198d]">
                      4.9+
                    </p>
                    <p className="text-[8px] text-[#6b7488]">
                      Rating
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-[14px] font-bold text-[#07198d]">
                      5,000+
                    </p>
                    <p className="text-[8px] text-[#6b7488]">
                      Students
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-[14px] font-bold text-[#07198d]">
                      25+
                    </p>
                    <p className="text-[8px] text-[#6b7488]">
                      Courses
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-[14px] font-bold text-[#07198d]">
                      10+ yrs
                    </p>
                    <p className="text-[8px] text-[#6b7488]">
                      Experience
                    </p>
                  </div>

                </div>

                {/* PROFILE BUTTON */}

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#10179a] px-5 py-2.5 text-[9px] font-semibold text-white shadow-[0_5px_12px_rgba(16,23,154,0.25)] transition hover:bg-[#080e7e]"
                >
                  View Instructor Profile
                  <span className="text-[12px]">
                    →
                  </span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STUDENT VOICES
      ===================================================== */}

      <section className="w-full bg-white px-4 py-2 sm:px-6">

        {/* BADGE */}

        <div className="flex w-full justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b6d1ee] bg-[#eef6ff] px-3 py-1 text-[7px] font-bold uppercase tracking-[1.5px] text-[#193a99]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1536a0]" />
            Student Voices
          </div>
        </div>

        {/* HEADING */}

        <div className="flex w-full justify-center">
          <h2 className="mt-3 w-full max-w-[520px] text-center font-serif text-[27px] font-bold leading-[1.08] text-[#10237d]">
            What Students Say About Our
            <br />
            Instructors
          </h2>
        </div>

        {/* CARDS */}

        <div className="mx-auto mt-6 grid w-full max-w-[1100px] gap-4 md:grid-cols-3">

          {students.map((student) => (
            <div
              key={student.name}
              className="min-h-[170px] rounded-xl border border-[#cfe0ef] bg-white px-4 py-4 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex items-center gap-3">

                <img
                  src={student.image}
                  alt={student.name}
                  className="h-8 w-8 rounded-full border border-[#9bc7e9] object-cover"
                />

                <div>
                  <h4 className="text-[8px] font-bold text-[#12247e]">
                    {student.name}
                  </h4>

                  <p className="mt-0.5 text-[7px] text-[#65718a]">
                    {student.role}
                  </p>
                </div>

              </div>

              {/* STARS */}

              <div className="mt-4 text-[9px] tracking-[1px] text-[#07178e]">
                ★★★★★
              </div>

              {/* REVIEW */}

              <p className="mt-2 text-[8px] leading-[1.65] text-[#5b667c]">
                {student.review}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="relative mx-auto mt-7 flex min-h-[175px] w-[calc(100%-32px)] max-w-[1180px] items-center justify-center overflow-hidden rounded-[13px] bg-[#090c91] px-6 py-8 text-center sm:w-[calc(100%-48px)] sm:px-10">

        {/* DOT PATTERN */}

        <div
          className="pointer-events-none absolute bottom-0 right-0 h-full w-[45%] opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* CENTER CONTENT */}

        <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">

          {/* BADGE */}

          <div className="mb-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#6474d8] bg-[#2533a3] px-3 py-1 text-[7px] font-bold uppercase tracking-[1.4px] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Join The Faculty
          </div>

          {/* HEADING */}

          <h2 className="w-full text-center font-serif text-[22px] font-bold leading-[1.05] text-white sm:text-[25px] lg:text-[27px]">
            Ready to Share Your
            <br />
            Knowledge?
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-3 w-full max-w-[390px] text-center text-[8px] leading-[1.6] text-[#d8ddff] sm:text-[9px]">
            Join our instructor community and inspire students with your
            experience and expertise.
          </p>

          {/* BUTTON */}

          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[8px] font-bold text-[#101b91] shadow-md transition hover:scale-105"
          >
            Become an Instructor

            <span className="text-[11px]">
              →
            </span>
          </button>

        </div>
      </section>
    </>
  );
}

export default Instructors;