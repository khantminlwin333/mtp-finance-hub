import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Take control of your finances today
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Sign up for MTP Finance Hub and start your journey to financial freedom.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a href="#">Sign Up Now</a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;