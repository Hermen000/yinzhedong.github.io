import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 尹哲栋. All rights reserved.</p>
      <p className="en text-caption">Built with React + Vite</p>
      <span className={`${styles.backToTop} en`} onClick={scrollToTop}>
        &uarr; Back to top
      </span>
    </footer>
  );
}
