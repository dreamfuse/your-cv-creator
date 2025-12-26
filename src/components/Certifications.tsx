import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="certifications" className="py-24 relative overflow-hidden" ref={ref}>
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
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Achievements</span>
            </motion.div>
            <h2 className="section-heading">
              Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative block"
              >
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
                
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
                        <p className="text-sm text-muted-foreground mt-1">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>
                  
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${cert.color} opacity-5 rounded-bl-[100px] rounded-tr-2xl`} />
                </div>
              </motion.a>
            ))}
          </div>

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

export default Certifications;
