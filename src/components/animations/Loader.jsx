import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + Math.random() * 15, 100));
      } else {
        onLoadingComplete?.();
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-neutral-950 wrapper">
      <div className="container grid w-32 grid-cols-3 gap-1 rotate-45 shadow-2xl">
        {new Array(9).fill().map((arr) => {
          return <div className="w-10 h-10 shadow-2xl box bg-neutral-500"></div>;
        })}
      </div>
    </div>
  );
}
