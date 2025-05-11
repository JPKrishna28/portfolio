const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm P. Jaswanth Krishna, a passionate AI & ML student and full-stack developer with experience in building real-world projects using Python, React, and ML tools. As the Vice President of the Innovista Club at NRI Institute of Technology, I've conducted impactful workshops and guided many students in technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm also a recognized contributor to open-source NLP models (like Gemini 2 for Telugu) and a winner of multiple accolades including "Best Project Award", "Best CR", and the TechTrek Hackathon. I enjoy building AI wrappers, portfolio sites, and futuristic applications.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3">My Interests</h4>
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
                    className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-background border border-border shadow-xl rounded-lg p-1 mx-auto max-w-md">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-secondary/20">
                <img
                  src="myphoto.jpg"
                  alt="Jaswanth Krishna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute top-6 -right-6 w-full h-full bg-primary/20 rounded-lg -z-10"></div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground">Interned at Infosys | Conducted 10+ tech workshops | Guided junior projects</p>
          </div>

          <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253M12 6.253C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground">B.Tech in AI & ML, NRI Institute of Technology</p>
          </div>

          <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p className="text-muted-foreground">English, Telugu, Hindi</p>
          </div>

          <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Achievements</h3>
            <p className="text-muted-foreground">Postman Student Leader, Hackathon Winner, Best CR, Gemini 2 Contributor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
