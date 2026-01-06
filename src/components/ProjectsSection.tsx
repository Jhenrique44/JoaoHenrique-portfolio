import { useState } from "react";
import { Card } from "./utils/card";
import { ProjectModal } from "./ProjectModal";
import { Badge } from "./utils/badge";
import { useLanguage } from "../translator/LanguageTranslator";

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
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects: Project[] = [
    {
      title: "Portfolio Angular",
      description: t("proj_angular_desc"),
      fullDescription: t("proj_angular_full"),
      image: "/images/portfolio-angular.png",
      video: "",
      tags: ["Angular", "HTML", "Typescript", "CSS"],
      liveUrl: "https://github.com/Jhenrique44/portfolio-angular",
    },
    {
      title: "Smart Fleet",
      description: t("proj_smart_desc"),
      fullDescription: t("proj_smart_full"),
      image: "/images/smart-fleet-front.png",
      video: "",
      tags: ["Angular", "Typescript", "Java", "Spring Boot", "Sass"],
      liveUrl: "https://github.com/Jhenrique44/login-page-ng",
    },
    {
      title: "Resort Website React",
      description: t("proj_resort_desc"),
      fullDescription: t("proj_resort_full"),
      image: "/images/resort.png",
      video: "",
      tags: ["React", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://github.com/Jhenrique44/Resort-yt",
    },
    {
      title: "Picpay-backend-challenge",
      description: t("proj_picpay_desc"),
      fullDescription: t("proj_picpay_full"),  
      image: "/images/Picpay-project.png",
      video: "",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Hibernate", "Docker"],
      liveUrl: "https://github.com/Jhenrique44/PicPay-backend-j",
    },
    {
      title: "QrCode Generator",
      description: t("proj_qrcode_desc"),
      fullDescription: t("proj_qrcode_full"),
      image: "/images/qr-code-project.png",
      video: "",
      tags: ["Java", "Spring Boot", "AWS", "Docker"],
      liveUrl: "https://github.com/Jhenrique44/qrcode-generator",
    }
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
