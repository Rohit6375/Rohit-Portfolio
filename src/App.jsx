

import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import FooterMain from './components/footer/FooterMain';

import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import SubHeroSection from './components/heroSection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain';
import ProjectMain from './components/projectsSection/ProjectMain';
import SkillsMain from './components/skillsSction/SkillsMain';
import SubSkills from './components/skillsSction/SubSkills';

function App() {
  

  return (
   <>
   <main className='font-body'>
    <div className="w-full overflow-hidden">
      <NavbarMain />
    </div>
    
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <ExperienceMain/>
    <ProjectMain/>
    <ContactMeMain/>
    <FooterMain/>
   </main>
   </>
  );
}

export default App
