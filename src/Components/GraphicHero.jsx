import heroVisual from '../assets/hero-visual.jpeg';
import GraphicLearnBanner from './GraphicLearnBanner';
import SkillsGrid from './SkillsGrid';
import Portfolio from './Portfolio';

function GraphicHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 sm:px-10 pt-10 pb-16 md:pt-16 md:pb-24">
        {/* Left: text content */}
        <div className="relative z-10 flex flex-col items-start">
          <h1 className="leading-[0.95]">
            <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1c1a05]">
              Graphic
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1450e8]">
              Design
            </span>
          </h1>

          <div className="mt-5 bg-[#ffdc00] px-3 py-1.5 inline-block">
            <p className="text-sm sm:text-base font-bold text-[#1c1a05]">
              Turn Your Creativity Into Design Skills
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-600 max-w-xs leading-relaxed">
            Learn professional graphic design through practical projects, industry-standard tools, and creative assignments.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors">
              Enroll Now
            </button>
            <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors">
              View Curriculum
            </button>
          </div>
        </div>

        {/* Right: visual */}
        <div className="relative flex items-center justify-center md:justify-end min-h-[260px] md:min-h-[420px] md:overflow-visible">
          <img
            src={heroVisual}
            alt="Graphic design lightbulb concept"
            className="w-[85%] sm:w-[80%] md:w-[115%] max-w-md md:max-w-none object-contain md:-mr-6"
          />
        </div>
      </div>
      <GraphicLearnBanner />
      <SkillsGrid />
      <Portfolio />
    </section>
  )
}

export default GraphicHero
