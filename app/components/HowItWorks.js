'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaUserPlus, FaLaptopCode, FaCertificate } from 'react-icons/fa';
import styles from './HowItWorks.module.css';

const steps = [
    { icon: <FaSearch />, title: 'Browse Courses', desc: 'Explore our curated catalog of expert-led courses' },
    { icon: <FaUserPlus />, title: 'Enroll & Learn', desc: 'Sign up and start learning at your own pace' },
    { icon: <FaLaptopCode />, title: 'Build Projects', desc: 'Apply skills through real-world, hands-on projects' },
    { icon: <FaCertificate />, title: 'Get Certified', desc: 'Earn industry-recognized certificates on completion' },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className={styles.howItWorks}>
            <div className={styles.container}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.howItWorksHeader}
                >
                    <span className={styles.topTag}>Process</span>
                    <h2>How It <span>Works?</span></h2>
                    <p className={styles.subtitle}>Your journey to becoming an expert starts here.</p>
                </motion.div>
                
                <div className={styles.stepsWrapper}>
                    <div className={styles.connectingLine}></div>
                    <div className={styles.stepsGrid}>
                        {steps.map((step, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className={styles.stepCard}
                            >
                                <div className={styles.iconContainer}>
                                    <div className={styles.stepIcon}>{step.icon}</div>
                                    <div className={styles.stepNumberWrapper}>
                                        <span className={styles.stepNumber}>0{i + 1}</span>
                                    </div>
                                </div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
