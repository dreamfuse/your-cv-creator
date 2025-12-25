import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Wrench, Code, Network, Zap } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Cpu,
      title: "Automation & Control",
      description: "Industrial automation systems and control engineering",
      skills: ["PLC Programming", "SCADA Systems", "HMI Development", "Industrial IoT"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Wrench,
      title: "Engineering Tools",
      description: "CAD software and simulation platforms",
      skills: ["AutoCAD", "MATLAB/Simulink", "SolidWorks", "Siemens TIA Portal"],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Code,
      title: "Programming",
      description: "Languages for automation and software development",
      skills: ["Ladder Logic", "Structured Text", "Python", "C/C++"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Network,
      title: "Protocols & Standards",
      description: "Industrial communication protocols",
      skills: ["Modbus", "Profinet", "OPC UA", "Ethernet/IP"],
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Technical Expertise</span>
            </motion.div>
            <h2 className="section-heading">
              Skills & Proficiencies
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience in automation and engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.7, delay: categoryIndex * 0.15 }}
                className="group relative"
              >
                {/* Gradient border effect */}
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
                
                <div className="relative glass-card p-6 rounded-2xl h-full border border-border/50 group-hover:border-transparent transition-colors duration-500">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.08,
                        }}
                        className="relative group/skill"
                      >
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                          <span className="text-sm font-medium truncate">{skill}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-5 rounded-bl-[100px] rounded-tr-2xl`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent max-w-2xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
