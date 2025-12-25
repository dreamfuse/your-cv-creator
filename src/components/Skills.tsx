import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Automation & Control",
      skills: ["PLC Programming", "SCADA Systems", "HMI Development", "Industrial IoT"],
    },
    {
      title: "Engineering Tools",
      skills: ["AutoCAD", "MATLAB/Simulink", "SolidWorks", "Siemens TIA Portal"],
    },
    {
      title: "Programming",
      skills: ["Ladder Logic", "Structured Text", "Python", "C/C++"],
    },
    {
      title: "Protocols & Standards",
      skills: ["Modbus", "Profinet", "OPC UA", "Ethernet/IP"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-secondary/30" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Technical Expertise
            </span>
            <h2 className="section-heading mt-4">
              Skills & Proficiencies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="font-heading font-semibold text-lg mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-3 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
