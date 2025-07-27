import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import Button from "../ui/Button";
import { BiPhone } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function ContactForm() {
  return (
    <div className="w-full md:mb-0 mb-52">
      <p className="max-w-6xl pt-6 text-3xl font-medium normal-case text-neutral-300">
        Ready to start your next project? Let's collaborate and create something amazing together. I'm always excited to work on new challenges and
        innovative ideas.
      </p>
      <div className="flex flex-wrap-reverse items-center justify-between w-full gap-12 mt-20 md:flex-nowrap">
        <div className="w-full md:flex-[2]">
          <div className="w-full p-20 text-center shadow-xl rounded-2xl space-y-7 bg-neutral-900">
            <h3 className="text-5xl font-bold text-white normal-case font-monospace">Ready to Start a Project?</h3>
            <p className="text-3xl font-medium normal-case text-neutral-200">
              I'm currently available for freelance opportunities and exciting new projects. Let's discuss how we can bring your ideas to life.
              Schedule a Call
            </p>
            <Button
              onClick={() => window.open("https://calendly.com/jo_shua/", "_blank")}
              target="_blank"
              rel="noopener noreferrer"
              icon={<BiPhone className="text-4xl" />}
              className="flex items-center justify-center w-fit h-[5.5rem] m-auto border-2 normal-case !mt-20"
            >
              schedule a call
            </Button>
          </div>

          <div className="mt-20 space-y-10 ">
            <div className="w-full max-w-2xl p-10 m-auto shadow-xl rounded-2xl bg-neutral-900">
              <h3 className="text-4xl font-bold text-center text-white normal-case font-monospace">My social accounts</h3>
              <div className="flex items-center justify-center gap-20 mt-20">
                <div className="flex items-center justify-center">
                  <div className="flex justify-between w-full gap-12 place-content-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <a href="https://x.com/jo_shua_9" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 group">
                        <FaXTwitter className="text-5xl text-neutral-400 hover:text-[#000000] dark:hover:text-[#ffffff] cursor-pointer transition-transform duration-300 hover:scale-110" />
                        <span className="sr-only">X (Twitter) profile</span>
                      </a>
                      <p className="text-2xl font-medium text-white font-monospace">Twitter</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2">
                      <a
                        href="https://linkedin.com/in/joshua-onyeka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 group"
                      >
                        <FaLinkedin className="text-5xl text-neutral-400 hover:text-[#0A66C2] cursor-pointer transition-transform duration-300 hover:scale-110" />
                        <span className="sr-only">LinkedIn profile</span>
                      </a>
                      <p className="text-2xl font-medium text-white font-monospace">linkedin</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2">
                      <a href="https://github.com/jo-shua09" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 group">
                        <FaGithub className="text-5xl text-neutral-400 hover:text-[#181717] dark:hover:text-[#ffffff] cursor-pointer transition-transform duration-300 hover:scale-110" />
                        <span className="sr-only">GitHub profile</span>
                      </a>
                      <p className="text-2xl font-medium text-white font-monospace">github</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => (window.location.href = "mailto:joshuaonyeka2020@gmail.com")}
              className="w-full max-w-2xl p-10 m-auto shadow-xl cursor-pointer rounded-2xl hover:scale-95 bg-neutral-900"
            >
              <h3 className="mb-10 text-4xl font-bold text-center text-white normal-case font-monospace">Let's connect</h3>
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center p-3 rounded-full bg-neutral-500">
                  <MdMailOutline className="text-5xl text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold text-white">joshua onyeka</h3>
                  <a
                    href="mailto:joshuaonyeka2020@gmail.com"
                    className="text-3xl font-semibold normal-case cursor-pointer text-neutral-300 hover:text-white"
                  >
                    joshuaonyeka2020@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="w-full md:flex-[2]">
          <div className="w-full p-10 shadow-xl rounded-2xl bg-neutral-900">
            <h3 className="text-5xl font-bold text-white normal-case font-monospace">Send a message</h3>
            <div className="mt-16 space-y-10">
              <div className="space-y-2">
                <label className="text-neutral-200 font-medium text-[1.7rem]">full name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  required
                  className="text-[1.7rem] placeholder:text-2xl font-medium text-white border border-neutral-700 rounded-2xl normal-case pl-4 w-full h-[5.5rem] focus:border-white bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-neutral-200 font-medium text-[1.7rem]">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="text-[1.7rem] placeholder:text-2xl font-medium text-white border border-neutral-700 rounded-2xl normal-case pl-4 w-full h-[5.5rem] focus:border-white bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-neutral-200 font-medium text-[1.7rem]">subject</label>
                <input
                  type="text"
                  placeholder="Enter subject of mail"
                  required
                  className="text-[1.7rem] placeholder:text-2xl font-medium text-white border border-neutral-700 rounded-2xl normal-case pl-4 w-full h-[5.5rem] focus:border-white bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-neutral-200 font-medium text-[1.7rem]">message</label>
                <textarea
                  type="text"
                  placeholder="Enter your message"
                  required
                  className="text-[1.7rem] placeholder:text-2xl font-medium text-white border border-neutral-700 rounded-2xl normal-case p-4 w-full h-[15rem] focus:border-white bg-transparent"
                />
              </div>
              <div className="w-full">
                <Button
                  className="w-full h-[5.5rem] flex justify-center items-center "
                  icon={<FaTelegramPlane className="text-3xl" />}
                  children="send message"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
