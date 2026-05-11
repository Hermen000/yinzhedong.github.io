import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import TimelineItem from '../../ui/TimelineItem/TimelineItem';
import { education } from '../../../data/education';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about">
      <SectionTitle title="关于我" subtitle="About Me" />
      <div className={styles.about}>
        <div>
          <p className={styles.intro}>
            我是<strong>深圳大学金融科技（Fintech）专业</strong>大二学生，
            对<strong>商业分析与数据科学</strong>有浓厚兴趣。
            具备扎实的战略分析框架（SWOT、VRIO、Porter's Five Forces、Ansoff 矩阵）与
            数据处理能力（Excel、SQL、Python、STATA 计量分析）。
            曾参与瑞银金融精英挑战赛、美团商业分析赛及多个企业案例分析（追一科技、Natura & Co、
            玫瑰产业价值链），多次承担核心分析角色。
            善于将数据分析转化为商业洞察，具备全英文商业报告与学术论文写作经验。
          </p>
        </div>
        <div>
          <TimelineItem
            dateRange={education.period}
            title={`${education.university} · ${education.major} (${education.majorEn})`}
            subtitle={education.degree}
            details={education.honors}
          />
          <div className={styles.honors}>
            {education.honors.map((h, i) => (
              <span key={i} className={styles.honorBadge}>{h}</span>
            ))}
          </div>
          <p className={styles.englishNote}>
            英语能力：{education.englishLevel} — {education.englishNote}
          </p>
        </div>
      </div>
    </section>
  );
}
