import FuzzyText from "../animations/FuzzyText";
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
        <div className="md:mr-0 mr-5 py-3 flex md:m-0 m-auto border rounded-full w-fit !-z-10 border-neutral-800 backdrop-blur-sm bg-neutral-900/30">
          <FuzzyText baseIntensity={0.15} hoverIntensity={1} enableHover={true} fontSize="clamp(2rem, 10vw, 3.5rem)">
            Skills
          </FuzzyText>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-16 gap-y-20 !mt-16">
          <div className="rounded-xl p-10 w-full shadow-2xl m-auto bg-neutral-900">
            <h2 className="text-5xl font-semibold mb-20 text-white font-monospace">tech stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-14">
              <div className="space-x-5 flex items-center">
                <img src={html} alt="html logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">Html</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={css} alt="html logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">CSS</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={tailwind} alt="html logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">tailwindCss</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={js} alt="html logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">javascript</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={react} alt="html logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">reactjs</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={typescript} alt="html logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">typescript</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={next} alt="next logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">nextjs</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={redux} alt="html logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">redux</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={firebase} alt="firebase logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">firebase</h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-10 max-w-7xl shadow-2xl bg-neutral-900">
            <h2 className="text-5xl font-semibold mb-20 text-white font-monospace">other tools and technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-14">
              <div className="space-x-5 flex items-center">
                <img src={git} alt="git logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">git</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={github} alt="github logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">github</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={postman} alt="postman logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">postman</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={mui} alt="MUI logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">material UI</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={swiper} alt="swiper logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">swiper</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={aos} alt="aos logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">AOS</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={reactbit} alt="aos logo" className="w-[16rem] h-fit object-contain" />
              </div>
              <div className="space-x-5 flex items-center">
                <img src={daisyui} alt="aos logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">daisyUI</h3>
              </div>
              <div className="space-x-5 flex items-center">
                <img src={rechart} alt="rechart logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">rechart</h3>
              </div>

              <div className="space-x-5 flex items-center">
                <img src={vscode} alt="vscode logo" className="w-20 h-20 object-contain" />
                <h3 className="text-[1.7rem] font-semibold text-neutral-300">VS code</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
