
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); 

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll be in touch shortly.",
        variant: "default", 
        className: "bg-green-600/20 border-green-600 text-foreground",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="h-7 w-7 text-primary" />, title: "Email Me", value: "imchandranashok@gmail.com", href: "mailto:imchandranashok@gmail.com" },
    { icon: <Phone className="h-7 w-7 text-primary" />, title: "Call Me", value: "+91 9363156825", href: "tel:+919363156825" },
    { icon: <MapPin className="h-7 w-7 text-primary" />, title: "Location", value: "Kanyakumari, Sri Tamilnadu (Remote)", href: "#" }
  ];

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-6 w-6" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-6 w-6" />, href: "https://twitter.com", label: "Twitter" },
  ];

  const inputVariants = {
    focus: { 
      borderColor: "hsl(var(--primary))", 
      boxShadow: "0 0 0 2px hsl(var(--primary) / 0.4)",
      transition: { duration: 0.3 }
    },
    initial: {
      borderColor: "hsl(var(--border))",
      boxShadow: "0 0 0 0px hsl(var(--primary) / 0.3)"
    }
  };
  
  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h1>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Have a project in mind, a question, or just want to say hi? Feel free to reach out. I'm always excited to discuss new ideas and opportunities.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8 p-6 md:p-10 bg-card/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/30 flex flex-col"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground/95">Contact Details</h2>
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-5 group"
              initial={{ opacity:0, y: 20 }}
              whileInView={{ opacity:1, y: 0 }}
              transition={{ duration:0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground/90">{item.title}</h3>
                <a 
                  href={item.href} 
                  className="text-foreground/70 hover:text-primary transition-colors text-base break-all"
                  target={item.href === "#" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              </div>
            </motion.div>
          ))}
          <div className="pt-6 mt-auto border-t border-border/30">
            <h3 className="text-xl font-semibold mb-4 text-foreground/90">Find me on Social Media:</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-secondary/20 hover:bg-secondary/30 text-secondary hover:text-secondary-foreground rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -3, boxShadow: "0 0 15px hsl(var(--secondary)/0.5)" }}
                  initial={{ opacity:0, scale:0.5 }}
                  whileInView={{ opacity:1, scale:1 }}
                  transition={{ duration:0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-7 p-6 md:p-10 bg-card/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/30"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground/95">Send A Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.input
                type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                className="form-input-field" placeholder="Your Name"
                variants={inputVariants} initial="initial" whileFocus="focus"
              />
              <motion.input
                type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                className="form-input-field" placeholder="Your Email"
                variants={inputVariants} initial="initial" whileFocus="focus"
              />
            </div>
            <motion.input
              type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
              className="form-input-field" placeholder="Subject"
              variants={inputVariants} initial="initial" whileFocus="focus"
            />
            <motion.textarea
              id="message" name="message" value={formData.message} onChange={handleChange} required
              className="form-textarea-field" placeholder="Your Message..."
              rows="5"
              variants={inputVariants} initial="initial" whileFocus="focus"
            ></motion.textarea>
            
            <Button 
              type="submit" 
              size="lg"
              className="w-full sm:w-auto gap-2 text-base px-8 py-3 gradient-border !border-none !p-[2.5px] hover:shadow-primary/40 hover:shadow-lg transition-shadow"
              disabled={isSubmitting}
            >
              <span className="w-full flex items-center justify-center gap-2 bg-background hover:bg-background/80 text-foreground px-6 py-3 rounded-[calc(var(--radius)-2px)] transition-all duration-300">
              {isSubmitting ? (
                <>
                  <motion.div 
                    className="w-4 h-4 border-2 border-transparent border-t-current rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" /> Send Message
                </>
              )}
              </span>
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
