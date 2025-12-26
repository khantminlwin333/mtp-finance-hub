import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import FadingAnimation from "@/components/FadingAnimation";

import AndroidIcon from "@/assets/android.png";
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Users, 
  Target,
  Sparkles,
  CheckCircle2,
  Smartphone,
  Download,
  Award,
  Globe,
  AlertTriangle,
  Camera,
  XCircle,
  Infinity
} from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Invoicing",
      description: "Automate invoice creation with intelligent templates that learn from your patterns, reducing errors by 95%.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analysis",
      description: "Get AI-driven forecasts and insights to optimize your financial decisions before they happen.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Smart Budget Creator",
      description: "Personalized budget plans that adapt to your lifestyle and financial goals in real-time.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const appStores = [
    {
      name: "App Store",
      icon: "apple",
      url: "https://apps.apple.com/app/mtp-finance-hub/idYOUR_APP_ID",
      description: "Download on the",
      platform: "iOS",
      disabled: true // Add this property
    },
    {
      name: "Google Play",
      icon: "google",
      url: "https://play.google.com/store/apps/details?id=com.khantminlwin.MTP",
      description: "Get it on",
      platform: "Android",
      disabled: false
    }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Bank-level encryption and privacy protection"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric",
      description: "Designed with real people's needs in mind"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results Driven",
      description: "Focus on tangible financial improvements"
    }
  ];

  const freePlanFeatures = [
    { text: "Basic expense tracking", icon: CheckCircle2, iconColor: "text-emerald-500" },
    { text: "Monthly budget planner", icon: CheckCircle2, iconColor: "text-emerald-500" },
    { text: "Invoice generation", icon: CheckCircle2, iconColor: "text-emerald-500" },
    { text: "Financial reports", icon: CheckCircle2, iconColor: "text-emerald-500" },
    { text: "Multi-currency support", icon: CheckCircle2, iconColor: "text-emerald-500" },
    { text: "Contains ads", icon: AlertTriangle, iconColor: "text-amber-500" },
    { text: "Limited to 2 images per scan", icon: Camera, iconColor: "text-blue-500" }
  ];

  const proPlanFeatures = [
    { text: "Everything in Free", icon: CheckCircle2, iconColor: "text-primary" },
    { text: "Ad-free experience", icon: XCircle, iconColor: "text-emerald-500" },
    { text: "Unlock 5/image scans", icon: Infinity, iconColor: "text-primary" }
  ];

  const futureImprovements = [
    "AI-Powered Invoicing",
    "AI Financial Analysis",
    "AI Budget Creator",
    "Advanced receipt scanning",
    "Real-time financial alerts",
    "Investment tracking"
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Your Financial Companion
            </div>
            <FadingAnimation />
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
              Join thousands who've transformed their financial management with Finance MTP. 
              Available for free with premium features accessible directly in the app.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="#download">
                  <Download className="w-5 h-5" />
                  Download App
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Free forever plan available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  More Than Numbers — 
                  <span className="text-primary"> It's About Freedom</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe everyone deserves financial clarity without complexity. Our mission is to 
                  democratize financial management through intuitive tools and AI-powered insights.
                </p>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-6">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Join Our Community</h3>
                    <p className="text-muted-foreground mb-6">Thousands of satisfied users worldwide</p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">4.9★</div>
                        <div className="text-sm text-muted-foreground">App Store</div>
                      </div>
                      <div className="h-12 w-px bg-border" />
                      <div className="text-center">
                        <div className="text-3xl font-bold">4.8★</div>
                        <div className="text-sm text-muted-foreground">Google Play</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> in Minutes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Download Finance MTP today and take control of your finances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {appStores.map((store, index) => (
    <div 
      key={index} 
      className="group relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6">
          {store.icon === "apple" ? (
            <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.76 3.28-.76 2 .76 3.3.73 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85a4.41 4.41 0 0 1-2.68-4.04z"/>
            </svg>
          ) : (
            <img 
        src={AndroidIcon} 
        alt="Get it on Google Play"
        className="h-12 w-auto"
      />
          )}
        </div>
        <h3 className="text-2xl font-bold mb-2">{store.name}</h3>
        <p className="text-muted-foreground mb-6">
          {store.disabled ? "Coming Soon" : store.description}
        </p>
        
        {store.disabled ? (
          // Disabled Apple Button
          <Button 
            size="lg" 
            className="w-full gap-2"
            disabled
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.76 3.28-.76 2 .76 3.3.73 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85a4.41 4.41 0 0 1-2.68-4.04z"/>
            </svg>
            We are currently working!
          </Button>
        ) : (
          // Enabled Google Play Button
          <Button 
            size="lg" 
            className="w-full gap-2"
            asChild
          >
            <a 
              href={store.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5" />
              Download for {store.platform}
            </a>
          </Button>
        )}
      </div>
    </div>
  ))}
</div>
          
          {/* Plan Comparison */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Choose Your Plan</h3>
              <p className="text-muted-foreground">All premium features are managed directly within the app</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Free Plan */}
              <div className="border rounded-2xl p-8">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2">Free Plan</h4>
                  <div className="text-4xl font-bold mb-4">$0<span className="text-lg text-muted-foreground font-normal">/forever</span></div>
                  <p className="text-muted-foreground">Perfect for getting started with basic financial management</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {freePlanFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                        <span>{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <Button className="w-full" asChild>
                  <a href="#download">Get Started Free</a>
                </Button>
              </div>
              
              {/* Pro Plan */}
              <div className="border-2 border-primary rounded-2xl p-8 bg-gradient-to-b from-primary/5 to-transparent relative">
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2">Pro Plan</h4>
                  <div className="text-4xl font-bold mb-4">$2.99<span className="text-lg text-muted-foreground font-normal">/month</span></div>
                  <p className="text-muted-foreground">Advanced features for serious financial management</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {proPlanFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                        <span>{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="text-sm text-muted-foreground mb-4 text-center">
                  * Upgrade available directly in the app
                </div>
                <Button className="w-full" variant="accent" asChild>
                  <a href="#download">Download to Upgrade</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Improvements Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Coming 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Soon</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Exciting new features we're working on for future updates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {futureImprovements.map((improvement, index) => (
              <div 
                key={index} 
                className="group relative p-6 rounded-xl border bg-gradient-to-br from-muted/50 to-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">{improvement}</h3>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{ width: `${Math.random() * 30 + 40}%` }}
                      />
                    </div>
                    <span className="text-xs">In development</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* AI Features */}
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-bold mb-4">AI-Powered Features</h3>
              <p className="text-xl text-muted-foreground">
                Experience the future of financial management with our intelligent features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`group relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${feature.bgColor}`}
                >
                  <div className={`p-4 rounded-xl w-fit mb-6 ${feature.bgColor}`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${feature.color}`}>{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-2 py-1 bg-muted rounded text-xs">Coming Soon</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-r from-primary/5 via-background to-accent/5 border rounded-3xl p-12 backdrop-blur-sm">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  Available Worldwide
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Start Your Financial 
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Journey Today</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Download now and experience why thousands trust Finance MTP
                </p>
                <Button size="lg" className="gap-2 px-8" asChild>
                  <a href="#download">
                    <Download className="w-5 h-5" />
                    Download Free App
                  </a>
                </Button>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="sm:h-4 sm:w-px bg-border" />
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Free forever plan available</span>
                  </div>
                  <div className="sm:h-4 sm:w-px bg-border" />
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>30MB download size</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;