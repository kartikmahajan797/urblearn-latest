import Image from 'next/image';
import styles from './TeamGrid.module.css';

const teamMembers = [
    {
        name: 'Aisha Kahn',
        role: 'Head of Engineering',
        bio: 'Ex-Google engineer shaping Urblearn\'s AI curriculum.',
        img: 'https://i.pravatar.cc/300?u=aisha'
    },
    {
        name: 'David Chen',
        role: 'Lead Mentor',
        bio: 'Full-stack veteran dedicated to 1:1 student mentorship.',
        img: 'https://i.pravatar.cc/300?u=davidchen'
    },
    {
        name: 'Priya Sharma',
        role: 'Director of Partnerships',
        bio: 'Connecting university curriculums with hiring partners.',
        img: 'https://i.pravatar.cc/300?u=priyasharma'
    },
    {
        name: 'Marcus Weaver',
        role: 'Systems Architecture',
        bio: 'Teaching exactly how systems scale to millions of users.',
        img: 'https://i.pravatar.cc/300?u=marcus'
    }
];

export default function TeamGrid() {
    return (
        <section className={styles.teamSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>The Minds Behind Urblearn</h2>
                    <p>Our team consists of industry veterans who actively write code and design systems for global companies.</p>
                </div>

                <div className={styles.grid}>
                    {teamMembers.map((member, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image src={member.img} alt={member.name} fill unoptimized style={{ objectFit: 'cover' }} />
                                <div className={styles.overlay}>
                                    <div className={styles.overlayContent}>
                                        <div className={styles.socials}>
                                            <a href="#" className={styles.icon}>in</a>
                                            <a href="#" className={styles.icon}>X</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <h3>{member.name}</h3>
                                <h4>{member.role}</h4>
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
