import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Zap, Settings, Code, Brain, Users, Database, Palette, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Palette className="h-5 w-5 mr-2" />,
      skills: [
        { name: "React & Next.js", level: 95, description: "Building dynamic UIs, SSR/SSG with Next.js, state management (Zustand, Redux Toolkit)." },
        { name: "JavaScript (ESNext)", level: 95, description: "Modern JS, async/await, functional programming, performance optimization." },
        { name: "TypeScript", level: 90, description: "Type safety, interfaces, generics for robust large-scale applications." },
        { name: "HTML5 & CSS3/SCSS", level: 98, description: "Semantic HTML, advanced CSS (Grid, Flexbox), animations, SCSS for modular styling." },
      ]
    },
    {
      id: "backend",
      name: "Backend & DB",
      icon: <Database className="h-5 w-5 mr-2" />,
      skills: [
        { name: "Node.js & Express", level: 88, description: "Building RESTful APIs, middleware, authentication, and server-side logic." },
        { name: "Python (Flask/Django)", level: 70, description: "Basic experience in Python backend frameworks for web services and scripting." },
        { name: "SQL (MySQL)", level: 80, description: "Database design, complex queries, ORMs (Prisma, Sequelize)." },
       
      ]
    },
    {
      id: "devops",
      name: "Tools & DevOps",
      icon: <Cloud className="h-5 w-5 mr-2" />,
      skills: [
        { name: "Git & GitHub/GitLab", level: 95, description: "Version control, branching strategies, CI/CD with GitHub Actions/GitLab CI." },
        { name: "Docker", level: 80, description: "Containerizing applications for consistent development and deployment." },
        { name: "Figma & Adobe XD", level: 88, description: "Translating designs into pixel-perfect UIs, component-driven design." },
      ]
    }
  ];

  const softSkills = [
    { name: "Creative Problem Solving", icon: <Brain className="h-5 w-5 text-primary" /> },
    { name: "Effective Communication", icon: <Users className="h-5 w-5 text-primary" /> },
    { name: "Agile Methodologies", icon: <Zap className="h-5 w-5 text-primary" /> },
    { name: "UI/UX Design Principles", icon: <Palette className="h-5 w-5 text-primary" /> },
    { name: "API Design & Integration", icon: <Settings className="h-5 w-5 text-primary" /> },
    { name: "Code Optimization", icon: <Code className="h-5 w-5 text-primary" /> },
  ];

  const skillCardVariants = {
    initial: { opacity: 0, y: 25, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 14, duration: 0.5 } }
  };
  
  const softSkillPillVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i) => ({ 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 120, damping: 10, delay: i * 0.07 } 
    })
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
        My Technical Toolkit
      </motion.h1>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        A versatile collection of technologies I leverage to build robust, scalable, and engaging digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-card/60 p-2.5 rounded-xl shadow-lg border border-border/30">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center justify-center py-3.5 px-4 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-primary/50 data-[state=active]:shadow-xl rounded-lg transition-all duration-300 hover:bg-primary/10"
              >
                {category.icon} {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.07 }}}}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={skillCardVariants} className="relative group">
                    <HoverCard openDelay={150} closeDelay={50}>
                      <HoverCardTrigger asChild>
                        <div className="interactive-card cursor-pointer">
                          <div className="flex justify-between items-center mb-3.5">
                            <h3 className="font-semibold text-lg text-foreground/95">{skill.name}</h3>
                            <span className="text-sm font-bold gradient-text">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted/70 rounded-full h-3.5 overflow-hidden border border-border/50">
                            <motion.div 
                              className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                              viewport={{ once: true }}
                            ></motion.div>
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 glass-card border-primary/40 shadow-2xl shadow-primary/25">
                        <div className="space-y-2">
                          <h4 className="font-bold text-lg gradient-text">{skill.name}</h4>
                          <p className="text-sm text-foreground/80">{skill.description}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-foreground/90 gradient-text">Beyond Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-5 md:gap-x-6 md:gap-y-6">
          {softSkills.map((skill, i) => (
            <motion.span 
              key={skill.name} 
              custom={i}
              variants={softSkillPillVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              className="skill-tag flex items-center gap-2.5 text-base"
            >
              {skill.icon} {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;