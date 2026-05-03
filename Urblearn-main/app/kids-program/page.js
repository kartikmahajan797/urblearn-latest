import Navbar from '../components/Navbar';
import KidsHero from '../components/KidsHero';
import CareerAcademy from '../components/CareerAcademy';
import FeatureHighlight from '../components/FeatureHighlight';
import WhyChooseKids from '../components/WhyChooseKids';
import LearningAdventure from '../components/LearningAdventure';
import AmazingStudents from '../components/AmazingStudents';
import StudentFeedback from '../components/StudentFeedback';
import EpicLearning from '../components/EpicLearning';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function KidsProgram() {
    return (
        <>
            <Navbar />
            <KidsHero />
            <CareerAcademy />
            <FeatureHighlight />
            <WhyChooseKids />
            <LearningAdventure />
            <AmazingStudents />
            <StudentFeedback />
            <EpicLearning />
            <ContactForm />
            <Footer />
        </>
    );
}
