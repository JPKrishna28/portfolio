import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm P. Jaswanth Krishna, a passionate AI & ML student and full-stack developer with experience in building real-world projects using Python, React, and ML tools. As the Vice President of the Innovista Club at NRI Institute of Technology, I've conducted impactful workshops and guided many students in technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm also a recognized contributor to open-source NLP models (like Gemma2 for Telugu) and a winner of multiple accolades including "Best Project Award",  and the TechTrek Hackathon. I enjoy building AI wrappers, portfolio sites, and futuristic applications.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="/Jaswanth_Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-4 text-white">My Interests</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'AI & Machine Learning',
                  'Full-Stack Development',
                  'Technical Workshops',
                  'Open Source Contributions',
                  'Hackathons',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-primary/50 transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent blur-2xl opacity-20 rounded-full animate-pulse"></div>
            <div className="relative z-10 glass p-2 rounded-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-black/40">
                <img
                  src="myphoto.png"
                  alt="Jaswanth Krishna"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <InfoCard
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
            title="Experience"
            description="Interned at Infosys | Conducted 10+ tech workshops | Guided junior projects"
            variants={itemVariants}
          />
          <InfoCard
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253M12 6.253C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
            title="Education"
            description="B.Tech in AI & ML, NRI Institute of Technology"
            variants={itemVariants}
          />
          <InfoCard
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />}
            title="Languages"
            description="English, Telugu, Hindi"
            variants={itemVariants}
          />
          <InfoCard
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />}
            title="Achievements"
            description="Postman Student Leader, Hackathon Winner, Best CR, Gemma2 Contributor"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, description, variants }: any) => (
  <motion.div
    variants={variants}
    className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group"
  >
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <svg className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

export default AboutSection;