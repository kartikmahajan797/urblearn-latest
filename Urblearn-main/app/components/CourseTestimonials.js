import styles from './CourseTestimonials.module.css';

const students = [
    { name: 'Maria Garcia', role: 'UX Designer' },
    { name: 'David Smith', role: 'Copywriter' },
    { name: 'Sarah Jones', role: 'Marketing Lead' },
];

export default function CourseTestimonials() {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <h2 className={styles.title}>What other learners are saying</h2>
                <div className={styles.cardsGrid}>
                    {students.map((student, i) => (
                        <div key={i} className={styles.card}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 300 320" preserveAspectRatio="none">
                                <rect width="300" height="320" fill={i === 0 ? "#f59e0b" : i === 1 ? "#3b82f6" : "#10b981"} />
                                <circle cx="150" cy="120" r="50" fill="rgba(255,255,255,0.2)" />
                                <text x="150" y="125" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">Photo {i + 1}</text>
                            </svg>
                            <div className={styles.cardContent}>
                                <div className={styles.authorInfo}>
                                    <h4>{student.name}</h4>
                                    <p>{student.role}</p>
                                </div>
                                <div className={styles.playBtn}>▶</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
