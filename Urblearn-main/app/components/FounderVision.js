import styles from './FounderVision.module.css';

const founders = [
    {
        name: 'Kartik Mahajan',
        role: 'Founder & CEO',
        quote: 'Urblearn is about building confidence through real projects.',
        bio: 'Leading the vision to unify college academic curriculums with modern cloud-scale technology. Ex-System Architect at Tier-1 Tech.',
        img: '/images/kartik.jpeg',
        linkedin: '#',
        twitter: '#'
    },
    {
        name: 'Rohit Gupta',
        role: 'Co-Founder & CTO',
        quote: 'Learning is most effective when it is interactive and mentored.',
        bio: 'Dedicated to creating the most advanced technical syllabus for Gen AI, DS Algorithms, and Full Stack Development.',
        img: '/images/rohit.jpeg',
        linkedin: '#',
        twitter: '#'
    }
];

export default function FounderVision() {
    return (
        <section className={styles.founderSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.tag}>The Leadership Team</div>
                    <h2 className={styles.title}>The Minds Behind <span>Urblearn</span></h2>
                    <p className={styles.subtitle}>
                        Crafting a world where every degree equals absolute job readiness.
                    </p>
                </div>

                <div className={styles.foundersGrid}>
                    {founders.map((founder, i) => (
                        <div key={i} className={styles.founderCard}>
                            <div className={styles.imageCol}>
                                <div className={styles.imageFrame}>
                                    <img src={founder.img} alt={founder.name} className={styles.founderImg} />
                                </div>
                            </div>
                            <div className={styles.infoCol}>
                                <div className={styles.nameGroup}>
                                    <h3>{founder.name}</h3>
                                    <span>{founder.role}</span>
                                </div>
                                <div className={styles.quoteWrapper}>
                                    <p>"{founder.quote}"</p>
                                </div>
                                <p className={styles.bioText}>{founder.bio}</p>
                                <div className={styles.founderSocials}>
                                    <a href={founder.linkedin} className={styles.sLink}>LinkedIn</a>
                                    <a href={founder.twitter} className={styles.sLink}>Twitter</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={styles.bgDecoration}></div>
        </section>
    );
}
