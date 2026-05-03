import styles from './RelatedCourses.module.css';

const courses = [
    {
        title: 'The Complete AI-Powered Copywriting Course',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$67.9',
        rating: '★★★★★',
    },
    {
        title: 'The Complete AI-Powered Copywriting Course',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$67.9',
        rating: '★★★★★',
    },
    {
        title: 'The Complete AI-Powered Copywriting Course',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$67.9',
        rating: '★★★★★',
    },
];

export default function RelatedCourses() {
    return (
        <section className={styles.relatedCourses}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Not the right fit for you?</h2>
                    <button className={styles.exploreBtn}>Explore more</button>
                </div>
                <div className={styles.cardsGrid}>
                    {courses.map((course, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardImage}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 300 160" preserveAspectRatio="none">
                                    <rect width="300" height="160" fill="#f0ecff" />
                                    <text x="150" y="80" fontFamily="Arial" fontSize="14" fill="#6C3FE4" textAnchor="middle">Course Image {i + 1}</text>
                                </svg>
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
            </div>
        </section>
    );
}
