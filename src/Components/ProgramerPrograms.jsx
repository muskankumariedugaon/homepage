import { programs } from "../data/acadmyData";
export default function ProgramerPrograms() {
  return (
    <section className="bg-blue-900 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl text-center md:px-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
          Comprehensive paths
        </p>
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
          Our Programs
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-blue-200">
          Specialized masterclasses engineered to take you from beginner to
          job-ready builder
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group cursor-pointer rounded-xl bg-white p-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:shadow-2xl sm:p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-lg font-bold text-blue-700 transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                {p.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-white sm:text-lg">
                {p.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-blue-100">
                {p.desc}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-500 transition-colors duration-300 group-hover:text-blue-100">
                  {p.weeks}
                </span>
                <span className="font-semibold text-blue-700 transition-colors duration-300 group-hover:text-white">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
