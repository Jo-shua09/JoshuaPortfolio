import Noise from "../components/animations/Noise";
import Footer from "../components/common/Footer";
import Navigation from "../components/common/Navigation";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Index from "../pages/Index";
import Portfolio from "../pages/Portfolio";
import { motion } from "framer-motion";

export default function AppLayout() {
  return (
    <div className="relative m-auto w-full max-w-[185rem]">
      {/* Background layer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-neutral-950 -z-10">
        <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={2} patternAlpha={15} />
      </div>

      {/* Content layer */}
      <motion.div
        className="relative z-10 section-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <Navigation />
        <Index />
        <Portfolio />
        <About />
        <Contact />
      </motion.div>
      {/* <Footer /> */}
    </div>
  );
}
