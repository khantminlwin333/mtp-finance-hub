import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import mtpLogo from "../assets/mtp.png"; // Import the image

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {href: "/", label: "Home"},
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
  ];

  // Function to open email client
  const handleContactClick = () => {
    const email = "servicemtp67@gmail.com";
    const subject = "Contact Inquiry - MTP Finance Hub";
    const body = "Hello MTP Finance Hub team,\n\nI would like to get in touch regarding:";
    
    // Open default email client
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-3 shadow-soft"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-glow">
            <img 
              src={mtpLogo}
              alt="MTP Logo" 
              className="w-10 h-10"
            />
          </div>
          <span className="font-display font-bold text-xl text-foreground">MTP</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="accent" 
            size="sm" 
            onClick={handleContactClick}
            className="gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 animate-fade-up">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-border">
              <Button 
                variant="accent" 
                size="sm" 
                onClick={handleContactClick}
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;