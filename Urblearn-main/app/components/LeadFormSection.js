"use client";

import { motion } from 'framer-motion';
import styles from './LeadFormSection.module.css';

export default function LeadFormSection() {
    return (
        <section className={styles.leadSection}>
            <div className={`container ${styles.container}`}>
                <motion.div 
                    className={styles.leftCol}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Unlock your career potential with us</h2>
                    <p className={styles.desc}>
                        Our expert counsellors are here to guide you. Discover the best learning path tailored perfectly for your successful career in tech and management.
                    </p>
                    
                    <ul className={styles.benefitsList}>
                        <li>
                            <span className={styles.checkmark}>✓</span>
                            Free 1-on-1 Career Counselling
                        </li>
                        <li>
                            <span className={styles.checkmark}>✓</span>
                            Personalized Learning Roadmap
                        </li>
                        <li>
                            <span className={styles.checkmark}>✓</span>
                            Insights into Placement Support
                        </li>
                    </ul>
                </motion.div>

                <motion.div 
                    className={styles.rightCol}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.formCard}>
                        <h3 className={styles.formTitle}>Request Free Counselling</h3>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.inputGroup}>
                                <label>Full Name*</label>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email Address*</label>
                                <input type="email" placeholder="Enter your email" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Phone Number*</label>
                                <input type="tel" placeholder="Enter phone number" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Domain of Interest*</label>
                                <select required defaultValue="">
                                    <option value="" disabled>Select a domain</option>
                                    <option value="fs">Full Stack Development</option>
                                    <option value="ds">Data Science & AI</option>
                                    <option value="ui">UI/UX Design</option>
                                    <option value="dm">Digital Marketing</option>
                                </select>
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                Submit Request
                            </button>
                            <p className={styles.formDisclaimer}>
                                By submitting, you agree to our Terms and Privacy Policy.
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
