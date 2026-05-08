import Image from 'next/image';
import styles from './AmazingStudents.module.css';

const students = [
    { name: 'Kabir Sharma', date: '12.01.2024', img: '/images/students/kid1.png' },
    { name: 'Sara Khan', date: '15.02.2024', img: '/images/students/kid2.png' },
    { name: 'Aryan Verma', date: '02.03.2024', img: '/images/students/kid3.png' },
];

export default function AmazingStudents() {
    return (
        <section className={styles.studentsSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Meet our Amazing Students</h2>
                <div className={styles.grid}>
                    {students.map((student, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardImage} style={{position: 'relative', overflow: 'hidden'}}>
                                <Image src={student.img} alt={student.name} fill unoptimized style={{ objectFit: 'cover' }} />
                            </div>
                            <h3 className={styles.name}>{student.name}</h3>
                            <p className={styles.desc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <div className={styles.footer}>
                                <span className={styles.date}>{student.date}</span>
                                <span className={styles.stars}>★★★★★</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
