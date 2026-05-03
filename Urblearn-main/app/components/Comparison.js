import styles from './Comparison.module.css';

export default function Comparison() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className="section-title">Others Vs <span>Urblearn</span></h2>
                
                <div className={styles.comparisonTable}>
                    {/* Feature Column */}
                    <div className={styles.featureCol}>
                        <div className={styles.headerSpace}></div>
                        <div className={styles.rowFeature}>
                            <span>Training Mode</span>
                            <span className={styles.arrow}>→</span>
                        </div>
                        <div className={styles.rowFeature}>
                            <span>Support</span>
                            <span className={styles.arrow}>→</span>
                        </div>
                        <div className={styles.rowFeature}>
                            <span>Placement</span>
                            <span className={styles.arrow}>→</span>
                        </div>
                        <div className={styles.rowFeature}>
                            <span>Faculty</span>
                            <span className={styles.arrow}>→</span>
                        </div>
                        <div className={styles.rowFeature}>
                            <span>Real-Time Projects</span>
                            <span className={styles.arrow}>→</span>
                        </div>
                    </div>

                    {/* Urblearn Highlight Column */}
                    <div className={styles.urblearnCol}>
                        <div className={styles.headerUrb}>
                            <span className={styles.logoIcon}>🎓</span> Urblearn
                        </div>
                        <div className={styles.rowUrb}>
                            <span className={styles.checkIcon}>✔</span>
                            <p>100% Online & Hybrid<br/><span className={styles.subText}>(Online + Classroom)</span></p>
                        </div>
                        <div className={styles.rowUrb}>
                            <span className={styles.checkIcon}>✔</span>
                            <p>24/7 Student Support</p>
                        </div>
                        <div className={styles.rowUrb}>
                            <span className={styles.checkIcon}>✔</span>
                            <p>100% Placement Assistance</p>
                        </div>
                        <div className={styles.rowUrb}>
                            <span className={styles.checkIcon}>✔</span>
                            <p>Experienced Industry Professionals</p>
                        </div>
                        <div className={styles.rowUrb}>
                            <span className={styles.checkIcon}>✔</span>
                            <p>Practice with Live Projects & Team Management</p>
                        </div>
                    </div>

                    {/* Others Column */}
                    <div className={styles.othersCol}>
                        <div className={styles.headerOthers}>Others</div>
                        <div className={styles.rowOthers}>
                            <span className={styles.crossIcon}>✕</span>
                            <p>Only recorded class<br/><span className={styles.subText}>& few live online</span></p>
                        </div>
                        <div className={styles.rowOthers}>
                            <span className={styles.crossIcon}>✕</span>
                            <p>Limited Support Hours</p>
                        </div>
                        <div className={styles.rowOthers}>
                            <span className={styles.crossIcon}>✕</span>
                            <p>Limited Placement Support</p>
                        </div>
                        <div className={styles.rowOthers}>
                            <span className={styles.crossIcon}>✕</span>
                            <p>Academics and Trainers</p>
                        </div>
                        <div className={styles.rowOthers}>
                            <span className={styles.crossIcon}>✕</span>
                            <p>Simulated Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
