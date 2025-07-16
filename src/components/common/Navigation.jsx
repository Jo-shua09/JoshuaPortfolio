import { BiDownload } from "react-icons/bi";
import StarBorder from "../animations/StarBorder";
import logo from "../../assets/images/logo.png";

export default function Navigation() {
  return (
    <header className="w-full py-12">
      <div className="md:max-w-[100rem] max-w-6xl p-10 w-full rounded-2xl border border-neutral-500/30 m-auto backdrop-blur-sm bg-neutral-900/30">
        {/* Add your navigation content here */}
        <nav className="flex items-center justify-between">
          <div className="w-full h-full">
            <img src={logo} loading="lazy" alt="logo image" className="object-contain w-[5rem] h-fit" />
          </div>

          <div className="flex items-center gap-10">
            <a href="#" className="text-3xl font-medium text-neutral-500 hover:text-white">
              Home
            </a>
            <a href="#" className="text-3xl font-medium text-neutral-500 hover:text-white">
              About
            </a>
            <a href="#" className="text-3xl font-medium text-neutral-500 hover:text-white">
              Contact
            </a>

            <StarBorder
              as="button"
              className="custom-class hover:scale-95"
              color="gray"
              speed="5s"
              aria-label="Download resume"
              title="Download PDF resume"
            >
              resume <BiDownload />
            </StarBorder>
          </div>
        </nav>
      </div>
    </header>
  );
}
