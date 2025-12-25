import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Gauge, Network, Code, Wrench, Zap } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const academicProjects = [
    {
      icon: Cpu,
      title: "Pumping Module PLC Program",
      description: "Planned and created a PLC program for a pumping module using on/off valves, pressure and temperature sensors, AS-i bus communication, VFDs, and PID controllers.",
      tech: ["TIA Portal", "AS-i Bus", "PID Control", "VFDs"],
    },
    {
      icon: Gauge,
      title: "HMI & SCADA Development",
      description: "Built HMI and SCADA programs for a pumping module using WinCC, providing real-time monitoring and control capabilities.",
      tech: ["Siemens WinCC", "HMI Design", "SCADA"],
    },
    {
      icon: Wrench,
      title: "MATLAB Process Modelling",
      description: "Modelled a process in MATLAB, tuned the system, and worked with ratio control and cascade control strategies.",
      tech: ["MATLAB", "Process Control", "PID Tuning"],
    },
    {
      icon: Network,
      title: "Industrial Network Configuration",
      description: "Built and configured network structures in a virtual environment, including routing, switching, firewalls, and IPv4/IPv6 addressing.",
      tech: ["Networking", "Routing", "Firewalls", "IPv4/IPv6"],
    },
    {
      icon: Code,
      title: "Modbus TCP C# Application",
      description: "Created a C# GUI program to work using the Modbus TCP communication protocol for industrial device communication.",
      tech: ["C#", "Modbus TCP", "GUI Development"],
    },
    {
      icon: Wrench,
      title: "Field Device Planning",
      description: "Prepared device lists for a process, including field device planning and documentation, I/O lists, wiring diagrams, and circuit diagrams.",
      tech: ["Documentation", "I/O Lists", "AutoCAD"],
    },
  ];

  const personalProjects = [
    {
      icon: Zap,
      title: "Event Logger in TwinCAT",
      description: "Developed an event logging system using Beckhoff TwinCAT and STL programming.",
      tech: ["Beckhoff TwinCAT", "STL"],
    },
    {
      icon: Cpu,
      title: "Object Sorting System",
      description: "Basic object sorting based on the type of material using TIA Portal (Simulated).",
      tech: ["TIA Portal", "Simulation"],
    },
    {
      icon: Code,
      title: "Multiwindow C# Modbus App",
      description: "Multiwindow C# GUI that communicates using Modbus TCP protocol.",
      tech: ["C#", "Modbus TCP", "GUI"],
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
              Academic Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {academicProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
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

          {/* Personal Projects */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-heading font-semibold">Personal Learning Projects</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {personalProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-5 rounded-xl group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-2.5 bg-primary/10 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
