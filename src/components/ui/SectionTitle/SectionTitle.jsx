import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <span className={`${styles.subtitle} en`}>{subtitle}</span>}
      <div className={styles.accent} />
    </div>
  );
}
