import Navbar from '../components/Navbar';
import CollegeHero from '../components/CollegeHero';
import CompanyTestimonials from '../components/CompanyTestimonials';
import GenericCourseGrid from '../components/GenericCourseGrid';
import DemoRegistration from '../components/DemoRegistration';
import CollegeJourney from '../components/CollegeJourney';
import SplitContent from '../components/SplitContent';
import Instructors from '../components/Instructors';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import courseData from '../data/courseData';

export default function CollegePrograms() {
    // Select top 3 courses best for college students
    const topCollegeCourses = [
        courseData['full-stack-with-gen-ai'],
        courseData['data-structures-algorithms'],
        courseData['system-design']
    ].filter(Boolean);

    return (
        <>
            <Navbar />
            <CollegeHero />
            <CompanyTestimonials />
            
            <GenericCourseGrid 
                title="Best Job-Ready Courses for College Students" 
                courses={topCollegeCourses}
            />
            
            <CollegeJourney />
            
            <DemoRegistration />
            
            <SplitContent 
                title="Transform Your Campus"
                subtitle="Bridge the Gap Between Degrees and Jobs"
                text="Integrate Urblearn's industry-aligned curriculum directly into your academic calendar. Enhance your college's placement record while giving your students the cutting-edge tech skills requested by top employers."
                btnText="Partner With Us"
            />
            
            <Instructors />
            <ContactForm />
            <Footer />
        </>
    );
}
