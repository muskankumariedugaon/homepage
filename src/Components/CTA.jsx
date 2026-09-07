export default function CTA() {
  return (
    <section className="px-5 pb-7 pt-3 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="rounded-[8px] bg-[#1554d9] px-6 py-12 text-center shadow-[0_8px_25px_rgba(21,84,217,0.12)] sm:px-10 sm:py-14 lg:rounded-[9px] lg:py-16">
          
          <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#f7d45a]">
            Ready To Begin?
          </p>

          <h2 className="mt-3 text-[25px] font-extrabold tracking-[-0.035em] text-white sm:text-[31px]">
            Start Your Cyber Security Career
          </h2>

          <p className="mx-auto mt-2 max-w-[500px] text-[9px] font-medium leading-5 text-white/80 sm:text-[10px]">
            Secure your seat in Cohort 2. Join a practical program with
            hands-on learning.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            <button className="rounded-full bg-white px-5 py-2 text-[8px] font-extrabold text-[#1554d9] transition hover:bg-[#f2f4f7] sm:px-6">
              Apply For Program
            </button>

            <button className="rounded-full border border-white/80 px-5 py-2 text-[8px] font-extrabold text-white transition hover:bg-white/10 sm:px-6">
              Talk To Advisor
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}