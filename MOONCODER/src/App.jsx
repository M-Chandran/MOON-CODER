import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader"; 

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef({});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4 
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "about", "skills", "projects", "education", "experience", "certificates", "contact"];
    
    sections.forEach(id => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = sectionRefs.current[id];
        if (el) observer.unobserve(el);
      });
    };
  }, [isLoading]);

  const sectionAnimationVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: [0.17, 0.67, 0.83, 0.67] }
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden antialiased">
      <div className="animated-aurora-bg"></div>
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="home" ref={el => sectionRefs.current.home = el}>
          <Hero />
        </section>
        
        {[ "about", "skills", "projects", "education", "experience", "certificates", "contact"].map((id, index) => {
          const Component = {
            about: About,
            skills: Skills,
            projects: Projects,
            education: Education,
            experience: Experience,
            certificates: Certificates,
            contact: Contact
          }[id];

          return (
            <motion.section 
              key={id}
              id={id}
              ref={el => sectionRefs.current[id] = el}
              initial="initial"
              whileInView="animate"
              variants={sectionAnimationVariants}
              viewport={{ once: true, amount: 0.15 }}
              className={`py-28 md:py-40 section-bg-subtle-glow ${index % 2 !== 0 ? 'bg-card/30' : ''}`}
            >
              <Component />
            </motion.section>
          );
        })}
      </main>
      
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}

export default App;