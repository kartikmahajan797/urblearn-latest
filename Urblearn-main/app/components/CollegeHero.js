import styles from './CollegeHero.module.css';

export default function CollegeHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroBackground}>
                <h1 className={styles.heroTitle}>Upskill with College<br />Integrated Programs</h1>
                <p className={styles.heroSubtitle}>Internship | Training | Career Opportunities</p>
                <button className={styles.heroBtn}>Book a meeting now</button>
            </div>
            <div className={styles.statsBanner}>
                <h3>Highest Package</h3>
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>1.9 <span>CR</span></div>
                        <div className={styles.statLabel}>International</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>54.75 <span>LPA</span></div>
                        <div className={styles.statLabel}>National</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>28 <span>LPA</span></div>
                        <div className={styles.statLabel}>MBA</div>
                    </div>
                </div>
                <p>
                    Partner with Urblearn to bridge the industry-academia gap. We bring elite tech training, real-world projects, and dedicated placement support directly to your campus, transforming students into day-one ready software engineers.
                </p>
            </div>
        </section>
    );
}
