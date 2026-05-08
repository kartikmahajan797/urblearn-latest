"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import styles from './Courses.module.css';

const courses = [
    {
        slug: 'full-stack-with-gen-ai',
        title: 'Full Stack with Gen AI',
        desc: 'Master full-stack development powered by Generative AI — build intelligent, production-ready apps from frontend to backend.',
        tag1: 'Popular',
        tag2: 'Development',
        enrolledInfo: '500+ Enrolled',
        rating: '4.9',
        ratingsCount: '1240',
        students: '1500',
        price: '8,999',
        originalPrice: '12,999',
        perClass: '150',
        category: 'development',
        image: '/images/course1.jpg',
        curriculum: ['HTML, CSS & JS Foundations', 'React & Next.js', 'Node.js & Express APIs', 'Gen AI Integration', 'Deployment & DevOps']
    },
    {
        slug: 'generative-ai',
        title: 'Generative AI',
        desc: 'Deep dive into LLMs, prompt engineering, RAG, fine-tuning, and building real-world AI-powered applications.',
        tag1: 'Trending',
        tag2: 'AI',
        enrolledInfo: '320+ Enrolled',
        rating: '4.8',
        ratingsCount: '890',
        students: '950',
        price: '5,999',
        originalPrice: '9,999',
        perClass: '120',
        category: 'ai',
        image: '/images/course2.jpg',
        curriculum: ['LLM Fundamentals', 'Prompt Engineering', 'RAG Pipelines', 'Fine-Tuning Models', 'AI App Deployment']
    },
    {
        slug: 'backend-development',
        title: 'Backend Development',
        desc: 'Learn server-side programming, REST APIs, authentication, databases, and deployment with Node.js and Express.',
        tag1: 'Hot',
        tag2: 'Backend',
        enrolledInfo: '210+ Enrolled',
        rating: '4.7',
        ratingsCount: '650',
        students: '420',
        price: '6,999',
        originalPrice: null,
        perClass: '100',
        category: 'development',
        image: '/images/course3.jpg',
        curriculum: ['Node.js Deep Dive', 'REST API Design', 'SQL & NoSQL DBs', 'Auth & Security', 'Cloud Deployment']
    },
    {
        slug: 'system-design',
        title: 'System Design',
        desc: 'Master scalable architecture, distributed systems, load balancing, caching, and design patterns used at top tech companies.',
        tag1: 'New',
        tag2: 'Architecture',
        enrolledInfo: '150+ Enrolled',
        rating: '4.9',
        ratingsCount: '340',
        students: '200',
        price: '7,499',
        originalPrice: '10,000',
        perClass: '200',
        category: 'systemdesign',
        image: '/images/course1.jpg',
        curriculum: ['Scalability Basics', 'Load Balancing', 'Caching Strategies', 'Distributed Systems', 'Case Studies (Twitter, Uber)']
    },
    {
        slug: 'mern-stack',
        title: 'MERN Stack',
        desc: 'Build full-stack web apps with MongoDB, Express, React, and Node.js — from zero to deployment.',
        tag1: 'Popular',
        tag2: 'Full Stack',
        enrolledInfo: '800+ Enrolled',
        rating: '4.8',
        ratingsCount: '2100',
        students: '3400',
        price: '7,999',
        originalPrice: '11,000',
        perClass: '180',
        category: 'development',
        image: '/images/course2.jpg',
        curriculum: ['MongoDB & Mongoose', 'Express.js', 'React.js', 'Node.js APIs', 'Full App Deployment']
    },
    {
        slug: 'java-full-stack',
        title: 'Java Full Stack',
        desc: 'End-to-end Java development with Spring Boot, Hibernate, React, and microservices architecture.',
        tag1: 'In Demand',
        tag2: 'Enterprise',
        enrolledInfo: '450+ Enrolled',
        rating: '4.6',
        ratingsCount: '1100',
        students: '1200',
        price: '8,499',
        originalPrice: '14,000',
        perClass: '210',
        category: 'development',
        image: '/images/course3.jpg',
        curriculum: ['Core Java & OOP', 'Spring Boot', 'Hibernate & JPA', 'React Frontend', 'Microservices']
    },
    {
        slug: 'data-structures-algorithms',
        title: 'Data Structures & Algorithms',
        desc: 'Master arrays, trees, graphs, dynamic programming, and problem-solving techniques to crack top tech interviews.',
        tag1: 'Essential',
        tag2: 'Interviews',
        enrolledInfo: '1200+ Enrolled',
        rating: '4.9',
        ratingsCount: '4500',
        students: '8000',
        price: '5,499',
        originalPrice: '8,000',
        perClass: '90',
        category: 'dsa',
        image: '/images/course1.jpg',
        curriculum: ['Arrays & Strings', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', '200+ Practice Problems']
    },
    {
        slug: 'android-development',
        title: 'Android Development',
        desc: 'Build native Android apps from scratch using Kotlin and Jetpack Compose. Learn API integration, local databases, and publish to the Play Store.',
        tag1: 'Popular',
        tag2: 'Mobile',
        enrolledInfo: '450+ Enrolled',
        rating: '4.8',
        ratingsCount: '980',
        students: '1200',
        price: '6,499',
        originalPrice: '9,999',
        perClass: '110',
        category: 'development',
        image: '/images/course2.jpg',
        curriculum: ['Kotlin Fundamentals', 'Jetpack Compose UI', 'Room DB & Local Storage', 'Retrofit API Calls', 'Publishing to Play Store']
    }
];

const categories = [
    { id: 'development', label: 'Development', icon: '💻' },
    { id: 'ai', label: 'AI', icon: '🤖' },
    { id: 'datascience', label: 'Data Science', icon: '📊' },
    { id: 'systemdesign', label: 'System Design', icon: '🏗️' },
    { id: 'dsa', label: 'DSA', icon: '🧩' },
    { id: 'view-all', label: 'View All', icon: '✦' }
];

function getDiscountPct(price, originalPrice) {
    if (!originalPrice) return null;
    const cur = parseFloat(price.replace(/,/g, ''));
    const orig = parseFloat(originalPrice.replace(/,/g, ''));
    return Math.round((1 - cur / orig) * 100);
}

const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } }
};

// 3D Interactive Card Component
function CourseCard({ course }) {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // Spring physics for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
    
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const discount = getDiscountPct(course.price, course.originalPrice);

    return (
        <motion.div
            ref={cardRef}
            className={styles.cardWrapper}
            variants={cardVariants}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.card}>
                <div className={styles.cardImageArea} style={{ backgroundImage: `url(${course.image})` }}>
                    <div className={styles.imageDarkOverlay}></div>

                    {discount && (
                        <div className={styles.discountBadge}>
                            -{discount}% OFF
                        </div>
                    )}

                    <div className={styles.enrolledBadge}>
                        <span className={styles.avatarsGroup}>🧑‍🤝‍🧑</span> {course.enrolledInfo}
                    </div>

                    <div className={styles.bottomTags}>
                        <span className={styles.glassTag}>{course.tag1}</span>
                        <span className={styles.glassTag}>{course.tag2}</span>
                    </div>

                    {/* Advanced Curriculum Overlay */}
                    <AnimatePresence>
                        {isHovered && course.curriculum && (
                            <motion.div
                                className={styles.curriculumOverlay}
                                initial={{ opacity: 0, y: "100%" }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: "100%" }}
                                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            >
                                <div className={styles.curriculumOverlayContent}>
                                    <p className={styles.curriculumTitle}>What you&apos;ll learn</p>
                                    <ul>
                                        {course.curriculum.slice(0, 4).map((item, j) => (
                                            <li key={j}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{course.title}</h3>

                    <div className={styles.metaRow}>
                        <div className={styles.ratingBox}>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.ratingScore}>{course.rating}</span>
                            <span className={styles.ratingCount}>({course.ratingsCount})</span>
                        </div>
                        <div className={styles.studentBox}>
                            <span className={styles.userIcon}>👤</span>
                            <span className={styles.studentCount}>{course.students} students</span>
                        </div>
                    </div>

                    <p className={styles.cardDesc}>{course.desc}</p>

                    <div className={styles.priceSection}>
                        <div className={styles.priceRow}>
                            <span className={styles.currentPrice}>₹{course.price}</span>
                            {course.originalPrice && (
                                <span className={styles.originalPrice}>₹{course.originalPrice}</span>
                            )}
                        </div>
                        <div className={styles.perClass}>(₹{course.perClass} per class)</div>
                    </div>

                    <Link href={`/courses/${course.slug}`} className={styles.enrollBtn}>
                        <span>View Details</span>
                        <svg className={styles.btnArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function Courses() {
    const [activeCategory, setActiveCategory] = useState('development');

    const allCourses = activeCategory === 'view-all' ? courses : courses.filter(c => c.category === activeCategory);

    return (
        <section id="courses" className={styles.coursesSection}>
            <div className={styles.container}>

                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <h2 className="section-title">Our <span>Courses</span></h2>
                    <p className="section-subtitle">Industry-aligned programs taught by working professionals. Pick your track and start building.</p>
                </div>

                {/* Animated Horizontal TABS */}
                <div className={styles.tabsWrapper}>
                    <div className={styles.tabsContainer}>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`${styles.tabItem} ${activeCategory === cat.id ? styles.activeText : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                {activeCategory === cat.id && (
                                    <motion.div 
                                        layoutId="activeTabPill" 
                                        className={styles.activeTabPill}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className={styles.tabContent}>
                                    {cat.icon && <span className={styles.tabIcon}>{cat.icon}</span>}
                                    {cat.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course GRID */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className={styles.grid}
                        variants={gridVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {allCourses.length > 0 ? (
                            allCourses.map((course, i) => (
                                <CourseCard key={i} course={course} />
                            ))
                        ) : (
                            <motion.div
                                className={styles.emptyState}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className={styles.emptyIcon}>🚀</div>
                                <h4>Coming Soon!</h4>
                                <p>We&apos;re crafting an amazing course for this category. Stay tuned!</p>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
