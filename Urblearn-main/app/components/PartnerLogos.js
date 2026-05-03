"use client";

import styles from './PartnerLogos.module.css';
import { FcGoogle } from 'react-icons/fc';
import { FaAmazon, FaMicrosoft, FaApple, FaSpotify, FaUber } from 'react-icons/fa';
import { SiNetflix, SiMeta } from 'react-icons/si';

const companies = [
    { name: 'Google', icon: FcGoogle, color: '' }, // FcGoogle has its own colors
    { name: 'Amazon', icon: FaAmazon, color: '#FF9900' },
    { name: 'Microsoft', icon: FaMicrosoft, color: '#00A4EF' },
    { name: 'Netflix', icon: SiNetflix, color: '#E50914' },
    { name: 'Meta', icon: SiMeta, color: '#0668E1' },
    { name: 'Apple', icon: FaApple, color: '#555555' },
    { name: 'Spotify', icon: FaSpotify, color: '#1DB954' },
    { name: 'Uber', icon: FaUber, color: '#000000' }
];

export default function PartnerLogos() {
    // Duplicate for seamless infinite scroll
    const marqueeItems = [...companies, ...companies];

    return (
        <section className={styles.partnersSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Top Companies Hiring from Urblearn</h2>
                <p className={styles.desc}>
                    Our alumni are working at top tech and product companies globally. 
                    Accelerate your career with our top-tier curriculum.
                </p>

                <div className={styles.slider}>
                    <div className={styles.sliderTrack}>
                        {marqueeItems.map((company, index) => {
                            const Icon = company.icon;
                            return (
                                <div key={index} className={styles.logoWrapper}>
                                    <Icon size={40} color={company.color || undefined} className={styles.companyIcon} />
                                    {/* Optional text if you want the brand name next to the icon */}
                                    <span className={styles.logoText} style={{ color: company.color || '#555', marginLeft: '8px', fontSize: '1.2rem' }}>
                                        {company.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.actionWrap}>
                    <button className={styles.freeBtn}>Explore Placements</button>
                </div>
            </div>
        </section>
    );
}
