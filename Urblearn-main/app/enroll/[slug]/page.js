import courseData from '../../data/courseData';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EnrollClient from './EnrollClient';
import styles from './Enroll.module.css';

export function generateStaticParams() {
    return Object.keys(courseData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const course = courseData[slug];
    if (!course) return { title: 'Course Not Found' };
    return {
        title: `Enroll in ${course.title} — Urblearn Checkout`,
    };
}

export default async function EnrollPage({ params }) {
    const { slug } = await params;
    const course = courseData[slug];
    
    if (!course) notFound();

    return (
        <>
            <Navbar />
            
            <section className={styles.enrollSection}>
                <div className={styles.container}>
                    
                    {/* Left: Order Summary */}
                    <div className={styles.orderSummary}>
                        <h2 className={styles.summaryTitle}>Order Summary</h2>
                        
                        <div className={styles.courseCard}>
                            <img src={course.image} alt={course.title} className={styles.courseImage} />
                            <div className={styles.courseInfo}>
                                <h3>{course.title}</h3>
                                <p><span>⏱️</span> {course.duration}</p>
                                <p><span>🧑‍🏫</span> Live Interactive Classes</p>
                            </div>
                        </div>
                        
                        <div className={styles.priceBreakdown}>
                            <div className={styles.priceRow}>
                                <span>Original Price</span>
                                <span style={{textDecoration: 'line-through'}}>₹{course.originalPrice || '14,999'}</span>
                            </div>
                            <div className={`${styles.priceRow} ${styles.discount}`}>
                                <span>Urblearn Scholarship</span>
                                <span>-₹{(14999 - parseInt(course.price.replace('₹','').replace(',',''))).toLocaleString()}</span>
                            </div>
                            
                            <div className={styles.totalRow}>
                                <span>Total Payable</span>
                                <span>{course.price}</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right: Client Form & Payment */}
                    <EnrollClient course={course} />
                    
                </div>
            </section>
            
            <Footer />
        </>
    );
}
