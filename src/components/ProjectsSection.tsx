import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 6;

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce platform with product listings, cart functionality, and checkout process.',
      image: 'ecommerce.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://demo.com/project1',
      codeLink: 'https://github.com/Krizzna69/Akrizz',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, user authentication, and real-time updates.',
      image: 'todolist.png',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      demoLink: 'pjhabit.netlify.app',
      codeLink: 'https://github.com/Krizzna69/habit_track',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data for multiple locations.',
      image: 'weatherapp.png',
      tags: ['JavaScript', 'API', 'CSS'],
      demoLink: 'https://github.com/Krizzna69/weatherapp',
      codeLink: 'https://github.com/Krizzna69/weatherapp',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing skills, projects, and experience.',
      image: 'portfolio.png',
      tags: ['React', 'Tailwind CSS', 'TypeScript'],
      demoLink: 'https://pjportfoliogen.netlify.app/',
      codeLink: 'https://github.com/username/project4',
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'An application that allows users to search for recipes based on ingredients or dish names.',
      image: 'recipe.png',
      tags: ['React', 'API', 'CSS'],
      demoLink: 'https://github.com/Krizzna69/recipe_generator-genai-',
      codeLink: 'https://github.com/Krizzna69/recipe_generator-genai-',
    },

    {
      id: 7,
      title: 'Insta Spam Detection',
      description: 'A machine learning model to detect spam comments on Instagram, improving user safety and experience.',
      image: 'instaspam.png',
      tags: ['ML', 'NLP', 'Python'],
      demoLink: 'https://demo.com/instaspam',
      codeLink: 'https://github.com/Krizzna69/insta_spam_detection',
    },
    {
      id: 8,
      title: 'Geolocation-Based Attendance System',
      description: 'A location-aware system for tracking and managing attendance using GPS data.',
      image: 'geocheckin.png',
      tags: ['React', 'MongoDB', 'Node.js', 'Geolocation'],
      demoLink: 'https://geocheckin.netlify.app/',
      codeLink: 'https://github.com/Krizzna69/srmgeolocation',
    },
    {
      id: 9,
      title: 'Water Level Monitoring System',
      description: 'Real-time water level monitoring using piezometer data, with predictive analysis and Z-score anomaly detection.',
      image: 'DWLR.png',
      tags: ['Python', 'IoT', 'ML'],
      demoLink: 'https://github.com/JPKrishna28/dwlr.git',
      codeLink: 'https://github.com/Krizzzna69/dwlr',
    },
    {
      id: 10,
      title: 'English-Telugu Translator',
      description: 'A translation system using Gemini 2, achieving 94% accuracy for English to Telugu language translation.',
      image: 'gemma2.png',
      tags: ['AI', 'Gemini 2', 'Translation'],
      demoLink: 'https://www.kaggle.com/code/krizzna69/english-to-telugu-with-lora-gemma-2',
      codeLink: 'https://www.kaggle.com/code/krizzna69/english-to-telugu-with-lora-gemma-2',
    },
    {
      id: 11,
      title: 'Video to Reel Summarizer',
      description: 'Automatically converts long videos into 30-second reels using FFmpeg, Whisper, and NLP.',
      image: 'videotoreels.png',
      tags: ['Python', 'FFmpeg', 'Whisper', 'NLP'],
      demoLink: 'https://demo.com/reel',
      codeLink: 'https://github.com/username/video-reel-summarizer',
    },
    {
      id: 13,
      title: 'Content Generation Agent',
      description: 'Generates blog outlines, social media posts, and ad copy using Gemini and ADK.',
      image: 'content.png',
      tags: ['AI', 'Gemini', 'ADK'],
      demoLink: 'https://youtube-content-frontend.vercel.app/',
      codeLink: 'https://github.com/Krizzna69/youtube_content_frontend',
    },
    {
      id: 14,
      title: 'Tic Tac Toe Multiplayer',
      description: 'Real-time multiplayer Tic Tac Toe game using WebSocket for communication.',
      image: 'tictactoe.png',
      tags: ['WebSocket', 'Game', 'JavaScript'],
      demoLink: 'pjtictactoe.netlify.app',
      codeLink: 'https://github.com/Krizzna69/tic_tac_toe_frontend',
    },
    {
      id: 15,
      title: 'Chat Application using WebSocket',
      description: 'Real-time chat app supporting multiple users with WebSocket technology.',
      image: 'chatapp.png',
      tags: ['WebSocket', 'Chat', 'Node.js'],
      demoLink: 'https://pjwebsocket.netlify.app/',
      codeLink: 'https://github.com/Krizzna69/chat_websocket',
    },
    {
      id: 16,
      title: 'AI Image Captioning',
      description: 'An AI system using BLIP and GPT-2 to generate captions for images.',
      image: 'aiimage.png',
      tags: ['BLIP', 'GPT-2', 'AI'],
      demoLink: 'https://huggingface.co/spaces/Jaswanth0217/AI-Image-Captioning',
      codeLink: 'https://github.com/Krizzna69/ai-image-captioning',
    },
    {
      id: 17,
      title: '2B RAG Model using Microsoft Phi-2',
      description: 'A RAG model leveraging Microsoft Phi-2 for knowledge-augmented responses.',
      image: 'rag.png',
      tags: ['RAG', 'Phi-2', 'AI'],
      demoLink: 'https://huggingface.co/spaces/jk12p/RAG',
      codeLink: 'https://github.com/Krizzna69/2B_RAG',
    },
    {
      id: 18,
      title: 'Form Validator (pip module)',
      description: 'A custom Python module to validate form fields like email, phone, and age.',
      image: 'form-validator.png',
      tags: ['Python', 'Validation', 'pip'],
      demoLink: 'https://pypi.org/project/form-validator',
      codeLink: 'https://github.com/Krizzna69/form_validator',
    },
    {
      id: 19,
      title: 'InjuryShield',
      description: 'An AI-based application to classify the severity of injuries using image processing.',
      image: 'injuryshield.png',
      tags: ['AI', 'Computer Vision', 'Healthcare'],
      demoLink: 'https://soft-marigold-2f9026.netlify.app/',
      codeLink: 'https://github.com/Krizzna69/frontend_injuryshield',
    },
    {
      id: 20,
      title: 'Virtual Art Gallery',
      description: 'A 3D web-based art gallery experience for showcasing digital artworks.',
      image: 'artgallery.png',
      tags: ['Three.js', 'React', '3D'],
      demoLink: 'https://virtual-art-gallery-wsth.onrender.com/second',
      codeLink: 'https://github.com/Krizzna69/virtual_art_gallery',
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(selectedCategory))
      );
    }
    // Reset showAll when category changes
    setShowAll(false);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my recent work, from web applications to machine learning systems.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-md text-sm transition-colors border ${selectedCategory === 'all'
              ? 'bg-primary text-primary-foreground border-primary'
              : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
              }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedCategory(tag)}
              className={`px-4 py-1.5 rounded-md text-sm transition-colors border ${selectedCategory === tag
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {(showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT)).map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                key={project.id}
                className="bg-card border border-border rounded-lg overflow-hidden flex flex-col"
              >
                <div className="aspect-video bg-muted overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-secondary rounded text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md text-center text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-border text-foreground rounded-md text-center text-sm font-medium hover:bg-secondary transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {filteredProjects.length > INITIAL_DISPLAY_COUNT && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 border border-border text-foreground rounded-md text-sm font-medium hover:bg-secondary transition-colors"
            >
              {showAll ? 'Show Less' : `View More (${filteredProjects.length - INITIAL_DISPLAY_COUNT} more)`}
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center mt-10 p-8 bg-card border border-border rounded-lg">
            <p className="text-muted-foreground">
              No projects found in this category. Please select another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
