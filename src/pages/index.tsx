
import AboutSection from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { HeroSection } from "../components/HeroSection";
import { Navigation } from "../components/Navigation";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";

const Index = () => { 
    return(
        <div className="min-h-screen bg-gradiant-to-br from-earth-70 to-earth-100">
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <ExperienceSection></ExperienceSection>
            <ProjectsSection></ProjectsSection>
            <SkillsSection></SkillsSection>
            <ContactSection></ContactSection>
        </div>
    );
}

export default Index;