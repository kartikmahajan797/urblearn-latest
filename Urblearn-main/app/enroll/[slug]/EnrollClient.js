'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './Enroll.module.css';

export default function EnrollClient({ course }) {
    const [status, setStatus] = useState('idle'); // 'idle', 'processing', 'success'
    const [paymentMethod, setPaymentMethod] = useState('card');
    
    // Simulate payment processing
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('processing');
        
        setTimeout(() => {
            setStatus('success');
        }, 2000);
    };

    if (status === 'success') {
        return (
            <motion.div 
                className={styles.successContainer}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className={styles.successIcon}>✓</div>
                <h2>Enrollment Successful!</h2>
                <p>Welcome to {course.title}. Check your email for access details.</p>
                <Link href="/" className={styles.homeBtn}>Return Home</Link>
            </motion.div>
        );
    }

    return (
        <div className={styles.formSection}>
            <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Student Details</h2>
                <p className={styles.formSubtitle}>Enter your details to secure your spot.</p>
                
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>Full Name</label>
                        <input type="text" required className={styles.inputField} placeholder="John Doe" />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <label>Email Address</label>
                        <input type="email" required className={styles.inputField} placeholder="john@example.com" />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <label>Phone Number</label>
                        <input type="tel" required className={styles.inputField} placeholder="+91 98765 43210" />
                    </div>
                    
                    <h3 style={{marginTop: '30px', marginBottom: '16px', fontSize: '1.1rem'}}>Payment Method</h3>
                    <div className={styles.paymentMethods}>
                        <div 
                            className={`${styles.paymentMethod} ${paymentMethod === 'card' ? styles.selected : ''}`}
                            onClick={() => setPaymentMethod('card')}
                        >
                            💳 Card
                        </div>
                        <div 
                            className={`${styles.paymentMethod} ${paymentMethod === 'upi' ? styles.selected : ''}`}
                            onClick={() => setPaymentMethod('upi')}
                        >
                            📱 UPI
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className={styles.submitBtn}
                        disabled={status === 'processing'}
                    >
                        {status === 'processing' ? 'Processing Securely...' : `Pay ${course.price}`}
                    </button>
                    
                    <div className={styles.secureBadge}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        Guaranteed Secure Checkout
                    </div>
                </form>
            </div>
        </div>
    );
}
