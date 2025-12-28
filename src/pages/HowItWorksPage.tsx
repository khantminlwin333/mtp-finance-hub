import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PlayStoreIcon from "@/assets/apps.png";
import {
  UserPlus,
  FileText,
  TrendingUp,
  Bell,
  ReceiptText,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Smartphone,
  Download,
} from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      step: 1,
      title: "Create Your Account",
      description:
        "Sign up for a free account in minutes. All you need is an email address to get started.",
      icon: <UserPlus className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      step: 2,
      title: "Log Your Finances",
      description:
        "Easily log your income, expenses, and savings. No need to connect to your bank account.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      step: 3,
      title: "Manage Your Money",
      description:
        "Use our tools to create budgets, track bills, and manage your savings goals.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      step: 4,
      title: "Stay on Top of Your Finances",
      description:
        "Get alerts for upcoming bills and when you're approaching your budget limits.",
      icon: <Bell className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
    },
    {
      step: 5,
      title: "Go Paperless",
      description: "Scan receipts and create invoices with ease.",
      icon: <ReceiptText className="w-8 h-8" />,
      color: "from-violet-500 to-indigo-500",
      bgColor: "bg-violet-500/10",
    },
  ];

  const features = [
    "No bank connection required",
    "100% private & secure",
    "Free forever plan",
    "Available on iOS & Android",
    "Offline functionality",
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Simple & Effective
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4">
              How MTP Finance Hub
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}
                Works
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              A simple, privacy-focused approach to financial management. Get
              started in minutes without connecting your bank.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="#download">
                <Download className="w-5 h-5" />
                Download Free App
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="py-6 sm:py-8 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-muted text-xs sm:text-sm"
                >
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Timeline Design */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2"></div>

            {/* Mobile Timeline Line */}
            <div className="block lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary via-accent to-primary"></div>

            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative mb-12 sm:mb-16 lg:mb-24 last:mb-0 ${
                  index % 2 === 0
                    ? "lg:pr-1/2 lg:pl-0 lg:text-right"
                    : "lg:pl-1/2 lg:pr-0"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-background border-2 sm:border-4 border-white shadow-lg flex items-center justify-center z-10">
                  <div
                    className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}
                  >
                    <div className="text-white font-bold text-base sm:text-lg">
                      {step.step}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 sm:ml-24 lg:ml-0 lg:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                  }`}
                >
                  <div
                    className={`group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${step.bgColor}`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${step.bgColor} flex-shrink-0`}
                      >
                        <div
                          className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                        >
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                            STEP {step.step}
                          </span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section
        id="download"
        className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-muted/30 to-background"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl sm:rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-r from-primary/5 via-background to-accent/5 border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
                  Ready to Take Control of Your
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {" "}
                    Finances?
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
                  Join thousands of users who have simplified their financial
                  management with MTP Finance Hub
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                  <Button size="lg" className="gap-2 flex-1" asChild>
                    <a
                      href="https://apps.apple.com/app/mtp-finance-hub/idYOUR_APP_ID"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.76 3.28-.76 2 .76 3.3.73 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.68-4.04z" />
                      </svg>
                      App Store
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 flex-1"
                    asChild
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.khantminlwin.MTP"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={PlayStoreIcon}
                        className="h-33 w-33 sm:h-6 sm:w-6"
                      />
                      Google Play
                    </a>
                  </Button>
                </div>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>No credit card needed</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>30MB download</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 md:col-span-1 col-span-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>100% private</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "Do I need to connect my bank account?",
                a: "No! MTP Finance Hub is designed to work without connecting to your bank. You manually log transactions for complete privacy and control.",
              },
              {
                q: "Is there a free version?",
                a: "Yes! Our free plan includes all basic features like expense tracking, budget creation, and invoice generation. You can use it forever.",
              },
              {
                q: "How does the Pro plan work?",
                a: "Pro features are unlocked through in-app purchases. You manage your subscription directly within the app on your device.",
              },
              {
                q: "Can I use it on multiple devices?",
                a: "Yes! Your data syncs across all your devices when you're signed in with the same account.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-colors"
              >
                <h4 className="font-bold text-base sm:text-lg mb-2">{faq.q}</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HowItWorksPage;
