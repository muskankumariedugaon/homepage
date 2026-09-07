const items = [
  {
    title: "100% PRACTICAL",
    title2: "LEARNING",
    eyebrow: "LEARN BY DOING",
    text:
      "Learn through real-world digital marketing projects and campaigns.",
  },

  {
    title: "20+ REAL-WORLD",
    title2: "PROJECTS",
    eyebrow: "BUILD YOUR PORTFOLIO",
    text:
      "Build SEO audits, social media campaigns and marketing strategies.",
  },

  {
    title: "JOB-READY SKILLS",
    title2: "",
    eyebrow: "PREPARE FOR YOUR CAREER",
    text:
      "Develop the practical skills needed for jobs, freelancing and digital marketing careers.",
  },
];

export default function Highlights() {
  return (
    <section
      className="
        w-full
        bg-[#f8fafc]
        py-8
        sm:py-10
        md:py-11
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1050px]
          grid-cols-3
          gap-5
          px-8

          max-lg:gap-4
          max-lg:px-7

          max-md:grid-cols-1
          max-md:gap-4
          max-md:px-6

          max-sm:gap-4
          max-sm:px-5
        "
      >
        {items.map((item) => (
          <article
            key={item.title}
            className="
              min-h-[150px]
              rounded-[12px]
              border
              border-[#e3e8ef]
              bg-white
              p-6
              shadow-[0_4px_14px_rgba(15,23,42,.06)]
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-[0_8px_20px_rgba(15,23,42,.09)]

              max-lg:min-h-[145px]
              max-lg:p-5

              max-md:min-h-[140px]
              max-md:p-6

              max-sm:min-h-[135px]
              max-sm:p-5
            "
          >
            {/* Main Heading */}
            <h3
              className="
                heading-font
                text-[22px]
                font-extrabold
                leading-[1.08]
                tracking-[-0.3px]
                text-[#2563db]

                max-lg:text-[20px]

                max-md:text-[21px]

                max-sm:text-[19px]
              "
            >
              {item.title}

              {item.title2 && (
                <>
                  <br />
                  {item.title2}
                </>
              )}
            </h3>

            {/* Eyebrow */}
            <p
              className="
                mt-3
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.06em]
                text-[#27313e]

                max-lg:text-[10px]

                max-md:text-[11px]

                max-sm:text-[10px]
              "
            >
              {item.eyebrow}
            </p>

            {/* Description */}
            <p
              className="
                mt-2
                max-w-[310px]
                text-[12px]
                font-normal
                leading-[1.45]
                text-[#727985]

                max-lg:text-[11px]

                max-md:max-w-[500px]
                max-md:text-[12px]

                max-sm:text-[11px]
              "
            >
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}