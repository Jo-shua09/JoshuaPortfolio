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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5,
      stagger: {
        amount: 1.5,
        from: "start",
        grid: [3, 3],
      },
    });
    tl.to(".container", {
      rotate: "-450deg",
      scale: 0,
      dfuration: 1,
    });
    tl.to(".wrapper", {
      opacity: 0,
      display: "none",
    });
  });

  return (
    <div className="relative m-auto w-full max-w-[185rem] overflow-hidden">
      {/* Background layer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-neutral-950 -z-10">
        <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={2} patternAlpha={15} />
      </div>

      {/* Loader */}

      {!isLoading && (
        // Content layer
        <motion.div className="relative z-10 section-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.3 }}>
          <Navigation />
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
