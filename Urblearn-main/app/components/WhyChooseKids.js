import styles from './WhyChooseKids.module.css';

const reasons = [
    {
        icon: '🚀',
        title: 'Build Confidence Through Creation',
        desc: 'We focus on real, tangible output over rote memorization. Kids see their ideas come to life.',
    },
    {
        icon: '💡',
        title: 'Encourage Independent Thinking',
        desc: 'Instead of just following instructions, students learn to solve real-world problems creatively.',
    },
    {
        icon: '📈',
        title: 'Promote Entrepreneurship',
        desc: 'We teach the basics of turning a cool idea into a valuable, scalable venture from a young age.',
    },
    {
        icon: '🤝',
        title: 'Community of Builders',
        desc: 'A vibrant, supportive space where young innovators build, launch, and grow together.',
    }
];

export default function WhyChooseKids() {
    return (
        <section className={styles.whyChoose}>
            <div className={styles.container}>
                <h2 className={styles.title}>The Urblearn Philosophy</h2>
                <div className={styles.grid}>
                    {reasons.map((reason, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconWrapper}>{reason.icon}</div>
                            <div className={styles.cardTitle}>{reason.title}</div>
                            <p className={styles.cardDesc}>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
