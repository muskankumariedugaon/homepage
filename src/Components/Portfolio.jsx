import suara from '../assets/portfolio-suara.jpeg'
import isramiraj from '../assets/portfolio-isramiraj.jpeg'
import recap from '../assets/portfolio-recap.jpeg'
import jobdesc from '../assets/portfolio-jobdesc.jpeg'
import fishing from '../assets/portfolio-fishing.jpeg'

const cards = [
  { img: suara, rotate: '-rotate-[8deg]', translate: '-translate-x-[105%] translate-y-[6%]', z: 'z-10' },
  { img: isramiraj, rotate: '-rotate-[4deg]', translate: '-translate-x-[52%] translate-y-[2%]', z: 'z-20' },
  { img: recap, rotate: 'rotate-0', translate: 'translate-x-0 -translate-y-[2%]', z: 'z-30' },
  { img: jobdesc, rotate: 'rotate-[4deg]', translate: 'translate-x-[52%] translate-y-[2%]', z: 'z-20' },
  { img: fishing, rotate: 'rotate-[8deg]', translate: 'translate-x-[105%] translate-y-[6%]', z: 'z-10' },
]

function Portfolio() {
  return (
    <section className="w-full bg-white pt-6 pb-14 overflow-hidden">
      <div className="relative max-w-5xl mx-auto h-[220px] sm:h-[300px] md:h-[360px] flex items-center justify-center">
        {cards.map((card, i) => (
          <img
            key={i}
            src={card.img}
            alt="Portfolio sample design"
            className={`absolute w-[125px] sm:w-[170px] md:w-[210px] rounded-lg shadow-lg object-cover ${card.rotate} ${card.translate} ${card.z}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
