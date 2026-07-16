import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.4 },
  };

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div {...fadeUp} className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">About</h2>
          <p className="text-muted-foreground">A little bit about who I am and what I do.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div {...fadeUp} className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm P. Jaswanth Krishna, an AI & ML student and full-stack developer with
              experience building real-world projects using Python, React, and ML tools.
              As Vice President of the Innovista Club at NRI Institute of Technology, I've
              conducted workshops and mentored students in technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm a contributor to open-source NLP models (including Gemma2 for Telugu) and
              a winner of multiple awards, including the Best Project Award and the TechTrek
              Hackathon. I enjoy building AI applications and web products.
            </p>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-3">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'AI & Machine Learning',
                  'Full-Stack Development',
                  'Technical Workshops',
                  'Open Source Contributions',
                  'Hackathons',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 border border-border rounded-md text-sm text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/Jaswanth_Resume.pdf"
              download
              className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </motion.div>

          <motion.div {...fadeUp} className="mx-auto w-full max-w-xs lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border">
              <img
                src="myphoto.png"
                alt="Jaswanth Krishna"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            title="Experience"
            description="Interned at Infosys | Conducted 10+ tech workshops | Guided junior projects"
          />
          <InfoCard
            title="Education"
            description="B.Tech in AI & ML, NRI Institute of Technology"
          />
          <InfoCard
            title="Languages"
            description="English, Telugu, Hindi"
          />
          <InfoCard
            title="Achievements"
            description="Postman Student Leader, Hackathon Winner, Best CR, Gemma2 Contributor"
          />
        </motion.div>
      </div>
    </section>
  );
};

const InfoCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-card border border-border rounded-lg p-6">
    <h3 className="text-base font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

export default AboutSection;
