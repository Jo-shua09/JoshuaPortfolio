import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Approuter from "./routes/Approuter";
import Loader from "./components/animations/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
      delay: 100,
    });
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence mode="wait">{isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}</AnimatePresence>

      <Approuter />
    </>
  );
}
