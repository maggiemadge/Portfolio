

import './App.css'

import NavBar from './components/NavBar'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroMain from './components/subHeroSection/SubHeroMain'

import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectSection/ProjectsMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'



function App() {


  return (
    <>
      <div>
        <NavBar />
        <HeroMain />
        <HeroGradient />
        <SubHeroMain />
        <AboutMeMain />
        <SkillsMain />
        <SubSkills/>
        <ExperienceMain/>
        <ProjectsMain/>
        <ContactMeMain/>
        <FooterMain/>
      </div>
    </>
  )
}

export default App
