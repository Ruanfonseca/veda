
import { ProjectArea as IProjectArea } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectAreaProps {
  area: IProjectArea;
}

const ProjectArea = ({ area }: ProjectAreaProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold text-primary mb-6">
        {area.title}
      </h2>
      <p className="text-muted mb-8">
        {area.description}
      </p>

      <div className="space-y-8">
        {area.projects.map((project, projectIndex) => (
          <ProjectCard key={projectIndex} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectArea;
