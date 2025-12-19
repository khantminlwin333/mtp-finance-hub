import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Get started with core finance tracking features",
      features: [
        "Income & expense tracking",
        "Budget management",
        "Savings goals",
        "Basic reports",
        "Limited image scanning",
        "Cloud sync with Google Sign-In",
      ],
      limitations: ["Ads displayed when limits exceeded"],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "Unlock full potential with advanced features",
      features: [
        "Everything in Free",
        "Up to 5 image scans per session",
        "Up to 30 total image scans",
        "Ad-free experience",
        "Priority support",
        "Advanced analytics",
        "Export unlimited PDFs",
      ],
      limitations: [],
      cta: "Upgrade to Pro",
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free and upgrade when you need more. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative animate-fade-up ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium shadow-glow">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              <div
                className={`h-full bg-card rounded-2xl p-8 border shadow-soft transition-all duration-300 ${
                  plan.popular
                    ? "border-accent/50 shadow-elevated"
                    : "border-border hover:border-accent/30"
                }`}
              >
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-start gap-3 opacity-60">
                      <span className="w-5 h-5 shrink-0 mt-0.5 text-center text-muted-foreground">•</span>
                      <span className="text-muted-foreground text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "accent" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
