import styles from './AboutHero.module.css';

export default function AboutHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.badge}>Our Mission</div>
                <h1 className={styles.title}>
                    Bridging the Gap Between <br />
                    <span>Traditional Education</span> & <span>Future Tech</span>
                </h1>
                <p className={styles.subtitle}>
                    We are Urblearn. A platform built by engineers and educators who believe that learning should be dynamic, career-focused, and highly accessible to ambitious minds everywhere.
                </p>
                <div className={styles.stats}>
                    <div className={styles.statBox}>
                        <h3>100K+</h3>
                        <p>Global Learners</p>
                    </div>
                    <div className={styles.statBox}>
                        <h3>500+</h3>
                        <p>Hiring Partners</p>
                    </div>
                    <div className={styles.statBox}>
                        <h3>98%</h3>
                        <p>Placement Rate</p>
                    </div>
                </div>
            </div>
            
            {/* Background design elements */}
            <div className={styles.glowOrb1}></div>
            <div className={styles.glowOrb2}></div>
        </section>
    );
}
