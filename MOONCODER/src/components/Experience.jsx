import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Users, Target } from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Intern - Industrial Android App Developer",
      company: "NSIC",
      location: "Chennai, India (Remote)",
      period: "May 2021 - Aug 2021",
      description: "Contributed to the development of a cutting-edge Android application for industrial automation. Focused on UI/UX, real-time data synchronization, and robust offline capabilities.",
      responsibilities: [
        "Designed and implemented intuitive user interfaces using Java and Android SDK.",
        "Integrated RESTful APIs for seamless real-time data flow and device control.",
        "Developed and tested features for offline data storage and synchronization.",
        "Collaborated within an Agile team, participating in daily scrums and sprint planning."
      ],
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
    {
      id: 2,
      role: "Intern - Full Stack Web Developer",
      company: "Cresent Technosoft",
      location: "Chennai, India (Remote)",
      period: "Jan 2024 - Apr 2024",
      description: "Gained hands-on experience in full-stack web development, building responsive UIs and scalable backend services for diverse client projects.",
      responsibilities: [
        "Developed dynamic and responsive web interfaces using React, Next.js, and TailwindCSS.",
        "Built and maintained backend APIs with Node.js, Express, and PostgreSQL.",
        "Implemented user authentication, authorization, and data validation.",
        "Actively participated in code reviews, ensuring code quality and best practices."
      ],
      icon: <Target className="h-8 w-8 text-secondary" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 10 } }
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
        Professional Milestones
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 md:mt-16 max-w-3xl mx-auto"
      >
        {experienceData.map((expItem) => (
          <motion.div 
            key={expItem.id}
            variants={itemVariants}
            className="timeline-item group"
          >
            <div className="bg-card/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 border border-border/50 hover:border-secondary/50 transform hover:-translate-y-1">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="bg-secondary/10 p-4 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                  {expItem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground/95">{expItem.role}</h3>
                  <p className="text-foreground/80 mt-1 text-base md:text-lg">{expItem.company}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 mt-3 text-sm md:text-base text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{expItem.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{expItem.location}</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-foreground/80 leading-relaxed text-base">{expItem.description}</p>
                  
                  <div className="mt-5">
                    <h4 className="font-semibold text-foreground/90 mb-2 text-base">Key Responsibilities:</h4>
                    <ul className="space-y-2 text-foreground/80 text-sm list-none">
                      {expItem.responsibilities.map((responsibility, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Users className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                          {responsibility}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;