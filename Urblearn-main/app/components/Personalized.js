import Image from 'next/image';
import styles from './Personalized.module.css';

export default function Personalized() {
    return (
        <section className={styles.personalized}>
            <div className={styles.personalizedContainer}>
                <div className={styles.personalizedContent}>
                    <h4>Flexible &amp; Smart</h4>
                    <h2><span>Personalized</span> Learning<br />Experience</h2>
                    <p>
                        Our AI-powered platform adapts to your learning pace and style. Get custom study plans,
                        smart recommendations, and progress tracking — all the tools you need in one place.
                    </p>
                    <div className={styles.tools}>
                        <div className={styles.tool}>
                            <div className={styles.toolIcon}>📊</div>
                            <div className={styles.toolName}>Analytics</div>
                        </div>
                        <div className={styles.tool}>
                            <div className={styles.toolIcon}>🎯</div>
                            <div className={styles.toolName}>Goal Tracking</div>
                        </div>
                        <div className={styles.tool}>
                            <div className={styles.toolIcon}>💬</div>
                            <div className={styles.toolName}>Live Chat</div>
                        </div>
                        <div className={styles.tool}>
                            <div className={styles.toolIcon}>📝</div>
                            <div className={styles.toolName}>Notes</div>
                        </div>
                        <div className={styles.tool}>
                            <div className={styles.toolIcon}>📅</div>
                            <div className={styles.toolName}>Calendar</div>
                        </div>
                        <div className={styles.tool}>
                            <div className={styles.toolIcon}>🏆</div>
                            <div className={styles.toolName}>Certificates</div>
                        </div>
                    </div>
                    <button className="btn-primary">Start Learning →</button>
                </div>
                <div className={styles.personalizedImage}>
                    <Image src="/images/hero1.jpg" alt="Personalized learning" width={500} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '16px' }} />
                </div>
            </div>
        </section>
    );
}
