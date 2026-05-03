'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: 'Are the classes completely live or pre-recorded?',
        answer: 'All our core courses are 100% live. We believe in interactive, real-time learning where you can ask questions, engage in discussions, and code along with industry expert instructors.'
    },
    {
        question: 'Do you provide placement assistance?',
        answer: 'Yes! We offer dedicated placement assistance for all our graduates. This includes 1:1 resume building sessions, mock interviews with FAANG engineers, optimizing your LinkedIn profile, and direct referrals to our hiring partners.'
    },
    {
        question: 'What happens if I miss a live class?',
        answer: 'Don\'t worry! Every live session is recorded in high quality and uploaded to your student dashboard within 24 hours. You have lifetime access to these recordings, along with the class notes and code repositories.'
    },
    {
        question: 'Do I get a certificate upon completion?',
        answer: 'Absolutely. Upon successfully finishing the course and evaluating your capstone project, you will receive an industry-recognized Urblearn certificate that you can showcase on your resume and LinkedIn profile.'
    },
    {
        question: 'Are there any prerequisites for joining the courses?',
        answer: 'Our Full Stack and Gen AI courses are designed to take you from absolute beginner to advanced. However, our System Design course requires a basic understanding of programming and web architecture.'
    }
];

function ChevronIcon({ open }) {
    return (
        <motion.svg
            className={styles.chevron}
            width="20" height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <polyline points="6 9 12 15 18 9" />
        </motion.svg>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Frequently Asked <span>Questions</span></h2>
                    <p>Everything you need to know about Urblearn and our courses.</p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={isOpen}
                                >
                                    <div className={styles.questionLeft}>
                                        <span className={styles.qNumber}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3>{faq.question}</h3>
                                    </div>
                                    <ChevronIcon open={isOpen} />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            className={styles.faqAnswer}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                        >
                                            <p>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.contactPrompt}>
                    <p>Still have questions?</p>
                    <button className="btn-outline">Contact Support</button>
                </div>
            </div>
        </section>
    );
}
