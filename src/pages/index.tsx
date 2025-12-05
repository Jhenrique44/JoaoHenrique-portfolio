
import AboutSection from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { HeroSection } from "../components/HeroSection";
import { Navigation } from "../components/Navigation";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";

const Index = () => { 
    return(
        <div>
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <ExperienceSection></ExperienceSection>
            <ProjectsSection></ProjectsSection>
            <SkillsSection></SkillsSection>
        </div>
    );
}

export default Index;