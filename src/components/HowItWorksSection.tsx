import { Link2, BarChart3, Brain, Sparkles } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Link2,
      title: "Connect Your Accounts",
      description:
        "Securely link your bank accounts, credit cards, and investments in just a few clicks. We support thousands of financial institutions.",
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Track Your Finances",
      description:
        "Watch as your transactions are automatically categorized and organized. Get a complete picture of your money in real-time.",
    },
    {
      number: "03",
      icon: Brain,
      title: "Analyze Your Insights",
      description:
        "Discover spending patterns, identify savings opportunities, and understand where your money goes with intelligent analytics.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Improve Financial Health",
      description:
        "Take action on personalized recommendations to reach your goals faster and build lasting financial wellness.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Financial Journey,{" "}
            <span className="text-gradient">Simplified</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started with MTP is easy. Follow these simple steps to take control of your finances.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-6 md:gap-10 mb-12 last:mb-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-glow shrink-0">
                  <step.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-accent/50 to-accent/10 mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="pb-12">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-accent font-display font-bold text-sm">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
