import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Talent Boost Intern",
      company: "JAMK University of Applied Sciences",
      period: "Aug 2025 - Dec 2025",
      description: "Internship program focused on professional development and industry exposure in automation and robotics.",
      highlights: ["Professional Development", "Industry Exposure", "Technical Training"],
    },
    {
      title: "Marketing Intern",
      company: "UMT Victor",
      period: "Nov 2024 - Mar 2025",
      description: "Contributed to marketing initiatives and gained experience in business operations.",
      highlights: ["Marketing", "Business Operations", "Communication"],
    },
    {
      title: "Viitasaari Hackathon",
      company: "Participant",
      period: "March & Sept 2025",
      description: "Participated in hackathon events, collaborating on innovative solutions and technical challenges.",
      highlights: ["Innovation", "Team Collaboration", "Problem Solving"],
    },
    {
      title: "Media Club & Teaching Assistant",
      company: "Deeper Life High School",
      period: "2019 - 2022",
      description: "Active member of the Media Club and served as a Teaching Assistant, developing communication and leadership skills.",
      highlights: ["Leadership", "Teaching", "Media Production"],
    },
  ];

  const education = [
    {
      degree: "Bachelor's in Automation and Robotics",
      school: "JAMK University of Applied Sciences",
      period: "2023 - 2027",
      location: "Jyväskylä, Finland",
    },
    {
      degree: "High School Diploma",
      school: "Deeper Life High School",
      period: "2016 - 2022",
      location: "Nigeria",
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
          {/* Education Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                Academic Background
              </span>
              <h2 className="section-heading mt-4">
                Education
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Career Journey
            </span>
            <h2 className="section-heading mt-4">
              Experience
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
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
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
