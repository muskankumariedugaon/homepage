import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const browseCoursesItems = [
  ["All Courses", "#"],
  ["Web Development", "/courses/web-development"],
  ["Frontend Development", "/courses/frontend-development"],
  ["Backend Development", "/courses/backend-development"],
["Full Stack", "/courses/full-stack"],
  ["Python", "/courses/python"],
  ["Java", "/courses/java"],
 ["Data Science", "/courses/data-science"],
  ["UI/UX Design", "/courses/ui-ux-design"],
  ["Artificial Intelligence", "/courses/ai-development"],
];

const categoriesItems = [
    ["Programming", "/categories/programming"],
  ["Design", "/categories/design"],
  ["Business", "/categories/business"],
  ["Marketing", "/categories/marketing"],
  ["Cloud Computing", "/categories/cloud-computing"],
  ["Cyber Security", "/categories/cyber-security"],
];

const navLinks = [
  ["Home", "/"],
  ["Instructors", "/instructors"],
  ["About", "/about"],
];

const buttonClass =
  "rounded-full bg-[#1e1b6e] px-7 py-3 text-[16px] font-semibold text-white transition duration-200 hover:bg-[#171456]";

const desktopItemClass =
  "block w-full px-5 py-2.5 text-left text-sm text-gray-700 transition duration-200 hover:bg-gray-50 hover:text-[#1e1b6e]";

const mobileItemClass =
  "block w-full py-2 text-left text-sm text-gray-600 transition hover:text-[#1e1b6e]";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setCourseOpen(false);
    setCategoryOpen(false);
  };

  // ================= DROPDOWN ITEMS =================

  const CourseItems = ({ mobile = false }) => (
    <>
      {browseCoursesItems.map(([item, path]) =>
        path !== "#" ? (
          <Link
            key={item}
            to={path}
            onClick={closeMenu}
            className={mobile ? mobileItemClass : desktopItemClass}
          >
            {item}
          </Link>
        ) : (
          <button
            key={item}
            type="button"
            onClick={mobile ? closeMenu : undefined}
            className={mobile ? mobileItemClass : desktopItemClass}
          >
            {item}
          </button>
        )
      )}
    </>
  );

  const CategoryItems = ({ mobile = false }) => (
    <>
      {categoriesItems.map(([item, path]) => (
        <Link
          key={item}
          to={path}
          onClick={mobile ? closeMenu : undefined}
          className={mobile ? mobileItemClass : desktopItemClass}
        >
          {item}
        </Link>
      ))}
    </>
  );

  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-10">

        {/* ================= NAVBAR ================= */}

        <div className="flex h-[88px] items-center">

          {/* LOGO */}
          <Link to="/" onClick={closeMenu} className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="NextGen Academy"
              className="h-[97px] w-auto object-contain sm:h-[100px] md:h-[110px]"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}

          <div className="ml-12 hidden items-center gap-9 md:flex">

            {/* HOME */}
            <Link
              to="/"
              className="whitespace-nowrap text-[16px] font-medium text-gray-700 transition duration-200 hover:text-[#1e1b6e]"
            >
              Home
            </Link>

            {/* BROWSE COURSES */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 whitespace-nowrap text-[16px] font-medium text-gray-700 transition duration-200 hover:text-[#1e1b6e]"
              >
                Browse Courses <span className="text-[13px]">⌄</span>
              </button>

              <div className="absolute left-0 top-full hidden w-64 pt-4 group-hover:block">
                <div className="overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                  <CourseItems />
                </div>
              </div>
            </div>

            {/* CATEGORIES */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 whitespace-nowrap text-[16px] font-medium text-gray-700 transition duration-200 hover:text-[#1e1b6e]"
              >
                Categories <span className="text-[13px]">⌄</span>
              </button>

              <div className="absolute left-0 top-full hidden w-56 pt-4 group-hover:block">
                <div className="overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                  <CategoryItems />
                </div>
              </div>
            </div>

            {/* OTHER LINKS */}
            {navLinks.slice(1).map(([name, path]) => (
              <Link
                key={name}
                to={path}
                className="whitespace-nowrap text-[16px] font-medium text-gray-700 transition duration-200 hover:text-[#1e1b6e]"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* ================= DESKTOP BUTTONS ================= */}

          <div className="ml-auto hidden items-center gap-4 md:flex">
            {["Contact", "Login"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={item === "Login" ? buttonClass.replace("px-7", "px-8") : buttonClass}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto rounded-lg p-2 text-2xl text-[#1e1b6e] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (
          <div className="border-t border-gray-200 bg-white py-4 md:hidden">

            {/* HOME */}
            <Link
              to="/"
              onClick={closeMenu}
              className="block border-b border-gray-100 py-3 font-medium text-gray-700"
            >
              Home
            </Link>

            {/* BROWSE COURSES */}
            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setCourseOpen(!courseOpen)}
                className="flex w-full items-center justify-between py-3 font-medium text-gray-700"
              >
                Browse Courses

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
                  <CourseItems mobile />
                </div>
              )}
            </div>

            {/* CATEGORIES */}
            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="flex w-full items-center justify-between py-3 font-medium text-gray-700"
              >
                Categories

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
                  <CategoryItems mobile />
                </div>
              )}
            </div>

            {/* INSTRUCTORS + ABOUT */}
            {navLinks.slice(1).map(([name, path]) => (
              <Link
                key={name}
                to={path}
                onClick={closeMenu}
                className="block border-b border-gray-100 py-3 font-medium text-gray-700"
              >
                {name}
              </Link>
            ))}

            {/* MOBILE BUTTONS */}
            <div className="flex flex-col gap-3 pt-5 sm:flex-row">
              {["Contact", "Login"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="w-full rounded-full bg-[#1e1b6e] px-6 py-3 text-center font-medium text-white transition hover:bg-[#171456] sm:w-auto"
                >
                  {item}
                </Link>
              ))}
            </div>

          </div>
        )}
      </div>
    </nav>
  );
}