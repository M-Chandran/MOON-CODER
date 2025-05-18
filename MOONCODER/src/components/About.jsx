import React from "react";
import { motion } from "framer-motion";
import { User, Mail, MapPin, Briefcase, DownloadCloud, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const imageMotion = {
    initial: { opacity: 0, scale: 0.7, rotateY: -30 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.2 } 
    }
  };

  const contentMotionContainer = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 }
    }
  };

  const contentItemMotion = {
    initial: { opacity: 0, x: 40 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  
  const infoItems = [
    { icon: <User className="h-5 w-5 text-primary" />, label: "Full Name", value: "M. Chandran" },
    { icon: <Mail className="h-5 w-5 text-primary" />, label: "Email Address", value: "imchandranashok@gmail.com", href: "mailto:imchandranashok@gmail.com" },
    { icon: <MapPin className="h-5 w-5 text-primary" />, label: "Current Location", value: "Kanyakumari, TamilNadu" },
    { icon: <Briefcase className="h-5 w-5 text-primary" />, label: "Work Status", value: "Available for Full-time" },
  ];
  
  const buttonMotionProps = {
    whileHover: { scale: 1.03, transition: { duration: 0.2 } },
    whileTap: { scale: 0.97 }
  };

  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Discover Me
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center mt-12 md:mt-16">
        <motion.div
          variants={imageMotion}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="lg:col-span-5 relative group"
        >
          <div className="aspect-square lg:aspect-[5/6] rounded-2xl overflow-hidden shadow-2xl shadow-primary/25 relative z-10 gradient-border-animated">
            <div className="bg-background rounded-[calc(var(--radius)-3px)] p-1">
              <img 
                alt="M. Chandran, a professional software developer, in a modern setting" 
                className="w-full h-full object-cover rounded-[calc(var(--radius)-4px)] transition-transform duration-500 group-hover:scale-105" 
               src="https://images.unsplash.com/photo-1542837336-d14bdf342f9b" />
            </div>
          </div>
          <motion.div 
            className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 glass-card p-5 md:p-6 rounded-xl shadow-xl z-20 border-primary/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="font-black text-4xl gradient-text">2+</p>
            <p className="text-sm text-foreground/70 mt-1">Years of Experience</p>
          </motion.div>
           <motion.div 
            className="absolute -top-8 -left-8 w-28 h-28 bg-secondary/20 rounded-full -z-0 filter blur-lg"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          variants={contentMotionContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <motion.h2 variants={contentItemMotion} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            A <span className="gradient-text">Passionate Developer</span> Building Tomorrow's <span className="gradient-text">Web</span>
          </motion.h2>
          
          <motion.p variants={contentItemMotion} className="text-lg text-foreground/80 mb-8 leading-relaxed">
            I'm a Computer Science graduate with a fervent dedication to frontend development and creating seamless, responsive web applications. My goal is to leverage my skills in a collaborative, dynamic team, contributing to innovative projects while continuously expanding my knowledge in the ever-evolving tech landscape.
          </motion.p>
          
          <motion.div variants={contentItemMotion} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10">
            {infoItems.map(item => (
              <div key={item.label} className="flex items-center space-x-3.5">
                <span className="p-2 bg-primary/15 rounded-md">{item.icon}</span>
                <div>
                  <p className="font-semibold text-foreground/90 text-sm">{item.label}:</p>
                  {item.href ? 
                    <a href={item.href} className="text-foreground/70 hover:text-primary transition-colors text-base">{item.value}</a> :
                    <p className="text-foreground/70 text-base">{item.value}</p>
                  }
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={contentItemMotion} className="flex flex-col sm:flex-row gap-4">
            <motion.div {...buttonMotionProps}>
              <Button asChild size="lg" className="text-base px-7 py-6 gradient-border-animated button-shine-effect">
                 <a href="#contact" className="flex items-center gap-2.5 bg-background hover:bg-transparent text-foreground px-6 py-3 rounded-[calc(var(--radius)-3px)] transition-all duration-300">
                  <MessageSquare className="h-5 w-5" /> Let's Talk
                </a>
              </Button>
            </motion.div>
            <motion.div {...buttonMotionProps}>
              <Button asChild size="lg" variant="outline" className="text-base px-7 py-6 button-shine-effect">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
                  <DownloadCloud className="h-5 w-5" /> My Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;