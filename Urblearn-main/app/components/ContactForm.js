"use client";
import styles from './ContactForm.module.css';

export default function ContactForm() {
    return (
        <section className={styles.contactForm}>
            <div className={styles.container}>
                <div className={styles.tag}>Contact Us</div>
                <h2 className={styles.title}>Let's Build the Future of Learning Together</h2>
                <p className={styles.desc}>
                    Leave your contact details and our academic partnerships team will get back to you within 24 hours.
                </p>

                <form className={styles.formGroup} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your official college email ID"
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.submitBtn}>Subscribe</button>
                </form>
            </div>
        </section>
    );
}
