import Image from 'next/image';
import styles from './Experience.module.css';

export default function Experience() {
    return (
        <section className={styles.experience}>
            <div className={styles.experienceContainer}>
                <div className={styles.experienceVideo}>
                    <Image src="/images/hero2.jpg" alt="Experience learning" width={500} height={350} style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '16px' }} />
                </div>
                <div className={styles.experienceContent}>
                    <h2>Experience Learning<br /><span>Before Committing</span></h2>
                    <p>
                        Try our courses with free previews. Get a taste of expert-led instruction,
                        hands-on projects, and our unique learning methodology before enrolling.
                    </p>
                    <div className={styles.featureList}>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>✓</div>
                            Free course previews available
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>✓</div>
                            Hands-on project samples
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>✓</div>
                            Free demo classes available
                        </div>
                    </div>
                    <button className="btn-primary">Try Free Preview →</button>
                </div>
            </div>
        </section>
    );
}
