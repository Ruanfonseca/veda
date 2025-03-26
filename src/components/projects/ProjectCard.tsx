
import { Project } from "@/types/project";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Function to determine the image source for the project
  const getProjectImage = () => {
    // Use the first image from the project.images array if available
    if (project.images && project.images.length > 0) {
      return project.images[0];
    }
    
    // If no image is provided, return a placeholder
    return '/placeholder.svg';
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col">
        <div className="flex-1 p-6">
          <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2 border-gray-100">
            {project.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {project.years && <p><span className="font-medium text-accent">Anos:</span> {project.years}</p>}
              <p><span className="font-medium text-accent">Objetivo:</span> {project.objective}</p>
              <p><span className="font-medium text-accent">Cliente:</span> {project.client}</p>
              
              {/* Image container with proper aspect ratio and object-fit to prevent cut-off */}
              <div className="mt-4">
                <div className="w-full h-48 md:h-56 overflow-hidden rounded-lg">
                  <AspectRatio ratio={16 / 9} className="bg-secondary">
                    <img 
                      src={getProjectImage()} 
                      alt={`${project.title}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </AspectRatio>
                </div>
              </div>
              
              {project.partners && (
                <p><span className="font-medium text-accent">Parceiros:</span> {project.partners}</p>
              )}
            </div>
            <div className="space-y-3">
              {project.reach && <p><span className="font-medium text-accent">Alcance:</span> {project.reach}</p>}
              <p><span className="font-medium text-accent">Regiões:</span> {project.regions}</p>
              <p><span className="font-medium text-accent">Impacto:</span> {project.impact}</p>
              <p><span className="font-medium text-accent">Participação da veda:</span> {project.participation}</p>
              <p><span className="font-medium text-accent">Documentos produzidos:</span> {project.Productdocuments}</p>

              {project.publication && (
                <p>
                  <span className="font-medium text-accent">Publicação:</span>{" "}
                  <a
                    href={project.publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent hover:underline"
                  >
                    {project.publication.title}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
