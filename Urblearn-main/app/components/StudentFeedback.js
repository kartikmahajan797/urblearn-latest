import Image from 'next/image';
import styles from './StudentFeedback.module.css';

const feedbacks = [
    { name: 'Rahul Verma', img: 'https://i.pravatar.cc/150?u=rahul', text: '"The Full Stack course completely changed my career. The hands-on project approach and expert guidance during 1:1 sessions made all the difference."' },
    { name: 'Ananya Gupta', img: 'https://i.pravatar.cc/150?u=ananya', text: '"I landed my dream job within 2 months of completing the Gen AI program. The portfolio I built during the capstone was the key factor."' },
    { name: 'Vikram Singh', img: 'https://i.pravatar.cc/150?u=vikram', text: '"Urblearn\'s instructors helped me master System Design concepts I previously struggled with. It directly enabled me to crack my Amazon interview."' },
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
