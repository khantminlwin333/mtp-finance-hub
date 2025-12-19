import { Heart, Zap, Shield, Code2 } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Trust & Transparency",
      description:
        "We believe in honest communication. No hidden fees, no data selling, no surprises.",
    },
    {
      icon: Zap,
      title: "Simplicity & Performance",
      description:
        "Powerful doesn't mean complicated. Enjoy a fast, intuitive experience that just works.",
    },
    {
      icon: Shield,
      title: "Security-First Approach",
      description:
        "Your financial safety is non-negotiable. We employ the highest security standards.",
    },
    {
      icon: Code2,
      title: "Modern Technology",
      description:
        "Built with cutting-edge tech for reliability, speed, and continuous improvement.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
              Why MTP
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Built Different,{" "}
              <span className="text-gradient">Built Better</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not just another finance app. MTP is designed from the ground up 
              to respect your privacy, simplify your life, and help you achieve your financial goals.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-6 text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                99.9%
              </div>
              <p className="text-muted-foreground text-sm">Uptime Guarantee</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                256-bit
              </div>
              <p className="text-muted-foreground text-sm">Encryption</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                24/7
              </div>
              <p className="text-muted-foreground text-sm">Support</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                0
              </div>
              <p className="text-muted-foreground text-sm">Data Breaches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
