import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import LogoLoop from "./LogoLoop";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999999] flex items-center justify-center bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-neutral-900 rounded-2xl px-8 py-16 md:p-8 md:space-y-8 space-y-20 shadow-2xl max-w-7xl w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Images */}
            <div className="flex items-center justify-center w-full gap-6 md:gap-12">
              <img src={project.imageDesktop} alt="project desktop" className="w-[30rem] md:w-[45rem] h-full rounded-lg" />
              <img src={project.imageMobile} alt="project mobile" className="w-[6rem] md:w-[10rem] h-full rounded-lg" />
            </div>

            {/* Details */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 space-y-20 text-center md:space-y-6"
            >
              <h2 className="text-5xl font-bold text-white normal-case md:text-4xl font-monospace">{project.title}</h2>
              <p className="text-3xl font-medium normal-case md:text-[1.7rem] text-neutral-300">{project.overview}</p>

              {/* Animated Stack Logos */}
              {project.stacks && project.stacks.length > 0 && (
                <div className="flex justify-center max-w-4xl m-auto my-20">
                  <LogoLoop
                    logos={project.stacks
                      .map((stack) => {
                        // If it's an image string
                        if (typeof stack === "string") {
                          return {
                            src: stack,
                            alt: "technology",
                          };
                        }
                        // If it's an icon component
                        if (typeof stack === "function") {
                          const Icon = stack;
                          return {
                            node: <Icon className="text-white text-[5rem]" />,
                            title: "technology",
                          };
                        }
                        return null;
                      })
                      .filter(Boolean)}
                    speed={3000}
                    direction="left"
                    gap={40}
                    logoHeight={40}
                    fadeOut
                    fadeOutColor="#111827"
                    pauseOnHover={true}
                  />
                </div>
              )}

              {/* Buttons */}
              <div className="flex justify-center gap-12 md:mt-16">
                {project.live && <Button href={project.live} children="view live" title="visit live site" aria="click to view live" />}
                <Button href={project.github} children="view code" title="view code" aria="click to check github code" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
