import { Button } from "@/components/ui/button";
import { Apple,Smartphone } from "lucide-react";
import PlayStoreIcon from '../assets/apps.png';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg bg-muted overflow-hidden shadow-2xl animate-fade-in animation-delay-900">
          <iframe 
            className="w-full h-full"
            src="https://youtube.com/shorts/YfbhJxy6QRw?si=WGi_Q_xked3UEnRs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="flex justify-center gap-4 mt-8 animate-fade-in animation-delay-1200">
        <Button variant="outline" size="lg">
  <img 
        src={PlayStoreIcon} 
        alt="Get it on Google Play"
        className="h-12 w-auto"
      />
  Download for Android
</Button>
          <Button variant="outline" size="lg" disabled>
            <Apple className="mr-2 h-6 w-6" />
            We are currently working!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
