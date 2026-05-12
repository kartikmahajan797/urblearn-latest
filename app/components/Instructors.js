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
    }
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


