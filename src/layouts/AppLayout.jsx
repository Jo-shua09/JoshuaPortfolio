import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Noise from "../components/animations/Noise";
import Navigation from "../components/common/Navigation";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Index from "../pages/Index";
import Portfolio from "../pages/Portfolio";
import { motion } from "framer-motion";
import Loader from "../components/animations/Loader";

export default function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative m-auto w-full max-w-[185rem] overflow-hidden">
      {/* Background layer */}
      <div className="overflow-hidden fixed inset-0 w-full h-full bg-neutral-950 -z-10">
        <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={2} patternAlpha={15} />
      </div>

      {/* Loader */}

      {!isLoading && (
        // Content layer
        <motion.div className="relative z-10 section-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.3 }}>
          <div className="w-full !h-fit">
            <Navigation />
          </div>

          <Index />
          <Portfolio />
          <About />
          <Contact />
        </motion.div>
      )}
      <AnimatePresence mode="wait">{isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}</AnimatePresence>
    </div>
  );
}
