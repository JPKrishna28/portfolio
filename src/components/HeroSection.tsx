import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const texts = ['Designer', 'Developer', 'Creator'];

  // Use a ref for storing timeoutId to avoid cleanup issues
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timeout when component unmounts or when the effect reruns
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const currentWord = texts[textIndex];

    const handleTyping = () => {
      setTypedText((current) => {
        if (isDeleting) {
          // Deleting text
          const newText = current.substring(0, current.length - 1);
          if (newText === '') {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
            setTypingSpeed(700); // Pause before next word
            return newText;
          }
          setTypingSpeed(50); // Faster when deleting
          return newText;
        } else {
          // Typing text
          const newText = currentWord.substring(0, current.length + 1);

          if (newText === currentWord) {
            setTypingSpeed(2000); // Pause at the end
            setIsDeleting(true);
            return newText;
          }

          setTypingSpeed(120); // Normal typing speed
          return newText;
        }
      });
    };

    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [typedText, isDeleting, textIndex, typingSpeed, texts]);

  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hello, I'm <span className="text-primary">John Doe</span>
          </h1>

          <div className="h-10 mb-8">
            <h2 className="text-2xl md:text-3xl flex items-center">
              I'm a <span className="text-primary ml-2 relative min-w-20 inline-block">
                {typedText}
                <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-primary animate-pulse" />
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Welcome to my portfolio! I specialize in creating beautiful, functional websites
            and applications with modern technologies. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <a
              href="#about"
              aria-label="Scroll down"
              className="inline-block"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
