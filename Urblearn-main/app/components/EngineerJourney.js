"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './EngineerJourney.module.css';

const journeyPhases = [
    {
        num: "01",
        title: "The Foundation",
        badge: "Syntax & Logic",
        desc: "We start from absolute zero. Discover how computers think, master core programming constructs, and build a rock-solid logical foundation before writing code.",
        icon: "🧱"
    },
    {
        num: "02",
        title: "The Builder Phase",
        badge: "Full-Stack Dev",
        desc: "Transition from scripts to applications. Develop responsive frontends and robust backends using modern ecosystems like React, Node.js, and MongoDB.",
        icon: "⚒️"
    },
    {
        num: "03",
        title: "The Architect Phase",
        badge: "Scalability & AI",
        desc: "Learn to design systems for millions of users. Dive into load balancing, microservices, caching strategies, and integrate Gen AI into your stacks.",
        icon: "🏗️"
    },
    {
        num: "04",
        title: "The Elite Finish",
        badge: "Placement Ready",
        desc: "Engage in competitive DSA puzzle solving and intense mock interviews with FAANG experts until you land that top-tier software engineering role.",
        icon: "🚀"
    }
];

export default function EngineerJourney() {
    return (
        <section className={styles.journeySection}>
            <div className={styles.bgDecoration1}></div>
            <div className={styles.bgDecoration2}></div>
            <div className="container">
                <div className={styles.header}>
                    <h2>The Blueprint of an <span>Engineer</span></h2>
                    <p>From a complete beginner to a highly sought-after tech professional.</p>
                </div>

                <div className={styles.cardsFlex}>
                    {journeyPhases.map((phase, index) => (
                        <React.Fragment key={index}>
                            <motion.div 
                                className={styles.phaseCard}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', bounce: 0.4 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}>{phase.icon}</div>
                                    <div className={styles.hugeNumber}>{phase.num}</div>
                                </div>
                                
                                <div className={styles.cardBody}>
                                    <span className={styles.badge}>{phase.badge}</span>
                                    <h3>{phase.title}</h3>
                                    <p>{phase.desc}</p>
                                </div>
                            </motion.div>

                            {/* Crisp animated arrow */}
                            {index < journeyPhases.length - 1 && (
                                <motion.div 
                                    className={styles.arrowContainer}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.3 }}
                                >
                                    <span className={styles.arrowIcon}>➔</span>
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
