import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'Firebase', 'REST API'],
    },
    {
      title: 'AI & ML',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'OpenCV'],
    },
    {
      title: 'Other',
      skills: ['Git & GitHub', 'Docker', 'CI/CD', 'Testing', 'UI/UX Design', 'Agile'],
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.4 },
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div {...fadeUp} className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Skills</h2>
          <p className="text-muted-foreground">
            Technologies and tools I work with regularly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              {...fadeUp}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-base font-medium mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-border rounded-md text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
