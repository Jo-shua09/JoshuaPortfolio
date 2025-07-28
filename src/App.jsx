import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Approuter from "./routes/Approuter";
import Loader from "./components/animations/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loader */}
      <AnimatePresence mode="wait">{isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}</AnimatePresence>

      <Approuter />
    </>
  );
}
