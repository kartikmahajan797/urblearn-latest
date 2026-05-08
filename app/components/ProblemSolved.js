'use client';
import { motion } from 'framer-motion';
import { FaTimesCircle, FaCheckCircle, FaSkull, FaRocket, FaBook, FaCode, FaUserTie, FaUserGraduate } from 'react-icons/fa';
import styles from './ProblemSolved.module.css';

export default function ProblemSolved() {
    return (
        <section className={styles.problemSection}>
            <div className={styles.container}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <span className={styles.topTag}>The Reality Check</span>
                    <h2 className={styles.title}>Why We <span>Exist</span></h2>
                    <p className={styles.subtitle}>The current education system was built for a different century. We built Urblearn for the next one.</p>
                </motion.div>

                <div className={styles.comparisonGrid}>
                    {/* The Problem */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`${styles.card} ${styles.problemCard}`}
                    >
                        <div className={styles.cardHeader}>
                            <FaSkull className={styles.headerIcon} />
                            <div>
                                <span className={styles.cardTag}>The Status Quo</span>
                                <h3>The Broken System</h3>
                            </div>
                        </div>
                        <ul className={styles.list}>
                            <li>
                                <div className={styles.iconBox}><FaTimesCircle /></div>
                                <div>
                                    <strong>Outdated Syllabus</strong>
                                    <p>Colleges are teaching technologies that were relevant a decade ago.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconBox}><FaTimesCircle /></div>
                                <div>
                                    <strong>Theoretical Focus</strong>
                                    <p>Heavy focus on exams and rote learning, with no real-world application.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconBox}><FaTimesCircle /></div>
                                <div>
                                    <strong>Zero Mentorship</strong>
                                    <p>Students are left to figure out career paths and interview prep on their own.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconBox}><FaTimesCircle /></div>
                                <div>
                                    <strong>No Placement Support</strong>
                                    <p>Degrees don't guarantee jobs. Millions graduate unemployed every year.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    <div className={styles.vsCircle}>VS</div>

                    {/* The Solution */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`${styles.card} ${styles.solutionCard}`}
                    >
                        <div className={styles.cardHeader}>
                            <FaRocket className={styles.headerIcon} />
                            <div>
                                <span className={styles.cardTag}>The Future</span>
                                <h3>The Urblearn Way</h3>
                            </div>
                        </div>
                        <ul className={styles.list}>
                            <li>
                                <div className={styles.iconBox}><FaCheckCircle /></div>
                                <div>
                                    <strong>Industry-Aligned Skills</strong>
                                    <p>We teach Gen AI, Full-Stack, and System Design used by top tech companies.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconBox}><FaCheckCircle /></div>
                                <div>
                                    <strong>100% Project-Based</strong>
                                    <p>Build a portfolio of real-world projects instead of writing exams.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconBox}><FaCheckCircle /></div>
                                <div>
                                    <strong>1:1 Expert Mentorship</strong>
                                    <p>Learn directly from senior engineers executing real code in production.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconBox}><FaCheckCircle /></div>
                                <div>
                                    <strong>Guaranteed Assistance</strong>
                                    <p>Dedicated mock interviews, resume building, and direct hiring referrals.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

