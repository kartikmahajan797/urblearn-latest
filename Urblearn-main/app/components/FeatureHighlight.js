import Image from 'next/image';
import styles from './FeatureHighlight.module.css';

export default function FeatureHighlight() {
    return (
        <section className={styles.featureSection}>
            <h2 className={styles.title}>AI-Powered Learning Assistance</h2>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.imageCol} style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
                        <Image src="/images/hero3.jpg" alt="AI Tutorial Video" fill style={{ objectFit: 'cover' }} />
                        <div className={styles.playBtn}>▶</div>
                    </div>
                    <div className={styles.contentCol}>
                        <div className={styles.list}>
                            <div className={styles.listItem}>
                                <div className={styles.iconWrapper}>🤖</div>
                                <span>Personalized Secure Personalized AI Tutors</span>
                            </div>
                            <div className={styles.listItem}>
                                <div className={styles.iconWrapper}>🕒</div>
                                <span>24/7 Learning Assistance</span>
                            </div>
                            <div className={styles.listItem}>
                                <div className={styles.iconWrapper}>📈</div>
                                <span>Progress Tracking</span>
                            </div>
                        </div>
                        <button className={styles.exploreBtn}>Explore</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
