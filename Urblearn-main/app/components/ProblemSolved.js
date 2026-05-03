import styles from './ProblemSolved.module.css';

export default function ProblemSolved() {
    return (
        <section className={styles.problemSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Why We Exist</h2>
                    <p>The education system is broken. We're here to fix it.</p>
                </div>

                <div className={styles.comparisonGrid}>
                    {/* The Problem */}
                    <div className={`${styles.card} ${styles.problemCard}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.icon}>✕</span>
                            <h3>The Problem</h3>
                        </div>
                        <ul className={styles.list}>
                            <li>
                                <strong>Outdated Syllabus</strong>
                                <p>Colleges are teaching technologies that were relevant a decade ago.</p>
                            </li>
                            <li>
                                <strong>Theoretical Focus</strong>
                                <p>Heavy focus on exams and rote learning, with no real-world application.</p>
                            </li>
                            <li>
                                <strong>Zero Mentorship</strong>
                                <p>Students are left to figure out career paths and interview prep on their own.</p>
                            </li>
                            <li>
                                <strong>No Placement Support</strong>
                                <p>Degrees don't guarantee jobs. Millions graduate unemployed every year.</p>
                            </li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className={`${styles.card} ${styles.solutionCard}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.icon}>✓</span>
                            <h3>The Urblearn Solution</h3>
                        </div>
                        <ul className={styles.list}>
                            <li>
                                <strong>Industry-Aligned Skills</strong>
                                <p>We teach Gen AI, Full-Stack, and System Design used by top tech companies today.</p>
                            </li>
                            <li>
                                <strong>100% Project-Based</strong>
                                <p>Build a portfolio of real-world projects instead of writing exams.</p>
                            </li>
                            <li>
                                <strong>1:1 Expert Mentorship</strong>
                                <p>Learn directly from senior engineers executing real code in production.</p>
                            </li>
                            <li>
                                <strong>Guaranteed Assistance</strong>
                                <p>Dedicated mock interviews, resume building, and direct hiring partner referrals.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
