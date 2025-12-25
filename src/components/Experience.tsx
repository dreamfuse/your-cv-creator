import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior Automation Engineer",
      company: "Industrial Solutions Corp",
      period: "2022 - Present",
      description: "Leading automation projects for manufacturing facilities, implementing PLC-based control systems and SCADA solutions.",
      highlights: ["Team leadership", "System architecture", "Client consulting"],
    },
    {
      title: "Control Systems Engineer",
      company: "TechFlow Engineering",
      period: "2020 - 2022",
      description: "Developed and maintained industrial control systems, focusing on process optimization and safety compliance.",
      highlights: ["PLC programming", "HMI development", "System integration"],
    },
    {
      title: "Automation Technician",
      company: "ProAutomate Industries",
      period: "2018 - 2020",
      description: "Installed, configured, and troubleshot automation equipment across multiple industrial sectors.",
      highlights: ["Field installation", "Troubleshooting", "Documentation"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Career Journey
            </span>
            <h2 className="section-heading mt-4">
              Work Experience
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full border-4 border-background accent-glow z-10" />

                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                  <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
