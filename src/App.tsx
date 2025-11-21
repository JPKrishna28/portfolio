import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import TechSphere from './components/TechSphere';
import ProjectsSection from './components/ProjectsSection';
import GithubStats from './components/GithubStats';
import AchievementSection from './components/AchievementSection';
import ContactSection from './components/ContactSection';


function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TechSphere />
      <ProjectsSection />
      <GithubStats />
      <AchievementSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
