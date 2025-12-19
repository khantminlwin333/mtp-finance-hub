import { Wallet, TrendingUp, PiggyBank, FileText, Bell, Download, ScanLine, Cloud } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Wallet,
      title: "Income & Expense Tracking",
      description:
        "Track every transaction with detailed tables. Categorize income and expenses for complete visibility into your cash flow.",
    },
    {
      icon: TrendingUp,
      title: "Budget Management",
      description:
        "Create and manage budgets for different categories. Get alerts when you're approaching limits and stay on track.",
    },
    {
      icon: PiggyBank,
      title: "Savings & Financial Goals",
      description:
        "Set savings targets and track progress towards your financial goals with visual indicators and milestones.",
    },
    {
      icon: FileText,
      title: "Invoice Creation & Management",
      description:
        "Generate professional invoices for your business. Manage clients, track payments, and keep everything organized.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Stay on top of your finances with customizable reminders for bills, budget limits, and important financial events.",
    },
    {
      icon: Download,
      title: "Export Reports as PDF",
      description:
        "Download detailed financial reports and invoices as PDF files for easy sharing, printing, and record-keeping.",
    },
    {
      icon: ScanLine,
      title: "Receipt Scanning",
      description:
        "Scan receipts and documents using Google Vision API. Extract data automatically and keep digital records organized.",
    },
    {
      icon: Cloud,
      title: "Secure Cloud Sync",
      description:
        "Your data is encrypted and synced securely to the cloud. Access your finances from any device with Google Sign-In.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            Core Features
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Manage Your Money</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features designed for individuals and small businesses seeking complete financial control.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
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
