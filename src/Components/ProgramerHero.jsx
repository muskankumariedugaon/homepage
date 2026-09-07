import HERO_IMG from "../assets/hero.png";
import ProgramerTrustedBy from "./ProgramerTrustedBy";
import ProgramerPrograms from "./ProgramerPrograms";
import ProgramerWhystudy from "./ProgramerWhystudy";

export default function ProgramerHero() {
  return (
    <section className="w-full bg-black">
       <img
        src={HERO_IMG}
        alt="Next Gen Academy - Our Teachers Live Webinar"
        className="block h-auto w-full"
      />
      <ProgramerTrustedBy />
      <ProgramerPrograms />
      <ProgramerWhystudy />
    </section>
  );
}
