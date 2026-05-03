import Image from 'next/image';
import styles from './KidsHero.module.css';

export default function KidsHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.trustBadge}>
                <span>🚀</span> A Launchpad for Young Builders <span>🚀</span>
            </div>
            <h1 className={styles.title}>We Don’t Just Teach Coding — We Build Creators</h1>
            <p className={styles.desc}>
                While others prepare students for jobs, Urblearn prepares them to create jobs. From learning to building, to launching — we guide kids to become future founders and turn their ideas into real-world ventures.
            </p>
            <button className={styles.exploreBtn}>Start Building Today</button>

            <div className={styles.imagesContainer}>
                <div className={styles.pillImage} style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src="/images/kids-hero-1.png" alt="Kids celebrating project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className={styles.pillImage} style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src="/images/kids-hero-2.png" alt="Focused kid coding" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className={styles.pillImage} style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src="/images/kids-hero-3.png" alt="Kids with futuristic gadgets" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className={styles.pillImage} style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src="/images/kids-hero-4.png" alt="Young founder with whiteboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </section>
    );
}
