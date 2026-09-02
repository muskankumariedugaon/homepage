import React from "react";

import tataLogo from "../assets/tata_treet.png";
import mcdermottLogo from "../assets/mcdermott.png";
import itcLogo from "../assets/itc_limited.png";
import amazonLogo from "../assets/amazon.png";
import sailLogo from "../assets/sail.png";
import ntpcLogo from "../assets/ntpc.png";
import sbiLifeLogo from "../assets/sbi_life.png";

const companies = [
  {
    name: "TATA STEEL",
    image: tataLogo,
    link: "https://www.tatasteel.com/",
  },
  {
    name: "MCDERMOTT",
    image: mcdermottLogo,
    link: "https://www.mcdermott.com/",
  },
  {
    name: "SBI Life",
    image: sbiLifeLogo,
    link: "https://www.sbilife.co.in/",
  },
  {
    name: "NTPC",
    image: ntpcLogo,
    link: "https://www.ntpc.co.in/",
  },
  {
    name: "SAIL",
    image: sailLogo,
    link: "https://www.sail.co.in/",
  },
  {
    name: "Amazon",
    image: amazonLogo,
    link: "https://www.amazon.in/",
  },
  {
    name: "ITC Limited",
    image: itcLogo,
    link: "https://www.itcportal.com/",
  },
];

function TopCompanies() {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-10 md:py-14">
      
      {/* Background dots */}
      <div className="absolute left-5 top-5 grid grid-cols-5 gap-2 opacity-30">
        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-blue-500"
          ></span>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center">

        {/* Small Heading */}
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-[2px] w-7 bg-blue-700"></span>

          <span className="text-xs font-bold tracking-[2px] text-blue-900">
            TOP COMPANIES
          </span>

          <span className="h-[2px] w-7 bg-blue-700"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl font-extrabold text-black md:text-4xl">
          Our Learners work at{" "}
          <span className="text-blue-800">Top Companies</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
          Our learners work at top companies around the world, using the
          skills they learned with us to succeed. They bring great results
          and make a real impact in their jobs.
        </p>

        {/* MARQUEE */}
        <div className="mt-8 overflow-hidden">
          <marquee
            behavior="scroll"
            direction="left"
            scrollAmount="5"
            onMouseOver={(e) => e.currentTarget.stop()}
            onMouseOut={(e) => e.currentTarget.start()}
          >
            <div className="flex gap-4 px-2">
              {[...companies, ...companies].map((company, index) => (
                <a
                  key={index}
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mx-2 inline-flex h-[110px] w-[145px] shrink-0 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={company.image}
                    alt={company.name}
                    className="max-h-[65px] max-w-[110px] object-contain transition duration-300 group-hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </marquee>
        </div>
      </div>
    </section>
  );
}

export default TopCompanies;