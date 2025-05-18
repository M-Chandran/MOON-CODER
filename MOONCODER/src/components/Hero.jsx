
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 15, duration: 0.9 },
    },
  };
  
  const buttonMotionProps = {
    whileHover: { 
      scale: 1.03, 
      boxShadow: "0px 0px 25px hsl(var(--primary)/0.7)",
      transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.97 }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center animated-bg text-center overflow-hidden px-4 pt-20 pb-10 md:pt-24 md:pb-16">
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-50"
            style={{
              width: Math.random() * 8 + 4, 
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${Math.random()*360}, 70%, 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              opacity: [0, Math.random() * 0.3 + 0.1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-5 text-glow"
          variants={heroItemVariants}
        >
          Hello, I'm <span className="gradient-text">M. Chandran</span>
        </motion.h1>

        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-foreground/90"
          variants={heroItemVariants}
        >
          Innovative Software Developer & Frontend Architect
        </motion.h2>

        <motion.p
          variants={heroItemVariants}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-foreground/80 leading-relaxed"
        >
          Transforming complex ideas into elegant, high-performance digital solutions. Passionate about creating intuitive user experiences with cutting-edge web technologies.
        </motion.p>

        <motion.div
          variants={heroItemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full max-w-md sm:max-w-none"
        >
          <motion.a href="#contact" {...buttonMotionProps} className="w-full sm:w-auto">
            <Button size="lg" className="w-full gap-2.5 text-lg px-8 py-7 rounded-xl gradient-border-animated button-shine-effect">
               <span className="flex items-center justify-center w-full gap-2.5 bg-background hover:bg-transparent text-foreground px-6 py-3.5 rounded-[calc(var(--radius)-3px)] transition-all duration-300">
                  <Mail className="h-5 w-5" /> Get In Touch
               </span>
            </Button>
          </motion.a>
          <motion.a href="/resume.pdf" target="_blank" rel="noopener noreferrer" {...buttonMotionProps} className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full gap-2.5 text-lg px-8 py-7 rounded-xl button-shine-effect">
              <Download className="h-5 w-5" /> Download CV 
            </Button>
          </motion.a>
        </motion.div>

        <motion.div
          variants={heroItemVariants}
          className="mt-16 sm:mt-20 flex justify-center space-x-10"
        >
          <motion.a
            href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.25, y: -4, filter: "drop-shadow(0 0 8px hsl(var(--primary)/0.7))" }}
          >
            <Github className="h-8 w-8" />
          </motion.a>
          <motion.a
            href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.25, y: -4, filter: "drop-shadow(0 0 8px hsl(var(--primary)/0.7))" }}
          >
            <Linkedin className="h-8 w-8" />
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="scroll-prompt mt-auto mb-4 md:mb-0">
        <span className="text-sm text-foreground/50 mb-2 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-7 w-7 text-foreground/50" />
      </div>
    </div>
  );
};

export default Hero;
