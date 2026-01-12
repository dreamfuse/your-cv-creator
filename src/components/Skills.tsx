import { Cpu, Wrench, Code, Network, Zap, BookOpen, Sparkles, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Cpu,
      title: t("skills.plcAutomation"),
      description: t("skills.plcAutomationDesc"),
      skills: ["TIA Portal", "Ladder Logic", "FBD", "SFC", "Beckhoff TwinCAT", "STL Programming"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Wrench,
      title: t("skills.engineeringTools"),
      description: t("skills.engineeringToolsDesc"),
      skills: ["AutoCAD", "MATLAB", "Valmet DNA", "Siemens WinCC", "ABB DriveSize", "Valmet NelProf"],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Network,
      title: t("skills.communicationProtocols"),
      description: t("skills.communicationProtocolsDesc"),
      skills: ["Profibus/Profinet", "Modbus TCP", "AS-i Bus", "IPv4/IPv6", "Routing & Switching"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Code,
      title: t("skills.programmingIt"),
      description: t("skills.programmingItDesc"),
      skills: ["C# Programming", "Python", "GitHub", "Microsoft Office 365", "Network Configuration"],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Wrench,
      title: t("skills.processEngineering"),
      description: t("skills.processEngineeringDesc"),
      skills: ["HMI & SCADA Development", "DCS Systems", "PID Control", "Field Instrumentation", "Motor & Valve Sizing"],
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: BookOpen,
      title: t("skills.safetyStandards"),
      description: t("skills.safetyStandardsDesc"),
      skills: ["Risk Analysis", "Safety Planning", "Safety Design", "Documentation", "I/O Lists"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Cpu,
      title: t("skills.robotics"),
      description: t("skills.roboticsDesc"),
      skills: ["Visual Components", "HAZOP Analysis", "Risk Assessment"],
      color: "from-sky-500 to-cyan-500",
    },
  ];

  const currentlyLearning = [
    { name: t("skills.learning.opcua"), icon: Network, color: "from-cyan-500 to-blue-500" },
    { name: t("skills.learning.machineVision"), icon: Cpu, color: "from-violet-500 to-purple-500" },
    { name: t("skills.learning.industrialRobotics"), icon: Wrench, color: "from-emerald-500 to-teal-500" },
    { name: t("skills.learning.projectEconomics"), icon: TrendingUp, color: "from-orange-500 to-amber-500" },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">{t("skills.label")}</span>
          </div>
          <h2 className="section-heading">{t("skills.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.title} className="group relative">
              <div
                className={`absolute -inset-[1px] bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`}
              />

              <div className="relative glass-card p-5 rounded-2xl h-full border border-border/50 group-hover:border-transparent transition-colors duration-500">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-base group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1.5 text-xs font-medium bg-muted/50 rounded-md border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${category.color} opacity-5 rounded-bl-[80px] rounded-tr-2xl`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 rounded-3xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            
            <div className="relative glass-card p-8 rounded-3xl border border-transparent bg-background/95 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/50 shadow-lg shadow-primary/25">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-2xl bg-gradient-to-r from-primary via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  {t("skills.currentlyLearning")}
                </h3>
              </div>
              
              {/* Learning Items Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {currentlyLearning.map((item, index) => (
                  <div
                    key={item.name}
                    className="group/item relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/item:opacity-10 transition-opacity duration-300 rounded-xl`} />
                    
                    <div className="relative flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 bg-muted/30 hover:bg-muted/50 transition-all duration-300">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${item.color} shadow-md`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                        {item.name}
                      </span>
                      <div className="ml-auto">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent max-w-2xl mx-auto" />
      </div>
    </section>
  );
};

export default Skills;
