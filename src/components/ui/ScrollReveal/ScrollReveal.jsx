import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './ScrollReveal.module.css';

export default function ScrollReveal({ children, delay = 0 }) {
  const { ref, revealed } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${revealed ? styles.revealed : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
