import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Automation & Control",
      skills: [
        { name: "PLC Programming", level: 95 },
        { name: "SCADA Systems", level: 90 },
        { name: "HMI Development", level: 88 },
        { name: "Industrial IoT", level: 85 },
      ],
    },
    {
      title: "Engineering Tools",
      skills: [
        { name: "AutoCAD", level: 92 },
        { name: "MATLAB/Simulink", level: 85 },
        { name: "SolidWorks", level: 80 },
        { name: "Siemens TIA Portal", level: 88 },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "Ladder Logic", level: 95 },
        { name: "Structured Text", level: 90 },
        { name: "Python", level: 82 },
        { name: "C/C++", level: 75 },
      ],
    },
    {
      title: "Protocols & Standards",
      skills: [
        { name: "Modbus", level: 90 },
        { name: "Profinet", level: 88 },
        { name: "OPC UA", level: 85 },
        { name: "Ethernet/IP", level: 82 },
      ],
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
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.5 + categoryIndex * 0.15 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{
                            background: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(199 89% 60%) 100%)",
                          }}
                        />
                      </div>
                    </div>
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
