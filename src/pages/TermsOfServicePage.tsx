import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  DollarSign, 
  UserX,
  Smartphone,
  RefreshCw,
  Globe,
  Mail,
  Lock,
  CreditCard,
  CloudOff
} from "lucide-react";

const TermsOfServicePage = () => {
  const sections = [
    {
      id: "agreement",
      title: "1. Agreement to Terms",
      icon: <FileText className="w-5 h-5" />,
      content: "By accessing or using MTP Finance Hub ('Service'), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service."
    },
    {
      id: "service-description",
      title: "2. Service Description",
      icon: <DollarSign className="w-5 h-5" />,
      content: "MTP Finance Hub is a personal finance tracking application that allows users to:",
      list: [
        "Manually log income and expense transactions",
        "Create and manage budgets",
        "Set and track financial goals",
        "Generate invoices and scan receipts",
        "View financial reports and analytics"
      ],
      note: "All financial data is manually entered by users. We do not connect to bank accounts or financial institutions."
    },
    {
      id: "accounts",
      title: "3. User Accounts",
      icon: <UserX className="w-5 h-5" />,
      subsections: [
        {
          title: "3.1 Authentication",
          content: "You can create an account using:",
          list: [
            "Google Sign-In",
            "Apple Sign-In",
            "No bank account connections required"
          ]
        },
        {
          title: "3.2 Account Responsibility",
          content: "You are responsible for:",
          list: [
            "Maintaining the confidentiality of your account",
            "All activities under your account",
            "Ensuring your login credentials are secure",
            "Promptly notifying us of unauthorized access"
          ]
        },
        {
          title: "3.3 Account Deletion",
          content: "You may delete your account at any time:",
          list: [
            "Access Settings > Account > Delete Account",
            "All data will be permanently erased",
            "No refunds for Pro subscriptions after deletion",
            "Cannot be undone or recovered"
          ]
        }
      ]
    },
    {
      id: "subscriptions",
      title: "4. Subscriptions and Payments",
      icon: <CreditCard className="w-5 h-5" />,
      subsections: [
        {
          title: "4.1 Free Plan",
          content: "Includes:",
          list: [
            "Basic financial tracking features",
            "Manual transaction logging",
            "Budget creation and management",
            "Display of advertisements",
            "Limited receipt scanning (10 images/month)"
          ]
        },
        {
          title: "4.2 Pro Plan",
          content: "$2.99/month includes:",
          list: [
            "Ad-free experience",
            "Unlimited receipt scanning",
            "Advanced analytics",
            "Priority support",
            "Additional premium features"
          ]
        },
        {
          title: "4.3 Payment Terms",
          content: "Important information:",
          list: [
            "Payments processed through app stores (Apple App Store/Google Play)",
            "Auto-renewing subscriptions",
            "Cancel anytime through app store settings",
            "No refunds for partial months",
            "Prices subject to change with notice"
          ]
        }
      ]
    },
    {
      id: "user-content",
      title: "5. User Content and Data",
      icon: <CloudOff className="w-5 h-5" />,
      content: "You retain all rights to your financial data. By using our Service, you grant us:",
      list: [
        "Permission to store and process your data to provide the Service",
        "Right to use anonymized, aggregated data for analytics",
        "License to display your content within the app",
        "Authority to remove content violating our policies"
      ]
    },
    {
      id: "acceptable-use",
      title: "6. Acceptable Use",
      icon: <Shield className="w-5 h-5" />,
      content: "You agree not to use the Service to:",
      list: [
        "Upload or share illegal, harmful, or offensive content",
        "Impersonate any person or entity",
        "Interfere with or disrupt the Service",
        "Attempt to gain unauthorized access",
        "Use for commercial purposes without permission",
        "Manipulate financial data for fraudulent purposes"
      ]
    },
    {
      id: "disclaimers",
      title: "7. Disclaimers and Limitations",
      icon: <AlertTriangle className="w-5 h-5" />,
      subsections: [
        {
          title: "7.1 Financial Advice",
          content: "Important disclaimers:",
          list: [
            "Not financial advice - consult professionals for financial decisions",
            "We do not provide investment advice",
            "Accuracy of data depends on user input",
            "We are not responsible for financial losses"
          ]
        },
        {
          title: "7.2 Service Availability",
          content: "We strive to provide reliable service but:",
          list: [
            "Service may be unavailable due to maintenance",
            "We don't guarantee uninterrupted access",
            "May modify or discontinue features",
            "Not responsible for third-party service issues"
          ]
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "8. Intellectual Property",
      icon: <FileText className="w-5 h-5" />,
      content: "The Service and its original content, features, and functionality are owned by MTP Finance Hub and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws."
    },
    {
      id: "termination",
      title: "9. Termination",
      icon: <RefreshCw className="w-5 h-5" />,
      content: "We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason."
    },
    {
      id: "changes",
      title: "10. Changes to Terms",
      icon: <Mail className="w-5 h-5" />,
      content: "We reserve the right to modify these terms at any time. We will notify users of material changes via email or in-app notification. Your continued use of the Service after changes constitutes acceptance."
    },
    {
      id: "governing-law",
      title: "11. Governing Law",
      icon: <Globe className="w-5 h-5" />,
      content: "These Terms shall be governed by the laws of [Your Country/State], without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located in [Your Jurisdiction]."
    },
    {
      id: "contact",
      title: "12. Contact Information",
      icon: <Mail className="w-5 h-5" />,
      content: "For questions about these Terms, please contact us at:",
      contact: {
        email: "legal@mtpfinancehub.com",
        subject: "Terms of Service Inquiry"
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
              Terms of 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Effective Date: December 2025 • Last Updated: December 2025
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Manual Tracking Only</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Free & Pro Plans</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                <UserX className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Delete Anytime</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                <AlertTriangle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Not Financial Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-6 px-4 bg-amber-500/10 border-y border-amber-500/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-amber-500">Important Legal Notice</h4>
              <p className="text-sm text-muted-foreground">
                MTP Finance Hub is a financial tracking tool only. We do not provide financial advice. 
                Always consult with qualified professionals for financial decisions. Your use of this 
                Service constitutes acceptance of these terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-lg">
                  Welcome to MTP Finance Hub. These Terms of Service ('Terms') govern your use of our 
                  mobile application and related services. Please read them carefully.
                </p>
              </div>
            </div>

            {/* Terms Sections */}
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

                  {section.note && (
                    <div className="mt-6 p-4 rounded-lg bg-muted/50 border-l-4 border-primary ml-6">
                      <p className="text-sm">{section.note}</p>
                    </div>
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
                                  <span className="text-primary mt-1">•</span>
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
                      <h3 className="font-semibold mb-4">Contact Details</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium mb-1">Email Address</h4>
                          <a 
                            href={`mailto:${section.contact.email}?subject=${encodeURIComponent(section.contact.subject)}`}
                            className="text-primary hover:underline"
                          >
                            {section.contact.email}
                          </a>
                        </div>
                        {section.contact.subject && (
                          <div>
                            <h4 className="font-medium mb-1">Email Subject</h4>
                            <p className="text-muted-foreground">Please use: "{section.contact.subject}"</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Payment Methods Notice */}
            <div className="mt-16 p-8 rounded-2xl border bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-start gap-4">
                <CreditCard className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Payment Processing</h3>
                  <p className="text-muted-foreground mb-4">
                    All Pro plan payments are processed through Apple App Store or Google Play Store. 
                    We do not handle payment information directly. Subscription management, 
                    cancellations, and refund requests must be handled through your respective app store.
                  </p>
                </div>
              </div>
            </div>

            {/* Acceptance Notice */}
            <div className="mt-12 p-6 border rounded-xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="font-semibold">By using our Service, you agree to these Terms</span>
              </div>
              <p className="text-muted-foreground text-center text-sm">
                If you do not agree with any part of these terms, please discontinue use of Finance MTP
                immediately. Continued use constitutes acceptance of the current terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsOfServicePage;