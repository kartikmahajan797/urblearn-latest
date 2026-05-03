"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import styles from './WhyChoose.module.css';

const reasons = [
    {
        id: 'training',
        icon: '🎓',
        accent: '#8B5CF6', 
        title: 'Flexible Training Modes',
        desc: 'Choose from two powerful training modes designed to fit your unique schedule, location, and learning style. Whether you thrive in a live online environment or face-to-face interaction.',
        boxes: [
            { icon: '🔴', text: '100% Live Online', sub: 'Interactive remote classes' },
            { icon: '🏫', text: 'Hybrid Face-to-Face', sub: 'In-person project building' }
        ],
        span: 2
    },
    {
        id: 'domain',
        icon: '🎯',
        accent: '#D946EF', 
        title: 'Specialize Your Domain',
        desc: 'Stand out by choosing focused, industry-relevant tracks that match top hiring demands.',
        tags: ['🏭 Manufacturing', '💻 Tech', '💼 Consulting', '🏥 Healthcare', '🏦 BFSI', '🛒 Retail'],
        span: 1
    },
    {
        id: 'experience',
        icon: '💼',
        accent: '#10B981', 
        title: 'Real Projects & Experience',
        desc: 'Master your field by building a portfolio with genuine real-world projects under expert supervision.',
        features: ['Guaranteed Project Deployment', 'Renowned Industry Certification'],
        span: 1
    },
    {
        id: 'career',
        icon: '🚀',
        accent: '#F59E0B', 
        title: 'Reach Your Career Goals',
        desc: 'Seamlessly advance your career. We don’t just teach you; we guarantee interviews and train you to absolutely crush them.',
        goals: [
            { title: 'Placement Support', desc: 'Dedicated teams for you' },
            { title: 'Mock Interviews', desc: '1-on-1 with experts' },
            { title: 'Resume Engineering', desc: 'ATS-friendly builds' },
            { title: 'Interview Calls', desc: 'Guaranteed opportunities' }
        ],
        span: 2
    }
];

function BentoCard({ reason, index }) {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    function onMouseMove(event) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        const mouseXRel = event.clientX - rect.left;
        const mouseYRel = event.clientY - rect.top;
        
        x.set(mouseXRel);
        y.set(mouseYRel);
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div 
            ref={cardRef}
            className={`${styles.bentoCard} ${reason.span === 2 ? styles.span2 : styles.span1}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            onMouseMove={onMouseMove}
            style={{ 
                "--x": `${x}px`,
                "--y": `${y}px`
            }}
            whileHover={{ y: -5 }} // Subtle lift on hover
        >
            <div className={styles.ambientGlow}></div>

            <div className={reason.span === 2 ? styles.cardInnerSplit : styles.cardInnerColumn}>
                <div className={styles.cardInfo}>
                    <motion.div variants={itemVariants} className={styles.cardHeader}>
                        <div className={styles.iconBox}>
                            {reason.icon}
                        </div>
                        <h3 className={styles.title}>{reason.title}</h3>
                    </motion.div>
                    <motion.p variants={itemVariants} className={styles.desc}>{reason.desc}</motion.p>
                </div>

                <div className={styles.cardVisual}>
                    {reason.id === 'training' && (
                        <div className={styles.trainingBigGrid}>
                            {reason.boxes.map((box, i) => (
                                <motion.div 
                                    key={i} 
                                    variants={itemVariants}
                                    className={styles.trainingBigCard}
                                >
                                    <div className={styles.bigIcon} style={{ background: `${reason.accent}20`, color: reason.accent }}>{box.icon}</div>
                                    <div>
                                        <h4>{box.text}</h4>
                                        <span>{box.sub}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {reason.id === 'domain' && (
                        <div className={styles.tagsContainer}>
                            {reason.tags.map((tag, i) => (
                                <motion.span 
                                    key={i} 
                                    variants={itemVariants}
                                    className={styles.domainTag} 
                                    style={{ color: reason.accent, backgroundColor: `${reason.accent}15` }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    )}

                    {reason.id === 'experience' && (
                        <div className={styles.featuresContainer}>
                            {reason.features.map((feature, i) => (
                                <motion.div 
                                    key={i} 
                                    variants={itemVariants}
                                    className={styles.featureItem}
                                >
                                    <svg className={styles.checkIcon} style={{ color: reason.accent }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    {feature}
                                </motion.div>
                            ))}
                            <div className={styles.hugeWatermark} style={{ color: reason.accent }}>100+</div>
                        </div>
                    )}

                    {reason.id === 'career' && (
                        <div className={styles.goalsBigGrid}>
                            {reason.goals.map((goal, i) => (
                                <motion.div 
                                    key={i} 
                                    variants={itemVariants}
                                    className={styles.goalBigCard}
                                >
                                    <div className={styles.goalBullet} style={{ background: reason.accent, boxShadow: `0 0 15px ${reason.accent}` }}></div>
                                    <div>
                                        <h4>{goal.title}</h4>
                                        <span>{goal.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function WhyChoose() {
    return (
        <section id="why-us" className={styles.whyChoose}>
            <div className={styles.bgAura1}></div>
            <div className={styles.bgAura2}></div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why choose <span>Urblearn?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        The absolute smartest path to launching your career in technology.
                    </motion.p>
                </div>

                <div className={styles.bentoGrid}>
                    {reasons.map((reason, index) => (
                        <BentoCard key={reason.id} reason={reason} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
