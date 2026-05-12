import Image from 'next/image';
import styles from './StudentFeedback.module.css';

const feedbacks = [
    { name: 'Kunal Singhi', img: '/images/student2.jpeg', text: '"The advanced curriculum at Urblearn helped me scale my projects to thousands of stars. It transformed my passion into real-world impact."', objectPosition: 'top center' },
    { name: 'Ayush Patel', img: '/images/student1.jpeg', text: '"Contributing to major open-source repositories was a dream. Urblearn provided the mentorship I needed to become a core contributor."', objectPosition: 'top center' },
    { name: 'Vaibhav', img: '/images/student4.jpeg', text: '"The deep dive into AI and ML paved the way for my placement. I now work on cutting-edge products that impact millions of users."' },
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
                                <Image 
                                    src={item.img} 
                                    alt={item.name} 
                                    width={64} 
                                    height={64} 
                                    unoptimized 
                                    style={{ 
                                        borderRadius: '50%', 
                                        objectFit: 'cover',
                                        objectPosition: item.objectPosition || 'center' 
                                    }} 
                                />
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
