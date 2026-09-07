import React, { useState } from "react";
import {
  FaComments,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaUsers,
  FaGraduationCap,
  FaBookmark,
  FaBook,
  FaPen,
  FaPaperclip,
  FaClock,
  FaPaperPlane,
  FaShieldAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    role: "",
    level: "",
    course: "",
    subject: "",
    message: "",
    contactMethod: "",
    contactTime: "",
    attachment: null,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please agree to the Terms & Privacy Policy.");
      return;
    }

    alert("Enquiry submitted successfully!");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f3f6fc] px-3 py-5 sm:px-5 md:px-8 lg:px-10">

      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-200/40" />

      <div className="pointer-events-none absolute -left-20 top-[42%] h-48 w-48 rounded-full bg-blue-100/50" />

      <div className="pointer-events-none absolute -bottom-20 -right-10 h-44 w-44 rounded-full bg-purple-100/40" />


      {/* ================= MAIN CONTACT CARD ================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1050px]
          overflow-hidden
          rounded-[18px]
          border
          border-white
          bg-white
          px-4
          py-6
          shadow-[0_12px_45px_rgba(27,67,120,0.10)]

          sm:px-6
          sm:py-7

          md:px-8
          md:py-8
        "
      >

        {/* TOP RIGHT DECORATION */}

        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-12
            h-36
            w-36
            rounded-bl-[70px]
            rounded-tr-[20px]
            bg-gradient-to-br
            from-blue-100
            to-blue-200/60
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-8
            top-12
            h-1.5
            w-1.5
            rounded-full
            bg-blue-300
            shadow-[18px_12px_0_#b5d5fa,36px_24px_0_#b5d5fa]
          "
        />


        {/* ================= HEADER ================= */}

        <div className="relative mb-6 text-center">

          <div className="flex items-center justify-center gap-4">

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#2476d5]
                to-[#0957bd]
                text-white
                shadow-[0_8px_20px_rgba(24,103,205,0.25)]

                sm:h-16
                sm:w-16
              "
            >
              <FaComments className="text-xl sm:text-2xl" />
            </div>

            <div className="text-left">

              <h1
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-[#142039]

                  sm:text-2xl

                  md:text-3xl
                "
              >
                Contact / Enquiry Form
              </h1>

              <p
                className="
                  mt-1
                  max-w-[650px]
                  text-[10px]
                  leading-4
                  text-gray-500

                  sm:text-xs
                  sm:leading-5

                  md:text-sm
                "
              >
                We're here to help! Fill out the form and our
                team will get in touch with you.
              </p>

            </div>

          </div>


          {/* HEADER LINE */}

          <div className="mt-4 flex items-center justify-center gap-3">

            <span className="h-1 w-1 rounded-full bg-[#2875d5]" />

            <span className="h-[2px] w-16 rounded-full bg-[#2875d5] sm:w-20" />

            <span className="h-1 w-1 rounded-full bg-[#2875d5]" />

          </div>

        </div>


        <form onSubmit={handleSubmit}>

          {/* ==================================================
              PERSONAL INFORMATION
          ================================================== */}

          <section className="mb-4 overflow-hidden rounded-xl border border-[#cbdcf5] bg-white shadow-[0_3px_12px_rgba(45,92,145,0.04)]">

            {/* HEADER */}

            <div className="bg-gradient-to-r from-[#f1f6ff] to-[#fafcff] px-4 py-3.5 sm:px-5">

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#77a9e8]
                    bg-[#e8f2ff]
                    text-[#1763c5]
                  "
                >
                  <FaUser className="text-lg" />
                </div>

                <div>

                  <h2 className="text-base font-bold text-[#1760b9] sm:text-lg">
                    Personal Information
                  </h2>

                  <p className="text-[10px] text-gray-600 sm:text-xs">
                    Please provide your basic details
                  </p>

                </div>

              </div>

            </div>


            {/* BODY */}

            <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">

              {/* FULL NAME */}

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#111827] sm:text-sm">
                  Full Name <span className="text-red-500">*</span>
                </label>

                <div className="relative">

                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500" />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="
                      h-11
                      w-full
                      rounded-lg
                      border
                      border-gray-300
                      pl-11
                      pr-4
                      text-xs
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-[#2875d5]
                      focus:ring-2
                      focus:ring-blue-100
                      sm:text-sm
                    "
                  />

                </div>
              </div>


              {/* EMAIL */}

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#111827] sm:text-sm">
                  Email <span className="text-red-500">*</span>
                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="
                      h-11
                      w-full
                      rounded-lg
                      border
                      border-gray-300
                      pl-11
                      pr-4
                      text-xs
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-[#2875d5]
                      focus:ring-2
                      focus:ring-blue-100
                      sm:text-sm
                    "
                  />

                </div>
              </div>


              {/* PHONE */}

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#111827] sm:text-sm">
                  Phone <span className="text-red-500">*</span>
                </label>

                <div className="relative">

                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500" />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="
                      h-11
                      w-full
                      rounded-lg
                      border
                      border-gray-300
                      pl-11
                      pr-4
                      text-xs
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-[#2875d5]
                      focus:ring-2
                      focus:ring-blue-100
                      sm:text-sm
                    "
                  />

                </div>
              </div>


              {/* WHATSAPP */}

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#111827] sm:text-sm">
                  WhatsApp Number{" "}
                  <span className="font-normal text-gray-500">
                    (Optional)
                  </span>
                </label>

                <div className="relative">

                  <FaWhatsapp className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500" />

                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Enter your WhatsApp number"
                    className="
                      h-11
                      w-full
                      rounded-lg
                      border
                      border-gray-300
                      pl-11
                      pr-4
                      text-xs
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-[#2875d5]
                      focus:ring-2
                      focus:ring-blue-100
                      sm:text-sm
                    "
                  />

                </div>
              </div>


              {/* ROLE */}

              <div className="sm:col-span-2">

                <label className="mb-1.5 block text-xs font-semibold text-[#111827] sm:text-sm">
                  I am a <span className="text-red-500">*</span>
                </label>

                <div className="relative">

                  <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500" />

                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="
                      h-11
                      w-full
                      appearance-none
                      rounded-lg
                      border
                      border-gray-300
                      bg-white
                      pl-11
                      pr-10
                      text-xs
                      text-gray-600
                      outline-none
                      transition
                      focus:border-[#2875d5]
                      focus:ring-2
                      focus:ring-blue-100
                      sm:text-sm
                    "
                  >
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="working-professional">
                      Working Professional
                    </option>
                    <option value="job-seeker">Job Seeker</option>
                    <option value="parent">Parent</option>
                    <option value="other">Other</option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                    ▼
                  </span>

                </div>

              </div>

            </div>

          </section>


          {/* ==================================================
              ACADEMIC / COURSE INFORMATION
          ================================================== */}

          <section className="mb-4 overflow-hidden rounded-xl border border-[#bde5d9] bg-white shadow-[0_3px_12px_rgba(30,130,100,0.04)]">

            <div className="bg-gradient-to-r from-[#effbf7] to-[#fbfffd] px-4 py-3.5 sm:px-5">

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#78cdb5]
                    bg-[#e5f8f2]
                    text-[#16876e]
                  "
                >
                  <FaGraduationCap className="text-lg" />
                </div>

                <div>

                  <h2 className="text-base font-bold text-[#16816c] sm:text-lg">
                    Academic / Course Information
                  </h2>

                  <p className="text-[10px] text-gray-600 sm:text-xs">
                    Tell us about your academic background and interests
                  </p>

                </div>

              </div>

            </div>


            <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">

              {/* CLASS */}

              <div>

                <label className="mb-1.5 block text-xs font-semibold sm:text-sm">
                  Class / Level{" "}
                  <span className="font-normal text-gray-500">
                    (Optional)
                  </span>
                </label>

                <div className="relative">

                  <FaBook className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500" />

                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="
                      h-11
                      w-full
                      appearance-none
                      rounded-lg
                      border
                      border-gray-300
                      bg-white
                      pl-11
                      pr-10
                      text-xs
                      text-gray-600
                      outline-none
                      focus:border-[#169b80]
                      focus:ring-2
                      focus:ring-green-100
                      sm:text-sm
                    "
                  >
                    <option value="">
                      Select your class or level
                    </option>
                    <option value="school">School</option>
                    <option value="college">College</option>
                    <option value="graduate">Graduate</option>
                    <option value="post-graduate">
                      Post Graduate
                    </option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                    ▼
                  </span>

                </div>

              </div>


              {/* COURSE */}

              <div>

                <label className="mb-1.5 block text-xs font-semibold sm:text-sm">
                  Course Interest{" "}
                  <span className="text-red-500">*</span>
                </label>

                <div className="relative">

                  <FaBookmark className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500" />

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="
                      h-11
                      w-full
                      appearance-none
                      rounded-lg
                      border
                      border-gray-300
                      bg-white
                      pl-11
                      pr-10
                      text-xs
                      text-gray-600
                      outline-none
                      focus:border-[#169b80]
                      focus:ring-2
                      focus:ring-green-100
                      sm:text-sm
                    "
                  >
                    <option value="">
                      Select course of interest
                    </option>
                    <option value="web-development">
                      Web Development
                    </option>
                    <option value="frontend-development">
                      Frontend Development
                    </option>
                    <option value="backend-development">
                      Backend Development
                    </option>
                    <option value="full-stack">
                      Full Stack Development
                    </option>
                    <option value="python">
                      Python Development
                    </option>
                    <option value="java">
                      Java Development
                    </option>
                    <option value="data-science">
                      Data Science
                    </option>
                    <option value="ai-development">
                      AI Development
                    </option>
                    <option value="ui-ux">
                      UI/UX Design
                    </option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                    ▼
                  </span>

                </div>

              </div>


              {/* SUBJECT */}

              <div className="sm:col-span-2">

                <label className="mb-1.5 block text-xs font-semibold sm:text-sm">
                  Subject Interest{" "}
                  <span className="font-normal text-gray-500">
                    (Optional)
                  </span>
                </label>

                <div className="relative">

                  <FaBook className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500" />

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="
                      h-11
                      w-full
                      appearance-none
                      rounded-lg
                      border
                      border-gray-300
                      bg-white
                      pl-11
                      pr-10
                      text-xs
                      text-gray-600
                      outline-none
                      focus:border-[#169b80]
                      focus:ring-2
                      focus:ring-green-100
                      sm:text-sm
                    "
                  >
                    <option value="">
                      Select subject of interest
                    </option>
                    <option value="programming">
                      Programming
                    </option>
                    <option value="design">
                      Design
                    </option>
                    <option value="artificial-intelligence">
                      Artificial Intelligence
                    </option>
                    <option value="data">
                      Data & Analytics
                    </option>
                    <option value="career">
                      Career Guidance
                    </option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                    ▼
                  </span>

                </div>

              </div>

            </div>

          </section>


          {/* ==================================================
              ENQUIRY DETAILS
          ================================================== */}

          <section className="mb-4 overflow-hidden rounded-xl border border-[#d9d0ef] bg-white shadow-[0_3px_12px_rgba(90,50,150,0.04)]">

            <div className="bg-gradient-to-r from-[#f7f3ff] to-[#fcfaff] px-4 py-3.5 sm:px-5">

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#aa91e8]
                    bg-[#f0eaff]
                    text-[#5632ae]
                  "
                >
                  <FaComments className="text-lg" />
                </div>

                <div>

                  <h2 className="text-base font-bold text-[#5632ae] sm:text-lg">
                    Enquiry Details
                  </h2>

                  <p className="text-[10px] text-gray-600 sm:text-xs">
                    Your enquiry helps us serve you better
                  </p>

                </div>

              </div>

            </div>


            <div className="p-4 sm:p-5">

              {/* MESSAGE */}

              <div>

                <label className="mb-1.5 block text-xs font-semibold sm:text-sm">
                  Your Message{" "}
                  <span className="text-red-500">*</span>
                </label>

                <div className="relative">

                  <FaPen className="absolute left-4 top-4 text-sm text-gray-500" />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    placeholder="Write your enquiry here..."
                    className="
                      min-h-[100px]
                      w-full
                      resize-none
                      rounded-lg
                      border
                      border-gray-300
                      py-3
                      pl-11
                      pr-4
                      text-xs
                      outline-none
                      focus:border-[#7450c5]
                      focus:ring-2
                      focus:ring-purple-100
                      sm:text-sm
                    "
                  />

                  <span className="absolute bottom-2 right-3 text-[10px] text-gray-400">
                    {formData.message.length} / 1000
                  </span>

                </div>

              </div>


              {/* CONTACT OPTIONS */}

              <div className="mt-4 grid gap-4 sm:grid-cols-2">

                <div>

                  <label className="mb-1.5 block text-xs font-semibold sm:text-sm">
                    Preferred Contact Method{" "}
                    <span className="font-normal text-gray-500">
                      (Optional)
                    </span>
                  </label>

                  <div className="flex flex-wrap gap-2">

                    {[
                      ["phone", <FaPhone />, "Phone"],
                      ["email", <FaEnvelope />, "Email"],
                      ["whatsapp", <FaWhatsapp />, "WhatsApp"],
                    ].map(([value, icon, text]) => (
                      <label
                        key={value}
                        className={`
                          flex
                          cursor-pointer
                          items-center
                          gap-2
                          rounded-lg
                          border
                          px-3
                          py-2
                          text-xs
                          transition
                          sm:px-4
                          sm:text-sm
                          ${
                            formData.contactMethod === value
                              ? "border-[#7450c5] bg-purple-50 text-[#5632ae]"
                              : "border-gray-300 bg-white"
                          }
                        `}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={value}
                          checked={formData.contactMethod === value}
                          onChange={handleChange}
                          className="hidden"
                        />

                        {icon}
                        {text}
                      </label>
                    ))}

                  </div>

                </div>


                {/* CONTACT TIME */}

                <div>

                  <label className="mb-1.5 block text-xs font-semibold sm:text-sm">
                    Preferred Contact Time{" "}
                    <span className="font-normal text-gray-500">
                      (Optional)
                    </span>
                  </label>

                  <div className="relative">

                    <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500" />

                    <select
                      name="contactTime"
                      value={formData.contactTime}
                      onChange={handleChange}
                      className="
                        h-11
                        w-full
                        appearance-none
                        rounded-lg
                        border
                        border-gray-300
                        bg-white
                        pl-11
                        pr-10
                        text-xs
                        text-gray-600
                        outline-none
                        focus:border-[#7450c5]
                        focus:ring-2
                        focus:ring-purple-100
                        sm:text-sm
                      "
                    >
                      <option value="">
                        Select preferred time
                      </option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                      ▼
                    </span>

                  </div>

                </div>

              </div>


              {/* ATTACHMENT */}

              <div className="mt-4">

                <label className="mb-1.5 block text-xs font-semibold sm:text-sm">
                  Attachment{" "}
                  <span className="font-normal text-gray-500">
                    (Optional)
                  </span>
                </label>

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-3
                    rounded-lg
                    border
                    border-dashed
                    border-gray-300
                    px-4
                    py-3
                    transition
                    hover:border-[#7450c5]
                    hover:bg-purple-50
                  "
                >

                  <FaPaperclip className="text-lg text-gray-500" />

                  <div>

                    <p className="text-xs text-gray-700 sm:text-sm">
                      {formData.attachment
                        ? formData.attachment.name
                        : "Click to upload or drag and drop"}
                    </p>

                    <p className="text-[10px] text-gray-500 sm:text-xs">
                      PDF, JPG, PNG up to 5MB
                    </p>

                  </div>

                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleChange}
                    className="hidden"
                  />

                </label>

              </div>

            </div>

          </section>


          {/* ==================================================
              TERMS
          ================================================== */}

          <label
            className="
              mb-3
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-lg
              border
              border-[#f1d98b]
              bg-[#fff9e8]
              px-4
              py-2.5
            "
          >

            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="
                h-6
                w-6
                shrink-0
                cursor-pointer
                accent-[#1769d2]
              "
            />

            <span className="text-xs text-gray-800 sm:text-sm">
              I agree to the{" "}
              <span className="font-medium text-[#1769d2]">
                Terms & Privacy Policy
              </span>{" "}
              <span className="text-red-500">*</span>
            </span>

          </label>


          {/* ==================================================
              SUBMIT
          ================================================== */}

          <button
            type="submit"
            className="
              flex
              h-12
              w-full
              items-center
              justify-center
              gap-3
              rounded-lg
              bg-gradient-to-r
              from-[#176bd2]
              to-[#1460c4]
              text-base
              font-bold
              text-white
              shadow-[0_5px_15px_rgba(23,107,210,0.20)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_8px_20px_rgba(23,107,210,0.25)]
              sm:h-13
              sm:text-lg
            "
          >
            <FaPaperPlane />

            Submit Enquiry
          </button>


          {/* PRIVACY */}

          <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-gray-500 sm:text-xs">

            <FaShieldAlt />

            <span>
              Your information is safe with us. We respect your privacy.
            </span>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Contact;