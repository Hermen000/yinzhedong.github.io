import { profile } from '../../../data/profile';
import portrait from '../../../assets/images/portrait.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <img
        className={styles.portrait}
        src={portrait}
        alt={profile.name}
        width="180"
        height="180"
      />
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.tagline}>{profile.tagline}</p>
      <div className={styles.contact}>
        <span className={styles.contactItem}>
          <span className={styles.contactIcon}>✉</span>
          {profile.email}
        </span>
        <span className={styles.contactItem}>
          <span className={styles.contactIcon}>✆</span>
          {profile.phone}
        </span>
        <span className={styles.contactItem}>
          <span className={styles.contactIcon}>⌂</span>
          {profile.location}
        </span>
      </div>
      <div className={styles.scrollIndicator}>
        <span className="en">Scroll</span>
        <div className={styles.chevron} />
      </div>
    </section>
  );
}
