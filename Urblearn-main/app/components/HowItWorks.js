import styles from './HowItWorks.module.css';

const steps = [
    { icon: '🔍', title: 'Browse Courses', desc: 'Explore our curated catalog of expert-led courses' },
    { icon: '📝', title: 'Enroll & Learn', desc: 'Sign up and start learning at your own pace' },
    { icon: '💡', title: 'Build Projects', desc: 'Apply skills through real-world, hands-on projects' },
    { icon: '🎓', title: 'Get Certified', desc: 'Earn industry-recognized certificates on completion' },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className={styles.howItWorks}>
            <div className={styles.howItWorksHeader}>
                <h2>How It <span>Works?</span></h2>
            </div>
            <div className={styles.stepsGrid}>
                {steps.map((step, i) => (
                    <div key={i} className={styles.step}>
                        <div className={styles.stepIcon}>{step.icon}</div>
                        <div className={styles.stepNumber}>STEP {i + 1}</div>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
