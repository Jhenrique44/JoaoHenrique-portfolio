import { useState } from "react";
import { Card } from "./utils/card";
import { ProjectModal } from "./ProjectModal";
import { Badge } from "./utils/badge";

type Project = {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  video?: string;
  tags: string[];
  liveUrl?: string;
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects: Project[] = [
    {
      title: "Project One",
      description: "This is the first project.",
      fullDescription: "This is the full description of the first project.",
      image: "",
      video: "",
      tags: [],
      liveUrl: "",
    },
  ];
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  return (
    <section id="projects" className="py-20 px-6 bg-bege">
      <div className="container mx-auto max-w-6x1">
        <h2 className="text-4x1 lg:text-5x1 font-luckiest text-center mb-16 animate-slide-up">
          Latest Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#5b2c06] backdrop-blur-sm  border-white/20 hover:bg-[#a1765b] cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="p-6">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-moss-800">
                  <img
                    src=""
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-300 hover:sacle-110"
                  />
                </div>
                <h3 className="text-2x1 font-bold text-white mb-4">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-white mb-6 leading-relaxed">
                  {" "}
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-moss-700 text-moss-100 gover:bg-moss-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};
