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
    <section id="home" className="pt-32 pb-20 min-h-screen flex flex-col justify-center relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src="/myphoto.png"
              alt="Profile"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-border object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight"
          >
            Perla Jaswanth Krishna
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-10 mb-6 flex items-center justify-center"
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              {typedText}
              <span className="inline-block w-[2px] h-[1.2em] bg-muted-foreground ml-1 align-middle animate-pulse" />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            I build web applications and machine learning systems, with a focus on
            practical, well-crafted software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground rounded-md font-medium text-sm hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
