import { useState } from 'react';
import styles from './Navbar.module.css';

const sections = [
  { id: 'hero', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'skills', label: '技能' },
  { id: 'projects', label: '项目' },
  { id: 'internship', label: '实习' },
  { id: 'extracurricular', label: '实践' },
  { id: 'portfolio', label: '作品集' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.logo}>YZD</span>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {sections.map((s) => (
            <a
              key={s.id}
              className={styles.link}
              onClick={() => handleClick(s.id)}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
