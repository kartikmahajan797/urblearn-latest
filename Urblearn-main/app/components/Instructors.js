import Image from 'next/image';
import styles from './Instructors.module.css';

const tutors = [
    { 
        name: 'Ayush', 
        rating: '5.0',
        ratingCount: '2105',
        experience: '5',
        subjects: 'MERN Stack, Next.js, React, Node.js',
        location: 'India',
        flag: '🇮🇳',
        desc: 'Full-stack software engineer and expert educator specializing in the MERN stack and modern web...',
        img: '/images/ayush.jpg',
        bgColor: '#6C63FF',
        bgPosition: 'center 35%',
        blendMode: 'normal'
    },
    { 
        name: 'Sagar Malhotra', 
        rating: '4.9',
        ratingCount: '1840',
        experience: '4',
        subjects: 'Android Development, Kotlin, Jetpack Compose',
        location: 'India',
        flag: '🇮🇳',
        desc: 'Passionate Android developer and educator. Building scalable mobile applications and teaching modern...',
        img: '/images/sagar.png',
        bgColor: '#2ecc71',
        bgPosition: 'center 20%',
        blendMode: 'normal'
    },
    { 
        name: 'Chennaveer Jogur', 
        rating: '4.8',
        ratingCount: '1350',
        experience: '6',
        subjects: 'Data Science, Generative AI, Machine Learning',
        location: 'India',
        flag: '🇮🇳',
        desc: 'Specialist in Data Science and Generative AI. Helping students master machine learning, neural networks, and building real-world AI applications...',
        img: '/images/chennaveer.png',
        bgColor: '#f39c12',
        bgPosition: 'center 30%',
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
                <h2 className="section-title">Our Educators</h2>
                
                <div className={styles.grid}>
                    {tutors.map((tutor, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.header} style={{ backgroundColor: tutor.bgColor }}>
                                <div 
                                    className={styles.imageOverlay} 
                                    style={{
                                        backgroundImage: `url(${tutor.img})`,
                                        backgroundPosition: tutor.bgPosition || 'top center',
                                        mixBlendMode: tutor.blendMode || 'multiply'
                                    }}
                                ></div>
                                <button className={styles.playBtn}>
                                    <span className={styles.playIcon}>▶</span>
                                </button>
                            </div>
                            
                            <div className={styles.content}>
                                <h3 className={styles.name}>{tutor.name}</h3>
                                <div className={styles.ratingRow}>
                                    <span className={styles.star}>⭐</span>
                                    <span className={styles.ratingScore}>{tutor.rating}</span>
                                    <span className={styles.ratingCount}>({tutor.ratingCount} ratings)</span>
                                </div>
                                
                                <div className={styles.divider}></div>
                                
                                <div className={styles.infoRow}>
                                    <span className={styles.icon}>💼</span>
                                    <span className={styles.textLabel}>Experience: <strong>{tutor.experience} years</strong></span>
                                </div>
                                
                                <div className={styles.infoRow}>
                                    <span className={styles.icon}>📝</span>
                                    <span className={styles.textLabel}>{tutor.subjects}</span>
                                </div>
                                
                                <div className={styles.locationRow}>
                                    <span className={styles.flagIcon}>{tutor.flag}</span>
                                    <div className={styles.locText}>
                                        <span className={styles.locLabel}>Location</span>
                                        <span className={styles.locValue}>{tutor.location}</span>
                                    </div>
                                </div>
                                
                                <p className={styles.desc}>
                                    {tutor.desc} <span className={styles.readMore}>Read More</span>
                                </p>
                                
                                <button className={styles.demoBtn}>Book a Free Demo Class</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
