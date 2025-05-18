
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];
  
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };
  
  const socialIconVariants = {
     hidden: { opacity: 0, scale: 0.5 },
     visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
     })
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-xl shadow-primary/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <motion.a 
            href="#home" 
            className="text-2xl font-bold gradient-text tracking-wider"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            M.CHANDRAN
          </motion.a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                className={`nav-item ${activeSection === link.id ? "active" : ""}`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors duration-300"
              variants={socialIconVariants} custom={0} initial="hidden" animate="visible"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors duration-300"
              variants={socialIconVariants} custom={1} initial="hidden" animate="visible"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.div variants={socialIconVariants} custom={2} initial="hidden" animate="visible">
              <Button asChild size="sm" className="ml-2 gradient-border !border-none !p-[2px]">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-background hover:bg-background/80 text-foreground px-3 py-1.5 rounded-[calc(var(--radius)-2px)] transition-all">
                  <FileText className="h-4 w-4" /> Resume
                </a>
              </Button>
            </motion.div>
          </div>

          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-lg shadow-lg border-t border-border/20"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  className={`block py-3 px-3 text-lg text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-md transition-colors ${
                    activeSection === link.id ? "text-primary bg-primary/10 font-semibold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05, duration: 0.3 } }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-border/30">
                <div className="flex space-x-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
                <Button asChild size="sm" className="gradient-border !border-none !p-[2px]">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-background hover:bg-background/80 text-foreground px-4 py-2 rounded-[calc(var(--radius)-2px)] transition-all">
                    <FileText className="h-4 w-4" /> Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
