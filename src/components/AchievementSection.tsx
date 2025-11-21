
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VirtualGallery from './VirtualGallery';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

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
  const isMobile = useDeviceDetection(1024);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "NASA Space Apps Challenge 2025",
      description: "Won a Stage 1 (Regional Round) prize at the NASA Space Apps Challenge 2025!",
      image: "/vitap.jpeg",
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 2,
      title: "Teckzite AI Hackathon - 2nd Place",
      description: "🏆 Thrilled to announce that our team secured 2nd place in the 24-hour AI Hackathon at Teckzite, RGUKT Nuzvid | 2K25, the national-level techno-management fest conducted by RGUKT (IIIT Nuzvid)! 🚀",
      image: "/iiit.jpg",
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 3,
      title: "PRAJWALAN 2K25 Hackathon - 2nd Place",
      description: "🎉 Secured second place at 24-hour PRAJWALAN 2K25 Hackathon at SRKR College, Bhimavaram!",
      image: "/srkr.jpg",
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 4,
      title: "Innovators Fusion Hackathon - 1st Place",
      description: "🥇 Secured 1st Place at National Level Innovators Fusion Hackathon! 🚀 Proud to share that my team and I secured 1st place in the National Level Innovators Fusion Hackathon conducted by ERDL & the ECE Department of RVIT (formerly Chebrolu Engineering College)! 🎉",
      image: "/rvit.jpg",
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 5,
      title: "VR Siddhartha 24-Hour AIthon - 3rd Place",
      description: "🏆 Secured 3rd Place at VR Siddhartha 24-Hour AIthon! 🎉 Excited to share that my team and I secured 3rd place in the 24-hour AIthon conducted under the Research Conclave by the Information Technology Department in partnership with Codegnan at VR Siddhartha University",
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
    if (achievements.length > 1 && isMobile) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [achievements.length, nextSlide, isMobile]);

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-accent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Recognitions and accomplishments along my journey
          </p>
        </motion.div>

        {/* Conditional rendering based on device */}
        {isMobile ? (
          // Mobile: Show slideshow
          <div className="relative max-w-5xl mx-auto">
            {/* Main Achievement Display */}
            <div className="glass rounded-2xl shadow-2xl overflow-hidden min-h-[500px] border border-white/5 relative">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl -z-10"></div>

              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="md:flex h-full"
                >
                  {/* Image Section */}
                  <div className="md:w-1/2 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={achievements[currentSlide].image}
                      alt={achievements[currentSlide].title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                    <div className="flex items-center mb-6">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                        {achievements[currentSlide].category}
                      </span>
                      <span className="ml-auto text-muted-foreground text-sm font-mono">
                        {achievements[currentSlide].date}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">
                      {achievements[currentSlide].title}
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {achievements[currentSlide].description}
                    </p>

                    <div className="mt-auto flex gap-2">
                      <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            {achievements.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 p-3 rounded-full glass border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group"
                  aria-label="Previous achievement"
                >
                  <svg className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 p-3 rounded-full glass border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group"
                  aria-label="Next achievement"
                >
                  <svg className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Slide Indicators */}
            {achievements.length > 1 && (
              <div className="flex justify-center mt-8 space-x-3">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                        ? 'w-8 bg-primary shadow-[0_0_10px_rgba(124,58,237,0.5)]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Desktop: Show virtual gallery
          <VirtualGallery achievements={achievements} />
        )}
      </div>
    </section>
  );
};

export default AchievementSection;
