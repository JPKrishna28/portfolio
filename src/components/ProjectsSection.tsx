import { useState, useEffect } from 'react';

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

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce platform with product listings, cart functionality, and checkout process.',
      image: '/placeholder.jpg', // Replace with actual image
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://demo.com/project1',
      codeLink: 'https://github.com/username/project1',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, user authentication, and real-time updates.',
      image: '/placeholder.jpg', // Replace with actual image
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      demoLink: 'https://demo.com/project2',
      codeLink: 'https://github.com/username/project2',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data for multiple locations.',
      image: '/placeholder.jpg', // Replace with actual image
      tags: ['JavaScript', 'API', 'CSS'],
      demoLink: 'https://demo.com/project3',
      codeLink: 'https://github.com/username/project3',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing skills, projects, and experience.',
      image: '/placeholder.jpg', // Replace with actual image
      tags: ['React', 'Tailwind CSS', 'TypeScript'],
      demoLink: 'https://demo.com/project4',
      codeLink: 'https://github.com/username/project4',
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'An application that allows users to search for recipes based on ingredients or dish names.',
      image: '/placeholder.jpg', // Replace with actual image
      tags: ['React', 'API', 'CSS'],
      demoLink: 'https://demo.com/project5',
      codeLink: 'https://github.com/username/project5',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A full-stack blog platform with user authentication, CRUD operations, and comment functionality.',
      image: '/placeholder.jpg', // Replace with actual image
      tags: ['Node.js', 'Express', 'MongoDB', 'React'],
      demoLink: 'https://demo.com/project6',
      codeLink: 'https://github.com/username/project6',
    },
  ];

  // Get all unique tags from projects
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  // Filter projects based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.tags.includes(selectedCategory)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="mt-6 text-center max-w-2xl text-muted-foreground">
            Here are some of my recent projects. Each project is a unique piece of development, from
            planning and design all the way to solving real-life problems with code.
          </p>
        </div>

        {/* Projects Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedCategory(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === tag
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-secondary/20 relative">
                <img
                  src="/placeholder.svg"
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-xs"
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
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md text-center text-sm hover:bg-primary/90 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-center text-sm hover:bg-secondary/80 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center mt-10 p-8 bg-background border border-border rounded-lg">
            <p className="text-lg text-muted-foreground">
              No projects found in this category. Please select another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
