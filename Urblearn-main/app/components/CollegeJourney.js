import styles from './CollegeJourney.module.css';

const steps = [
    { icon: '📝', title: 'Enroll', desc: 'Secure your spot in the college-integrated upskilling program.' },
    { icon: '💻', title: 'Learn & Build', desc: 'Attend live classes and build real-world hands-on projects.' },
    { icon: '🎓', title: 'Earn Certificate', desc: 'Get an industry-recognized completion certificate from Urblearn.' },
    { icon: '🏢', title: 'Internship Certificate', desc: 'Complete the capstone to earn an official internship experience certificate.' },
    { icon: '🤝', title: 'Meet Educator', desc: 'Get 1:1 mentorship and interview prep from top tech educators.' },
];

export default function CollegeJourney() {
    return (
        <section className={styles.journeySection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Your Path to <span>Success</span></h2>
                    <p>Follow our structured roadmap designed specifically for college students to land their dream job.</p>
                </div>
                <div className={styles.stepsWrapper}>
                    {steps.map((step, i) => (
                        <div key={i} className={styles.stepCard}>
                            <div className={styles.stepIcon}>{step.icon}</div>
                            <div className={styles.stepNumber}>Phase {i + 1}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                            {i < steps.length - 1 && <div className={styles.connector}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
