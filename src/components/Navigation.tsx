import { useState } from "react";
import { Menu, X } from "lucide-react";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  const menuItems = [{ label: "Home", section: "home" }];

  return (
    <nav className="">
      <div className="container">
        <div className="">
          {/* { logo} */}
          <h1> João Henrique de Freitas Queiroz</h1>
        </div>
        {/* {Desktop Menu} */}
        <div className="">
          {menuItems.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className="button menu-itens"
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* {Mobile Menu} */}
        <button
          // size="icon"
          className="md:hidden "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div className="">
        <div className="">
          {menuItems.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className=""
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
