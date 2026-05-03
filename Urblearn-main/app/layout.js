import './globals.css';
import ScrollToTop from './components/ScrollToTop';

export const metadata = {
    title: 'Urblearn - Learn Real-World Skills With Expert-Led Courses',
    description: 'Master in-demand skills with expert-led courses. Personalized learning, real-world projects, and career-ready training.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <ScrollToTop />
            </body>
        </html>
    );
}
