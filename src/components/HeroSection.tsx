import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-primary-foreground/80">Now in Beta — Join the Waitlist</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Take Control of Your{" "}
            <span className="text-gradient">Financial Future</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            MTP simplifies your finances with smart tracking, real-time insights, and bank-grade security. 
            Make informed decisions and build lasting wealth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Get Started Free
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center justify-center gap-3 glass rounded-xl px-6 py-4">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground/80 text-sm">Smart Analytics</span>
            </div>
            <div className="flex items-center justify-center gap-3 glass rounded-xl px-6 py-4">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground/80 text-sm">Bank-Grade Security</span>
            </div>
            <div className="flex items-center justify-center gap-3 glass rounded-xl px-6 py-4">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground/80 text-sm">Real-Time Sync</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-teal-500/20 to-accent/20 rounded-3xl blur-xl" />
            <div className="relative glass rounded-2xl p-2 shadow-elevated">
              <div className="bg-navy-800 rounded-xl p-6 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-primary-foreground/60 text-sm">Dashboard Preview Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
