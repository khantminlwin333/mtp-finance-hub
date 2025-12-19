import { Wallet, TrendingUp, PieChart, Lock, LayoutDashboard, Bell } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Wallet,
      title: "Expense Tracking",
      description:
        "Automatically categorize and track every transaction. See exactly where your money goes with detailed breakdowns.",
    },
    {
      icon: TrendingUp,
      title: "Income Management",
      description:
        "Monitor all income sources in one place. Track salary, investments, side hustles, and more with ease.",
    },
    {
      icon: PieChart,
      title: "Smart Reports",
      description:
        "Get actionable insights with beautiful charts and reports. Understand your financial health at a glance.",
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description:
        "Your data is protected with bank-level encryption. We never sell or share your personal information.",
    },
    {
      icon: LayoutDashboard,
      title: "Clean Dashboard",
      description:
        "A beautifully designed interface that makes managing money a pleasure, not a chore.",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description:
        "Stay on top of your finances with customizable notifications for bills, unusual spending, and goals.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed Financially</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features designed to give you complete control and clarity over your money.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
