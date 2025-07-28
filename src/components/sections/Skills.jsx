import FuzzyText from "../animations/FuzzyText";
import ScrollAnimation from "../animations/ScrollAnimation";
import react from "../../assets/images/react-logo.svg";
import js from "../../assets/images/javascript-logo.png";
import html from "../../assets/images/html-logo.png";
import css from "../../assets/images/css-logo.png";
import tailwind from "../../assets/images/tailwind-logo.svg";
import mui from "../../assets/images/material-ui.svg";
import swiper from "../../assets/images/swiper-logo.svg";
import aos from "../../assets/images/aos-logo.png";
import redux from "../../assets/images/redux-logo.svg";
import rechart from "../../assets/images/rechart-logo.svg";
import typescript from "../../assets/images/typescript-logo.png";
import next from "../../assets/images/nextjs-logo.svg";
import postman from "../../assets/images/postman-logo.svg";
import git from "../../assets/images/git-logo.svg";
import github from "../../assets/images/github-logo.svg";
import firebase from "../../assets/images/firebase-logo.svg";
import vscode from "../../assets/images/vscode-logo.svg";
import daisyui from "../../assets/images/daisyui-logo.svg";
import reactbit from "../../assets/images/reactbit-logo.svg";

export default function Skills() {
  return (
    <div className="w-full section">
      <div className="space-y-4 text-left">
        <div 
          data-aos="fade-down"
          className="md:mr-0 mr-5 py-3 flex md:m-0 m-auto border rounded-full w-fit !-z-10 border-neutral-800 backdrop-blur-sm bg-neutral-900/30"
        >
          <FuzzyText baseIntensity={0.1} hoverIntensity={1} enableHover={true} fontSize="clamp(2rem, 10vw, 3.5rem)">
            Skills
          </FuzzyText>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-16 gap-y-20 !mt-16">
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
            className="rounded-xl p-10 w-full shadow-2xl m-auto bg-neutral-900"
          >
            <h2 className="text-5xl font-semibold mb-20 text-white font-monospace">tech stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-14">
              {[
                { src: html, name: "Html" },
                { src: css, name: "CSS" },
                { src: tailwind, name: "tailwindCss" },
                { src: js, name: "javascript" },
                { src: react, name: "reactjs" },
                { src: typescript, name: "typescript" },
                { src: next, name: "nextjs" },
                { src: redux, name: "redux" },
                { src: firebase, name: "firebase" },
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                  className="space-x-5 flex items-center"
                >
                  <img src={tech.src} alt={`${tech.name} logo`} className="w-20 h-20 object-contain" />
                  <h3 className="text-[1.7rem] font-semibold text-neutral-300">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-delay="200"
            className="rounded-xl p-10 max-w-7xl shadow-2xl bg-neutral-900"
          >
            <h2 className="text-5xl font-semibold mb-20 text-white font-monospace">other tools and technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-14">
              {[
                { src: git, name: "git" },
                { src: github, name: "github" },
                { src: postman, name: "postman" },
                { src: mui, name: "material UI" },
                { src: swiper, name: "swiper" },
                { src: aos, name: "AOS" },
                { src: reactbit, name: "", className: "w-[16rem] h-fit" },
                { src: daisyui, name: "daisyUI" },
                { src: rechart, name: "rechart" },
                { src: vscode, name: "VS code" },
              ].map((tool, index) => (
                <div 
                  key={tool.name || index}
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                  className="space-x-5 flex items-center"
                >
                  <img 
                    src={tool.src} 
                    alt={`${tool.name} logo`} 
                    className={tool.className || "w-20 h-20 object-contain"} 
                  />
                  {tool.name && <h3 className="text-[1.7rem] font-semibold text-neutral-300">{tool.name}</h3>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
