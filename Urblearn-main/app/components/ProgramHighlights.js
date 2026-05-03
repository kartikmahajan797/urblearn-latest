"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProgramHighlights.module.css';

const curriculum = [
    {
        week: 'Week 1',
        badgeColor: '#34C759',
        title: 'Digital Marketing Essentials',
        content: [
            'Market Research',
            'Website Creation',
            'Email Marketing',
            'Copy Writing',
            'Social Media Strategies'
        ]
    },
    {
        week: 'Week 2',
        badgeColor: '#007AFF',
        title: 'Interview Successfully',
        content: [
            'Resume Building',
            'Mock Interviews',
            'Communication Skills',
            'Salary Negotiation',
            'Portfolio Review'
        ]
    },
    {
        week: 'Week 3',
        badgeColor: '#FF9500',
        title: 'GenAI for Digital Marketers',
        content: [
            'Prompt Engineering',
            'AI Content Generation',
            'Automated Image Creation',
            'Workflow Automation',
            'AI Ethics & Strategy'
        ]
    }
];

export default function ProgramHighlights() {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className={styles.highlights}>
            <div className={styles.highlightsContainer}>
                <h2 className={styles.highlightsTitle}>Program Highlights</h2>
                <div className={styles.highlightsGrid}>
                    <div className={styles.weeksColumn}>
                        {curriculum.map((item, idx) => (
                            <div 
                                key={idx} 
                                className={`${styles.weekCard} ${activeIdx === idx ? styles.activeCard : ''}`}
                                onClick={() => setActiveIdx(idx)}
                            >
                                <span className={styles.weekBadge} style={{ backgroundColor: item.badgeColor }}>
                                    {item.week}
                                </span>
                                <h3 className={styles.weekTitle}>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    
                    <div className={styles.rightColumn}>
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeIdx}
                                className={styles.contentCard}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className={styles.contentTitle}>Content Covered</h3>
                                <div className={styles.contentList}>
                                    {curriculum[activeIdx].content.map((lesson, i) => (
                                        <div key={i} className={styles.contentItem}>
                                            <span className={styles.contentNumber}>{i + 1}</span>
                                            {lesson}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
