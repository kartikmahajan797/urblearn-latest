import Image from 'next/image';
import styles from './StudentFeedback.module.css';

const feedbacks = [
    { name: 'Riya Sharma', img: '/images/students/kid_f1.png', text: '"I never knew coding could be this much fun! I built my first game in just two weeks. The mentors are so patient and help me whenever I get stuck."' },
    { name: 'Arjun Mehra', img: '/images/students/kid_f2.png', text: '"I made a website for my pet dog! Urblearn is the best place for young creators. Now I can show my friends what I built during the summer break."' },
    { name: 'Isha Patel', img: '/images/students/kid_f3.png', text: '"The 1:1 sessions helped me understand how robots think. I love building logic and seeing it come to life. Learning here feels like playing a game!"' },
];

export default function StudentFeedback() {
    return (
        <section className={styles.feedbackSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Feedback from our students</h2>
                <div className={styles.grid}>
                    {feedbacks.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.avatar}>
                                <Image src={item.img} alt={item.name} width={64} height={64} unoptimized style={{ borderRadius: '50%', objectFit: 'cover' }} />
                            </div>
                            <h4 className={styles.name}>{item.name}</h4>
                            <p className={styles.review}>{item.text}</p>
                            <div className={styles.stars}>★★★★★</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
