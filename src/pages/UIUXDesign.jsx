import React, { useEffect, useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaPalette,
  FaClock,
  FaCertificate,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";


// ======================================================
// SLIDER IMAGES
// ======================================================

const sliderImages = [
  "/slider-1.png",
  "/slider-1.png",
  "/slider-1.png",
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


// ======================================================
// COURSE DETAILS
// ======================================================

const courseInfo = [
  {
    icon: <FaClock />,
    title: "Duration",
    value: "3–4 Months",
  },
  {
    icon: <FaCertificate />,
    title: "Certificate",
    value: "Included",
  },
  {
    icon: <FaChartBar />,
    title: "Level",
    value: "Beginner to Advanced",
  },
];


// ======================================================
// MAIN COMPONENT
// ======================================================

const UIUXDesign = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  // ====================================================
  // AUTO SLIDER
  // ====================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === sliderImages.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  // ====================================================
  // PREVIOUS SLIDE
  // ====================================================

  const previousSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return sliderImages.length - 1;
      }

      return prev - 1;
    });
  };


  // ====================================================
  // NEXT SLIDE
  // ====================================================

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === sliderImages.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };


  // ====================================================
  // EXPLORE COURSES
  // ====================================================

  const handleExploreCourses = () => {
    window.location.href = "/#courses";
  };


  // ====================================================
  // JSX
  // ====================================================

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: "Arimo, sans-serif",
      }}
    >

      <main className="bg-[#f8f9fc]">


        {/* ==================================================
            TOP SLIDER
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
                alt="UI UX Design Slider"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-700
                "
              />


              {/* PREVIOUS BUTTON */}

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
                <FaChevronLeft />
              </button>


              {/* NEXT BUTTON */}

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
                <FaChevronRight />
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
                    aria-label={`Slide ${index + 1}`}
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
            UI / UX HERO
        ================================================== */}

        <section className="px-3 py-2 sm:px-5 md:px-7 lg:px-9">

          <div
            className="
              mx-auto
              max-w-[1450px]
              overflow-hidden
              rounded-2xl

              bg-gradient-to-br
              from-[#082b92]
              via-[#0738b8]
              to-[#0b45d8]

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


              {/* ==================================================
                  LEFT CONTENT
              ================================================== */}

              <div>

                {/* COURSE BADGE */}

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

                  <FaPalette />

                  <span>
                    UI/UX DESIGN • COURSE
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

                  Learn UI/UX Design,

                  <br />

                  <span className="text-yellow-300">
                    build real projects.
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

                  Learn UI/UX design from basics to advanced
                  and build real-world projects for your dream
                  career — guided by mentors who teach,
                  ship & scale.

                </p>


                {/* COURSE DETAILS */}

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

                  {courseInfo.map((item, index) => (

                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        gap-2
                        text-white
                      "
                    >

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-white/30
                          bg-white/10
                        "
                      >

                        <span className="text-[10px]">
                          {item.icon}
                        </span>

                      </div>


                      <div>

                        <p
                          className="
                            text-[8px]
                            text-blue-200
                          "
                        >
                          {item.title}
                        </p>

                        <p
                          className="
                            text-[10px]
                            font-semibold
                            sm:text-xs
                          "
                        >
                          {item.value}
                        </p>

                      </div>

                    </div>

                  ))}

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


                  <button
                    type="button"
                    className="
                      w-fit
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



              {/* ==================================================
                  RIGHT UI UX IMAGE
              ================================================== */}

              <div className="w-full min-w-0">

                {/* 
                  IMPORTANT:
                  Yahan koi background box nahi hai.
                  Sirf image hai.
                */}

                <div
                  className="
                    relative
                    w-full
                    overflow-hidden

                    aspect-[16/10]

                    sm:aspect-[16/9]

                    lg:aspect-[16/10]

                    xl:aspect-[16/9]
                  "
                >

                  <img
                    src="/uiux.png"
                    alt="UI UX Design Project"
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


                {/* LIVE STRIP */}

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


                  <span
                    className="
                      text-[9px]
                      text-gray-600
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

        <section
          className="
            px-3
            pb-12

            sm:px-5
            md:px-7
            lg:px-9
          "
        >

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

            {/* SECTION HEADING */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
              "
            >

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

                <p
                  className="
                    text-[13px]
                    text-gray-500

                    sm:text-[14px]
                  "
                >
                  Placements Companies
                </p>


                <h2
                  className="
                    mt-1
                    text-lg
                    font-bold
                    text-gray-800
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


            {/* COMPANY LOGOS */}

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


// ======================================================
// DEFAULT EXPORT
// ======================================================

export default UIUXDesign;