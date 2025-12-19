import { Target, Eye, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To democratize financial management by providing intuitive tools that empower individuals and businesses to make smarter money decisions.",
    },
    {
      icon: Eye,
      title: "Transparency First",
      description:
        "We believe in complete transparency. From our pricing to our data practices, you always know exactly what you're getting.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description:
        "We leverage cutting-edge technology to deliver features that anticipate your needs and evolve with the financial landscape.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            About MTP
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Modern Financial Management,{" "}
            <span className="text-gradient">Simplified</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            MTP is a forward-thinking software company dedicated to transforming how people 
            interact with their finances. We combine elegant design with powerful functionality 
            to create tools that make financial management accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
