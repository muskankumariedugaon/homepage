const items = [
  {
    icon: "◉",
    title: "Expert Instructors",
    text: "Learn directly from industry professionals with real-world security experience.",
  },
  {
    icon: "♙",
    title: "Recognized Certification",
    text: "Earn professional credentials that demonstrate practical cybersecurity expertise.",
  },
  {
    icon: "▣",
    title: "Placement Support",
    text: "Get CV guidance, interview preparation and direct career support.",
  },
];

export default function WhyStudy() {
  return (
    <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1050px]">
        
        <div className="text-center">
          <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#155eef]">
            THE NEXTGEN PATHWAY
          </p>

          <h1 className="mt-2 text-[25px] font-extrabold tracking-[-0.035em] text-[#101828] sm:text-[30px]">
            Why Study With Us
          </h1>

          <p className="mt-2 text-[10px] font-medium leading-5 tracking-[0.01em] text-[#667085] sm:text-[11px]">
            Designed from the ground up to prepare you for real-world
            cybersecurity challenges.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-white text-[13px] font-bold text-[#155eef] shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
                {item.icon}
              </div>

              <h3 className="mt-3 text-[10px] font-extrabold tracking-[-0.005em] text-[#101828] sm:text-[11px]">
                {item.title}
              </h3>

              <p className="mx-auto mt-2 max-w-[260px] text-[8px] font-medium leading-[1.6] text-[#667085]">
                {item.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}