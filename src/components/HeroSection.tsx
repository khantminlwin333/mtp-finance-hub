import { Button } from "@/components/ui/button";
import { Apple, Shield } from "lucide-react"; // Added Shield icon
import PlayStoreIcon from "../assets/apps.png";

const HeroSection = () => {
  const appStores = [
    {
      name: "App Store",
      icon: "apple",
      url: "#",
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
    // 👇 NEW BUTTON FOR CIPHER VAULT
    {
      name: "V-tool",
      icon: "shield",
      url: "/vtool.apk", // This points to the file on your website
      description: "Secure Offline",
      platform: "V-tool App",
      disabled: false,
    },
  ];

  const youtubeShortsUrl = "https://www.youtube.com/embed/YfbhJxy6QRw";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background py-20 md:py-0">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* VIDEO CONTAINER */}
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

        {/* BUTTONS CONTAINER */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8 animate-fade-in animation-delay-1200 px-4 flex-wrap">
          {appStores.map((store) => (
            <Button
              key={store.name}
              variant={store.disabled ? "outline" : "default"}
              size="lg"
              disabled={store.disabled}
              className={`w-full sm:w-auto sm:min-w-[200px] ${
                store.icon === "shield" ? "bg-slate-800 hover:bg-slate-700" : ""
              }`} // Optional: Give the Vault button a dark navy color
            >
              {store.disabled ? (
                // --- DISABLED BUTTON (iOS) ---
                <>
                  <Apple className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-sm sm:text-base">
                    Coming Soon on iOS
                  </span>
                </>
              ) : (
                // --- ENABLED BUTTONS (Android & Vault) ---
                <a
                  href={store.url}
                  target={store.icon === "shield" ? "_self" : "_blank"} // _self for direct downloads usually better
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full h-full"
                >
                  {/* Icon Logic: Image for Google, Icon for Shield */}
                  {store.icon === "google" ? (
                    <img src={PlayStoreIcon} alt="Icon" className="h-6 w-6" />
                  ) : (
                    <Shield className="h-6 w-6 text-cyan-400" />
                  )}

                  <div className="flex flex-col items-start text-left leading-tight">
                    <span className="text-[10px] uppercase opacity-80 tracking-wider">
                      {store.description}
                    </span>
                    <span className="font-bold text-sm sm:text-base">
                      {store.platform}
                    </span>
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
