import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Shield, 
  User, 
  Database, 
  Lock, 
  Cookie, 
  Mail,
  Globe,
  Smartphone,
  Trash2,
  Bell
} from "lucide-react";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: <Shield className="w-5 h-5" />,
      content: "MTP Finance Hub ('we,' 'our,' or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services."
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      icon: <Database className="w-5 h-5" />,
      subsections: [
        {
          title: "2.1 Personal Information",
          content: "When you use Google or Apple authentication, we collect:",
          list: [
            "Your name and email address (from your authentication provider)",
            "Profile picture (if available)",
            "Authentication provider user ID"
          ]
        },
        {
          title: "2.2 Financial Data",
          content: "You manually input:",
          list: [
            "Income and expense transactions",
            "Budget information",
            "Savings goals",
            "Receipt images (if using scanning feature)",
            "Custom categories and tags"
          ]
        },
        {
          title: "2.3 Automatically Collected Information",
          content: "We automatically collect:",
          list: [
            "Device information (model, OS version)",
            "App usage statistics",
            "Crash reports and error logs",
            "Advertising identifiers (for personalized ads in free version)"
          ]
        }
      ]
    },
    {
      id: "data-usage",
      title: "3. How We Use Your Information",
      icon: <User className="w-5 h-5" />,
      list: [
        "Provide, maintain, and improve our financial tracking services",
        "Process transactions and maintain your financial records",
        "Personalize your experience with budgeting tools",
        "Display relevant advertisements in the free version",
        "Send important notifications about your finances",
        "Respond to your comments and questions",
        "Monitor and analyze usage patterns",
        "Prevent fraudulent activities and ensure security"
      ]
    },
    {
      id: "data-sharing",
      title: "4. Information Sharing and Disclosure",
      icon: <Globe className="w-5 h-5" />,
      content: "We do not sell your personal or financial information. We may share information in the following circumstances:",
      subsections: [
        {
          title: "4.1 Service Providers",
          content: "With trusted third-party vendors who assist us in:",
          list: [
            "Cloud storage and hosting",
            "Analytics and crash reporting",
            "Advertising networks (for free version)",
            "Customer support services"
          ]
        },
        {
          title: "4.2 Legal Requirements",
          content: "When required by law or to:",
          list: [
            "Comply with legal obligations",
            "Protect our rights and property",
            "Prevent or investigate wrongdoing",
            "Ensure the safety of our users"
          ]
        }
      ]
    },
    {
      id: "data-security",
      title: "5. Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: "We implement appropriate technical and organizational measures to protect your information:",
      list: [
        "End-to-end encryption for sensitive financial data",
        "Secure authentication via Google and Apple",
        "Regular security audits and vulnerability testing",
        "Access controls and authentication protocols",
        "Secure data backup and recovery procedures"
      ]
    },
    {
      id: "user-rights",
      title: "6. Your Rights and Choices",
      icon: <Smartphone className="w-5 h-5" />,
      subsections: [
        {
          title: "6.1 Account Deletion",
          content: "You can delete your account at any time:",
          list: [
            "Access Settings > Account > Delete Account",
            "All your data will be permanently removed",
            "Process completion within 30 days",
            "No recovery available after deletion"
          ]
        },
        {
          title: "6.2 Data Access and Export",
          content: "You have the right to:",
          list: [
            "Access your personal information",
            "Export your financial data (CSV format)",
            "Correct inaccurate information",
            "Request deletion of specific data"
          ]
        },
        {
          title: "6.3 Advertising Preferences",
          content: "Free version users can:",
          list: [
            "Opt-out of personalized ads (device settings)",
            "Upgrade to Pro for ad-free experience",
            "Manage advertising preferences in app settings"
          ]
        }
      ]
    },
    {
      id: "children-privacy",
      title: "7. Children's Privacy",
      icon: <User className="w-5 h-5" />,
      content: "Our services are not directed to individuals under 16. We do not knowingly collect personal information from children under 16. If we become aware that a child under 16 has provided us with personal information, we will take steps to delete such information."
    },
    {
      id: "pro-plan",
      title: "8. Pro Plan Specifics",
      icon: <Bell className="w-5 h-5" />,
      content: "Upgrading to Pro provides additional privacy benefits:",
      list: [
        "Complete ad removal",
        "No advertising trackers",
        "Enhanced data encryption",
        "Priority support for privacy concerns"
      ]
    },
    {
      id: "changes",
      title: "9. Changes to This Policy",
      icon: <Mail className="w-5 h-5" />,
      content: "We may update this Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Effective Date' at the top. You are advised to review this Privacy Policy periodically for any changes."
    },
    {
      id: "contact",
      title: "10. Contact Us",
      icon: <Mail className="w-5 h-5" />,
      content: "If you have questions about this Privacy Policy or our data practices, please contact us at:",
      contact: {
        email: "servicemtp67@gmail.com",
        address: "Online Company",
        responseTime: "We aim to respond within 48 hours"
      }
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Last Updated: December 2025 • Effective Date: January 1, 2026
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                <Trash2 className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Delete Account Anytime</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                <Smartphone className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Manual Transaction Logging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12 text-lg text-muted-foreground">
              <p>Welcome to MTP Finance Hub. We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we handle your information when you use our financial tracking application.</p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-16">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  
                  {section.content && (
                    <div className="prose dark:prose-invert max-w-none mb-6">
                      <p>{section.content}</p>
                    </div>
                  )}

                  {section.list && (
                    <ul className="space-y-3 mb-6 ml-6">
                      {section.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && (
                    <div className="space-y-8 ml-6">
                      {section.subsections.map((subsection, index) => (
                        <div key={index}>
                          <h3 className="text-xl font-semibold mb-4">{subsection.title}</h3>
                          {subsection.content && (
                            <p className="text-muted-foreground mb-4">{subsection.content}</p>
                          )}
                          {subsection.list && (
                            <ul className="space-y-2 ml-6">
                              {subsection.list.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.contact && (
                    <div className="mt-8 p-6 rounded-xl bg-muted/50 ml-6">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold mb-1">Email</h4>
                          <a 
                            href={`mailto:${section.contact.email}`}
                            className="text-primary hover:underline"
                          >
                            {section.contact.email}
                          </a>
                        </div>
                        {section.contact.address && (
                          <div>
                            <h4 className="font-semibold mb-1">Mailing Address</h4>
                            <p className="text-muted-foreground">{section.contact.address}</p>
                          </div>
                        )}
                        {section.contact.responseTime && (
                          <div>
                            <h4 className="font-semibold mb-1">Response Time</h4>
                            <p className="text-muted-foreground">{section.contact.responseTime}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Final Notice */}
            <div className="mt-16 p-6 border rounded-xl">
              <p className="text-muted-foreground text-center">
                By using Finance MTP, you acknowledge that you have read and understood this Privacy Policy. 
                Your continued use of our services constitutes acceptance of these terms.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Last updated: December 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;