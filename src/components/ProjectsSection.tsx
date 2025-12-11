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
      title: "Portfolio Angular",
      description: "This is a portfolio made with Angular.",
      fullDescription:
        "This project is a portfolio made with Angular to showcase my skills and learning progress in this framework.",
      image: "/images/portfolio-angular.png",
      video: "",
      tags: ["Angular", "HTML", "Typescript", "CSS"],
      liveUrl: "https://github.com/Jhenrique44/portfolio-angular",
    },
    {
      title: "Smart Fleet",
      description: "Fullstack project with Spring Boot and Angular.",
      fullDescription:
        "Smart Fleet is a modern fleet-tracking application designed to monitor vehicles in real time and streamline fleet operations. It provides a secure login experience, a clean user interface, and a reliable API for managing and accessing tracking data. Built with Angular on the frontend and Spring Boot on the backend, Smart Fleet delivers a scalable foundation for location tracking, vehicle status monitoring, and future fleet-management features.",
      image: "/images/smart-fleet-front.png",
      video: "",
      tags: ["Angular", "Typescript", "Java", "Spring Boot", "Sass"],
      liveUrl: "https://github.com/Jhenrique44/login-page-ng",
    },
  ];
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  return (
    <section id="projects" className="py-20 px-6 bg-bege">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-luckiest text-center mb-16 animate-slide-up">
          Latest Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#3b1414] backdrop-blur-sm  border-white/20 hover:shadow-xl transition-transform duration-300 hover:scale-110 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="p-6">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-crimson-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:sacle-110"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
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
                      className="bg-crimson-500 text-moss-100 gover:bg-moss-600"
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
