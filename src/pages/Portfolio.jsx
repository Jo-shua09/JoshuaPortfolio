// Portfolio.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { ChevronRight } from "lucide-react"; // icon for hint
import FuzzyText from "../components/animations/FuzzyText";
import { projects } from "../assets/data/Projects";
import ProjectModal from "./../components/ui/ProjectModal";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div id="projects" className="relative w-full mt-20 section">
      {/* Header */}
      <div className="space-y-4 text-left">
        <div className="inline- justify-center md:mr-0 mr-5 py-3 flex md:m-0 m-auto border rounded-full w-fit !-z-10 border-neutral-800 backdrop-blur-sm bg-neutral-900/30">
          <FuzzyText baseIntensity={0.1} hoverIntensity={1} enableHover={true} fontSize="clamp(2rem, 10vw, 3.5rem)">
            Projects
          </FuzzyText>
        </div>
      </div>

      {/* Swiper */}
      <div className="relative w-full pb-20 mt-20">
        <Swiper
          spaceBetween={40}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 2.5 }, // lg
            768: { slidesPerView: 1.5 }, // md
            0: { slidesPerView: 1 }, // sm and default
          }}
          className="select-none cursor-grab !pb-20 [&_.swiper-pagination-bullet]:bg-neutral-200 [&_.swiper-pagination-bullet-active]:bg-neutral-700 [&_.swiper-pagination]:mt-20"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div onClick={() => setActiveProject(project)} className="transition-transform duration-300 cursor-grab hover:scale-105">
                <img src={project.imageDesktop} alt={project.title} className="shadow-lg rounded-xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slide Right Hint */}
        <div className="absolute hidden -translate-y-1/2 right-2 top-1/2 text-neutral-400 animate-bounce md:block">
          <ChevronRight size={36} />
        </div>
      </div>

      {/* Modal Viewer */}
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  );
}
