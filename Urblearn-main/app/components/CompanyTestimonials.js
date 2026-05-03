import Image from 'next/image';
import styles from './CompanyTestimonials.module.css';

const reviews = [
    {
        name: 'Neha Sharma',
        logo: 'Google',
        logoColor: '#4285F4',
        bg: '#e8f0fe',
        text: 'The Full Stack program completely transformed my understanding of web architecture. I secured a role at Google just a month after graduating.',
        img: 'https://i.pravatar.cc/150?u=neha'
    },
    {
        name: 'Rohan Singh',
        logo: 'LinkedIn',
        logoColor: '#0A66C2',
        bg: '#e1e9ee',
        text: 'The System Design interviews were always my weak point. The mock interviews and rigorous curriculum at Urblearn helped me crack LinkedIn.',
        img: 'https://i.pravatar.cc/150?u=rohan'
    },
    {
        name: 'Priya Patel',
        logo: 'Amazon',
        logoColor: '#FF9900',
        bg: '#fcf4e8',
        text: 'Building Gen AI projects from scratch was the highlight. That hands-on experience was exactly what my hiring manager at Amazon was looking for.',
        img: 'https://i.pravatar.cc/150?u=priya'
    },
    {
        name: 'Karan Mehra',
        logo: 'Microsoft',
        logoColor: '#00A4EF',
        bg: '#e5f3fa',
        text: 'Coming from a non-CS background, Urblearn\'s 1:1 mentorship helped bridge the gap. Im proud to now be an engineer at Microsoft.',
        img: 'https://i.pravatar.cc/150?u=karan'
    },
];

export default function CompanyTestimonials() {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <h2 className={styles.title}>Alumni Stories</h2>
                <div className={styles.grid}>
                    {reviews.map((review, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.avatar} style={{ background: review.bg, overflow: 'hidden' }}>
                                <Image src={review.img} alt={review.name} width={100} height={100} unoptimized style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.logo} style={{ color: review.logoColor }}>
                                {review.logo}
                            </div>
                            <p className={styles.review}>"{review.text}"</p>
                            <h4 className={styles.name}>{review.name}</h4>
                            <div className={styles.stars}>★★★★★</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
