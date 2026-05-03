import styles from './SkillsForSuccess.module.css';

const skills = [
  { id: 'coding', title: 'Coding', subtitle: 'Create with logic', colorClass: 'blue', icon: '💻' },
  { id: 'robotics', title: 'Robotics', subtitle: 'Build real tech', colorClass: 'orange', icon: '🤖' },
  { id: 'finance', title: 'Financial Literacy', subtitle: 'Smart money habits', colorClass: 'green', icon: '💰' },
  { id: 'ai', title: 'Gen AI', subtitle: 'Future-ready thinking', colorClass: 'purple', icon: '🧠' },
  { id: 'math', title: 'Math', subtitle: 'Master number skills', colorClass: 'yellow', icon: '📐' },
  { id: 'english', title: 'English', subtitle: 'Express with impact', colorClass: 'red', icon: '✍️' },
  { id: 'science', title: 'Science', subtitle: 'Explore with curiosity', colorClass: 'pink', icon: '🔬' },
  { id: 'view-all', title: 'View All', subtitle: 'Explore all our courses', colorClass: 'light', icon: '🚀', isLink: true }
];

export default function SkillsForSuccess() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Skills for <span>Success</span></h2>
          <p className="section-subtitle">
            High-impact programs that build confidence, creativity and real-world skills in children
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.id} className={`${styles.card} ${styles[skill.colorClass]}`}>
              <div className={styles.content}>
                <h3>{skill.title}</h3>
                <p>{skill.subtitle}</p>
                <div className={styles.icon}>{skill.icon}</div>
              </div>
              {!skill.isLink && (
                <div className={styles.imageOverlay}>
                  <div className={styles.placeholderImg}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
