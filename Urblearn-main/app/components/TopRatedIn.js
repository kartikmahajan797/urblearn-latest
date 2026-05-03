import styles from './TopRatedIn.module.css';

export default function TopRatedIn() {
    return (
        <section className={styles.topRated}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Courses Top Rated in:</h2>
                        <p>Lorem ipsum dolor sit amet, conse</p>

                        <div className={styles.companiesGrid}>
                            <div className={styles.companyCard}>
                                <div className={styles.companyLogo} style={{ color: '#4285F4' }}>Google</div>
                                <div className={styles.companyStars}>★★★★★</div>
                            </div>
                            <div className={styles.companyCard}>
                                <div className={styles.companyLogo} style={{ color: '#0A66C2' }}>LinkedIn</div>
                                <div className={styles.companyStars}>★★★★★</div>
                            </div>
                            <div className={styles.companyCard}>
                                <div className={styles.companyLogo} style={{ color: '#FF9900' }}>Amazon</div>
                                <div className={styles.companyStars}>★★★★★</div>
                            </div>
                            <div className={styles.companyCard}>
                                <div className={styles.companyLogo} style={{ color: '#00A4EF' }}>Microsoft</div>
                                <div className={styles.companyStars}>★★★★★</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageSection}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="none">
                            <rect width="400" height="500" fill="#e0d4ff" />
                            <text x="200" y="250" fontFamily="Arial" fontSize="16" fill="#6C3FE4" textAnchor="middle">Office Image Placeholder</text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
