import { projectsData } from "../data/learningData";

export default function Projects() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        
        <div className="text-center">
          <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#155eef]">
            Hands-On Challenges
          </p>

          <h2 className="mt-2 text-[25px] font-extrabold tracking-[-0.035em] text-[#101828] sm:text-[30px]">
            Real-World Projects
          </h2>

          <p className="mx-auto mt-2 max-w-[650px] text-[10px] font-medium leading-5 tracking-[0.01em] text-[#667085] sm:text-[11px]">
            Build production-grade security solutions designed to give you
            superior projects directly to hiring partners.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {projectsData.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[5px] border border-[#edf0f5] bg-white shadow-[0_2px_8px_rgba(16,24,40,0.025)]"
            >
              <div className="aspect-[1.45/1] overflow-hidden bg-[#071a2b]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                />
              </div>

              <div className="px-3 py-3">
                <h3 className="text-[8px] font-extrabold leading-[1.35] tracking-[-0.005em] text-[#101828] sm:text-[9px]">
                  {project.title}
                </h3>

                <p className="mt-1 text-[7px] font-medium leading-4 text-[#667085]">
                  Hands-on security project
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}