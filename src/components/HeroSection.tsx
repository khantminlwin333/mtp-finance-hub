import { Button } from "@/components/ui/button";
import { Apple, AppWindow } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg bg-muted overflow-hidden shadow-2xl animate-fade-in animation-delay-900">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="flex justify-center gap-4 mt-8 animate-fade-in animation-delay-1200">
          <Button variant="outline" size="lg">
            <AppWindow className="mr-2 h-6 w-6" />
            Download for Android
          </Button>
          <Button variant="outline" size="lg">
            <Apple className="mr-2 h-6 w-6" />
            Download for iOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
