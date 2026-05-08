'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaLink } from 'react-icons/fa';
import styles from './Instructors.module.css';

const tutors = [
    {
        name: 'Ayush',
        experience: '5',
        company: 'Ex-Amazon',
        img: '/images/ayush.jpg',
        bgPosition: 'center 35%',
        linkedin: '#',
        twitter: '#',
        portfolio: '#'
    },
    {
        name: 'Sagar Malhotra',
        experience: '4',
        company: 'Android Lead',
        img: '/images/sagar.png',
        bgPosition: 'center 20%',
        linkedin: '#',
        twitter: '#',
        portfolio: '#'
    },
    {
        name: 'Chennaveer Jogur',
        experience: '6',
        company: 'AI Research Lead',
        img: '/images/chennaveer.png',
        bgPosition: 'center 30%',
        linkedin: '#',
        twitter: '#',
        portfolio: '#'
    },
    {

        name: 'Shruti Grover',
        experience: '6',
        company: 'Microsoft',
        img: '/images/shruti.jpg',
        bgPosition: 'center 15%',
        blendMode: 'normal'
    },
    {
        name: 'Fella Rahmah Putri',
        rating: '5.0',
        ratingCount: '748',
        experience: '4',
        subjects: 'Child Engagement, FINANCE-BASIC, FINANCE-INTERMEDIATE',
        location: 'Indonesia',
        flag: '🇮🇩',
        desc: 'I completed my studies with strong academic results and have had the opportunity to gain v...',
        img: '/images/hero1.jpg',
        bgColor: '#b2a7eb'
    },
    {
        name: 'Benard Santoso',
        rating: '5.0',
        ratingCount: '7176',
        experience: '3',
        subjects: 'Child Engagement, HTML-CSS, JAVASCRIPT, PYTHON, SQL',
        location: 'Indonesia',
        flag: '🇮🇩',
        desc: 'Passionate and detail oriented individual with a strong background of programming and teac...',
        img: '/images/hero2.jpg',
        bgColor: '#35e2df'
    },
    {
        name: 'Ola Abo Elsaadat',
        rating: '5.0',
        ratingCount: '1271',
        experience: '4',
        subjects: 'FINANCE-BASIC',
        location: 'Egypt',
        flag: '🇪🇬',
        desc: 'I am Teacher Ola Abu Al-Saadat, I worked as an English language, mathematics and a money m...',
        img: '/images/hero3.jpg',
        bgColor: '#f38b88'
    },
    {
        name: 'Jaya Kapoor',
        rating: '5.0',
        ratingCount: '1254',
        experience: '3',
        subjects: 'FINANCE-BASIC, FINANCE-INTERMEDIATE',
        location: 'India',
        flag: '🇮🇳',
        desc: 'An Educationalist with 22 years of experience in teaching, mentoring, managing teachers an...',
        img: '/images/hero1.jpg',
        bgColor: '#ffde31'
    },
];

export default function Instructors() {
    return (
        <section className={styles.instructors}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.headerArea}
                >
                    <span className={styles.topTag}>Industry Experts</span>
                    <h2 className={styles.title}>Meet Your <span>Educators</span></h2>
                    <p className={styles.subtitle}>Learn from mentors who have actually built what they teach.</p>
                </motion.div>

                <div className={styles.grid}>
                    {tutors.map((tutor, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <div
                                    className={styles.instructorImg}
                                    style={{
                                        backgroundImage: `url(${tutor.img})`,
                                        backgroundPosition: tutor.bgPosition || 'top center',
                                    }}
                                ></div>
                                <div className={styles.socialOverlay}>
                                    <div className={styles.socialIcons}>
                                        <a href={tutor.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLinkedin /></a>
                                        <a href={tutor.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaTwitter /></a>
                                        <a href={tutor.portfolio} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLink /></a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.name}>{tutor.name}</h3>
                                <div className={styles.tags}>
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        className={styles.tagExp}
                                    >
                                        💼 {tutor.experience} Years Exp
                                    </motion.span>
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        className={styles.tagCompany}
                                    >
                                        🏢 {tutor.company}
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


