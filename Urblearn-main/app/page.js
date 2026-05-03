import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerLogos from './components/PartnerLogos';
import Courses from './components/Courses';
import SkillsForSuccess from './components/SkillsForSuccess';
import Comparison from './components/Comparison';
import Experience from './components/Experience';
import Personalized from './components/Personalized';
import EngineerJourney from './components/EngineerJourney';
import PlacementSlider from './components/PlacementSlider';
import HowItWorks from './components/HowItWorks';
import WhyChoose from './components/WhyChoose';
import Instructors from './components/Instructors';
import StudentFeedback from './components/StudentFeedback';
import FAQ from './components/FAQ';
import LeadFormSection from './components/LeadFormSection';
import Footer from './components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <PartnerLogos />
            


             {/* How we deliver value / Features */}
            <HowItWorks />
            <Personalized />
            <Experience />
            {/* The Big Picture / Narrative */}
            <WhyChoose />
            <EngineerJourney />
            <PlacementSlider />
            <Comparison />
            
            {/* Our Offerings */}
            <Courses />
            <SkillsForSuccess />
            
            {/* How we deliver value / Features
            <HowItWorks />
            <Personalized />
            <Experience /> */}
            
            {/* Social Proof & Authority */}
            <Instructors />
            <StudentFeedback />
            
            {/* Closing Objections & CTA */}
            <FAQ />
            <LeadFormSection />
            
            <Footer />
        </>
    );
}
