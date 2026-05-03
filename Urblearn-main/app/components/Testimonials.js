import styles from './Testimonials.module.css';

const testimonials = [
    {
        text: '"The digital marketing course completely changed my career. The hands-on approach and expert guidance made all the difference."',
        name: 'Rahul Verma',
        role: 'Marketing Manager',
        initials: 'RV',
    },
    {
        text: '"I landed my dream job within 2 months of completing the full-stack course. The projects I built became my portfolio."',
        name: 'Ananya Gupta',
        role: 'Frontend Developer',
        initials: 'AG',
    },
    {
        text: '"Urblearn\'s AI course helped me automate 60% of our marketing workflows. Incredible ROI on the investment."',
        name: 'Vikram Singh',
        role: 'Digital Strategist',
        initials: 'VS',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className={styles.testimonials}>
            <div className={styles.testimonialsHeader}>
                <h4>Our Reviewers</h4>
                <h2>Mostly From <span>Our Industry</span></h2>
            </div>
            <div className={styles.testimonialsGrid}>
                {testimonials.map((t, i) => (
                    <div key={i} className={styles.testimonialCard}>
                        <div className={styles.stars}>★★★★★</div>
                        <p className={styles.testimonialText}>{t.text}</p>
                        <div className={styles.testimonialAuthor}>
                            <div className={styles.authorAvatar}>{t.initials}</div>
                            <div className={styles.authorInfo}>
                                <h4>{t.name}</h4>
                                <p>{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
