"use client";
import { motion } from "framer-motion";

export default function AnimatedPicture() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.img
        src="/2.png" // Replace with your image path
        alt="Animated Picture"
        initial={{ rotate: 0, y: 0 }}
        // Starting position and rotation
        animate={{
          rotate: [0, 10, -10, 0], // Rotate 5 degrees left and right
          y: [0, -20, 0], // Move up and down
        }}
        transition={{
          duration: 10, // Duration for one loop
          repeat: Infinity, // Infinite loop
          ease: "easeInOut", // Smooth easing
        }}
        style={{ width: "100%", height: "60%", opacity: "0.2" }} // Customize as needed
      />
    </div>
  );
}
