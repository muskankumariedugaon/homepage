import React from "react";
import hero from "../assets/Students.jpeg";

function Hero() {
  return (
    <section className="bg-[#f5f3f5]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[355px] items-center gap-8 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[520px]">

            <h1 className="text-[30px] font-bold leading-[1.05] text-black sm:text-[36px] lg:text-[40px]">
              Transform{" "}
              <span className="text-[#08088a]">your</span>{" "}
              Future,
              <br />
              Through{" "}
              <span className="text-[#08088a]">Learning</span>
            </h1>

            {/* BLUE UNDERLINE */}
            <div className="mt-2 h-1.5 w-[70px] rounded-full bg-[#08088a]" />

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-[430px] text-[15px] leading-tight text-gray-800 sm:text-[16px]">
              Join a community of passionate learners and gain the knowledge
              and skills that shape successful careers.
            </p>

            {/* BUTTON */}
            <button
              type="button"
              className="mt-5 flex items-center gap-2 rounded-xl bg-[#08088a] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#05056c]"
            >
              Explore all Courses
              <span className="text-xl leading-none">→</span>
            </button>
          </div>

          {/* ================= RIGHT IMAGE AREA ================= */}
          <div className="relative flex min-h-[320px] items-center justify-center">

            {/* STUDENT IMAGE */}
            <img
              src={hero}
              alt="Students learning"
              className="relative z-10 w-[300px] object-contain sm:w-[350px] lg:w-[390px]"
            />

            {/* ================= TOP LEFT CARD ================= */}
            <div className="absolute left-[3%] top-[45px] z-20 flex w-[120px] items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-md">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1684bd] text-xs text-white">
                ★
              </div>

              <div>
                <p className="text-[7px] font-bold text-gray-800">
                  Learn from Top
                </p>

                <p className="text-[6px] text-gray-500">
                  Industry experts, here to
                  <br />
                  guide you
                </p>
              </div>
            </div>

            {/* ================= TOP RIGHT CARD ================= */}
            <div className="absolute right-[0%] top-[78px] z-20 flex w-[115px] items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-md">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1684bd] text-xs text-white">
                ✓
              </div>

              <div>
                <p className="text-[7px] font-bold text-gray-800">
                  Student First
                </p>

                <p className="text-[6px] text-gray-500">
                  Personalized support
                  <br />
                  for every learner
                </p>
              </div>
            </div>

            {/* ================= ACHIEVEMENT CARD ================= */}
            <div className="absolute right-[0%] top-[175px] z-20 flex w-[120px] items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-md">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1684bd] text-xs text-white">
                ★
              </div>

              <div>
                <p className="text-[7px] font-bold text-gray-800">
                  Achievement More
                </p>

                <p className="text-[6px] text-gray-500">
                  Build skills, earn
                  <br />
                  certificates, shape your
                  <br />
                  future
                </p>
              </div>
            </div>

            {/* ================= BOTTOM LARGE CARD ================= */}
            <div className="absolute bottom-[5px] left-[8%] right-[3%] z-20 flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-md">

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1684bd] text-sm text-white">
                  📖
                </div>

                <div>
                  <p className="text-[8px] font-bold text-gray-800">
                    Education that Empowers
                  </p>

                  <p className="text-[6px] text-gray-500">
                    Affordable. Accessible. Impactful
                  </p>
                </div>
              </div>

              <div className="mx-3 h-8 w-px bg-gray-300" />

              <div>
                <p className="text-[8px] font-bold text-gray-800">
                  Join thousand Of Learners
                </p>

                <p className="text-[6px] text-gray-500">
                  Growing Every day!
                </p>
              </div>
            </div>

            {/* ================= DECORATIVE ICONS ================= */}

            <span className="absolute left-[5%] top-[125px] z-20 text-xl">
              📖
            </span>

            <span className="absolute bottom-[55px] left-[10%] z-20 text-xl">
              💡
            </span>

            <span className="absolute right-[15%] top-[25px] z-20 text-xl">
              💡
            </span>

            <span className="absolute right-[8%] top-[125px] z-20 text-xl">
              📖
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;