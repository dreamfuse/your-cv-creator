import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Cpu, Factory, Gauge, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: Factory,
      title: "Manufacturing Line Automation",
      description: "Complete automation solution for a production line, including PLC programming, HMI design, and SCADA integration.",
      tech: ["Siemens S7-1500", "WinCC", "Profinet"],
    },
    {
      icon: Cpu,
      title: "Smart Building Management",
      description: "IoT-based building automation system for energy management, HVAC control, and security monitoring.",
      tech: ["Allen-Bradley", "BACnet", "Node-RED"],
    },
    {
      icon: Gauge,
      title: "Process Control Optimization",
      description: "Real-time monitoring and control system for chemical processing plant, improving efficiency by 35%.",
      tech: ["DCS", "OPC UA", "Python"],
    },
    {
      icon: Network,
      title: "Industrial Network Design",
      description: "Design and implementation of industrial ethernet network with redundancy for critical manufacturing operations.",
      tech: ["Ethernet/IP", "Cisco IE", "Stratix"],
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-secondary/30" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="section-heading mt-4">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
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

export default Projects;
