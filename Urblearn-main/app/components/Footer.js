import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerBrand}>
                    <h3>Urb<span>learn</span></h3>
                    <p>
                        Empowering learners worldwide with expert-led courses and
                        personalized learning experiences.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink}>𝕏</a>
                        <a href="#" className={styles.socialLink}>in</a>
                        <a href="#" className={styles.socialLink}>📷</a>
                        <a href="#" className={styles.socialLink}>▶</a>
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <h4>Company</h4>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Press</a>
                </div>
                <div className={styles.footerColumn}>
                    <h4>Resources</h4>
                    <a href="#">Help Center</a>
                    <a href="#">Community</a>
                    <a href="#">Webinars</a>
                    <a href="#">Tutorials</a>
                </div>
                <div className={styles.footerColumn}>
                    <h4>Legal</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                    <a href="#">Refund Policy</a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <span>© 2026 Urblearn. All rights reserved.</span>
                <div className={styles.footerBottomLinks}>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Sitemap</a>
                </div>
            </div>
        </footer>
    );
}
