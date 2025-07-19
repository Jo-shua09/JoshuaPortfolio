import { useEffect, useState } from "react";
import Button from "../ui/Button";

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
        <div className="flex flex-wrap items-center w-full gap-12 lg:flex-nowrap bg-neutral-950 rounded-xl">
          <div className="w-full h-full flex items-center lg:flex-[4] gap-4 md:gap-12 rounded-t-xl lg:bg-transparent mr-0 lg:mr-10 bg-neutral-900 lg:backdrop-blur-0 lg:border-none backdrop-blur-xl border border-neutral-800 lg:shadow-none shadow-xl p-10 justify-center">
            <img loading="lazy" src={project.imageDesktop} alt="project desktop" className="w-[80%] md:w-[55rem] h-full" />
            <img loading="lazy" src={project.imageMobile} alt="project mobile" className="w-[20%] md:w-[10rem] h-full" />
          </div>

          <div className="w-full space-y-8 lg:space-y-5 lg:flex-[5] p-10">
            <h2 className="md:text-5xl text-4xl font-bold text-white normal-case font-monospace">{project.title}</h2>
            <p className="md:text-3xl text-[1.7rem] font-medium normal-case text-neutral-300">{project.overview}</p>
            {/* <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="text-[1.7rem] text-neutral-300 normal-case list-disc ml-20">
                  {feature}
                </li>
              ))}
            </ul> */}
            <div className="flex items-center gap-8 !my-6">
              {project.stacks.map((stack, index) => (
                <img key={index} src={stack} alt="technology image" className="w-16 h-16 object-contain" />
              ))}
            </div>
            <div className="flex items-center gap-12 !mt-16">
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
      <div className="flex flex-wrap items-center w-full gap-12 lg:flex-nowrap">
        {project.id % 2 === 0 ? (
          <>
            <div className="w-full space-y-8 lg:space-y-5 lg:flex-[5]">
              <h2 className="md:text-5xl text-4xl font-bold text-white normal-case font-monospace">{project.title}</h2>
              <p className="md:text-3xl text-[1.7rem] font-medium normal-case text-neutral-300">{project.overview}</p>
              {/* <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-[1.7rem] text-neutral-300 normal-case list-disc ml-20">
                    {feature}
                  </li>
                ))}
              </ul> */}
              <div className="flex items-center gap-8 !my-6">
                {project.stacks.map((stack, index) => (
                  <img key={index} src={stack} alt="technology image" className="w-16 h-16 object-contain" />
                ))}
              </div>
              <div className="flex items-center gap-12 !mt-16">
                {project.live && <Button href={project.live} children="view live" title="visit live site" aria="click to view live" />}
                <Button href={project.github} children="view code" title="view code" aria="click to check github code" />
              </div>
            </div>

            <div className="w-full h-fit flex items-center lg:flex-[4] gap-4 md:gap-12 rounded-xl lg:bg-transparent mr-0 lg:mr-10 bg-neutral-900 lg:backdrop-blur-0 lg:border-none backdrop-blur-xl border border-neutral-800 lg:shadow-none shadow-xl p-10 justify-center">
              <img loading="lazy" src={project.imageDesktop} alt="project desktop" className="w-[40rem] md:w-[55rem] h-full" />
              <img loading="lazy" src={project.imageMobile} alt="project mobile" className="w-[10rem] md:w-[10rem] h-full" />
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-fit flex items-center lg:flex-[4] gap-4 md:gap-12 rounded-xl lg:bg-transparent mr-0 lg:mr-10 bg-neutral-900 lg:backdrop-blur-0 lg:border-none backdrop-blur-xl border border-neutral-800 lg:shadow-none shadow-xl p-10 justify-center">
              <img loading="lazy" src={project.imageDesktop} alt="project desktop" className="w-[40rem] md:w-[55rem] h-full" />
              <img loading="lazy" src={project.imageMobile} alt="project mobile" className="w-[10rem] md:w-[10rem] h-full" />
            </div>

            <div className="w-full space-y-8 lg:space-y-5 lg:flex-[5]">
              <h2 className="md:text-5xl text-4xl font-bold text-white normal-case font-monospace">{project.title}</h2>
              <p className="md:text-3xl text-[1.7rem] font-medium normal-case text-neutral-300">{project.overview}</p>
              {/* <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-[1.7rem] text-neutral-300 normal-case list-disc ml-20">
                    {feature}
                  </li>
                ))}
              </ul> */}
              <div className="flex items-center gap-16 !my-6">
                {project.stacks.map((stack, index) => (
                  <img key={index} src={stack} alt="technology image" className="w-16 h-16 object-contain" />
                ))}
              </div>
              <div className="flex items-center gap-12 !mt-16">
                {project.live && <Button href={project.live} children="view live" title="visit live site" aria="click to view live" />}
                <Button href={project.github} children="view code" title="view code" aria="click to check github code" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
