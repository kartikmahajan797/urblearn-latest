import courseData from '../../data/courseData';
import Navbar from '../../components/Navbar';
import CourseDetail from '../../components/CourseDetail';
import Footer from '../../components/Footer';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return Object.keys(courseData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const course = courseData[slug];
    if (!course) return { title: 'Course Not Found' };
    return {
        title: `${course.title} — Urblearn Live Course`,
        description: course.desc,
    };
}

export default async function CoursePage({ params }) {
    const { slug } = await params;
    const course = courseData[slug];
    if (!course) notFound();

    return (
        <>
            <Navbar />
            <CourseDetail course={course} />
            <Footer />
        </>
    );
}
