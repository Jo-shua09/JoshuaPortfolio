import { useEffect, useState } from "react";
import Button from "../ui/Button";
import ElectricBorder from "../animations/ElectricBorder";

export default function ProjectCard({ project }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1020);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div key={project.id} className="w-full mb-20">
        <div data-aos="fade-up" className="flex flex-wrap items-center w-full gap-12 lg:flex-nowrap bg-neutral-950 rounded-xl">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="w-full h-full flex items-center lg:flex-[4] gap-4 md:gap-12 rounded-t-xl lg:bg-transparent mr-0 lg:mr-10 bg-neutral-900 lg:backdrop-blur-0 lg:border-none backdrop-blur-xl border border-neutral-800 lg:shadow-none shadow-xl p-10 justify-center"
          >
            <img loading="lazy" src={project.imageDesktop} alt="project desktop" className="w-[80%] md:w-[55rem] h-full" />
            <img loading="lazy" src={project.imageMobile} alt="project mobile" className="w-[20%] md:w-[10rem] h-full" />
          </div>

          <div data-aos="fade-left" data-aos-delay="300" className="w-full space-y-8 lg:space-y-5 lg:flex-[5] p-10">
            <h2 className="text-4xl font-bold text-white normal-case md:text-5xl font-monospace">{project.title}</h2>
            <p className="md:text-3xl text-[1.7rem] font-medium normal-case text-neutral-300">{project.overview}</p>

            <div data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-8 !my-6">
              {project.stacks.map((stack, index) => (
                <img key={index} src={stack} alt="technology image" className="object-contain w-16 h-16" />
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className="flex items-center gap-12 !mt-16">
              {project.live && <Button href={project.live} children="view live" title="visit live site" aria="click to view live" />}
              <Button href={project.github} children="view code" title="view code" aria="click to check github code" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div key={project.id} className="w-full mb-20">
      {/* <div data-aos="fade-up" className="flex flex-wrap items-center w-full gap-12 lg:flex-nowrap">
        {project.id % 2 === 0 ? (
          <>
            <div data-aos="fade-right" data-aos-delay="200" className="w-full space-y-8 lg:space-y-5 lg:flex-[5]">
              <h2 className="text-4xl font-bold text-white normal-case md:text-5xl font-monospace">{project.title}</h2>
              <p className="md:text-3xl text-[1.7rem] font-medium normal-case text-neutral-300">{project.overview}</p>

              <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-8 !my-6">
                {project.stacks.map((stack, index) => (
                  <img key={index} src={stack} alt="technology image" className="object-contain w-16 h-16" />
                ))}
              </div>

              <div data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-12 !mt-16">
                {project.live && <Button href={project.live} children="view live" title="visit live site" aria="click to view live" />}
                <Button href={project.github} children="view code" title="view code" aria="click to check github code" />
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="w-full h-fit flex items-center lg:flex-[4] gap-4 md:gap-12 rounded-xl lg:bg-transparent mr-0 lg:mr-10 bg-neutral-900 lg:backdrop-blur-0 lg:border-none backdrop-blur-xl border border-neutral-800 lg:shadow-none shadow-xl p-10 justify-center"
            >
              <img loading="lazy" src={project.imageDesktop} alt="project desktop" className="w-[40rem] md:w-[55rem] h-full" />
              <img loading="lazy" src={project.imageMobile} alt="project mobile" className="w-[10rem] md:w-[10rem] h-full" />
            </div>
          </>
        ) : (
          <>
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="w-full h-fit flex items-center lg:flex-[4] gap-4 md:gap-12 rounded-xl lg:bg-transparent mr-0 lg:mr-10 bg-neutral-900 lg:backdrop-blur-0 lg:border-none backdrop-blur-xl border border-neutral-800 lg:shadow-none shadow-xl p-10 justify-center"
            >
              <img loading="lazy" src={project.imageDesktop} alt="project desktop" className="w-[40rem] md:w-[55rem] h-full" />
              <img loading="lazy" src={project.imageMobile} alt="project mobile" className="w-[10rem] md:w-[10rem] h-full" />
            </div>

            <div data-aos="fade-left" data-aos-delay="200" className="w-full space-y-8 lg:space-y-5 lg:flex-[5]">
              <h2 className="text-4xl font-bold text-white normal-case md:text-5xl font-monospace">{project.title}</h2>
              <p className="md:text-3xl text-[1.7rem] font-medium normal-case text-neutral-300">{project.overview}</p>

              <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-8 !my-6">
                {project.stacks.map((stack, index) => (
                  <img key={index} src={stack} alt="technology image" className="object-contain w-16 h-16" />
                ))}
              </div>

              <div data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-12 !mt-16">
                {project.live && <Button href={project.live} children="view live" title="visit live site" aria="click to view live" />}
                <Button href={project.github} children="view code" title="view code" aria="click to check github code" />
              </div>
            </div>
          </>
        )}
      </div> */}

      <ElectricBorder color="#7df9ff" speed={1} chaos={0.5} thickness={2} style={{ borderRadius: 16 }}>
        <div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="w-full h-fit flex items-center lg:flex-[4] gap-4 md:gap-12 rounded-xl lg:bg-transparent mr-0 lg:mr-10 bg-neutral-900 lg:backdrop-blur-0 lg:border-none backdrop-blur-xl border border-neutral-800 lg:shadow-none shadow-xl p-10 justify-center"
          >
            <img loading="lazy" src={project.imageDesktop} alt="project desktop" className="w-[40rem] md:w-[55rem] h-full" />
            <img loading="lazy" src={project.imageMobile} alt="project mobile" className="w-[10rem] md:w-[10rem] h-full" />
          </div>

          <div data-aos="fade-left" data-aos-delay="200" className="w-full hidden space-y-8 lg:space-y-5 lg:flex-[5]">
            <h2 className="text-4xl font-bold text-white normal-case md:text-5xl font-monospace">{project.title}</h2>
            <p className="md:text-3xl text-[1.7rem] font-medium normal-case text-neutral-300">{project.overview}</p>

            <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-8 !my-6">
              {project.stacks.map((stack, index) => (
                <img key={index} src={stack} alt="technology image" className="object-contain w-16 h-16" />
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-12 !mt-16">
              {project.live && <Button href={project.live} children="view live" title="visit live site" aria="click to view live" />}
              <Button href={project.github} children="view code" title="view code" aria="click to check github code" />
            </div>
          </div>
        </div>
      </ElectricBorder>
    </div>
  );
}
