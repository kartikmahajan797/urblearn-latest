import Image from 'next/image';
import styles from './LearningAdventure.module.css';

const phases = [
    { 
        title: 'Phase 1: The Foundation', 
        meta: 'Learn the logic of technology', 
        img: '/images/kids-foundation.png',
        points: ['Block & Text Coding', 'Logical Reasoning', 'Algorithmic Thinking']
    },
    { 
        title: 'Phase 2: The Builder', 
        meta: 'Turn logic into actual projects', 
        img: '/images/kids-builder.png',
        points: ['Game Development', 'App Prototyping', 'Interactive UI/UX']
    },
    { 
        title: 'Phase 3: The Innovator', 
        meta: 'Solve real-world problems', 
        img: '/images/kids-innovator.png',
        points: ['AI & Machine Learning Basics', 'Data & Automation', 'Design Thinking']
    },
    { 
        title: 'Phase 4: The Launchpad', 
        meta: 'Showcase and launch products', 
        img: '/images/kids-launchpad.png',
        points: ['Pitching Ideas', 'Building Audiences', 'Live Product Launches']
    },
];

export default function LearningAdventure() {
    return (
        <section className={styles.learningSection}>
            <h2 className={styles.title}>The Founder's Journey: From Learning to Launching</h2>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {phases.map((phase, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardImage} style={{ position: 'relative', overflow: 'hidden' }}>
                                <Image src={phase.img} alt={phase.title} fill style={{ objectFit: 'cover' }} />
                                <div className={styles.stepBadge}>Step {i + 1}</div>
                            </div>
                            <h3 className={styles.cardTitle}>{phase.title}</h3>
                            <div className={styles.meta}>{phase.meta}</div>
                            <div className={styles.list}>
                                {phase.points.map((pt, idx) => (
                                    <div key={idx} className={styles.listItem}>
                                        <span className={styles.checkIcon}>🚀</span> {pt}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.viewAll}>
                    <button className={styles.exploreBtn} style={{ maxWidth: '300px', borderRadius: '30px', padding: '16px 24px', fontSize: '1.1rem' }}>Start Phase 1 Today</button>
                </div>
            </div>
        </section>
    );
}
