import { motion } from 'framer-motion';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 92 },
    { name: 'React', percentage: 88 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 90 },
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 85 },
    { name: 'Express', percentage: 82 },
    { name: 'MongoDB', percentage: 78 },
    { name: 'SQL', percentage: 75 },
    { name: 'Firebase', percentage: 80 },
    { name: 'REST API', percentage: 88 },
  ];

  const otherSkills = [
    'Git & GitHub',
    'Responsive Design',
    'UI/UX Design',
    'Testing',
    'Performance Optimization',
    'SEO',
    'Accessibility',
    'Docker',
    'CI/CD',
    'Agile Methodology',
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            My <span className="text-accent">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent to-primary rounded"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-center max-w-2xl text-muted-foreground"
          >
            I've worked with a wide range of technologies in the web development world.
            Here are some of my technical skills and expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SkillCard
            title="Frontend"
            skills={frontendSkills}
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
            delay={0}
          />
          <SkillCard
            title="Backend"
            skills={backendSkills}
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />}
            delay={0.2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 glass p-8 rounded-2xl border border-white/5"
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center text-white">
            <svg className="w-6 h-6 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Other Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.1, borderColor: 'rgba(0, 242, 255, 0.5)', backgroundColor: 'rgba(0, 242, 255, 0.1)' }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills, icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
  >
    <h3 className="text-2xl font-semibold mb-8 flex items-center text-white">
      <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
      {title}
    </h3>
    <div className="space-y-6">
      {skills.map((skill: any, index: number) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-300">{skill.name}</span>
            <span className="text-primary">{skill.percentage}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 * index + delay }}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SkillsSection;
