import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const browseCoursesItems = [
  "All Courses",
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Full Stack",
  "Python",
  "Java",
  "Data Science",
  "UI/UX Design",
  "Artificial Intelligence",
];

const categoriesItems = [
  "Programming",
  "Design",
  "Business",
  "Marketing",
  "Cloud Computing",
  "Cyber Security",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  // ================= MOBILE MENU CLOSE =================

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setCourseOpen(false);
    setCategoryOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* ================= MAIN CONTAINER ================= */}

      <div className="mx-auto w-full max-w-[1450px] px-6 sm:px-8 lg:px-10">
        {/* ================= NAVBAR ROW ================= */}

        <div className="flex h-[88px] items-center">
          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="NextGen Academy"
              className="
                h-[97px]
                w-auto
                object-contain
                sm:h-[100px]
                md:h-[110px]
              "
            />
          </Link>

          {/* ================================================= */}
          {/* DESKTOP MENU */}
          {/* ================================================= */}

          <div className="ml-12 hidden items-center gap-9 md:flex">
            {/* ================= HOME ================= */}

            <Link
              to="/"
              className="
                whitespace-nowrap
                text-[16px]
                font-medium
                text-gray-700
                transition
                duration-200
                hover:text-[#1e1b6e]
              "
            >
              Home
            </Link>
             <Link
              to="/portfolio"
              className="
                whitespace-nowrap
                text-[16px]
                font-medium
                text-gray-700
                transition
                duration-200
                hover:text-[#1e1b6e]
              "
            >
              portfolio
            </Link>

            {/* ================================================= */}
            {/* BROWSE COURSES */}
            {/* ================================================= */}

            <div className="group relative">
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  text-[16px]
                  font-medium
                  text-gray-700
                  transition
                  duration-200
                  hover:text-[#1e1b6e]
                "
              >
                Browse Courses
                <span className="text-[13px]">⌄</span>
              </button>

              {/* ================= DROPDOWN ================= */}

              <div className="absolute left-0 top-full hidden w-64 pt-4 group-hover:block">
                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-100
                    bg-white
                    py-2
                    shadow-xl
                  "
                >
                  {browseCoursesItems.map((item) =>
                    /* =================================================
                       WEB DEVELOPMENT - ROUTED LINK
                    ================================================= */

                    item === "Web Development" ? (
                      <Link
                        key={item}
                        to="/courses/web-development"
                        onClick={closeMobileMenu}
                        className="
                          block
                          w-full
                          px-5
                          py-2.5
                          text-left
                          text-sm
                          text-gray-700
                          transition
                          duration-200
                          hover:bg-gray-50
                          hover:text-[#1e1b6e]
                        "
                      >
                        {item}
                      </Link>
                    ) : (
                      /* =================================================
                         OTHER COURSES - EXISTING BUTTON
                      ================================================= */

                      <button
                        key={item}
                        type="button"
                        className="
                          block
                          w-full
                          px-5
                          py-2.5
                          text-left
                          text-sm
                          text-gray-700
                          transition
                          duration-200
                          hover:bg-gray-50
                          hover:text-[#1e1b6e]
                        "
                      >
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* CATEGORIES */}
            {/* ================================================= */}

            <div className="group relative">
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  text-[16px]
                  font-medium
                  text-gray-700
                  transition
                  duration-200
                  hover:text-[#1e1b6e]
                "
              >
                Categories
                <span className="text-[13px]">⌄</span>
              </button>

              {/* ================= DROPDOWN ================= */}

              <div className="absolute left-0 top-full hidden w-56 pt-4 group-hover:block">
                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-100
                    bg-white
                    py-2
                    shadow-xl
                  "
                >
                  {categoriesItems.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="
                        block
                        w-full
                        px-5
                        py-2.5
                        text-left
                        text-sm
                        text-gray-700
                        transition
                        duration-200
                        hover:bg-gray-50
                        hover:text-[#1e1b6e]
                      "
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* INSTRUCTORS */}
            {/* ================================================= */}

            <Link
              to="/instructors"
              className="
                whitespace-nowrap
                text-[16px]
                font-medium
                text-gray-700
                transition
                duration-200
                hover:text-[#1e1b6e]
              "
            >
              Instructors
            </Link>

            {/* ================================================= */}
            {/* ABOUT */}
            {/* ================================================= */}

            <Link
              to="/about"
              className="
                whitespace-nowrap
                text-[16px]
                font-medium
                text-gray-700
                transition
                duration-200
                hover:text-[#1e1b6e]
              "
            >
              About
            </Link>
            <Link
              to="/aboutus"
              className="
                block
                border-b
                border-gray-100
                py-3
                font-medium
                text-gray-700
              "
            >
              About US
            </Link>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE BUTTONS */}
          {/* ================================================= */}

          <div className="ml-auto hidden items-center gap-4 md:flex">
            {/* ================= CONTACT ================= */}

            <Link
              to="/contact"
              className="
                rounded-full
                bg-[#1e1b6e]
                px-7
                py-3
                text-[16px]
                font-semibold
                text-white
                transition
                duration-200
                hover:bg-[#171456]
              "
            >
              Contact
            </Link>

            {/* ================= LOGIN ================= */}

            <Link
              to="/login"
              className="
                rounded-full
                bg-[#1e1b6e]
                px-8
                py-3
                text-[16px]
                font-semibold
                text-white
                transition
                duration-200
                hover:bg-[#171456]
              "
            >
              Login
            </Link>
          </div>

          {/* ================================================= */}
          {/* MOBILE MENU BUTTON */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              ml-auto
              rounded-lg
              p-2
              text-2xl
              text-[#1e1b6e]
              md:hidden
            "
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ================================================= */}
        {/* MOBILE MENU */}
        {/* ================================================= */}

        {menuOpen && (
          <div
            className="
              border-t
              border-gray-200
              bg-white
              py-4
              md:hidden
            "
          >
            {/* ================= HOME ================= */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="
                block
                border-b
                border-gray-100
                py-3
                font-medium
                text-gray-700
              "
            >
              Home
            </Link>

            {/* ================================================= */}
            {/* MOBILE BROWSE COURSES */}
            {/* ================================================= */}

            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setCourseOpen(!courseOpen)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-3
                  font-medium
                  text-gray-700
                "
              >
                <span>Browse Courses</span>

                <span
                  className={`transition-transform duration-200 ${
                    courseOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {courseOpen && (
                <div className="pb-3 pl-4">
                  {browseCoursesItems.map((item) =>
                    /* =================================================
                       MOBILE WEB DEVELOPMENT LINK
                    ================================================= */

                    item === "Web Development" ? (
                      <Link
                        key={item}
                        to="/web-development"
                        onClick={closeMobileMenu}
                        className="
                          block
                          w-full
                          py-2
                          text-left
                          text-sm
                          text-gray-600
                          transition
                          hover:text-[#1e1b6e]
                        "
                      >
                        {item}
                      </Link>
                    ) : (
                      <button
                        key={item}
                        type="button"
                        onClick={closeMobileMenu}
                        className="
                          block
                          w-full
                          py-2
                          text-left
                          text-sm
                          text-gray-600
                          transition
                          hover:text-[#1e1b6e]
                        "
                      >
                        {item}
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* ================================================= */}
            {/* MOBILE CATEGORIES */}
            {/* ================================================= */}

            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-3
                  font-medium
                  text-gray-700
                "
              >
                <span>Categories</span>

                <span
                  className={`transition-transform duration-200 ${
                    categoryOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {categoryOpen && (
                <div className="pb-3 pl-4">
                  {categoriesItems.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={closeMobileMenu}
                      className="
                        block
                        w-full
                        py-2
                        text-left
                        text-sm
                        text-gray-600
                        transition
                        hover:text-[#1e1b6e]
                      "
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ================================================= */}
            {/* MOBILE INSTRUCTORS */}
            {/* ================================================= */}

            <Link
              to="/instructors"
              onClick={closeMobileMenu}
              className="
                block
                border-b
                border-gray-100
                py-3
                font-medium
                text-gray-700
              "
            >
              Instructors
            </Link>

            {/* ================================================= */}
            {/* MOBILE ABOUT */}
            {/* ================================================= */}

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="
                block
                border-b
                border-gray-100
                py-3
                font-medium
                text-gray-700
              "
            >
              About
            </Link>

            
            {/* ================================================= */}
            {/* MOBILE BUTTONS */}
            {/* ================================================= */}

            <div className="flex flex-col gap-3 pt-5 sm:flex-row">
              {/* CONTACT */}

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="
                  w-full
                  rounded-full
                  bg-[#1e1b6e]
                  px-6
                  py-3
                  text-center
                  font-medium
                  text-white
                  transition
                  hover:bg-[#171456]
                  sm:w-auto
                "
              >
                Contact
              </Link>

              {/* LOGIN */}

              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="
                  w-full
                  rounded-full
                  bg-[#1e1b6e]
                  px-6
                  py-3
                  text-center
                  font-medium
                  text-white
                  transition
                  hover:bg-[#171456]
                  sm:w-auto
                "
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
