import { BiDownload } from "react-icons/bi";
import logo from "../../assets/images/logo.png";
import Dock from "./../animations/Dock";
import { FiHome, FiMail } from "react-icons/fi";
import { useEffect, useState } from "react";
import Button, { ButtonTwo } from "../ui/Button";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

export default function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const items = [
    { icon: <FiHome size={28} />, label: "Home", onClick: () => scrollToSection("home") },
    { icon: <LuLayoutDashboard size={28} />, label: "Portfolio", onClick: () => scrollToSection("projects") },
    { icon: <CgProfile size={28} />, label: "About", onClick: () => scrollToSection("about") },
    { icon: <FiMail size={28} />, label: "Contact", onClick: () => scrollToSection("contact") },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="w-full pt-10 md:!h-fit overflow-hidden !h-[100px] fixed top-0 left-0 right-0">
        <div className="md:max-w-[100rem] max-w-6xl w-[85%] md:!h-fit !h-[11rem] z-[9999] p-10 md:w-full rounded-2xl border border-neutral-500/30 m-auto backdrop-blur-3xl">
          <nav className="flex items-center justify-between">
            <div className="w-full h-full">
              <img src={logo} loading="lazy" alt="logo image" className="object-contain w-20 md:w-24 h-fit" />
            </div>

            <div className="flex items-center justify-end w-full gap-10">
              {!isMobile && (
                <>
                  <a href="#" className="text-3xl font-medium text-neutral-300 hover:font-semibold hover:text-white">
                    Home
                  </a>
                  <a href="#projects" className="text-3xl font-medium text-neutral-300 hover:font-semibold hover:text-white">
                    projects
                  </a>
                  <a href="#about" className="text-3xl font-medium text-neutral-300 hover:font-semibold hover:text-white">
                    About
                  </a>
                  <a href="#contact" className="text-3xl font-medium text-neutral-300 hover:font-semibold hover:text-white">
                    Contact
                  </a>
                </>
              )}
              <ButtonTwo children="resume" icon={<BiDownload size={20} />} title="Download PDF resume" aria="Download resume" />
            </div>
          </nav>
        </div>
        <div className="!z-[9999] md:hidden block">
          <Dock items={items} panelHeight={68} baseItemSize={55} magnification={80} />
        </div>
      </header>

      <div className="!z-[9999] md:hidden block">
        <Dock items={items} panelHeight={68} baseItemSize={55} magnification={80} />
      </div>
    </>
  );
}
