import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 bg-background border-t">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Finance MTP. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;