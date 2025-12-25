import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, MapPin, Phone, Send, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@example.com", href: "mailto:contact@example.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/cogbonnah", href: "#" },
    { icon: Github, label: "GitHub", value: "github.com/cogbonnah", href: "#" },
    { icon: MapPin, label: "Location", value: "Available Worldwide", href: null },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="section-heading mt-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? 
              I'm always open to new challenges and collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href || "#"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/50 transition-colors group cursor-pointer"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid gap-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary"
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
