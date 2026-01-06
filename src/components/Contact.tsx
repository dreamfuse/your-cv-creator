import { useState } from "react";
import { Mail, Linkedin, MapPin, Phone, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:chinemeremogbonnah2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "chinemeremogbonnah2@gmail.com", href: "mailto:chinemeremogbonnah2@gmail.com" },
    { icon: Phone, label: "Phone", value: "+358 46 543 3500", href: "tel:+358465433500" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/meremo", href: "https://linkedin.com/in/meremo" },
    { icon: Globe, label: "Web CV", value: "dreamfuse.github.io/cv", href: "https://dreamfuse.github.io/cv" },
    { icon: MapPin, label: "Location", value: "Jyväskylä, Finland", href: null },
  ];

  const references = [
    { name: "Anna Tenhunen", role: "Talent Boost Coordinator", phone: "+358 50 411 2215" },
    { name: "Victor Solovev", role: "UMT Victor", phone: "+358 41 317 8791" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="section-heading mt-4">Let's Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interested in automation projects or collaboration opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </a>
            ))}

            {/* References */}
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="font-heading font-semibold mb-4">References</h3>
              <div className="space-y-3">
                {references.map((ref) => (
                  <div key={ref.name} className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium">{ref.name}</p>
                    <p className="text-sm text-muted-foreground">{ref.role}</p>
                    <p className="text-sm text-primary">{ref.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card border-border focus:border-primary"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border focus:border-primary"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
