import styles from './ReadyToStart.module.css';

export default function ReadyToStart() {
    return (
        <section className={styles.readyToStart}>
            <div className={styles.container}>
                <h2 className={styles.title}>Ready to start your new career?</h2>
                <div className={styles.grid}>
                    <div className={styles.purpleCard}>
                        <span>Excellent Rating • 100+ Reviews</span>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</h3>
                        <button className={styles.btnAdviser}>Talk to program advisor</button>
                    </div>
                    <div className={styles.imageCard}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                            <rect width="100%" height="100%" fill="#f472b6" />
                            <circle cx="200" cy="250" r="100" fill="rgba(255,255,255,0.2)" />
                            <text x="200" y="250" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle">Student Image Placeholder</text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
