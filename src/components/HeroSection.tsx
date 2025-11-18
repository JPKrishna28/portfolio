import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const timeoutRef = useRef<number | null>(null);

  const texts = ['ML Engineer', 'Developer', 'Creator'];

  useEffect(() => {
    return (): void => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const currentWord = texts[textIndex];

    const handleTyping = () => {
      const current = typedText;

      if (isDeleting) {
        const newText = current.slice(0, -1);
        setTypedText(newText);
        setTypingSpeed(newText ? 50 : 700);

        if (!newText) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        const newText = currentWord.slice(0, current.length + 1);
        setTypedText(newText);
        setTypingSpeed(newText === currentWord ? 2000 : 120);

        if (newText === currentWord) setIsDeleting(true);
      }
    };

    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    return (): void => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [typedText, isDeleting, textIndex, typingSpeed]);

  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-xl opacity-50 rounded-full"></div>
            <img
              src="/myphoto.png"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 relative z-10 object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Hello, I'm <br className="md:hidden" />
            <span className="text-primary">
              Perla Jaswanth Krishna
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-12 mb-8 flex items-center justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground">
              I'm a{' '}
              <span className="text-foreground font-medium ml-2 relative inline-block">
                {typedText}
                <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-accent animate-pulse shadow-[0_0_10px_#00f2ff]" />
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Welcome to my digital universe. I craft immersive web experiences and intelligent systems using cutting-edge technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-primary/20 text-primary-foreground rounded-full overflow-hidden transition-all hover:scale-105 border border-primary/50 hover:border-primary hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative font-medium">View My Work</span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-transparent text-foreground rounded-full border border-white/10 hover:bg-white/5 transition-all hover:scale-105 hover:border-white/30 backdrop-blur-sm"
            >
              <span className="font-medium">Contact Me</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full animate-scroll"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
