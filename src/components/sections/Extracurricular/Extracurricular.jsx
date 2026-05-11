import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import { activities } from '../../../data/extracurricular';
import styles from './Extracurricular.module.css';

export default function Extracurricular() {
  return (
    <section id="extracurricular">
      <SectionTitle title="课外实践" subtitle="Activities" />
      <div className={styles.grid}>
        {activities.map((act) => (
          <div key={act.id} className={styles.card}>
            <h3 className={styles.title}>{act.title}</h3>
            <div className={styles.org}>{act.organization}</div>
            <ul className={styles.highlights}>
              {act.highlights.map((h, i) => (
                <li key={i} className={styles.highlight}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
