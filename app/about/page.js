import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import ProblemSolved from '../components/ProblemSolved';
import FounderVision from '../components/FounderVision';
import TeamGrid from '../components/TeamGrid';
import OurJourney from '../components/OurJourney';
import Footer from '../components/Footer';

export const metadata = {
    title: 'About Us | Urblearn',
    description: 'Learn about Urblearn, the problem we solve in modern education, our founder Kartik Mahajan, and our expert team.',
};

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <AboutHero />
            <ProblemSolved />
            <FounderVision />
            {/* <TeamGrid /> */}
            <OurJourney />
            <Footer />
        </main>
    );
}

