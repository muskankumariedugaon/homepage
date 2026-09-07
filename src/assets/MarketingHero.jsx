import { ChevronRight, Heart } from "lucide-react";

const services = [
  "Business Automation",
  "Sales & Marketing Management",
  "Strategic Plan Development",
  "Network Management & more",
];

export default function Hero() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[250px]
        w-full
        overflow-hidden
        bg-[#1559db]
        text-white
      "
    >
      {/* =====================================================
          GEOMETRIC BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Left Big Shape */}
        <div
          className="
            absolute
            -left-[120px]
            -top-[150px]
            h-[380px]
            w-[380px]
            rotate-[40deg]
            border
            border-white/20
          "
        />

        {/* Left Middle Shape */}
        <div
          className="
            absolute
            left-[20px]
            -top-[190px]
            h-[470px]
            w-[470px]
            rotate-[40deg]
            border
            border-white/20
          "
        />

        {/* Center Shape */}
        <div
          className="
            absolute
            left-[280px]
            -top-[190px]
            h-[450px]
            w-[450px]
            rotate-[40deg]
            border
            border-white/25
          "
        />

        {/* Right Shape */}
        <div
          className="
            absolute
            right-[-140px]
            -top-[130px]
            h-[450px]
            w-[450px]
            rotate-[40deg]
            border
            border-white/25
          "
        />

        {/* Right Extra Shape */}
        <div
          className="
            absolute
            right-[30px]
            -top-[150px]
            h-[380px]
            w-[380px]
            rotate-[40deg]
            border
            border-white/20
          "
        />

        {/* Diagonal Lines */}

        <div
          className="
            absolute
            left-[25%]
            top-[-120px]
            h-[450px]
            w-[1px]
            rotate-[40deg]
            bg-white/10
          "
        />

        <div
          className="
            absolute
            left-[48%]
            top-[-120px]
            h-[450px]
            w-[1px]
            rotate-[40deg]
            bg-white/10
          "
        />

        <div
          className="
            absolute
            right-[25%]
            top-[-120px]
            h-[450px]
            w-[1px]
            rotate-[40deg]
            bg-white/10
          "
        />

      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[250px]
          max-w-[1050px]
          items-center
          justify-between
          gap-12
          px-8
          py-7

          max-lg:gap-8
          max-lg:px-7

          max-md:flex-col
          max-md:items-center
          max-md:justify-center
          max-md:gap-8
          max-md:py-9

          max-sm:gap-7
          max-sm:px-5
          max-sm:py-8
        "
      >

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div
          className="
            w-[50%]
            self-center

            max-md:w-full
            max-md:text-center
          "
        >

          {/* Main Heading */}

          <p
            className="
              max-w-[440px]
              text-[23px]
              font-medium
              leading-[1.18]
              tracking-[-0.3px]

              max-lg:text-[21px]

              max-md:mx-auto
              max-md:text-[20px]

              max-sm:text-[19px]
            "
          >
            Driving Your Digital Success
            <br />

            with Innovative Strategies &
            <br />

            Expert Execution
          </p>


          {/* Description */}

          <p
            className="
              mt-[25px]
              text-[17px]
              font-normal
              leading-[1.3]
              text-white

              max-lg:text-[16px]

              max-md:mt-[22px]
              max-md:text-[15px]

              max-sm:mt-[19px]
              max-sm:text-[14px]
            "
          >
            Reach out to us for expert digital
            <br />

            marketing solutions!
          </p>


          {/* Email */}

          <div
            className="
              mt-[13px]
              flex
              items-center
              gap-[11px]

              max-md:justify-center
            "
          >

            {/* Yellow Line */}

            <span
              className="
                block
                h-[42px]
                w-[5px]
                shrink-0
                bg-[#ffd900]

                max-sm:h-[38px]
              "
            />

            {/* Email Text */}

            <div
              className="
                text-[16px]
                leading-[1.35]
                text-white

                max-lg:text-[15px]

                max-md:text-[14px]

                max-sm:text-[13px]
              "
            >
              <div>
                hello@Edugaon.com
              </div>

              <div>
                edugaon.com
              </div>
            </div>

          </div>

        </div>


        {/* ===================================================
            SERVICES CARD
        ==================================================== */}

        <div
          className="
            w-[350px]
            shrink-0
            rounded-[20px]
            border
            border-white/50
            bg-gradient-to-br
            from-[#ffffff]
            via-[#f1f6fc]
            to-[#dce7f5]
            p-[11px]
            text-[#263444]
            shadow-[0_14px_35px_rgba(0,35,100,.30)]
            backdrop-blur

            max-lg:w-[330px]

            max-md:w-[340px]

            max-sm:w-full
            max-sm:max-w-[360px]
          "
        >

          {/* =================================================
              CARD HEADER
          ================================================== */}

          <div
            className="
              flex
              h-[42px]
              items-center
              justify-between
              rounded-[12px]
              bg-white/60
              px-[14px]
            "
          >

            <h2
              className="
                text-[18px]
                font-bold
                text-[#273547]

                max-lg:text-[17px]

                max-sm:text-[17px]
              "
            >
              Our Services
            </h2>

            <Heart
              size={19}
              strokeWidth={2.5}
              fill="#dce7f5"
              className="text-[#bfcfe4]"
            />

          </div>


          {/* =================================================
              SERVICE ITEMS
          ================================================== */}

          <div className="mt-[6px] space-y-[5px]">

            {services.map((service) => (
              <div
                key={service}
                className="
                  flex
                  min-h-[40px]
                  items-center
                  rounded-[9px]
                  border-b
                  border-[#d8dee7]
                  bg-white/95
                  px-[12px]
                  py-[7px]
                  text-[13px]
                  font-medium
                  leading-tight
                  text-[#394656]
                  shadow-[0_2px_7px_rgba(40,60,90,.08)]

                  max-lg:text-[12px]

                  max-sm:min-h-[42px]
                  max-sm:text-[12px]
                "
              >

                <ChevronRight
                  size={18}
                  strokeWidth={3}
                  className="
                    mr-[7px]
                    shrink-0
                    text-[#3177e6]
                  "
                />

                <span>
                  {service}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}