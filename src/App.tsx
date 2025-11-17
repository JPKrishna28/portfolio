import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementSection from './components/AchievementSection';
import ContactSection from './components/ContactSection';


function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
