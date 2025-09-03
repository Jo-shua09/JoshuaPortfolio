import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FuzzyText from "../animations/FuzzyText";
import ProfileCard from "../animations/ProfileCard/ProfileCard";
import myImage from "../../assets/images/avatar.png";
import { ButtonTwo } from "../ui/Button";
import { BiDownload } from "react-icons/bi";

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-wrap items-center w-full gap-20 sm:flex-nowrap">
      {/* Left Section */}
      <div className="flex-1 space-y-4 text-left">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex justify-center py-3 border rounded-full w-fit border-neutral-800 backdrop-blur-sm bg-neutral-900/30"
        >
          <FuzzyText baseIntensity={0.1} hoverIntensity={1} enableHover={true} fontSize="clamp(2rem, 10vw, 3.5rem)">
            About Me
          </FuzzyText>
        </motion.div>

        {/* Description */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className={`text-neutral-300 italic text-[1.5rem] md:text-[1.7rem] leading-relaxed sm:leading-loose !mt-12 text-center font-medium sm:font-semibold transition-all duration-500`}
        >
          <AnimatePresence>
            <motion.p
              key={isExpanded ? "expanded" : "collapsed"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={!isExpanded ? "line-clamp-4 !normal-case" : "!normal-case"}
            >
              Welcome to my portfolio! I'm a software developer specializing in web applications, passionately creating engaging digital experiences
              that seamlessly blend functionality and aesthetics. With expertise in building responsive and high-performance solutions, particularly
              with React.js, Next.js, and TypeScript, I focus on delivering clean code, scalable architecture, and intuitive user experiences that
              consistently drive real results. Collaboration and clear communication are fundamental to my approach, as I guide clients seamlessly
              from concept to launch. Let’s connect and turn your vision into a compelling digital reality!
            </motion.p>
          </AnimatePresence>
        </motion.article>

        {/* Expand/Collapse button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-2xl font-medium underline transition-colors text-neutral-100 hover:text-neutral-300 underline-offset-4"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="!mt-16 flex items-center justify-center w-full"
        >
          <ButtonTwo
            icon={<BiDownload size={22} />}
            title="Download PDF resume"
            aria="Download resume"
            className="px-6 py-3 text-white transition-all shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-xl hover:scale-105 rounded-xl"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/JoshuaOnyekaResume.pdf";
              link.download = "JoshuaOnyekaResume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Resume
          </ButtonTwo>
        </motion.div>
      </div>

      {/* Right Section - Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="flex justify-center m-auto mt-16 w-fit md:mt-0"
      >
        <ProfileCard
          name="Joshua Onyeka"
          title="Software Developer"
          handle="Jo_shua"
          status="Online"
          contactText="Contact Me"
          avatarUrl={myImage}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => window.open("https://calendly.com/jo_shua/", "_blank")}
        />
      </motion.div>
    </div>
  );
}
