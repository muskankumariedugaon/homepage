export default function CTA() {
  return (
    <section
      className="
        w-full
        px-8
        pb-16
        pt-3

        max-md:px-6
        max-md:pb-14

        max-sm:px-5
        max-sm:pb-12
        max-sm:pt-2
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[310px]
          max-w-[1050px]
          items-center
          justify-center
          rounded-[16px]
          bg-[#0d5cad]
          px-8
          py-14
          text-center
          text-white
          shadow-[0_10px_30px_rgba(13,92,173,.16)]

          max-lg:min-h-[290px]
          max-lg:px-7
          max-lg:py-12

          max-md:min-h-[280px]
          max-md:px-6
          max-md:py-11

          max-sm:min-h-[270px]
          max-sm:rounded-[13px]
          max-sm:px-5
          max-sm:py-10
        "
      >
        <div className="w-full">

          {/* ================= EYEBROW ================= */}
          <p
            className="
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.12em]
              text-white/90

              max-md:text-[10px]
              max-sm:text-[9px]
            "
          >
            READY TO EXECUTE
          </p>

          {/* ================= HEADING ================= */}
          <h2
            className="
              heading-font
              mt-4
              text-[34px]
              font-extrabold
              leading-[1.12]
              tracking-[-0.5px]
              text-white

              max-lg:text-[31px]
              max-md:text-[28px]
              max-sm:mt-3
              max-sm:text-[23px]
            "
          >
            Start Your Digital Marketing Career
          </h2>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="
              mx-auto
              mt-4
              max-w-[700px]
              text-[14px]
              font-normal
              leading-[1.5]
              text-white/75

              max-md:max-w-[600px]
              max-md:text-[13px]

              max-sm:mt-3
              max-sm:max-w-[340px]
              max-sm:text-[11px]
            "
          >
            Secure your seat in cohort 12. Join principal growth
            marketers from world-leading platforms.
          </p>

          {/* ================= BUTTONS ================= */}
          <div
            className="
              mt-7
              flex
              flex-wrap
              justify-center
              gap-3

              max-sm:mt-6
              max-sm:gap-2.5
            "
          >
            {/* Primary Button */}
            <a
              href="#"
              className="
                inline-flex
                min-h-[46px]
                items-center
                justify-center
                rounded-full
                bg-white
                px-7
                py-3
                text-[13px]
                font-bold
                text-[#1d65c9]
                shadow-[0_4px_12px_rgba(0,0,0,.10)]
                transition-all
                duration-200
                hover:scale-[1.03]
                hover:shadow-[0_6px_16px_rgba(0,0,0,.15)]

                max-md:min-h-[44px]
                max-md:px-6
                max-md:text-[12px]

                max-sm:min-h-[42px]
                max-sm:px-5
                max-sm:text-[11px]
              "
            >
              Apply For Pathway
            </a>

            {/* Secondary Button */}
            <a
              href="#"
              className="
                inline-flex
                min-h-[46px]
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                px-7
                py-3
                text-[13px]
                font-bold
                text-white/90
                transition-all
                duration-200
                hover:border-white/60
                hover:bg-white/10

                max-md:min-h-[44px]
                max-md:px-6
                max-md:text-[12px]

                max-sm:min-h-[42px]
                max-sm:px-5
                max-sm:text-[11px]
              "
            >
              Talk To Advisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}