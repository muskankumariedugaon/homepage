import { trustedLogos } from "../data/acadmyData";

export default function ProgramerTrustedBy() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
        Trusted by engineers and designers at
      </p>
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-12">
        {trustedLogos.map(({ name, Icon }) => (
          <span
            key={name}
            className="flex items-center gap-2 text-sm font-semibold text-gray-400 grayscale transition hover:text-gray-600 hover:grayscale-0 sm:text-lg"
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
