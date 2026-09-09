import { useState } from "react";
import {
  BookOpen,
  Search,
  GraduationCap,
} from "lucide-react";

function UserCourses() {
  const [search, setSearch] = useState("");

  // Abhi courses backend/database se nahi aa rahe.
  // Baad mein yahin actual courses connect karenge.
  const courses = [];

  const filteredCourses = courses.filter((course) =>
    `${course.title || ""} ${course.category || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFFAFA] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#000080] sm:text-3xl">
            My Courses
          </h1>

          <p className="mt-1 text-sm text-[#6D8196]">
            View and manage your enrolled courses.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-[#6D8196]">
                  Total Courses
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#000080]">
                  {courses.length}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ADD8E6]/30">
                <BookOpen className="h-6 w-6 text-[#000080]" />
              </div>

            </div>
          </div>

          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-[#6D8196]">
                  Learning Status
                </p>

                <h2 className="mt-2 text-xl font-bold text-[#000080]">
                  Not Started
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ADD8E6]/30">
                <GraduationCap className="h-6 w-6 text-[#000080]" />
              </div>

            </div>
          </div>

        </div>

        {/* Search */}
        <div className="mb-6 rounded-2xl border border-[#ADD8E6]/50 bg-white p-4 shadow-sm">

          <div className="relative">

            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6D8196]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your courses..."
              className="w-full rounded-xl border border-[#6D8196]/20 bg-[#FFFAFA] py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#000080]"
            />

          </div>
        </div>

        {/* Courses */}
        {filteredCourses.length === 0 ? (
          <div className="rounded-2xl border border-[#ADD8E6]/50 bg-white px-6 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ADD8E6]/30">
              <BookOpen className="h-8 w-8 text-[#000080]" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#000080]">
              No Courses Yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#6D8196]">
              You haven't enrolled in any courses yet.
              Your enrolled courses will appear here.
            </p>

            <button
              type="button"
              onClick={() => {
                window.location.href = "/";
              }}
              className="mt-6 rounded-xl bg-[#000080] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#000060]"
            >
              Explore Courses
            </button>

          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="overflow-hidden rounded-2xl border border-[#ADD8E6]/50 bg-white shadow-sm"
              >

                <div className="flex h-40 items-center justify-center bg-[#ADD8E6]/20">
                  <BookOpen className="h-12 w-12 text-[#000080]" />
                </div>

                <div className="p-5">

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#6D8196]">
                    {course.category || "Course"}
                  </p>

                  <h3 className="mt-2 font-bold text-[#000080]">
                    {course.title}
                  </h3>

                  <button
                    type="button"
                    className="mt-5 w-full rounded-xl bg-[#000080] py-3 text-sm font-semibold text-white transition hover:bg-[#000060]"
                  >
                    Continue Learning
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default UserCourses;