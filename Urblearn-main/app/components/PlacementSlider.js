"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PlacementSlider.module.css';

const placements = [
    {
        id: 1,
        image: '/images/student1.jpeg',
        alt: 'Successful Intern 1',
        name: 'Ayush Patel',
        company: 'Open Source Contributor',
        badge: '🚀 Open Source',
        color: '#6C63FF',
        story: "Ayush consistently contributed to major open-source repositories during his time at Urblearn. His dedication caught the eye of top maintainers, leading to a core contributor role. He now actively mentors junior developers."
    },
    {
        id: 2,
        image: '/images/student2.jpeg',
        alt: 'Successful Intern 2',
        name: 'Kunal Singhi',
        company: 'Open Source Contributor',
        badge: '🚀 Open Source',
        color: '#00C9A7',
        story: "Kunal transformed his passion for coding into real-world impact. By leveraging Urblearn's advanced curriculum, he scaled his GitHub projects to thousands of stars and secured sponsorships for his open-source work."
    },
    {
        id: 3,
        image: '/images/student3.png',
        alt: 'Successful Intern 3',
        name: 'Ayush',
        achievement: 'AIR 1 — SIH Hackathon',
        badge: '🏆 National Rank 1',
        color: '#FF6B6B',
        story: "Competing against the best minds in the country, Ayush's team secured All India Rank 1 at the Smart India Hackathon. His innovative solution to a complex problem was praised by industry leaders and government officials."
    },
    {
        id: 4,
        image: '/images/student4.jpeg',
        alt: 'Successful Intern 4',
        name: 'Vaibhav',
        achievement: 'Cracked SourceFuse as AI/ML Engineer',
        badge: '💼 Placed',
        color: '#4ECDC4',
        story: "Vaibhav's deep dive into Machine Learning at Urblearn paved the way for his successful placement at SourceFuse. He now works on cutting-edge AI products, deploying models that impact millions of users."
    },
    {
        id: 5,
        image: '/images/student5.jpeg',
        alt: 'Successful Intern 5',
        name: 'Shaurya',
        achievement: 'A 16-year-old who built a real-time application',
        badge: '🌟 Young Prodigy',
        color: '#F59E0B',
        story: "At just 16, Shaurya developed a fully functional real-time web application used by hundreds of students. His journey from learning basic HTML to deploying full-stack apps is nothing short of inspiring."
    }
];

export default function PlacementSlider() {
    const [carouselWidth, setCarouselWidth] = useState(0);
    const carouselRef = useRef(null);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        if (carouselRef.current) {
            setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
        
        // Recalculate on resize
        const handleResize = () => {
            if (carouselRef.current) {
                setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Get the selected intern data
    const selectedIntern = selectedId ? placements.find(p => p.id === selectedId) : null;

    return (
        <section className={styles.sliderSection}>
            {/* Dynamic Background Blobs */}
            <motion.div 
                className={styles.bgBlob1}
                animate={{
                    backgroundColor: selectedIntern ? `${selectedIntern.color}15` : 'rgba(98, 84, 240, 0.08)',
                    scale: selectedIntern ? 1.2 : 1
                }}
                transition={{ duration: 0.8 }}
            />
            <motion.div 
                className={styles.bgBlob2}
                animate={{
                    backgroundColor: selectedIntern ? `${selectedIntern.color}15` : 'rgba(78, 205, 196, 0.08)',
                    scale: selectedIntern ? 1.2 : 1
                }}
                transition={{ duration: 0.8 }}
            />

            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>✨ Success Stories</span>
                    <h2>Students <span>Success Stories</span></h2>
                    <p>Meet our students who transformed their careers, won national hackathons, and landed dream roles. Drag to explore or click to read their story.</p>
                </motion.div>

                <div className={styles.sliderWrapper}>
                    <motion.div 
                        ref={carouselRef} 
                        className={styles.carouselContainer}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <motion.div 
                            drag="x"
                            dragConstraints={{ right: 0, left: -carouselWidth }}
                            className={styles.sliderTrack}
                            dragElastic={0.2}
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                        >
                            {placements.map((intern) => (
                                <motion.div
                                    key={intern.id}
                                    layoutId={`card-${intern.id}`}
                                    className={styles.slideItem}
                                    onClick={() => setSelectedId(intern.id)}
                                    style={{ '--card-accent': intern.color }}
                                    whileHover={{ 
                                        y: -10,
                                        boxShadow: `0 20px 40px -10px ${intern.color}40, 0 1px 3px rgba(0,0,0,0.05)`
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <motion.div layoutId={`bar-${intern.id}`} className={styles.cardAccentBar} style={{ background: `linear-gradient(135deg, ${intern.color}, ${intern.color}88)` }}></motion.div>

                                    <div className={styles.cardContent}>
                                        <div className={styles.avatarContainer}>
                                            <div className={styles.avatarGlow} style={{ background: `${intern.color}30` }}></div>
                                            <motion.div layoutId={`ring-${intern.id}`} className={styles.imageRing} style={{ borderColor: `${intern.color}60` }}>
                                                <motion.img
                                                    layoutId={`image-${intern.id}`}
                                                    src={intern.image}
                                                    alt={intern.alt}
                                                    className={styles.avatarImage}
                                                    draggable="false"
                                                />
                                            </motion.div>
                                            <div className={styles.statusDot} style={{ background: intern.color }}></div>
                                        </div>

                                        <motion.h3 layoutId={`name-${intern.id}`} className={styles.internName}>{intern.name}</motion.h3>

                                        <motion.span layoutId={`badge-${intern.id}`} className={styles.roleBadge} style={{ background: `${intern.color}15`, color: intern.color }}>
                                            {intern.badge}
                                        </motion.span>

                                        <motion.p layoutId={`desc-${intern.id}`} className={styles.detailText}>
                                            {intern.achievement || intern.company}
                                        </motion.p>

                                        <motion.div className={styles.pill} style={{ background: `linear-gradient(135deg, ${intern.color}, ${intern.color}CC)` }}>
                                            Read Full Story
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Modal Overlay for Detailed Story */}
            <AnimatePresence>
                {selectedId && selectedIntern && (
                    <motion.div 
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                            <motion.div 
                                layoutId={`card-${selectedIntern.id}`}
                                className={styles.modalCard}
                                style={{ '--card-accent': selectedIntern.color }}
                            >
                                <motion.div layoutId={`bar-${selectedIntern.id}`} className={styles.cardAccentBar} style={{ background: `linear-gradient(135deg, ${selectedIntern.color}, ${selectedIntern.color}88)` }}></motion.div>
                                
                                <button className={styles.closeBtn} onClick={() => setSelectedId(null)}>×</button>

                                <div className={styles.modalContent}>
                                    <div className={styles.modalHeader}>
                                        <motion.div layoutId={`ring-${selectedIntern.id}`} className={styles.imageRing} style={{ borderColor: `${selectedIntern.color}60` }}>
                                            <motion.img
                                                layoutId={`image-${selectedIntern.id}`}
                                                src={selectedIntern.image}
                                                alt={selectedIntern.alt}
                                                className={styles.avatarImage}
                                            />
                                        </motion.div>
                                        
                                        <div className={styles.modalHeaderText}>
                                            <motion.h3 layoutId={`name-${selectedIntern.id}`} className={styles.modalName}>{selectedIntern.name}</motion.h3>
                                            <motion.span layoutId={`badge-${selectedIntern.id}`} className={styles.roleBadge} style={{ background: `${selectedIntern.color}15`, color: selectedIntern.color }}>
                                                {selectedIntern.badge}
                                            </motion.span>
                                            <motion.p layoutId={`desc-${selectedIntern.id}`} className={styles.modalAchievement}>
                                                {selectedIntern.achievement || selectedIntern.company}
                                            </motion.p>
                                        </div>
                                    </div>

                                    <motion.div 
                                        className={styles.modalBody}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h4 style={{ color: selectedIntern.color }}>The Journey</h4>
                                        <p>{selectedIntern.story}</p>
                                        
                                        <div className={styles.modalStats}>
                                            <div className={styles.statBox}>
                                                <h5>Program</h5>
                                                <p>Full-Stack Dev</p>
                                            </div>
                                            <div className={styles.statBox}>
                                                <h5>Duration</h5>
                                                <p>6 Months</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
