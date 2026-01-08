import { Cpu, Gauge, Network, Code, Wrench, Zap, Box, Bot, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const academicProjects = [
    {
      icon: Cpu,
      title: t("projects.pumpingModule.title"),
      description: t("projects.pumpingModule.description"),
      tech: ["TIA Portal", "AS-i Bus", "PID Control", "VFDs"],
    },
    {
      icon: Gauge,
      title: t("projects.hmiScada.title"),
      description: t("projects.hmiScada.description"),
      tech: ["Siemens WinCC", "HMI Design", "SCADA"],
    },
    {
      icon: Wrench,
      title: t("projects.matlab.title"),
      description: t("projects.matlab.description"),
      tech: ["MATLAB", "Process Control", "PID Tuning"],
    },
    {
      icon: Network,
      title: t("projects.network.title"),
      description: t("projects.network.description"),
      tech: ["Networking", "Routing", "Firewalls", "IPv4/IPv6"],
    },
    {
      icon: Code,
      title: t("projects.modbus.title"),
      description: t("projects.modbus.description"),
      tech: ["C#", "Modbus TCP", "GUI Development"],
    },
    {
      icon: Wrench,
      title: t("projects.fieldDevice.title"),
      description: t("projects.fieldDevice.description"),
      tech: ["Documentation", "I/O Lists", "AutoCAD"],
    },
    {
      icon: Gauge,
      title: t("projects.valmetDna.title"),
      description: t("projects.valmetDna.description"),
      tech: ["Valmet DNA", "PID Tuning", "Cascade Control", "Safety Interlocks"],
    },
  ];

  const visualComponentsProjects = [
    {
      icon: Box,
      title: t("projects.warehouse.title"),
      description: t("projects.warehouse.description"),
      tech: ["Visual Components", "Robot Programming", "Safety Systems"],
      videoUrl: "https://drive.google.com/file/d/1b9Fry2TKlif9_uUJOV0OHs8p5kfmU9VT/view?usp=sharing",
    },
    {
      icon: Bot,
      title: t("projects.mir.title"),
      description: t("projects.mir.description"),
      tech: ["MIR Robot", "Navigation", "Zone Mapping"],
    },
    {
      icon: Bot,
      title: t("projects.ur.title"),
      description: t("projects.ur.description"),
      tech: ["Universal Robots", "Vision Feedback", "Pick & Place"],
    },
  ];

  const personalProjects = [
    {
      icon: Zap,
      title: t("projects.eventLogger.title"),
      description: t("projects.eventLogger.description"),
      tech: ["Beckhoff TwinCAT", "STL"],
    },
    {
      icon: Cpu,
      title: t("projects.objectSorting.title"),
      description: t("projects.objectSorting.description"),
      tech: ["TIA Portal", "Simulation"],
    },
    {
      icon: Code,
      title: t("projects.multiwindow.title"),
      description: t("projects.multiwindow.description"),
      tech: ["C#", "Modbus TCP", "GUI"],
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            {t("projects.label")}
          </span>
          <h2 className="section-heading mt-4">{t("projects.academicTitle")}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {academicProjects.map((project) => (
            <div
              key={project.title}
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
                  <span key={tech} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Components / Robot Programming */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-semibold">{t("projects.visualComponents")}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {visualComponentsProjects.map((project) => (
              <div
                key={project.title}
                className="glass-card p-5 rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium bg-primary text-primary-foreground px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      {t("projects.watchVideo")}
                    </a>
                  )}
                </div>
                <h4 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-semibold">{t("projects.personal")}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {personalProjects.map((project) => (
              <div
                key={project.title}
                className="glass-card p-5 rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
