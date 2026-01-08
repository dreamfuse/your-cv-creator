import { Users, Lightbulb, Clock, MessageSquare, Sparkles, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const traits = [
    { icon: Users, title: t("about.teamwork"), description: t("about.teamworkDesc") },
    { icon: Lightbulb, title: t("about.problemSolving"), description: t("about.problemSolvingDesc") },
    { icon: Clock, title: t("about.timeManagement"), description: t("about.timeManagementDesc") },
    { icon: MessageSquare, title: t("about.communication"), description: t("about.communicationDesc") },
    { icon: Sparkles, title: t("about.creativeThinking"), description: t("about.creativeThinkingDesc") },
    { icon: Eye, title: t("about.attentionToDetail"), description: t("about.attentionToDetailDesc") },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              {t("about.label")}
            </span>
            <h2 className="section-heading mt-4">{t("about.title")}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Text */}
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <p className="text-lg text-foreground leading-relaxed">
                  {t("about.description1")}{" "}
                  <span className="text-primary font-medium">TIA Portal</span> {t("about.description2")}{" "}
                  <span className="text-primary font-medium">Beckhoff TwinCAT</span>{" "}
                  {t("about.description3")}
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description4")}
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
                <h4 className="font-heading font-semibold mb-3">{t("about.languages")}</h4>
                <div className="flex gap-3">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                    {t("about.englishFluent")}
                  </span>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium">
                    {t("about.finnishBasic")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Traits */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait) => (
                <div
                  key={trait.title}
                  className="glass-card p-5 rounded-xl group hover:border-primary/50 transition-colors"
                >
                  <trait.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-semibold mb-1 text-sm">{trait.title}</h3>
                  <p className="text-xs text-muted-foreground">{trait.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
