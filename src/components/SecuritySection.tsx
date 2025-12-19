import { Shield, Lock, Eye, Server, CheckCircle2 } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "256-bit Encryption",
      description: "Your data is encrypted using the same standards as major banks.",
    },
    {
      icon: Eye,
      title: "Privacy First",
      description: "We never sell, share, or misuse your personal information.",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Hosted on enterprise-grade cloud infrastructure with 24/7 monitoring.",
    },
  ];

  const commitments = [
    "Your data belongs to you, always",
    "No third-party data selling, ever",
    "Regular security audits and updates",
    "Compliant with global data protection standards",
    "Transparent data handling practices",
  ];

  return (
    <section id="security" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Your Security is Our{" "}
            <span className="text-gradient">Top Priority</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We use industry-leading security practices to protect your financial data. 
            Your trust is the foundation of everything we do.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitments */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-semibold text-primary-foreground text-center mb-8">
            Our Privacy Commitments
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/80 text-sm">{commitment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
