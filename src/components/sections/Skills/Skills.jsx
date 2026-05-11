import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Tag from '../../ui/Tag/Tag';
import { skillCategories } from '../../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills">
      <SectionTitle title="专业技能" subtitle="Skills" />
      <div className={styles.categories}>
        {skillCategories.map((cat) => (
          <div key={cat.category}>
            <div className={`${styles.categoryLabel} en`}>{cat.category}</div>
            <div className={styles.tags}>
              {cat.items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
