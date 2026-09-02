import React from "react";
import { Link } from "react-router-dom";

import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaChartLine,
  FaDatabase,
  FaUsers,
  FaClipboardCheck,
  FaHeadset,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

const courses = [
  {
    icon: <FaCode />,
    title: "Web Development",
    slug: "web-development",
    desc: "Learn HTML, CSS, JavaScript and build modern websites from scratch.",
    points: [
      "HTML, CSS, JavaScript",
      "Responsive Design",
      "Real Projects",
    ],
  },

  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    slug: "full-stack-development",
    desc: "Master frontend and backend technologies to become a full stack developer.",
    points: [
      "MERN Stack",
      "Database Integration",
      "Live Projects",
    ],
  },

  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    desc: "Build Android apps using modern tools and bring your ideas to life.",
    points: [
      "Android Development",
      "UI/UX Design",
      "Real App Projects",
    ],
  },

  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    desc: "Design beautiful and user-friendly interfaces with industry tools.",
    points: [
      "Figma Essentials",
      "Wireframing",
      "Design Systems",
    ],
  },

  {
    icon: <FaChartLine />,
    title: "Data Science",
    slug: "data-science",
    desc: "Analyze data and build models to solve real-world problems.",
    points: [
      "Python Basics",
      "Data Analysis",
      "ML Fundamentals",
    ],
  },

  {
    icon: <FaDatabase />,
    title: "Database Management",
    slug: "database-management",
    desc: "Learn how to manage, query, and optimize databases effectively.",
    points: [
      "SQL Queries",
      "Database Design",
      "Performance Tuning",
    ],
  },
];

const features = [
  {
    icon: <FaUsers />,
    title: "Industry Experts",
    desc: "Learn from industry professionals",
  },

  {
    icon: <FaClipboardCheck />,
    title: "Real Projects",
    desc: "Work on real-time industry projects",
  },

  {
    icon: <FaAward />,
    title: "Certification",
    desc: "Get certified and boost your career",
  },

  {
    icon: <FaHeadset />,
    title: "Placement Support",
    desc: "100% support for placements",
  },
];

const Courses = () => {
  return (
    <section className="bg-[#fafafa] px-4 py-12 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">

        <div
          className="
            inline-flex
            items-center
            gap-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#000080]

            sm:gap-3
            sm:text-sm
          "
        >
          <span className="h-px w-6 bg-[#000080] sm:w-12 lg:w-16" />

          <span>Popular Courses</span>

          <span className="h-px w-6 bg-[#000080] sm:w-12 lg:w-16" />
        </div>


        <h1
          className="
            mt-3
            text-2xl
            font-extrabold
            leading-tight
            text-gray-900

            sm:mt-4
            sm:text-4xl

            md:text-5xl
          "
        >
          Learn In-Demand Skills

          <br />

          <span className="text-[#000080]">
            From Industry Experts
          </span>
        </h1>


        <p
          className="
            mx-auto
            mt-3
            max-w-2xl
            text-xs
            leading-5
            text-gray-600

            sm:mt-4
            sm:text-base
            sm:leading-6
          "
        >
          Explore our most popular courses designed to help you build
          real-world skills and launch your tech career.
        </p>

      </div>


      {/* ================================================= */}
      {/* COURSES */}
      {/* ================================================= */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1450px]
          grid-cols-2
          gap-4

          sm:gap-5

          md:gap-6

          lg:grid-cols-3

          xl:grid-cols-6
        "
      >

        {courses.map((course, index) => (

          <Link
            key={index}
            to={`/courses/${course.slug}`}

            className="
              group
              relative
              z-0

              flex
              min-w-0
              h-[240px]
              flex-col
              items-center
              justify-center

              rounded-2xl
              border
              border-gray-100

              bg-white

              px-4
              py-5

              text-center

              shadow-[0_6px_25px_rgba(0,0,0,0.07)]

              transition-all
              duration-500
              ease-in-out

              hover:z-30
              hover:h-[390px]
              hover:scale-[1.04]
              hover:shadow-[0_18px_45px_rgba(0,0,128,0.18)]

              sm:h-[250px]

              lg:h-[260px]

              xl:h-[270px]
              xl:hover:h-[400px]
            "
          >

            {/* ================================================= */}
            {/* ICON */}
            {/* ================================================= */}

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-[#f7f7ff]

                text-xl
                text-[#000080]

                transition-all
                duration-500

                group-hover:scale-110

                lg:h-14
                lg:w-14
                lg:text-2xl
              "
            >
              {course.icon}
            </div>


            {/* ================================================= */}
            {/* COURSE TITLE */}
            {/* ================================================= */}

            <h2
              className="
                mt-4
                flex
                min-h-[45px]
                w-full
                items-center
                justify-center

                text-sm
                font-bold
                leading-5
                text-gray-900

                transition-all
                duration-500

                sm:text-base

                lg:text-lg
                lg:leading-6
              "
            >
              {course.title}
            </h2>


            {/* ================================================= */}
            {/* HOVER DETAILS */}
            {/* ================================================= */}

            <div
              className="
                mt-0
                flex
                w-full
                flex-col
                items-center

                overflow-hidden

                max-h-0
                translate-y-4
                opacity-0

                transition-all
                duration-500
                ease-in-out

                group-hover:mt-3
                group-hover:max-h-[240px]
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              {/* DESCRIPTION */}

              <p
                className="
                  mx-auto
                  max-w-[240px]

                  text-center
                  text-[10px]
                  leading-4
                  text-gray-600

                  sm:text-xs
                  sm:leading-5

                  lg:text-sm
                "
              >
                {course.desc}
              </p>


              {/* POINTS */}

              <ul
                className="
                  mt-4
                  w-full
                  max-w-[240px]
                  space-y-2
                  text-left
                "
              >

                {course.points.map((point, pointIndex) => (

                  <li
                    key={pointIndex}
                    className="
                      flex
                      items-center
                      gap-2

                      text-[9px]
                      leading-4
                      text-gray-700

                      sm:text-xs

                      lg:text-sm
                    "
                  >

                    <span
                      className="
                        flex
                        h-4
                        w-4
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-[#000080]

                        text-[9px]
                        text-white
                      "
                    >
                      ✓
                    </span>

                    <span>
                      {point}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          </Link>

        ))}

      </div>


      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <div
        className="
          mx-auto
          mt-8
          grid
          w-full
          max-w-[1450px]
          grid-cols-1
          gap-3

          sm:grid-cols-2
          sm:gap-4

          xl:grid-cols-4
        "
      >

        {features.map((feature, index) => (

          <div
            key={index}
            className="
              flex
              items-center
              gap-3

              rounded-2xl
              border
              border-gray-100

              bg-white

              p-4

              shadow-[0_6px_25px_rgba(0,0,0,0.06)]

              sm:gap-4
              sm:p-5
            "
          >

            {/* FEATURE ICON */}

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-[#f7f7ff]

                text-lg
                text-[#000080]

                sm:h-12
                sm:w-12
                sm:text-xl
              "
            >
              {feature.icon}
            </div>


            {/* FEATURE TEXT */}

            <div>

              <h3
                className="
                  text-sm
                  font-bold
                  text-gray-900

                  sm:text-base
                "
              >
                {feature.title}
              </h3>


              <p
                className="
                  mt-1
                  text-xs
                  leading-4
                  text-gray-600

                  sm:text-sm
                  sm:leading-5
                "
              >
                {feature.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Courses;