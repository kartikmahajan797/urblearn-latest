import styles from './SplitContent.module.css';

export default function SplitContent({
    title = "Lorem ipsum dolor sit amet",
    subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    btnText = "Know More"
}) {
    return (
        <section className={styles.splitSection}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.textContent}>
                        <h4 className={styles.badge}>{title}</h4>
                        <h2 className={styles.title}>{subtitle}</h2>
                        <p className={styles.text}>{text}</p>
                        {btnText && <button className={styles.btn}>{btnText}</button>}
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.purpleCard}>
                            <div className={styles.cardImage}>
                                <img src="/images/hero2.jpg" alt="Instructor pointing" />
                            </div>
                            <div className={styles.cardText}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <div className={styles.quoteMark}>"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
