import Image from 'next/image';
import styles from './CareerAcademy.module.css';

export default function CareerAcademy() {
    return (
        <section className={styles.academySection}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.imageCol} style={{ position: 'relative', minHeight: '400px', borderRadius: '16px', overflow: 'hidden' }}>
                        <Image src="/images/hero2.jpg" alt="Kids Working Together" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.textCol}>
                        <h2 style={{fontSize: '2.8rem', lineHeight: '1.2', marginBottom: '24px'}}>Not a Classroom. <br/> <span style={{color: 'var(--primary)'}}>A Startup Incubator.</span></h2>
                        <p style={{fontSize: '1.2rem', color: 'var(--text-medium)', marginBottom: '20px'}}>
                            We don't teach to a test. Our hands-on incubator model treats children like young founders, giving them the tools, mentorship, and environment to build real products.
                        </p>
                        <p style={{fontSize: '1.1rem', color: 'var(--text-medium)'}}>
                            They don't just consume technology—they learn how to create it, think like innovators, and launch ideas into the real world.
                        </p>
                        <div style={{display: 'flex', gap: '48px', margin: '40px 0'}}>
                             <div><h3 style={{fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '4px', fontWeight: '800'}}>100+</h3><p style={{fontWeight: '600', color: 'var(--text-dark)'}}>Projects Launched</p></div>
                             <div><h3 style={{fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '4px', fontWeight: '800'}}>5k+</h3><p style={{fontWeight: '600', color: 'var(--text-dark)'}}>Young Founders</p></div>
                        </div>
                        <button className={styles.exploreBtn} style={{padding: '16px 32px', fontSize: '1.1rem', borderRadius: '30px', fontWeight: 'bold'}}>See The Incubator inside</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
