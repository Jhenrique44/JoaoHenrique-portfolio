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
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3x1 max-h-[80vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-2x1 font-bold text-earth-800 mb-4">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex jusitfy-center items-center">
            {project.video ? (
              <video
                src={project.video}
                loop
                autoPlay
                muted
                controls={false}
                poster={project.modalImage || project.image}
                className="w-full max-h-[300px] object-contain rounded-lg"
              />
            ) : (
              <img
                src={project.modalImage || project.image}
                alt={project.title}
                className="w-full max-h-[300px] object-contain rounded-lg"
              />
            )}
          </div>

          {/* {Description} */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-earth-800">
              About this project
            </h3>
            <p className="text-sm text-earth-700">{project.fullDescription}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-earth-200 text-earth-800 hover:bg-earth-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            {project.liveUrl && (
              <Button
                onClick={() => handleLinkClick(project.liveUrl)}
                className="bg-earth-600 hoveR:bg-earth-700 text-white"
              >
                View Website
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                onClick={() => handleLinkClick(project.githubUrl)}
                className="border-earth-600 text-earth-600 hover:bg-earth-50"
              >
                View on GitHub
              </Button>
            )}
            {project.youtubeUrl && (
              <Button
                variant="outline"
                onClick={() => handleLinkClick(project.youtubeUrl)}
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                Watch on YouTube
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
