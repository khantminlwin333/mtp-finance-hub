import { BarChart, DollarSign, Shield, Zap } from "lucide-react";
import FadingAnimation from "./FadingAnimation";

const features = [
  {
    icon: <DollarSign className="w-10 h-10 text-primary" />,
    title: "Track Your Spending",
    description:
      "Log your expenses and income to track how you manage your finance!",
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: "Create Budgets",
    description:
      "Set monthly budgets for different categories and get notified when you're close to your limit.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Achieve Your Goals",
    description:
      "Set financial goals, like saving for a down payment or paying off debt, and track your progress.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Bank-Level Security",
    description:
      "Your financial data is encrypted and protected with the same security as a bank.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-10 md:mb-12">
          <FadingAnimation />
          Everything you need to manage your finances
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
