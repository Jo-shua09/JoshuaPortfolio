import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import me from "../../assets/images/me.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col overflow-hidden items-center justify-center w-full min-h-[70vh]">
      <div className="relative z-10 p-8 px-10 text-center section">
        <div className="m-auto !my-20 w-fit h-fit">
          <img src={me} loading="lazy" alt="me image" className="w-[10rem] h-[10rem] brightness-50 rounded-full " />
        </div>
        <h1 className="text-4xl font-bold text-white normal-case md:text-5xl font-monospace">Hello i'm Joshua Onyeka, a</h1>
        <p className="md:text-[8rem] text-nowrap text-6xl leading-tight font-semibold normal-case my-5 text-neutral-200">Software Developer</p>
        <p className="md:text-3xl text-[1.7rem] font-medium normal-case text-neutral-200 max-w-4xl m-auto md:leading-relaxed leading-loose md:max-w-[110rem]">
          I’m a software developer specializing in web applications, crafting responsive and high-performance solutions with React.js, Next.js, and
          TypeScript. I focus on clean code, scalable architecture, and intuitive user experiences that deliver real results. Passionate about modern
          web development, I build efficient, maintainable software while continuously learning and adapting to new technologies.
        </p>

        <div className="flex items-center justify-center max-w-xs m-auto mt-24">
          <div className="flex justify-between w-full gap-6 place-content-center">
            {/* X (Twitter) */}
            <a
              href="https://x.com/jo_shua_9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my X profile (opens in new tab)"
              className="transition-all duration-300 group"
            >
              <FaXTwitter className="text-5xl text-neutral-400 hover:text-[#000000] dark:hover:text-[#ffffff] cursor-pointer transition-transform duration-300 hover:scale-110" />
              <span className="sr-only">X (Twitter) profile</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/joshua-onyeka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile (opens in new tab)"
              className="transition-all duration-300 group"
            >
              <FaLinkedin className="text-5xl text-neutral-400 hover:text-[#0A66C2] cursor-pointer transition-transform duration-300 hover:scale-110" />
              <span className="sr-only">LinkedIn profile</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/jo-shua09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile (opens in new tab)"
              className="transition-all duration-300 group"
            >
              <FaGithub className="text-5xl text-neutral-400 hover:text-[#181717] dark:hover:text-[#ffffff] cursor-pointer transition-transform duration-300 hover:scale-110" />
              <span className="sr-only">GitHub profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
