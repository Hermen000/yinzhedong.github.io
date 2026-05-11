import styles from './TimelineItem.module.css';

export default function TimelineItem({ dateRange, title, subtitle, details }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.dateRange} en`}>{dateRange}</div>
      <div className={styles.title}>{title}</div>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      {details && (
        <ul className={styles.details}>
          {details.map((d, i) => (
            <li key={i} className={styles.detail}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
