'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import styles from './OurJourney.module.css';

const images = [
    { src: '/images/journey/journey1.jpg', caption: 'Innovating at Vibecode', year: '2023', position: 'center' },
    { src: '/images/journey/journey2.jpg', caption: 'Building a Community of Learners', year: '2023', position: 'center' },
    { src: '/images/journey/journey3.jpg', caption: 'Collaborating with Industry Experts', year: '2024', position: 'center' },
    { src: '/images/journey/journey4.jpg', caption: 'Spreading Knowledge Across Platforms', year: '2024', position: 'center' },
    { src: '/images/journey/journey5.jpg', caption: 'Empowering the Next Generation', year: '2025', position: 'center' },
    { src: '/images/journey/journey6.png', caption: 'Networking at Tech Events', year: '2025', position: 'center' },
    { src: '/images/journey/journey7.jpg', caption: 'Celebrating Growth & Success', year: '2025', position: 'center 15%' }
];

export default function OurJourney() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const x = useMotionValue(0);
    
    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, currentIndex]);

    const dragThreshold = 50;
    const onDragEnd = (e, { offset, velocity }) => {
        if (offset.x > dragThreshold) {
            prevSlide();
        } else if (offset.x < -dragThreshold) {
            nextSlide();
        }
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.9,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.9,
            rotateY: direction < 0 ? 45 : -45,
        })
    };

    return (
        <section className={styles.journeySection}>
            <div className={styles.container}>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <span className={styles.topTag}>Timeline</span>
                    <h2 className={styles.title}>Our <span>Journey</span></h2>
                    <p className={styles.subtitle}>
                        Every pixel, every line of code, and every student success story is a milestone in our mission to revolutionize education.
                    </p>
                </motion.div>

                <div className={styles.sliderWrapper}>
                    <div 
                        className={styles.sliderContainer}
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 200, damping: 25 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.5}
                                onDragEnd={onDragEnd}
                                className={styles.slide}
                            >
                                <div className={styles.imageCard}>
                                    <img 
                                        src={images[currentIndex].src} 
                                        alt={images[currentIndex].caption} 
                                        className={styles.image}
                                        style={{ objectPosition: images[currentIndex].position }}
                                    />
                                    <div className={styles.contentOverlay}>
                                        <div className={styles.yearTag}>{images[currentIndex].year}</div>
                                        <div className={styles.captionArea}>
                                            <FaQuoteLeft className={styles.quoteIcon} />
                                            <p className={styles.caption}>{images[currentIndex].caption}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Bar */}
                        <div className={styles.progressContainer}>
                            <motion.div 
                                key={currentIndex}
                                initial={{ width: "0%" }}
                                animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                className={styles.progressBar}
                            />
                        </div>
                    </div>

                    <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide}>
                        <FaChevronLeft />
                    </button>
                    <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide}>
                        <FaChevronRight />
                    </button>
                </div>

                <div className={styles.footerControls}>
                    <div className={styles.dots}>
                        {images.map((_, i) => (
                            <button 
                                key={i} 
                                className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
                                onClick={() => {
                                    setDirection(i > currentIndex ? 1 : -1);
                                    setCurrentIndex(i);
                                }}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

