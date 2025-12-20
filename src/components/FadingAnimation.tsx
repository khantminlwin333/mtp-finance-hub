import { useState, useEffect } from 'react';

const FadingAnimation = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      <span className={`inline-block transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Manage
      </span>
      <span className="mx-2 md:mx-4 text-muted-foreground">|</span>
      <span className={`inline-block transition-all duration-500 delay-150 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Track
      </span>
      <span className="mx-2 md:mx-4 text-muted-foreground">|</span>
      <span className={`inline-block transition-all duration-500 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Progress
      </span>
    </h1>
  );
};

export default FadingAnimation;