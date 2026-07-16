import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const AchievementSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "NASA Space Apps Challenge 2025",
      description: "Won a Stage 1 (Regional Round) prize at the NASA Space Apps Challenge 2025.",
      image: "/vitap.jpeg",
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 2,
      title: "Teckzite AI Hackathon - 2nd Place",
      description: "Secured 2nd place in the 24-hour AI Hackathon at Teckzite 2K25, the national-level techno-management fest conducted by RGUKT (IIIT Nuzvid).",
      image: "/iiit.jpg",
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 3,
      title: "PRAJWALAN 2K25 Hackathon - 2nd Place",
      description: "Secured second place at the 24-hour PRAJWALAN 2K25 Hackathon at SRKR College, Bhimavaram.",
      image: "/srkr.jpg",
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 4,
      title: "Innovators Fusion Hackathon - 1st Place",
      description: "Secured 1st place in the National Level Innovators Fusion Hackathon conducted by ERDL and the ECE Department of RVIT (formerly Chebrolu Engineering College).",
      image: "/rvit.jpg",
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 5,
      title: "VR Siddhartha 24-Hour AIthon - 3rd Place",
      description: "Secured 3rd place in the 24-hour AIthon conducted under the Research Conclave by the Information Technology Department in partnership with Codegnan at VR Siddhartha University.",
      image: "/techtrek.jpeg",
      date: "2025",
      category: "Hackathon"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  }, [achievements.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (achievements.length > 1) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [achievements.length, nextSlide]);

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Achievements</h2>
          <p className="text-muted-foreground">
            Recognitions and accomplishments along my journey.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Achievement Display */}
          <div className="bg-card border border-border rounded-lg overflow-hidden min-h-[420px]">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:flex h-full"
              >
                {/* Image Section */}
                <div className="md:w-1/2 overflow-hidden">
                  <img
                    src={achievements[currentSlide].image}
                    alt={achievements[currentSlide].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center mb-5">
                    <span className="px-2.5 py-1 rounded text-xs font-medium bg-secondary text-secondary-foreground">
                      {achievements[currentSlide].category}
                    </span>
                    <span className="ml-auto text-muted-foreground text-sm">
                      {achievements[currentSlide].date}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-tight">
                    {achievements[currentSlide].title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {achievements[currentSlide].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {achievements.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
                aria-label="Previous achievement"
              >
                <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
                aria-label="Next achievement"
              >
                <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {achievements.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'w-6 bg-foreground'
                    : 'w-1.5 bg-border hover:bg-muted-foreground'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
