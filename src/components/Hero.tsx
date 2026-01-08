import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              {t("hero.title")}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
            <span className="text-foreground">Ogbonnah</span>
            <br />
            <span className="text-gradient">Chinemerem</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:chinemeremogbonnah2@gmail.com">
                <Mail className="w-4 h-4" />
                {t("hero.getInTouch")}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://linkedin.com/in/meremo" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">{t("hero.scrollToExplore")}</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
