import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const traits = [
    { icon: Zap, title: "Innovative", description: "Creative problem-solving approach" },
    { icon: Target, title: "Precision", description: "Meticulous attention to detail" },
    { icon: Lightbulb, title: "Adaptive", description: "Quick to learn new technologies" },
    { icon: Users, title: "Collaborative", description: "Strong team player" },
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
              Engineering Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                As an Automation and Engineering professional, I specialize in developing 
                sophisticated control systems and automation solutions that transform 
                industrial processes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans PLC programming, SCADA systems, industrial networking, 
                and process optimization. I'm driven by the challenge of making complex 
                systems work seamlessly together.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a foundation in both theoretical knowledge and hands-on experience, 
                I bring a comprehensive approach to every project, ensuring solutions are 
                not only innovative but also practical and maintainable.
              </p>
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
                  className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-colors"
                >
                  <trait.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-semibold mb-1">{trait.title}</h3>
                  <p className="text-sm text-muted-foreground">{trait.description}</p>
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
