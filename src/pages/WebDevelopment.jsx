import React, { useEffect, useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaClock,
  FaCertificate,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";

// ======================================================
// SLIDER IMAGES
// ======================================================

const sliderImages = [
  "/banner1.jpeg",
  "/banner1.jpeg",
  "/banner1.jpeg",
];

// ======================================================
// COMPANY IMAGES
// ======================================================

const companyImages = [
  "/company4.jpeg",
  "/company2.jpeg",
  "/company3.jpeg",
  "/company4.jpeg",
  "/company5.jpeg",
  "/company6.jpeg",
  "/company2.jpeg",
  "/company5.jpeg",
];

const WebDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ======================================================
  // AUTO SLIDER
  // ======================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ======================================================
  // PREVIOUS SLIDE
  // ======================================================

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  // ======================================================
  // NEXT SLIDE
  // ======================================================

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  // ======================================================
  // EXPLORE COURSES
  // ======================================================

  const handleExploreCourses = () => {
    window.location.href = "/#courses";
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: "Arimo, sans-serif",
      }}
    >
      {/* ==================================================
          MAIN
      ================================================== */}

      <main className="bg-[#f8f9fc]">

        {/* ==================================================
            SLIDER SECTION
        ================================================== */}

        <section className="px-3 pt-5 sm:px-5 md:px-7 lg:px-9">

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[1450px]
              overflow-hidden
              rounded-2xl
              bg-white
              p-2
              shadow-md
              sm:p-3
              md:p-3
              lg:p-4
            "
          >

            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-xl
                bg-gray-100
                h-[170px]
                sm:h-[220px]
                md:h-[290px]
                lg:h-[360px]
                xl:h-[400px]
              "
            >

              <img
                src={sliderImages[currentSlide]}
                alt={`Web Development Banner ${currentSlide + 1}`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-700
                "
              />

              {/* LEFT ARROW */}

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="
                  absolute
                  left-3
                  top-1/2
                  flex
                  h-8
                  w-8
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/95
                  text-[#000080]
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-white
                  sm:left-5
                  sm:h-10
                  sm:w-10
                "
              >
                <FaChevronLeft className="text-xs sm:text-sm" />
              </button>

              {/* RIGHT ARROW */}

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-8
                  w-8
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/95
                  text-[#000080]
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-white
                  sm:right-5
                  sm:h-10
                  sm:w-10
                "
              >
                <FaChevronRight className="text-xs sm:text-sm" />
              </button>

              {/* SLIDER DOTS */}

              <div
                className="
                  absolute
                  bottom-3
                  left-1/2
                  flex
                  -translate-x-1/2
                  items-center
                  gap-2
                "
              >
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`
                      h-2
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        currentSlide === index
                          ? "w-7 bg-white"
                          : "w-2 bg-white/60"
                      }
                    `}
                  />
                ))}
              </div>

            </div>
          </div>

        </section>


        {/* ==================================================
            COURSE HERO SECTION
        ================================================== */}

        <section className="px-3 py-2 sm:px-5 md:px-7 lg:px-9">

          <div
            className="
              mx-auto
              max-w-[1450px]
              overflow-hidden
              rounded-2xl
              bg-gradient-to-br
              from-[#2446d4]
              via-[#2d4fda]
              to-[#3158e5]
              px-5
              py-7
              sm:px-7
              sm:py-8
              md:px-9
              md:py-9
              lg:px-8
              lg:py-8
            "
          >

            <div
              className="
                grid
                items-center
                gap-8
                lg:grid-cols-2
              "
            >

              {/* LEFT CONTENT */}

              <div>

                {/* COURSE TAG */}

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/10
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-white
                    sm:text-[9px]
                  "
                >
                  <FaCode />

                  <span>
                    Developer • Course
                  </span>
                </div>


                {/* HEADING */}

                <h1
                  className="
                    mt-4
                    max-w-xl
                    text-2xl
                    font-extrabold
                    leading-[1.15]
                    text-white
                    sm:text-3xl
                    md:text-4xl
                    lg:text-[38px]
                  "
                >
                  Learn Web Development,

                  <br />

                  <span className="text-yellow-300">
                    ship real projects.
                  </span>
                </h1>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    max-w-lg
                    text-[10px]
                    leading-4
                    text-blue-100
                    sm:text-xs
                    sm:leading-5
                    md:text-sm
                    md:leading-5
                  "
                >
                  Learn modern web development from scratch and
                  build real-world projects for your dream career —
                  guided by mentors who build, ship & scale.
                </p>


                {/* COURSE INFORMATION */}

                <div
                  className="
                    mt-5
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-3
                    sm:gap-4
                  "
                >

                  {/* DURATION */}

                  <div className="flex items-center gap-2 text-white">

                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        bg-white/10
                      "
                    >
                      <FaClock className="text-[10px]" />
                    </div>

                    <div>

                      <p className="text-[8px] text-blue-200">
                        Duration
                      </p>

                      <p className="text-[10px] font-semibold sm:text-xs">
                        3–4 Months
                      </p>

                    </div>

                  </div>


                  {/* CERTIFICATE */}

                  <div className="flex items-center gap-2 text-white">

                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        bg-white/10
                      "
                    >
                      <FaCertificate className="text-[10px]" />
                    </div>

                    <div>

                      <p className="text-[8px] text-blue-200">
                        Certificate
                      </p>

                      <p className="text-[10px] font-semibold sm:text-xs">
                        Included
                      </p>

                    </div>

                  </div>


                  {/* LEVEL */}

                  <div className="flex items-center gap-2 text-white">

                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        bg-white/10
                      "
                    >
                      <FaChartBar className="text-[10px]" />
                    </div>

                    <div>

                      <p className="text-[8px] text-blue-200">
                        Level
                      </p>

                      <p className="text-[10px] font-semibold sm:text-xs">
                        Beginner to Advanced
                      </p>

                    </div>

                  </div>

                </div>


                {/* BUTTONS */}

                <div
                  className="
                    mt-6
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:items-center
                  "
                >

                  {/* EXPLORE COURSES */}

                  <button
                    type="button"
                    onClick={handleExploreCourses}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-yellow-400
                      px-5
                      py-2.5
                      text-[10px]
                      font-bold
                      text-gray-900
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-yellow-300
                      hover:shadow-lg
                    "
                  >
                    Explore Courses

                    <FaArrowRight className="text-[8px]" />
                  </button>


                  {/* WHY LEARN */}

                  <button
                    type="button"
                    className="
                      border-b
                      border-white/60
                      px-1
                      py-2
                      text-[10px]
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:border-white
                    "
                  >
                    Why learn with us
                  </button>

                </div>

              </div>


              {/* CODE EDITOR */}

              <div className="hidden lg:block">

                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    bg-[#091225]
                    shadow-2xl
                  "
                >

                  {/* EDITOR TOP BAR */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/5
                      bg-[#101a30]
                      px-4
                      py-3
                    "
                  >

                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />

                    <span className="ml-3 text-[9px] text-gray-500">
                      index.html
                    </span>

                  </div>


                  {/* CODE */}

                  <div
                    className="
                      min-h-[250px]
                      px-5
                      py-5
                      font-mono
                      text-[9px]
                      leading-5
                      text-gray-300
                    "
                  >

                    <p>
                      <span className="text-pink-400">
                        &lt;!DOCTYPE
                      </span>{" "}

                      <span className="text-green-300">
                        html
                      </span>

                      <span className="text-pink-400">
                        &gt;
                      </span>
                    </p>

                    <p>
                      <span className="text-pink-400">
                        &lt;html&gt;
                      </span>
                    </p>

                    <p className="pl-4">
                      <span className="text-pink-400">
                        &lt;head&gt;
                      </span>
                    </p>

                    <p className="pl-8">
                      <span className="text-pink-400">
                        &lt;title&gt;
                      </span>

                      <span className="text-yellow-300">
                        Web Development
                      </span>

                      <span className="text-pink-400">
                        &lt;/title&gt;
                      </span>
                    </p>

                    <p className="pl-8">
                      <span className="text-pink-400">
                        &lt;meta
                      </span>{" "}

                      <span className="text-blue-300">
                        charset
                      </span>

                      =

                      <span className="text-green-300">
                        "utf-8"
                      </span>

                      <span className="text-pink-400">
                        &gt;
                      </span>
                    </p>

                    <p className="pl-8">
                      <span className="text-pink-400">
                        &lt;link
                      </span>{" "}

                      <span className="text-blue-300">
                        rel
                      </span>

                      =

                      <span className="text-green-300">
                        "stylesheet"
                      </span>
                    </p>

                    <p className="pl-12">
                      <span className="text-blue-300">
                        href
                      </span>

                      =

                      <span className="text-green-300">
                        "style.css"
                      </span>

                      <span className="text-pink-400">
                        &gt;
                      </span>
                    </p>

                    <p className="pl-4">
                      <span className="text-pink-400">
                        &lt;/head&gt;
                      </span>
                    </p>

                    <p>
                      <span className="text-pink-400">
                        &lt;body&gt;
                      </span>
                    </p>

                    <p className="pl-8">
                      <span className="text-pink-400">
                        &lt;h1&gt;
                      </span>

                      <span className="text-yellow-300">
                        Build. Learn. Grow.
                      </span>

                      <span className="text-pink-400">
                        &lt;/h1&gt;
                      </span>
                    </p>

                    <p className="pl-8">
                      <span className="text-pink-400">
                        &lt;p&gt;
                      </span>

                      <span className="text-green-300">
                        Your future in tech starts here.
                      </span>

                      <span className="text-pink-400">
                        &lt;/p&gt;
                      </span>
                    </p>

                    <p className="pl-4">
                      <span className="text-pink-400">
                        &lt;/body&gt;
                      </span>
                    </p>

                    <p>
                      <span className="text-pink-400">
                        &lt;/html&gt;
                      </span>
                    </p>

                  </div>

                </div>


                {/* LIVE PROJECT BAR */}

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    bg-white
                    px-3
                    py-2.5
                  "
                >

                  <span
                    className="
                      rounded-md
                      bg-[#000080]
                      px-2
                      py-1
                      text-[7px]
                      font-bold
                      text-white
                    "
                  >
                    LIVE
                  </span>

                  <span className="text-[9px] text-gray-600">
                    Your first project session is live now! 🚀
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
            PLACEMENT COMPANIES
        ================================================== */}

        <section className="px-3 pb-12 sm:px-5 md:px-7 lg:px-9">

          <div
            className="
              mx-auto
              max-w-[1450px]
              bg-white
              px-5
              py-6
              sm:px-8
              sm:py-7
            "
          >

            {/* PLACEMENT HEADING */}

            <div className="flex items-center justify-center gap-3">

              <span
                className="
                  hidden
                  h-px
                  w-10
                  bg-gray-300
                  sm:block
                "
              />

              <div className="text-center">

                <p className="text-[13px] text-gray-500 sm:text-[14px]">
                  Placements Companies
                </p>

                <h2
                  className="
                    mt-1
                    text-lg
                    font-bold
                    text-gray-800
                    sm:text-lg
                  "
                >
                  Our Students Placed At Top Companies
                </h2>

              </div>

              <span
                className="
                  hidden
                  h-px
                  w-10
                  bg-gray-300
                  sm:block
                "
              />

            </div>


            {/* ==================================================
                COMPANY LOGOS
            ================================================== */}

            <div
              className="
                mx-auto
                mt-5
                grid
                max-w-6xl
                grid-cols-2
                overflow-hidden
                rounded-xl
                border
                border-gray-100
                bg-white
                sm:grid-cols-4
                lg:grid-cols-8
              "
            >

              {companyImages.map((image, index) => (

                <div
                  key={index}
                  className="
                    flex
                    h-[100px]
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-gray-100
                    p-5
                    transition
                    duration-300
                    hover:bg-gray-50
                    sm:h-[115px]
                  "
                >

                  <img
                    src={image}
                    alt={`Company Logo ${index + 1}`}
                    className="
                      max-h-20
                      max-w-[180px]
                      w-auto
                      object-contain
                    "
                  />

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default WebDevelopment;