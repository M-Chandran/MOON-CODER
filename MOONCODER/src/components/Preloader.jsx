import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const name = "M.CHANDRAN";
  const tagline = "Forging Digital Realities...";

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 } 
    }
  };

  const nameLetterVariants = {
    initial: { opacity: 0, y: 30, skewY: 5 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        delay: i * 0.08 + 0.3,
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1] 
      }
    })
  };

  const taglineWordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 1.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  const lineVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: [0.6, 0.01, -0.05, 0.95],
        delay: 0.8
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative mb-6 md:mb-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text tracking-tight">
          {name.split("").map((char, i) => (
            <motion.span 
              key={`${char}-${i}`}
              custom={i}
              variants={nameLetterVariants}
              className="inline-block"
              style={{ transformOrigin: "bottom center" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        <motion.div 
          className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
          variants={lineVariants}
          style={{ transformOrigin: "left" }}
        />
      </div>
      
      <div className="text-lg md:text-xl text-foreground/70 tracking-wider">
        {tagline.split(" ").map((word, i) => (
          <motion.span 
            key={`${word}-${i}`}
            custom={i}
            variants={taglineWordVariants}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;