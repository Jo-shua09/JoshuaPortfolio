import FuzzyText from "../components/animations/FuzzyText";
import ProjectCard from "../components/sections/ProjectCard";
import { projects } from "../assets/data/Projects";

export default function Portfolio() {
  return (
    <div className="w-full mt-20 section">
      <div className="space-y-4 text-left">
        <div className="inline- justify-center md:mr-0 mr-5 py-3 flex md:m-0 m-auto border rounded-full w-fit !-z-10 border-neutral-800 backdrop-blur-sm bg-neutral-900/30">
          <FuzzyText baseIntensity={0.15} hoverIntensity={1} enableHover={true} fontSize="clamp(2rem, 10vw, 3.5rem)">
            Featured Projects
          </FuzzyText>
        </div>
      </div>
      <div className="w-full mt-20">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
