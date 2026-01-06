import { useLanguage } from "../translator/LanguageTranslator";
import { Button } from "./utils/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./utils/dialog";
interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal = ({ isOpen, onClose }: CvModalProps) => {
  const { t } = useLanguage();
  const handleCVClick = ({ version }: { version: string }) => {
    if (version == "pt") {
        return window.open("/JoaoHenriqueFQDev.pdf", "_blank");
    } return window.open("/JoaoHFQueirozDev-Eng.pdf", "_blank");
    
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {t('cv_modal_title')}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex gap-2 items-center">
            <Button
              className="bg-white text-brown-800 hover:bg-brown-300 border-2 border-white font-semibold text-base md:text-lg px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              onClick={() => handleCVClick({ version: "pt" })}
            >
            {t('cv_modal_btn_pt')} 
            </Button>
            <Button
              className="bg-white text-brown-800 hover:bg-brown-300 border-2 border-white font-semibold text-base md:text-lg px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              onClick={() => handleCVClick({ version: "en" })}
            >
              {t('cv_modal_btn_en')} 
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
