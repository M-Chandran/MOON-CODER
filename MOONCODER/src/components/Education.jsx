import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.E. Computer Science Engineering",
      institution: "DMI Engineering College",
      location: "Tamil Nadu, India",
      period: "2021 - 2025",
      gpa: "CGPA: 7.8 / 10",
      description: "Graduated with a comprehensive understanding of core computer science principles, software engineering methodologies, and specialized in frontend technologies. Key coursework included Data Structures, Algorithms, Web Development, and Database Management.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />
    },
    {
      id: 2,
      degree: "Higher Secondary Education (Science Stream)",
      institution: "St. Teresa's Hr. Sec. School",
      location: "Kanyakumari, Tamil Nadu, India",
      period: "2018 - 2021",
      gpa: "Percentage: 80%",
      description: "Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry. This built a strong analytical and problem-solving foundation crucial for engineering studies.",
      icon: <BookOpen className="h-8 w-8 text-secondary" />
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
        Academic Journey
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 md:mt-16 max-w-3xl mx-auto"
      >
        {educationData.map((eduItem) => (
          <motion.div 
            key={eduItem.id}
            variants={itemVariants}
            className="timeline-item group"
          >
            <div className="bg-card/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border border-border/50 hover:border-primary/50 transform hover:-translate-y-1">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="bg-primary/10 p-4 rounded-full mt-1 group-hover:scale-110 transition-transform duration-300">
                  {eduItem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground/95">{eduItem.degree}</h3>
                  <p className="text-foreground/80 mt-1 text-base md:text-lg">{eduItem.institution}, {eduItem.location}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 mt-3 text-sm md:text-base text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>{eduItem.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-secondary" />
                      <span className="font-semibold">{eduItem.gpa}</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-foreground/80 leading-relaxed text-base">{eduItem.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;