import trustedLogos from "../assets/trusted-logos.png";

export default function MarketingTrusted() {
  return (
    <section
      className="
        w-full
        border-b
        border-[#eef1f5]
        bg-white
        py-12

        max-md:py-10
        max-sm:py-9
      "
    >
      <div
        className="
          mx-auto
          max-w-[1200px]
          px-6
          text-center

          max-md:px-5
          max-sm:px-4
        "
      >
        {/* Heading */}
        <p
          className="
            text-[13px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#969da8]

            max-md:text-[12px]
            max-sm:text-[10px]
          "
        >
          Trusted by learners & growth-led AI
        </p>

        {/* LARGE LOGOS IMAGE */}
        <img
          src={trustedLogos}
          alt="Google Microsoft Amazon Meta Netflix"
          className="
            mx-auto
            mt-7
            h-[120px]
            w-auto
            max-w-[1150px]
            object-contain

            max-lg:h-[105px]
            max-lg:max-w-[1000px]

            max-md:mt-6
            max-md:h-[90px]
            max-md:max-w-[95%]

            max-sm:mt-5
            max-sm:h-[70px]
            max-sm:max-w-[100%]
          "
        />
      </div>
    </section>
  );
}