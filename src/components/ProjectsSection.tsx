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
}

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
      liveUrl: ""
    },
  ];
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  return (
    <section>
      <div className="">
        <h2>Latest Projects</h2>

        <div className="">
          {projects.map((project, index) => (
            <Card
              key={index}
              className=""
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="">
                <div className="">
                  <img src="" alt="" />
                </div>
                <h3> {project.title} </h3>
                <p> {project.description}</p>
                <div className="">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="">
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
