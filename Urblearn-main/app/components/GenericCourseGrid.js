import Image from 'next/image';
import styles from './GenericCourseGrid.module.css';

const sampleCourses = [
    {
        title: 'The Complete AI-Powered Copywriting Course',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$67.9',
        rating: '★★★★★',
        image: '/images/course1.jpg'
    },
    {
        title: 'The Complete AI-Powered Copywriting Course',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$67.9',
        rating: '★★★★★',
        image: '/images/course2.jpg'
    },
    {
        title: 'The Complete AI-Powered Copywriting Course',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$67.9',
        rating: '★★★★★',
        image: '/images/course3.jpg'
    },
];

export default function GenericCourseGrid({ title = "Trending Courses", courses = sampleCourses, showViewAll = true }) {
    return (
        <section className={styles.courseGrid}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.cardsGrid}>
                    {courses.map((course, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardImage} style={{position: 'relative', width: '100%', height: '180px'}}>
                                <Image src={course.image || `/images/course1.jpg`} alt={course.title} fill style={{objectFit: 'cover'}} />
                            </div>
                            <div className={styles.cardMeta}>
                                <span>15 topics</span>
                                <span>12 hours</span>
                            </div>
                            <h3 className={styles.cardTitle}>{course.title}</h3>
                            <p className={styles.cardDesc}>{course.desc}</p>
                            <div className={styles.cardFooter}>
                                <span className={styles.price}>{course.price}</span>
                                <span className={styles.stars}>{course.rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {showViewAll && (
                    <div className={styles.viewAll}>
                        <button className={styles.btnOutline}>View All</button>
                    </div>
                )}
            </div>
        </section>
    );
}
