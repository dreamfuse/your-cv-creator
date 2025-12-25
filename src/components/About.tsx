import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Lightbulb, Clock, MessageSquare, Sparkles, Eye, Briefcase } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const traits = [
    { icon: Users, title: "Teamwork", description: "Strong collaborator" },
    { icon: Lightbulb, title: "Problem Solving", description: "Analytical thinker" },
    { icon: Clock, title: "Time Management", description: "Efficient & organized" },
    { icon: MessageSquare, title: "Communication", description: "Clear & effective" },
    { icon: Sparkles, title: "Creative Thinking", description: "Innovative approaches" },
    { icon: Eye, title: "Attention to Detail", description: "Precision focused" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              About Me
            </span>
            <h2 className="section-heading mt-4">
              My Profile
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-6 rounded-xl">
                <p className="text-lg text-foreground leading-relaxed">
                  Third-year Automation student proficient in <span className="text-primary font-medium">TIA Portal</span> and 
                  currently learning the <span className="text-primary font-medium">Beckhoff TwinCAT</span> environment.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Strong problem solver and team player, with experience working on mini-projects 
                involving multiple communication protocols. Passionate about taking innovative 
                and creative approaches to solve technical challenges.
              </p>
              
              {/* Location & Contact Info */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                  <span className="text-sm text-muted-foreground">📍 Jyväskylä, Finland</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                  <span className="text-sm text-muted-foreground">📞 +358 46 543 3500</span>
                </div>
              </div>

              {/* Languages */}
              <div className="pt-4">
                <h4 className="font-heading font-semibold mb-3">Languages</h4>
                <div className="flex gap-3">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                    English — Fluent
                  </span>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium">
                    Finnish — Basic-Intermediate
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right side - Traits */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-5 rounded-xl group hover:border-primary/50 transition-colors"
                >
                  <trait.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-semibold mb-1 text-sm">{trait.title}</h3>
                  <p className="text-xs text-muted-foreground">{trait.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
