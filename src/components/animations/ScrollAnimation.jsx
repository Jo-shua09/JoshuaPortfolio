import { motion } from "framer-motion";

export default function ScrollAnimation({ children, className, delay = 0, direction = "up" }) {
  const animations = {
    up: {
      initial: { y: 100, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
    },
    down: {
      initial: { y: -100, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
    },
    left: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
    right: {
      initial: { x: 100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      whileInView: { scale: 1, opacity: 1 },
    },
  };

  return (
    <motion.div
      className={className}
      initial={animations[direction].initial}
      whileInView={animations[direction].whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}