import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import TimelineItem from '../../ui/TimelineItem/TimelineItem';
import { internships } from '../../../data/internship';

export default function Internship() {
  return (
    <section id="internship">
      <SectionTitle title="实习经历" subtitle="Internship" />
      {internships.map((item) => (
        <TimelineItem
          key={item.id}
          dateRange={item.dateRange}
          title={item.title}
          subtitle={`${item.organization} · ${item.location}`}
          details={item.details}
        />
      ))}
    </section>
  );
}
