"use client";
import styles from './DemoRegistration.module.css';

export default function DemoRegistration() {
    return (
        <section className={styles.registration}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.imageCol}>
                        <img src="/images/hero1.jpg" alt="Students in class" />
                    </div>
                    <div className={styles.formCol}>
                        <h2 className={styles.title}>Request a Campus Consultation</h2>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Your Name & Designation" className={styles.input} required />
                            <input type="text" placeholder="College / University Name" className={styles.input} required />
                            <input type="email" placeholder="Official Email Address" className={styles.input} required />
                            <input type="tel" placeholder="Phone Number" className={styles.input} required />
                            <button type="submit" className={styles.submitBtn}>Book a Free 30-Min Consultation</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
