import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t("experience.talentBoost.title"),
      company: t("experience.talentBoost.company"),
      period: "Aug 2025 - Dec 2025",
      description: t("experience.talentBoost.description"),
      highlights: ["Professional Development", "Industry Exposure", "Technical Training"],
    },
    {
      title: t("experience.marketing.title"),
      company: t("experience.marketing.company"),
      period: "Nov 2024 - Mar 2025",
      description: t("experience.marketing.description"),
      highlights: ["Marketing", "Business Operations", "Communication"],
    },
    {
      title: t("experience.hackathon.title"),
      company: t("experience.hackathon.company"),
      period: "March & Sept 2025",
      description: t("experience.hackathon.description"),
      highlights: ["Innovation", "Team Collaboration", "Problem Solving"],
    },
    {
      title: t("experience.mediaClub.title"),
      company: t("experience.mediaClub.company"),
      period: "2019 - 2022",
      description: t("experience.mediaClub.description"),
      highlights: ["Leadership", "Teaching", "Media Production"],
    },
  ];

  const education = [
    {
      degree: t("experience.bachelorDegree"),
      school: "JAMK University of Applied Sciences",
      period: "2023 - 2027",
      location: "Jyväskylä, Finland",
    },
    {
      degree: t("experience.highSchool"),
      school: "Deeper Life High School",
      period: "2016 - 2022",
      location: "Nigeria",
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6">
        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              {t("experience.educationLabel")}
            </span>
            <h2 className="section-heading mt-4">{t("experience.educationTitle")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-primary font-medium mt-1">{edu.school}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            {t("experience.careerLabel")}
          </span>
          <h2 className="section-heading mt-4">{t("experience.careerTitle")}</h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
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
                  <h3 className="font-heading text-xl font-semibold mb-2">{exp.title}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
