import styles from './WhatYouWillLearn.module.css';

const topics = [
    {
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'Interview Skills',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'Content Marketing',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'Career Placement',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

export default function WhatYouWillLearn() {
    return (
        <section className={styles.whatYouWillLearn}>
            <div className={styles.container}>
                <h2 className={styles.title}>What you'll learn in this course</h2>
                <div className={styles.cardsGrid}>
                    {topics.map((topic, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardImage}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 140" preserveAspectRatio="none">
                                    <rect width="200" height="140" fill="#e0d4ff" />
                                    <text x="100" y="70" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">Image</text>
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>{topic.title}</h3>
                            <p className={styles.cardDesc}>{topic.desc}</p>
                            <button className={styles.btnPrimary}>Course Content</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
