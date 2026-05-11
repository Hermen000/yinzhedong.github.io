import styles from './Tag.module.css';

export default function Tag({ label, variant = 'default' }) {
  return (
    <span className={`${styles.tag} ${variant === 'accent' ? styles.accent : ''}`}>
      {label}
    </span>
  );
}
