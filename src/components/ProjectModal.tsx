import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./utils/dialog";
import { Button } from "./utils/button";
import { Badge } from "./utils/badge";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    modalImage?: string;
    video?: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    youtubeUrl?: string;
  } | null;
}
export const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) => {
  if (!project) return null;

  const handleLinkClick = (url?: string) => { 
    window.open(url, "_blank");
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="">
            {project.video ? (
              <video
                src={project.video}
                loop
                autoPlay
                muted
                controls={false}
                poster={project.modalImage || project.image}
                className=""
              />
            ) : (
              <img
                src={project.modalImage || project.image}
                alt={project.title}
              />
            )}
          </div>

          {/* {Description} */}
          <div className="">
            <h3>About this project</h3>
            <p>{project.fullDescription}</p>
          </div>
          <div className="">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="">
            {project.liveUrl && (
                <Button onClick={() => handleLinkClick(project.liveUrl)} className="">
                View Website
                </Button>
            )}
            {project.githubUrl && (
                <Button variant="outline" onClick={()=> handleLinkClick(project.githubUrl)}>
                    View on GitHub
                </Button>
            )}
            { project.youtubeUrl && (
                <Button variant="outline" onClick={()=> handleLinkClick(project.youtubeUrl)}>
                    Watch on YouTube
                </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
