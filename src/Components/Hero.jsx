export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[390px] max-w-[1240px] items-center px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          
          {/* LEFT */}
          <div className="max-w-[600px]">
            <div className="mb-5 inline-flex items-center rounded-full bg-[#eef4ff] px-3 py-1">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#175cd3]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.11em] text-[#175cd3] sm:text-[10px]">
                New Cyber Security Expert Path
              </span>
            </div>

            <h1 className="text-[34px] font-extrabold leading-[1.03] tracking-[-0.045em] text-[#101828] sm:text-[42px] lg:text-[48px]">
              Cyber Security
            </h1>

            <h2 className="mt-2 text-[15px] font-bold leading-tight tracking-[-0.015em] text-[#175cd3] sm:text-[17px]">
              Protect the Digital World with Advanced Security Skills
            </h2>

            <p className="mt-4 max-w-[570px] text-[11px] font-medium leading-[1.65] tracking-[0.005em] text-[#667085] sm:text-[12px]">
              Master offensive and defensive security operations from the
              ground up. Train on our state-of-the-art virtual sandbox lab and
              prepare to defend modern enterprise infrastructure against
              sophisticated digital threats.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <button className="rounded-[4px] bg-[#155eef] px-5 py-2.5 text-[10px] font-bold tracking-[0.01em] text-white shadow-sm transition hover:bg-[#004eeb]">
                Enroll Now
              </button>

              <button className="rounded-[4px] border border-[#84adf5] bg-white px-5 py-2.5 text-[10px] font-bold tracking-[0.01em] text-[#155eef] transition hover:bg-[#f5f8ff]">
                View Curriculum
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px] overflow-hidden rounded-[12px] border border-[#dbe5f2] bg-[#071a2b] shadow-[0_8px_30px_rgba(16,24,40,0.08)]">
              <img
                src="/images/cyber-hero.jpg"
                alt="Cyber security"
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}