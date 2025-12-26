import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import PlayStoreIcon from "../assets/apps.png";

const HeroSection = () => {
  const appStores = [
    {
      name: "App Store",
      icon: "apple",
      url: "https://apps.apple.com/app/mtp-finance-hub/idYOUR_APP_ID",
      description: "Download on the",
      platform: "iOS",
      disabled: true,
    },
    {
      name: "Google Play",
      icon: "google",
      url: "https://play.google.com/store/apps/details?id=com.khantminlwin.MTP",
      description: "Get it on",
      platform: "Android",
      disabled: false,
    },
  ];

  // Fixed YouTube Shorts embed URL
  const youtubeShortsUrl = "https://www.youtube.com/embed/YfbhJxy6QRw";

  return (
    <section className="relative h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg bg-muted overflow-hidden shadow-2xl animate-fade-in animation-delay-900">
          <iframe
            className="w-full h-full"
            src={youtubeShortsUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 animate-fade-in animation-delay-1200">
          {appStores.map((store, index) => (
            <Button
              key={store.name}
              variant={store.disabled ? "outline" : "default"}
              size="lg"
              disabled={store.disabled}
              className="min-w-[200px]"
            >
              {store.disabled ? (
                // iOS button (disabled)
                <>
                  <Apple className="mr-2 h-6 w-6" />
                  <span>We are currently working!</span>
                </>
              ) : (
                // Android button (enabled with download link)
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-full"
                >
                  <img
                    src={PlayStoreIcon}
                    alt="Get it on Google Play"
                    className="h-6 w-6"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">{store.description}</span>
                    <span className="font-bold">{store.platform}</span>
                  </div>
                </a>
              )}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
