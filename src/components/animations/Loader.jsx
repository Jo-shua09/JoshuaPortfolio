import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + Math.random() * 15, 100));
      } else {
        onLoadingComplete?.();
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-neutral-950"
    >
      <div className="relative flex flex-col items-center">
        <div className="relative w-64 h-64">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 border-4 border-neutral-800 rounded-full"
            animate={{
              rotate: 360,
              borderColor: ["#1a1a1a", "#333333", "#1a1a1a"],
            }}
            transition={{
              rotate: { duration: 2, ease: "linear", repeat: Infinity },
              borderColor: { duration: 3, repeat: Infinity },
            }}
          />
          
          {/* Inner pulsing circle */}
          <motion.div
            className="absolute inset-0 m-8 bg-neutral-900 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Progress text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-4xl font-bold text-white font-monospace"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </div>

        {/* Loading text */}
        <motion.div
          className="mt-8 text-2xl text-neutral-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  );
}