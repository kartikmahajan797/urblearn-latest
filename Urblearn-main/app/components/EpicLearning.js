import Image from 'next/image';
import styles from './EpicLearning.module.css';

export default function EpicLearning() {
    return (
        <section className={styles.epicSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>The Future Belongs to Creators.</h2>
                <div className={styles.grid}>
                    <div className={styles.contentCol}>
                        <h3>Turn screen time into their first startup.</h3>
                        <p>
                            Don't wait for college to start building. Urblearn gives your child the tools, community, and guidance to launch their first idea today.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureItem}><span className={styles.icon}>💡</span> Real Projects</div>
                            <div className={styles.featureItem}><span className={styles.icon}>🤝</span> Live Mentorship</div>
                            <div className={styles.featureItem}><span className={styles.icon}>🌍</span> Founder Community</div>
                            <div className={styles.featureItem}><span className={styles.icon}>🚀</span> Portfolio Building</div>
                        </div>
                        <button className={styles.startBtn}>Launch Their Journey</button>
                    </div>
                    <div className={styles.imageCol} style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', minHeight: '400px' }}>
                        <Image src="/images/hero1.jpg" alt="Epic Learning" fill style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
