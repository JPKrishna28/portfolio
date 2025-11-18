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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            My <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-center max-w-2xl text-muted-foreground"
          >
            Here are some of my recent projects. Each project is a unique piece of development,
            from planning and design all the way to solving real-life problems with code.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${selectedCategory === 'all'
              ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(124,58,237,0.3)]'
              : 'bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:border-white/20'
              }`}
          >
            All
          </motion.button>
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(tag)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${selectedCategory === tag
                ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(124,58,237,0.3)]'
                : 'bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:border-white/20'
                }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {(showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT)).map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <div className="aspect-video bg-black/50 relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-primary/20 text-primary border border-primary/50 rounded-lg text-center text-sm hover:bg-primary hover:text-white transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white/5 text-white border border-white/10 rounded-lg text-center text-sm hover:bg-white/10 transition-colors"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg transition-all shadow-lg"
            >
              {showAll ? 'Show Less' : `View More (${filteredProjects.length - INITIAL_DISPLAY_COUNT} more)`}
            </motion.button>
          </motion.div>
        )}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10 p-8 glass rounded-2xl border border-white/5"
          >
            <p className="text-lg text-muted-foreground">
              No projects found in this category. Please select another category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
