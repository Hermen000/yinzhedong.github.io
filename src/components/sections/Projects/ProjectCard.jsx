import styles from './Projects.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
      <div className={styles.subtitle}>{project.subtitle}</div>
      <div className={styles.meta}>
        <span className={`${styles.dateRange} en`}>{project.dateRange}</span>
        <span className={styles.role}>{project.role}</span>
      </div>
      <p className={styles.overview}>{project.overview}</p>
      <ul className={styles.contributions}>
        {project.contributions.map((c, i) => (
          <li key={i} className={styles.contribution}>{c}</li>
        ))}
      </ul>
      {project.file && (
        <a
          className={styles.viewFile}
          href={`/portfolio/${project.file}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Report &rarr;
        </a>
      )}
    </div>
  );
}
