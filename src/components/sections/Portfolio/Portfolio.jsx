import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import { portfolioItems } from '../../../data/portfolio';
import styles from './Portfolio.module.css';

const typeLabel = { pdf: 'PDF', pptx: 'PPTX', docx: 'DOCX' };

export default function Portfolio() {
  return (
    <section id="portfolio">
      <SectionTitle title="作品集" subtitle="Portfolio" />
      <div className={styles.grid}>
        {portfolioItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <span className={`${styles.fileType} ${styles[item.type]}`}>
              {typeLabel[item.type]}
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.subtitle}>{item.subtitle}</div>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.tags}>
              {item.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <a
              className={styles.download}
              href={`/portfolio/${item.file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View / Download
              <span className={styles.arrow}>&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
