import { useLanguage } from "../translator/LanguageTranslator";
import { Button } from "./utils/button";
// import { Button } from "./utils/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./utils/dialog";
interface ExpModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: {
    title: string;
    role: string;
    image: string;
    description: string;
    url: string;
    period?: string;
  } | null;
}
export const ExpModal = ({ isOpen, onClose, experience }: ExpModalProps) => {
  const { t } = useLanguage();
  if (!experience) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7x1 max-h[80vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-earth-900 mb-4">
            {experience.role}
            <p className="text-base font-semibold mb-2"> { experience.title} </p>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex justify-center items-center">
            <img
              src={experience.image || experience.image}
              alt={experience.title}
              className="w-full max-h-[300px] object-contain rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <h3 className="text-base font-semibold text-earth-900">
                {t("exp_modal_about")}
              </h3>
              <h3 className="text-base font-semibold text-earth-900">
                {experience.period}
              </h3>
            </div>
            <p>{experience.description}</p>
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => window.open(experience.url, "_blank")}
                 className="bg-crimson-700 hover:bg-[#B55338] text-white">
              {t("exp_modal_link")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
