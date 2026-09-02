import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Force muted autoplay
    video.muted = true;
    video.defaultMuted = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Video autoplay blocked:", error);
      }
    };

    playVideo();

    // Tab dobara active hone par video play
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* =====================================================
          VIDEO HERO CONTAINER
      ====================================================== */}
      <div className="relative min-h-[680px] w-full overflow-hidden">

        {/* =====================================================
            BACKGROUND VIDEO
        ====================================================== */}
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          aria-hidden="true"
        >
          <source
            src="/hero-video.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        {/* =====================================================
            VIDEO OVERLAY
        ====================================================== */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-white/40" />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-6xl flex-col items-center px-5 pt-14 text-center md:pt-16">

          {/* Badge */}
          <p className="mb-3 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-sm">
            India's Leading Learning Platform
          </p>

          {/* Heading */}
          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Explore Tech-Enabled Learning
            <br className="hidden sm:block" />
            and Pathshala Centres
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base md:text-lg">
            Discover a smarter way to learn with technology-enabled
            classrooms, expert guidance and career-focused education.
          </p>

          {/* =================================================
              INFORMATION CARD
          ================================================== */}
          

      
</div>
</div>

    </section>
  )
};

export default Hero;