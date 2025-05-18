import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, XCircle, ShieldCheck, BrainCircuit, Code2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);

  const certificates = [
    {
      id: 1,
      title: "NGRC Finalist - Top 10",
      issuer: "National Graduate Research Competition",
      date: "2025",
      description: "Achieved 10th place nationally for pioneering research in AI-driven dark pattern detection and mitigation strategies.",
      image: "ngrc-certificate-finalist",
      icon: <Award className="h-8 w-8 text-primary" />,
      bgColor: "bg-primary/10",
      borderColor: "border-primary/50"
    },
    {
      id: 2,
      title: "Dark Pattern Buster - Hackathon ",
      issuer: "TechInnovate Annual Hackathon",
      date: "2023",
      description: "Secured top 10th place for developing a novel browser extension that proactively identifies and neutralizes manipulative dark patterns.",
      image: "hackathon-winner-certificate",
      icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/50"
    },
    {
      id: 3,
      title: "Advanced Quantum Algorithm Design",
      issuer: "Quantum Research Institute Fellowship",
      date: "2023",
      description: "Certified for advanced research and practical implementation of novel quantum computing algorithms for complex optimization tasks.",
      image: "quantum-research-certificate",
      icon: <BrainCircuit className="h-8 w-8 text-accent" />,
      bgColor: "bg-accent/10",
      borderColor: "border-accent/50"
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } },
    exit: { opacity: 0, scale: 0.8, y: -50, transition: { duration: 0.3, ease: "easeIn" } }
  };


  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="section-heading text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Recognitions & Achievements
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 md:mt-16"
      >
        {certificates.map((certificate) => (
          <motion.div 
            key={certificate.id} 
            variants={itemVariants}
            className={`certificate-card cursor-pointer group ${certificate.borderColor}`}
            onClick={() => setSelectedCertificate(certificate)}
          >
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className={`p-4 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300 ${certificate.bgColor}`}>
                {certificate.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground/95">{certificate.title}</h3>
                <p className="text-foreground/80 mt-1 text-base">{certificate.issuer}</p>
                <p className="text-sm text-foreground/70 mt-1">{certificate.date}</p>
                <p className="mt-4 text-foreground/80 leading-relaxed text-base">{certificate.description}</p>
                
                <Button 
                  variant="link"
                  className="mt-4 inline-flex items-center text-primary hover:text-primary/80 transition-colors px-0 group-hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCertificate(certificate);
                  }}
                >
                  <span className="mr-1">View Certificate</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
      {selectedCertificate && (
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent 
            className="sm:max-w-2xl md:max-w-3xl glass-effect !rounded-xl p-0 overflow-hidden"
            as={motion.div}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-3xl font-bold gradient-text">{selectedCertificate.title}</DialogTitle>
              <DialogClose className="absolute right-4 top-4 !text-foreground/70 hover:!text-foreground">
                <XCircle className="h-6 w-6" />
              </DialogClose>
            </DialogHeader>
            
            <div className="max-h-[70vh] overflow-y-auto p-6 custom-scrollbar">
              <div className="aspect-video rounded-lg overflow-hidden mb-6 border border-border/50 shadow-lg">
                <img   
                  alt={`${selectedCertificate.title} - Certificate Image`}
                  className="w-full h-full object-contain bg-background/30"
                 src="https://images.unsplash.com/photo-1620928491723-e1a4f8222181" />
              </div>
              
              <div className="mt-4">
                <p className="text-lg text-foreground/80 mb-2 leading-relaxed">{selectedCertificate.description}</p>
                <p className="mt-2 text-foreground/70">
                  <span className="font-semibold">Issuer:</span> {selectedCertificate.issuer}
                </p>
                <p className="text-foreground/70">
                  <span className="font-semibold">Date Awarded:</span> {selectedCertificate.date}
                </p>
              </div>
              <Button 
                variant="outline" 
                className="mt-8 w-full sm:w-auto" 
                onClick={() => setSelectedCertificate(null)}
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;