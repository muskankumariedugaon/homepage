import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRobot,
  FaClock,
  FaCertificate,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";

const sliderImages = [
  "/slider-1.png",
  "/slider-1.png",
  "/slider-1.png",
];

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

const AIDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ================= AUTO SLIDER =================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ================= PREVIOUS SLIDE =================

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  // ================= NEXT SLIDE =================

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: "Arimo, sans-serif",
      }}
    >
      <main className="bg-[#f8f9fc]">

        {/* ==================================================
            SLIDER SECTION
        ================================================== */}

        <section className="px-3 pt-5 sm:px-5 md:px-7 lg:px-9">

          <div
            className="
              relative
              mx-auto
              max-w-[1450px]
              overflow-hidden
              rounded-xl
              bg-[#0929b8]
              shadow-sm
              h-[180px]
              sm:h-[230px]
              md:h-[300px]
              lg:h-[370px]
            "
          >

            <img
              src={sliderImages[currentSlide]}
              alt={`AI Course Slider ${currentSlide + 1}`}
              className="
                h-full
                w-full
                object-cover
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
                bg-white
                text-[#000080]
                shadow-md
                transition-all
                duration-300
                hover:scale-110
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
                bg-white
                text-[#000080]
                shadow-md
                transition-all
                duration-300
                hover:scale-110
                sm:right-5
                sm:h-10
                sm:w-10
              "
            >
              <FaChevronRight className="text-xs sm:text-sm" />
            </button>

            {/* DOTS */}

            <div
              className="
                absolute
                bottom-3
                left-1/2
                flex
                -translate-x-1/2
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
                        : "w-2 bg-white/50"
                    }
                  `}
                />
              ))}
            </div>

          </div>

        </section>


        {/* ==================================================
            AI COURSE SECTION
        ================================================== */}

        <section className="px-3 py-2 sm:px-5 md:px-7 lg:px-9">

          <div
            className="
              mx-auto
              max-w-[1450px]
              overflow-hidden
              rounded-xl
              bg-gradient-to-br
              from-[#0a278f]
              via-[#0d319f]
              to-[#123bb7]
              px-5
              py-6
              sm:px-7
              sm:py-7
              md:px-9
              md:py-8
              lg:px-5
              lg:py-5
            "
          >

            <div
              className="
                grid
                items-center
                gap-5
                lg:grid-cols-[0.72fr_1.28fr]
              "
            >

              {/* ==================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="text-white">

                {/* BADGE */}

                <div
                  className="
                    mb-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-3
                    py-1.5
                    text-[9px]
                    font-medium
                    text-white
                  "
                >
                  <FaRobot className="text-[10px]" />

                  <span>
                    AI - COURSE
                  </span>
                </div>


                {/* HEADING */}

                <h1
                  className="
                    text-2xl
                    font-extrabold
                    leading-[1.08]
                    tracking-tight
                    text-white
                    sm:text-3xl
                    md:text-4xl
                    lg:text-[28px]
                    xl:text-[30px]
                  "
                >
                  Learn Artificial
                  <br />

                  Intelligence,
                  <br />

                  build{" "}
                  <span className="text-yellow-400">
                    real projects.
                  </span>
                </h1>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-3
                    max-w-[390px]
                    text-[10px]
                    leading-[1.55]
                    text-blue-100
                    sm:text-xs
                  "
                >
                  Learn AI from basics to advanced and build
                  real-world projects for your dream career —
                  guided by mentors who teach, ship & scale.
                </p>


                {/* COURSE DETAILS */}

                <div className="mt-4 space-y-2.5">

                  {/* DURATION */}

                  <div className="flex items-center gap-2.5">

                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-white/20
                        bg-white/10
                      "
                    >
                      <FaClock className="text-[10px]" />
                    </div>

                    <span className="text-[10px] sm:text-xs">
                      Duration — 3–4 Months
                    </span>

                  </div>


                  {/* CERTIFICATE */}

                  <div className="flex items-center gap-2.5">

                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-white/20
                        bg-white/10
                      "
                    >
                      <FaCertificate className="text-[10px]" />
                    </div>

                    <span className="text-[10px] sm:text-xs">
                      Certificate — Included
                    </span>

                  </div>


                  {/* LEVEL */}

                  <div className="flex items-center gap-2.5">

                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-white/20
                        bg-white/10
                      "
                    >
                      <FaChartBar className="text-[10px]" />
                    </div>

                    <span className="text-[10px] sm:text-xs">
                      Level — Beginner to Advanced
                    </span>

                  </div>

                </div>


                {/* BUTTONS */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-4
                  "
                >

                  <button
                    type="button"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-md
                      bg-yellow-400
                      px-4
                      py-2.5
                      text-[10px]
                      font-bold
                      text-gray-900
                      transition
                      duration-300
                      hover:bg-yellow-300
                    "
                  >
                    Explore Courses

                    <FaArrowRight className="text-[8px]" />
                  </button>


                  <button
                    type="button"
                    className="
                      border-b
                      border-white/60
                      pb-1
                      text-[10px]
                      font-semibold
                      text-white
                      transition
                      hover:border-white
                    "
                  >
                    Why learn with us
                  </button>

                </div>

              </div>


              {/* ==================================================
                  RIGHT IMAGE + LIVE BAR
              ================================================== */}

              <div className="w-full">

                {/* AI IMAGE */}

                <div
                  className="
                    relative
                    mx-auto
                    w-full
                    max-w-[700px]
                    overflow-hidden
                    rounded-lg
                    aspect-[16/10]
                    sm:aspect-[16/9]
                  "
                >

                  <img
                    src="/ai.png"
                    alt="Artificial Intelligence"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                  />

                </div>


                {/* SMALL LIVE BAR */}

                <div
                  className="
                    mx-auto
                    mt-1.5
                    flex
                    w-full
                    max-w-[700px]
                    items-center
                    gap-2
                    rounded-md
                    bg-white
                    px-2
                    py-1.5
                  "
                >

                  <span
                    className="
                      rounded
                      bg-[#143ac2]
                      px-1.5
                      py-0.5
                      text-[6px]
                      font-bold
                      text-white
                    "
                  >
                    LIVE
                  </span>

                  <span
                    className="
                      text-[7px]
                      font-medium
                      text-gray-700
                      sm:text-[8px]
                    "
                  >
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

        <section className="px-3 pb-12 pt-3 sm:px-5 md:px-7 lg:px-9">

          <div
            className="
              mx-auto
              max-w-[1450px]
              bg-white
              px-5
              py-7
              sm:px-8
            "
          >

            {/* HEADING */}

            <div className="flex items-center justify-center gap-3">

              <span
                className="
                  hidden
                  h-px
                  w-12
                  bg-gray-300
                  sm:block
                "
              />

              <div className="text-center">

                <p className="text-[9px] text-gray-500">
                  Placements Companies
                </p>

                <h2
                  className="
                    mt-1
                    text-sm
                    font-bold
                    text-[#000080]
                    sm:text-base
                  "
                >
                  Our Students Placed At Top Companies
                </h2>

              </div>

              <span
                className="
                  hidden
                  h-px
                  w-12
                  bg-gray-300
                  sm:block
                "
              />

            </div>


            {/* COMPANY IMAGES */}

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
                    h-[70px]
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-gray-100
                    p-3
                    transition
                    duration-300
                    hover:bg-gray-50
                  "
                >

                  <img
                    src={image}
                    alt={`Company ${index + 1}`}
                    className="
                      max-h-10
                      max-w-[110px]
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

export default AIDevelopment;