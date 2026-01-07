import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./utils/button";
import { useLanguage } from "../translator/LanguageTranslator";
import { LanguageSelection } from "./LanguageSelection";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  const menuItems = [
    { label: t("nav_home"), section: "home" },
    { label: t("nav_about"), section: "about" },
    { label: t("nav_exp"), section: "experience" },
    { label: t("nav_projects"), section: "projects" },
    { label: t("nav_skills"), section: "skills" },
    { label: t("nav_contact"), section: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* { logo} */}
          <div className="text-x2 sm:text-x1 font-bold text-crimson-700">
            <h1> João Henrique de Freitas Queiroz</h1>
          </div>
          {/* {Desktop Menu} */}
          <div className="hidden md:flex item-center space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="text-crimson-700 hover:text-mustard-600 transition-colors duration-200 font-medium text-sm px-2 py-1"
              >
                {item.label}
              </button>
            ))}
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
              <LanguageSelection />
          </div>
          {/* {Mobile Menu} */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSelection />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-8 w-8"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-3 border-t border-earth-200">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="text-left text-earth-700 hover:text-mustard-600 transition-colors duration-200 font-medium py-1 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
