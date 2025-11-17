import React, { useState, useEffect, useCallback } from 'react';

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
      description: "Won a Stage 1 (Regional Round) prize at the NASA Space Apps Challenge 2025!",
      image: "/vitap.jpeg", // You can update this path
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 2,
      title: "Teckzite AI Hackathon - 2nd Place",
      description: "🏆 Thrilled to announce that our team secured 2nd place in the 24-hour AI Hackathon at Teckzite, RGUKT Nuzvid | 2K25, the national-level techno-management fest conducted by RGUKT (IIIT Nuzvid)! 🚀",
      image: "/iiit.jpg", // You can update this path
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 3,
      title: "PRAJWALAN 2K25 Hackathon - 2nd Place",
      description: "🎉 Secured second place at 24-hour PRAJWALAN 2K25 Hackathon at SRKR College, Bhimavaram!",
      image: "/srkr.jpg", // You can update this path
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 4,
      title: "Innovators Fusion Hackathon - 1st Place",
      description: "🥇 Secured 1st Place at National Level Innovators Fusion Hackathon! 🚀 Proud to share that my team and I secured 1st place in the National Level Innovators Fusion Hackathon conducted by ERDL & the ECE Department of RVIT (formerly Chebrolu Engineering College)! 🎉",
      image: "/rvit.jpg", // You can update this path
      date: "2025",
      category: "Hackathon"
    },
    {
      id: 5,
      title: "VR Siddhartha 24-Hour AIthon - 3rd Place",
      description: "🏆 Secured 3rd Place at VR Siddhartha 24-Hour AIthon! 🎉 Excited to share that my team and I secured 3rd place in the 24-hour AIthon conducted under the Research Conclave by the Information Technology Department in partnership with Codegnan at VR Siddhartha University",
      image: "/techtrek.jpeg", // You can update this path
      date: "2025",
      category: "Hackathon"
    }
    // You can add more achievements here
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  }, [achievements.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  // Auto-slide functionality (optional)
  useEffect(() => {
    if (achievements.length > 1) {
      const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
      return () => clearInterval(timer);
    }
  }, [achievements.length, nextSlide]);

  return (
    <section id="achievements" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Recognitions and accomplishments along my journey
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Achievement Display */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={achievements[currentSlide].image}
                  alt={achievements[currentSlide].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {achievements[currentSlide].category}
                  </span>
                  <span className="ml-auto text-gray-500 dark:text-gray-400 text-sm">
                    {achievements[currentSlide].date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {achievements[currentSlide].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {achievements[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {achievements.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous achievement"
              >
                <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next achievement"
              >
                <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {achievements.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? 'bg-blue-600 dark:bg-blue-400'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
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