"use client";

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    Urb<span className={styles.logoHighlight}>learn</span>
                </div>

                {/* Overlay */}
                {isOpen && (
                    <div className={styles.overlay} onClick={() => setIsOpen(false)} />
                )}

                <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <a href="/" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="/about" onClick={() => setIsOpen(false)}>About Us</a>
                    <a href="/college-programs" onClick={() => setIsOpen(false)}>College Programs</a>
                    <a href="/kids-program" onClick={() => setIsOpen(false)}>Kids Program</a>
                    <a href="/#courses" onClick={() => setIsOpen(false)}>Courses</a>
                    {/* Mobile-only CTA */}
                    <div className={styles.mobileActions}>
                        <button className={styles.loginBtn} onClick={() => setIsOpen(false)}>Log In</button>
                        <button className={styles.signupBtn} onClick={() => setIsOpen(false)}>Sign Up Free</button>
                    </div>
                </div>

                <div className={styles.navActions}>
                    <button className={styles.loginBtn}>Log In</button>
                    <button className={styles.signupBtn}>Sign Up Free</button>
                </div>

                <button
                    className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>
        </nav>
    );
}
