import { Brain, BarChart3, Smartphone, Plug, Rocket } from "lucide-react";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Smart recommendations and predictions powered by machine learning.",
      status: "Coming Q2",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep-dive reports, custom metrics, and exportable financial statements.",
      status: "Coming Q2",
    },
    {
      icon: Smartphone,
      title: "Multi-Device Sync",
      description: "Access your finances anywhere with seamless sync across all devices.",
      status: "Coming Q3",
    },
    {
      icon: Plug,
      title: "More Integrations",
      description: "Connect with more banks, investment platforms, and financial tools.",
      status: "Ongoing",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            Roadmap
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Future of{" "}
            <span className="text-gradient">Financial Management</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're constantly evolving. Here's a glimpse of what's coming to make MTP even more powerful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div
              key={item.title}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated hover:border-accent/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-4">
            <Rocket className="w-5 h-5 text-accent" />
            <span className="text-foreground text-sm">
              Have a feature request?{" "}
              <a href="#" className="text-accent hover:underline font-medium">
                Let us know
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
