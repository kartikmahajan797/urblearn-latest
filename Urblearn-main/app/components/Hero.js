"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const stats = [
    { end: 10000, suffix: '+', label: 'Active Students' },
    { end: 200, suffix: '+', label: 'Expert Instructors' },
    { end: 500, suffix: '+', label: 'Courses Available' },
    { end: 95, suffix: '%', label: 'Success Rate' },
];

function CountUp({ end, suffix, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const startTime = performance.now();
                    const step = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * end));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    const display = end >= 1000 ? (count / 1000).toFixed(count >= 1000 ? 0 : 1) + 'K' : count;

    return <span ref={ref}>{display}{suffix}</span>;
}

const heroImages = [
    { src: '/images/hero1.jpg', alt: 'Students learning' },
    { src: '/images/hero2.jpg', alt: 'Expert teaching' },
    { src: '/images/hero3.jpg', alt: 'Hands-on projects' },
];

export default function Hero() {
    const [activeImg, setActiveImg] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImg(prev => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className={styles.heroBadge}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <span className={styles.badgeDot}></span>
                        🎓 Now enrolling — Batch starting soon
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Learn <span>Real-World Skills</span><br />
                        With Expert-Led Courses
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Build job-ready skills through hands-on projects, expert mentorship,
                        and personalized learning paths designed for the modern workforce.
                    </motion.p>
                    <motion.div
                        className={styles.heroBtns}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <a href="#courses" className={`btn-primary ${styles.primaryCta}`}>
                            Explore Courses →
                        </a>
                        <button className={`btn-outline ${styles.demoCta}`}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            Watch Demo
                        </button>
                    </motion.div>

                    <motion.div
                        className={styles.trustRow}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <div className={styles.avatarStack}>
                            <img src="/images/student1.jpeg" alt="s1" />
                            <img src="/images/student2.jpeg" alt="s2" />
                            <img src="/images/student4.jpeg" alt="s4" />
                        </div>
                        <p>Joined by <strong>10,000+</strong> learners this year</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.heroImages}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {heroImages.map((img, i) => (
                        <div
                            key={i}
                            className={`${styles.heroImg} ${activeImg === i ? styles.heroImgActive : ''}`}
                            onClick={() => setActiveImg(i)}
                        >
                            <img src={img.src} alt={img.alt} />
                            {activeImg === i && <div className={styles.imgRing} />}
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className={`container ${styles.statsBanner}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {stats.map((stat, i) => (
                    <div key={i} className={styles.statItem}>
                        <div className={styles.statNumber}>
                            <CountUp end={stat.end} suffix={stat.suffix} />
                        </div>
                        <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
