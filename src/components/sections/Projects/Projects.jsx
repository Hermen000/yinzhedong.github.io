import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../../../data/projects';

export default function Projects() {
  return (
    <section id="projects">
      <SectionTitle title="项目经历" subtitle="Projects" />
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
