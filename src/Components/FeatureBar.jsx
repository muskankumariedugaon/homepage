const features = [
  ["◉", "Google"],
  ["⌛", "Microsoft"],
  ["⌁", "Amazon"],
  ["▣", "Meta"],
  ["◫", "Netflix"],
];

export default function FeatureBar() {
  return (
    <section className="bg-[#1554d9]">
      <div className="mx-auto max-w-[1100px] px-5 py-5">
        <p className="text-center text-[7px] font-semibold uppercase tracking-[0.13em] text-white/75 sm:text-[8px]">
          Our graduates are hired at top organizations
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-10">
          {features.map(([icon, name]) => (
            <div
              key={name}
              className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.01em] text-white sm:text-[10px]"
            >
              <span className="text-[10px]">{icon}</span>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}