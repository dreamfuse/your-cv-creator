import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      title: "CB3 e-Learning",
      issuer: "Universal Robots Academy",
      date: "December 2025",
      pdfUrl: "/certificates/UR_CB3_Certificate.pdf",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Mission Programming",
      issuer: "Mobile Industrial Robots Academy",
      date: "December 2025",
      pdfUrl: "/certificates/Mission_Programming.pdf",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Autonomous Navigation",
      issuer: "Mobile Industrial Robots Academy",
      date: "December 2025",
      pdfUrl: "/certificates/Navigation.pdf",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Personnel Safety",
      issuer: "Mobile Industrial Robots Academy",
      date: "December 2025",
      pdfUrl: "/certificates/Safety.pdf",
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">{t("certifications.label")}</span>
          </div>
          <h2 className="section-heading">{t("certifications.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div
                className={`absolute -inset-[1px] bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`}
              />

              <div className="relative glass-card p-6 rounded-2xl h-full border border-border/50 group-hover:border-transparent transition-colors duration-500">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg shrink-0`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground"></div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>

                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${cert.color} opacity-5 rounded-bl-[100px] rounded-tr-2xl`}
                />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent max-w-2xl mx-auto" />
      </div>
    </section>
  );
};

export default Certifications;
