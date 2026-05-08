'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUsers, FaHandshake, FaGraduationCap, FaArrowRight, FaCode, FaRobot, FaBrain } from 'react-icons/fa';
import styles from './AboutHero.module.css';

export default function AboutHero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className={styles.heroSection}>
            <div className={styles.meshBackground}></div>
            
            <div className={styles.container}>
                <div className={styles.mainGrid}>
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={styles.textContent}
                    >
                        <div className={styles.badge}>
                            <span className={styles.pulse}></span>
                            Our Visionary Path
                        </div>
                        <h1 className={styles.title}>
                            Architecting the <span className={styles.highlight}>Next Generation</span> of Tech Leaders.
                        </h1>
                        <p className={styles.subtitle}>
                            At Urblearn, we're not just teaching code; we're building the future. Our platform is a high-speed lane for ambitious minds to transition from theory to industry-defining execution.
                        </p>
                        <div className={styles.ctaGroup}>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles.primaryBtn}
                            >
                                Explore Our Story <FaArrowRight />
                            </motion.button>
                            <div className={styles.trustedBy}>
                                <p>Trusted by Engineers from</p>
                                <div className={styles.companyIcons}>
                                    <FaCode title="Google" />
                                    <FaRobot title="OpenAI" />
                                    <FaBrain title="Microsoft" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className={styles.visualContent}>
                        <motion.div 
                            style={{ y: y1 }}
                            className={styles.cardCluster}
                        >
                            {/* Main Interactive Card */}
                            <motion.div 
                                whileHover={{ rotateY: 15, rotateX: -10, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={styles.mainCard}
                            >
                                <div className={styles.cardGlow}></div>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardLabel}>Success Metric</span>
                                    <h3>98%</h3>
                                    <p>Placement Accuracy</p>
                                    <div className={styles.miniGraph}>
                                        <div className={styles.bar}></div>
                                        <div className={styles.bar}></div>
                                        <div className={styles.bar}></div>
                                        <div className={styles.bar}></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Sub Cards */}
                            <motion.div 
                                style={{ y: y2 }}
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className={`${styles.subCard} ${styles.card1}`}
                            >
                                <FaUsers />
                                <div>
                                    <h4>100K+</h4>
                                    <span>Learners</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                animate={{ x: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className={`${styles.subCard} ${styles.card2}`}
                            >
                                <FaHandshake />
                                <div>
                                    <h4>500+</h4>
                                    <span>Partners</span>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className={styles.floatingOrb}></div>
                            <svg className={styles.abstractLine} viewBox="0 0 100 100">
                                <motion.path 
                                    d="M0,50 Q25,0 50,50 T100,50" 
                                    fill="none" 
                                    stroke="url(#grad)" 
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <defs>
                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="var(--primary)" />
                                        <stop offset="100%" stopColor="#00d2ff" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            <div className={styles.bottomSection}>
                <div className={styles.scrollIndicator}>
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={styles.mouse}
                    >
                        <div className={styles.wheel}></div>
                    </motion.div>
                    <span>Scroll to Discover</span>
                </div>
            </div>
        </section>
    );
}


