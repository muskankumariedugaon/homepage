import {
  MapPin,
  Phone,
  Mail,
  Clock,
  GraduationCap,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="w-full bg-[#030b3b] text-white">

      {/* ================= FOOTER CONTENT ================= */}

      <div className="max-w-[1180px] mx-auto px-8 py-7">

        <div className="grid grid-cols-4 gap-8">

          {/* ================= BRAND ================= */}

          <div>

            <div className="flex items-center gap-1.5">

              <GraduationCap
                size={39}
                className="text-[#57c5f3]"
                strokeWidth={1.5}
              />

              <h2 className="text-[17px] font-medium">
                NextGenAcademy
              </h2>

            </div>


            <p className="mt-3 text-[10px] leading-[1.5] text-gray-300">
              India's Largest Offline
              <br />
              Learning Network
            </p>


            <p className="mt-3 text-[10px] leading-[1.5] text-gray-300">
              Empowering learners across India with
              <br />
              tech-enabled offline education. Quality
              <br />
              learning, real results.
            </p>


            {/* ================= SOCIAL ICONS ================= */}

            <div className="flex gap-3 mt-4">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-[#63718c] flex items-center justify-center hover:border-[#43bde9] hover:text-[#43bde9] transition"
              >
                <FaFacebookF size={13} />
              </a>


              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-[#63718c] flex items-center justify-center hover:border-[#43bde9] hover:text-[#43bde9] transition"
              >
                <FaInstagram size={14} />
              </a>


              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-[#63718c] flex items-center justify-center hover:border-[#43bde9] hover:text-[#43bde9] transition"
              >
                <FaYoutube size={14} />
              </a>


              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-[#63718c] flex items-center justify-center hover:border-[#43bde9] hover:text-[#43bde9] transition"
              >
                <FaLinkedinIn size={13} />
              </a>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-[10px] text-[#43bde9] font-medium">
              QUICK LINKS
            </h3>

            <div className="w-7 h-[2px] bg-[#39758d] mt-2 mb-4"></div>


            <Link
              to="/"
              className="block text-[10px] text-gray-300 mb-2.5 hover:text-[#43bde9] transition"
            >
              Home
            </Link>


            <Link
              to="/about"
              className="block text-[10px] text-gray-300 mb-2.5 hover:text-[#43bde9] transition"
            >
              About Us
            </Link>


            <Link
              to="/courses/web-development"
              className="block text-[10px] text-gray-300 mb-2.5 hover:text-[#43bde9] transition"
            >
              Courses
            </Link>


            <Link
              to="/instructors"
              className="block text-[10px] text-white hover:text-[#43bde9] transition"
            >
              Contact Us
            </Link>

          </div>


          {/* ================= COURSES ================= */}

          <div>

            <h3 className="text-[10px] text-[#43bde9] font-medium">
              COURSES
            </h3>

            <div className="w-7 h-[2px] bg-[#43bde9] mt-2 mb-4"></div>


            <Link
              to="/courses/java"
              className="block text-[10px] mb-2.5 hover:text-[#43bde9] transition"
            >
              Java
            </Link>


            <Link
              to="/courses/frontend-development"
              className="block text-[10px] mb-2.5 hover:text-[#43bde9] transition"
            >
              Frontend Development
            </Link>


            <Link
              to="/courses/backend-development"
              className="block text-[10px] mb-2.5 hover:text-[#43bde9] transition"
            >
              Backend Development
            </Link>


            <Link
              to="/courses/full-stack"
              className="block text-[10px] mb-2.5 hover:text-[#43bde9] transition"
            >
              Full Stack Developer
            </Link>


            <Link
              to="/courses/python"
              className="block text-[10px] hover:text-[#43bde9] transition"
            >
              Python
            </Link>

          </div>


          {/* ================= SUPPORT ================= */}

          <div>

            <h3 className="text-[10px] text-[#43bde9] font-medium">
              SUPPORT
            </h3>

            <div className="w-7 h-[2px] bg-[#43bde9] mt-2 mb-4"></div>


            <a
              href="#help-center"
              className="block text-[10px] mb-2.5 hover:text-[#43bde9] transition"
            >
              Help Center
            </a>


            <a
              href="#study-material"
              className="block text-[10px] mb-2.5 hover:text-[#43bde9] transition"
            >
              Study Material
            </a>


            <a
              href="#privacy"
              className="block text-[10px] mb-2.5 hover:text-[#43bde9] transition"
            >
              Privacy policy
            </a>


            <a
              href="#terms"
              className="block text-[10px] mb-2.5 hover:text-[#43bde9] transition"
            >
              Terms
            </a>


            <a
              href="#refund"
              className="block text-[10px] hover:text-[#43bde9] transition"
            >
              Refund Policy
            </a>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="border-t border-[#102451] mt-5"></div>


        {/* ================= CONTACT INFORMATION ================= */}

        <div className="grid grid-cols-4 mt-4">

          {/* ADDRESS */}

          <div className="flex gap-2 border-r border-[#142653] pr-4">

            <div className="w-7 h-7 rounded-full border border-[#31577d] flex items-center justify-center shrink-0">

              <MapPin
                size={14}
                className="text-[#43bde9]"
              />

            </div>


            <div>

              <h4 className="text-[7px] text-[#43bde9]">
                ADDRESS
              </h4>

              <p className="text-[7px] leading-[1.5] text-gray-300 mt-1">
                EDUCATION SCHOOL OF TECHNOLOGY
                <br />
                Kashi Bazar,Chapra, Bihar
                <br />
                Chapra - 841301, Bihar, India
              </p>

            </div>

          </div>


          {/* PHONE */}

          <div className="flex gap-2 border-r border-[#142653] px-4">

            <div className="w-7 h-7 rounded-full border border-[#31577d] flex items-center justify-center shrink-0">

              <Phone
                size={14}
                className="text-[#43bde9]"
              />

            </div>


            <div>

              <h4 className="text-[7px] text-[#43bde9]">
                PHONE
              </h4>

              <p className="text-[7px] leading-[1.5] text-gray-300 mt-1">
                +91 7667883317
                <br />
                +91 9155211167
              </p>

            </div>

          </div>


          {/* EMAIL */}

          <div className="flex gap-2 border-r border-[#142653] px-4">

            <div className="w-7 h-7 rounded-full border border-[#31577d] flex items-center justify-center shrink-0">

              <Mail
                size={14}
                className="text-[#43bde9]"
              />

            </div>


            <div>

              <h4 className="text-[7px] text-[#43bde9]">
                EMAIL
              </h4>

              <p className="text-[7px] leading-[1.5] text-gray-300 mt-1">
                info@edugaon.com
                <br />
                www.edugaon.com
              </p>

            </div>

          </div>


          {/* WORKING HOURS */}

          <div className="flex gap-2 px-4">

            <div className="w-7 h-7 rounded-full border border-[#31577d] flex items-center justify-center shrink-0">

              <Clock
                size={14}
                className="text-[#43bde9]"
              />

            </div>


            <div>

              <h4 className="text-[7px] text-[#43bde9]">
                WORKING HOURS
              </h4>

              <p className="text-[7px] leading-[1.5] text-gray-300 mt-1">
                Mon - Sat: 9:00 AM - 6:00 PM
                <br />
                Sunday: Closed
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="relative border-t border-[#142653]">

        <div className="h-9 flex items-center justify-center gap-3 text-[8px] text-gray-300">

          <span>
            © 2026 edugaon. All Rights Reserved.
          </span>

          <span className="text-gray-500">
            |
          </span>

          <span>
            Learn Offline. Achieve Online.
          </span>

        </div>


        {/* ================= ARROW ================= */}

        <button
          type="button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="
            absolute
            right-4
            -top-5
            w-6
            h-6
            rounded-full
            border
            border-[#52688e]
            flex
            items-center
            justify-center
            bg-[#030b3b]
            hover:border-[#43bde9]
            transition
          "
        >
          <ArrowUp size={11} />
        </button>

      </div>

    </footer>
  );
}

export default Footer;  