import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const footerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const itemVariants = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: delay, ease: "easeOut" }
    }
  });


  return (
    <motion.footer 
      className="bg-card/30 backdrop-blur-md py-12 mt-24 md:mt-32 border-t border-border/30"
      variants={footerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div 
            className="text-center md:text-left"
            variants={itemVariants(0.1)}
          >
            <span className="text-3xl font-extrabold gradient-text tracking-wider">M.CHANDRAN</span>
            <p className="text-foreground/70 mt-3 max-w-xs mx-auto md:mx-0">
              Software Developer crafting digital excellence with code and creativity.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6"
            variants={itemVariants(0.2)}
          >
            {[
              { href: "https://github.com", icon: <Github className="h-6 w-6" />, label: "GitHub" },
              { href: "https://linkedin.com", icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn" },
              { href: "mailto:imchandranashok@gmail.com", icon: <Mail className="h-6 w-6" />, label: "Email" }
            ].map((social, index) => (
              <motion.a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
                custom={index}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center md:text-right"
            variants={itemVariants(0.3)}
          >
            <button 
              onClick={scrollToTop} 
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300 mb-3"
              aria-label="Scroll to top"
            >
              <ArrowUpCircle className="h-5 w-5" /> Back to Top
            </button>
            <p className="text-sm text-foreground/60">
              &copy; {currentYear} M. Chandran. All Rights Reserved.
            </p>
            <p className="text-xs text-foreground/50 mt-1">
              Built with React, TailwindCSS & Framer Motion.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;