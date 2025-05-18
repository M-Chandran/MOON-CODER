import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Info, XCircle, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Dark Pattern Buster",
      category: "Web Extension",
      description: "Intelligent browser extension to detect and neutralize deceptive UI dark patterns using ML.",
      longDescription: "This cutting-edge browser extension employs machine learning and NLP to identify various dark patterns in real-time. It features customizable blocking, educational insights about detected patterns, and a community-driven reporting system. Built for performance and user privacy.",
      tags: ["JavaScript", "Python (ML)", "WebExtensions API", "TensorFlow.js", "AI/ML", "UX Research"],
      imageName: "dark-pattern-buster",
      githubUrl: "https://github.com/yourusername/dark-pattern-buster",
      liveDemoUrl: "https://darkpatternbuster.example.com"
    },
    {
      id: 2,
      title: "EcoVerse Sustainability Hub",
      category: "Web Platform",
      description: "Community platform promoting eco-friendly living via gamification and resource sharing.",
      longDescription: "EcoVerse is a full-stack web application designed to foster sustainable habits. It includes user profiles, gamified challenges, a marketplace for green products, and an interactive map of local eco-initiatives. Integrates real-time environmental data APIs.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "GraphQL", "Leaflet.js"],
      imageName: "eco-web-app",
      githubUrl: "https://github.com/yourusername/ecoverse",
      liveDemoUrl: "https://ecoverse.example.com"
    },
    {
      id: 3,
      title: "ContentGuard AI Filter",
      category: "Web Extension",
      description: "AI-powered extension for detecting and filtering harmful online content, with parental controls.",
      longDescription: "ContentGuard utilizes computer vision and NLP models to identify and manage inappropriate online content (e.g., violence, hate speech). It offers adjustable sensitivity levels, detailed reporting for parents/guardians, and whitelisting capabilities.",
      tags: ["TypeScript", "Python (AI)", "WebExtensions API", "Computer Vision", "NLP"],
      imageName: "content-guard-ai",
      githubUrl: "https://github.com/yourusername/contentguard-ai",
      liveDemoUrl: "https://contentguard.example.com"
    },
    {
      id: 4,
      title: "IndusTrack Asset Monitor",
      category: "Mobile App",
      description: "Cross-platform app for industrial asset tracking and predictive maintenance using IoT.",
      longDescription: "IndusTrack enables real-time monitoring of industrial machinery, provides predictive maintenance alerts via ML, and features an intuitive UI for field technicians. Built with React Native, it interfaces with IoT sensors and a cloud backend for data analytics.",
      tags: ["React Native", "Firebase", "IoT", "Machine Learning", "Android/iOS", "Cloud Functions"],
      imageName: "industrial-android-app",
      githubUrl: "https://github.com/yourusername/industrack",
      liveDemoUrl: "https://industrack.example.com"
    },
    {
      id: 5,
      title: "QuantumFlow Circuit Simulator",
      category: "Web Platform",
      description: "Web-based tool for simulating quantum circuits and visualizing quantum algorithm execution.",
      longDescription: "QuantumFlow allows users to design quantum circuits with a drag-and-drop interface, simulate their behavior, and visualize qubit states and measurement outcomes. It also includes educational modules on quantum computing principles.",
      tags: ["React", "WebAssembly", "Three.js", "Quantum Computing", "Rust", "Data Visualization"],
      imageName: "quantum-computing-simulator",
      githubUrl: "https://github.com/yourusername/quantumflow",
      liveDemoUrl: "https://quantumflow.example.com"
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 16, duration: 0.6 } }
  };
  
  const modalMotion = {
    initial: { opacity: 0, scale: 0.85, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 30 } },
    exit: { opacity: 0, scale: 0.85, y: -30, transition: { duration: 0.25, ease: "easeIn" } }
  };

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
        My Portfolio Showcase
      </motion.h1>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        A selection of projects that demonstrate my skills in creating innovative and impactful digital solutions.
      </motion.p>

      <motion.div
        initial="initial"
        whileInView="animate"
        variants={{ animate: { transition: { staggerChildren: 0.12 }}}}
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 md:mt-16"
      >
        {projectsData.map((project) => (
          <motion.div 
            key={project.id} 
            variants={cardVariants}
            className="project-display-card h-[400px] md:h-[450px] cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img    
              alt={`Showcase image for ${project.title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
            
            <div className="project-overlay-content">
              <span className="text-xs uppercase tracking-wider font-semibold text-secondary mb-1.5">{project.category}</span>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-glow text-white">{project.title}</h3>
              <p className="text-sm text-foreground/80 mb-4 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 bg-primary/40 text-primary-foreground rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <motion.div {...buttonMotionProps} className="mt-auto">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="gap-2 bg-background/70 backdrop-blur-sm hover:bg-background border-border/50 text-foreground hover:text-primary"
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                >
                  <Eye className="h-4 w-4" /> View Details
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent 
            className="sm:max-w-2xl lg:max-w-3xl glass-card !rounded-xl p-0 overflow-hidden border-primary/30"
            as={motion.div}
            variants={modalMotion}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <DialogHeader className="p-6 pb-2 relative">
              <DialogTitle className="text-3xl font-bold gradient-text">{selectedProject.title}</DialogTitle>
              <DialogClose className="absolute right-5 top-5 !text-foreground/60 hover:!text-foreground transition-colors">
                <XCircle className="h-7 w-7" />
              </DialogClose>
            </DialogHeader>
            
            <div className="max-h-[75vh] overflow-y-auto p-6 pt-2 custom-scrollbar">
              <div className="aspect-video rounded-lg overflow-hidden mb-6 border border-border/40 shadow-lg">
                <img  
                  alt={`Detailed showcase of ${selectedProject.title}`}
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
              </div>

              <DialogDescription className="text-base text-foreground/80 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </DialogDescription>
            
              <div className="mb-7">
                <h4 className="text-lg font-semibold mb-3.5 text-foreground/90">Core Technologies:</h4>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="skill-tag !px-3 !py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border/40">
                <motion.div {...buttonMotionProps} className="flex-1">
                <Button asChild size="lg" className="w-full gap-2 gradient-border-animated button-shine-effect">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-background hover:bg-transparent text-foreground px-4 py-2.5 rounded-[calc(var(--radius)-3px)] transition-all duration-300"
                  >
                    <Github className="h-5 w-5" /> Source Code
                  </a>
                </Button>
                </motion.div>
                <motion.div {...buttonMotionProps} className="flex-1">
                <Button asChild size="lg" variant="secondary" className="w-full gap-2 button-shine-effect">
                  <a 
                    href={selectedProject.liveDemoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-5 w-5" /> Live Preview
                  </a>
                </Button>
                </motion.div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;