import styles from './CourseHero.module.css';

export default function CourseHero() {
    return (
        <section className={styles.courseHero}>
            <div className={styles.heroCard}>
                <div className={styles.heroContent}>
                    <h1>The Complete<br />AI-Powered<br />Copywriting Course</h1>
                    <p>
                        Learn to write copy that sells, utilizing the latest AI tools to
                        work faster and smarter. Stand out in the digital age.
                    </p>
                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>4.8</div>
                            <div className={styles.statLabel}>Course rating</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>11</div>
                            <div className={styles.statLabel}>Modules included</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>16.5</div>
                            <div className={styles.statLabel}>Hours of content</div>
                        </div>
                    </div>
                    <div className={styles.heroActions}>
                        <button className={styles.btnStart}>Start subscription</button>
                        <a href="#" className={styles.termsLink}>Terms of Service | Terms &amp; Conditions</a>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMax meet">
                        <rect width="400" height="500" fill="#f472b6" />
                        <circle cx="200" cy="200" r="80" fill="rgba(255,255,255,0.2)" />
                        <text x="200" y="260" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle">Student Image Placeholder</text>
                    </svg>
                </div>
            </div>
        </section>
    );
}
