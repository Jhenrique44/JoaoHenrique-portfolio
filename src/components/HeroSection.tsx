import { useEffect, useMemo, useState } from "react";
import { Button } from "./utils/button";
import { useLanguage } from "../translator/LanguageTranslator";

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const terminalLines = useMemo(
    () => [
      "user@joaohenrique:~$ Hi!",
      t("term_line1"),
      "",
      "user@joaohenrique:~$ ls skills",
      t("term_line2"),
      "",
      "user@joaohenrique:~$ ls learning",
      t("term_line3"),
      "user@joaohenrique:~$ ",
    ],
    [t]
  );
  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCharIndex(0);
  }, [language]);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];
    const typingTimeout = setTimeout(() => {
      if (currentLine === "") {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] = "";
          return updated;
        });
        setCurrentLineIndex(currentLineIndex + 1);
        setCharIndex(0);
        return;
      }
      const updatedLine = currentLine.slice(0, charIndex + 1);

      //   const updatedLines = [...displayedLines];
      //   updatedLines[currentLineIndex] = updatedLine;
      //   setDisplayedLines(updatedLines);

      //   if (charIndex + 1 < currentLine.length) {
      //     setCharIndex(charIndex + 1);
      //   } else {
      //     setCurrentLineIndex(currentLineIndex + 1);
      //     setCharIndex(0);
      //   }

      setDisplayedLines((prev) => {
        const updatedLines = [...prev];
        updatedLines[currentLineIndex] = updatedLine;
        return updatedLines;
      });
      if (charIndex + 1 < currentLine.length) {
        setCharIndex(charIndex + 1);
      } else {
        setCurrentLineIndex((i) => i + 1);
        setCharIndex(0);
        setDisplayedLines((prev) => [...prev, ""]);
      }
    }, 25);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, currentLineIndex, terminalLines]);

  useEffect(() => {
    if (displayedLines.length < terminalLines.length) {
      setDisplayedLines((prev) => [...prev, ""]);
    }
  }, [currentLineIndex, terminalLines]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const formatTerminalLine = (line: string) => {
    if ( line &&line.startsWith("user@joaohenrique")) {
      const parts = line.split("~");
      return (
        <>
          <span className="text-green-400">user@joaohenrique:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">{parts[1]}</span>
        </>
      );
    }
    return <span>{line}</span>;
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-0 gradient-crimson-dark overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animite-fade-in">
            <div className="text-white">
              <h1
                className="text-4xl lg:text-5xl font-bold mb-4 animate-slide-up whitespace-nowrap"
                style={{ animationDelay: "0.2s" }}
              >
                {t("hero_greeting")}
              </h1>
              <p
                className="textxl lg:text-2xl text-white/90 mb-8 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                {t("hero_role")}
              </p>
            </div>

            <div
              className="terminal max-2xl animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-gray-300 text-sm ml-2">Bash</span>
              </div>
              <div className="terminal-content">
                <pre className="whitespace-pre-wrap text-white text-left">
                  {displayedLines.map((line, index) => (
                    <div key={index}>
                      {formatTerminalLine(line)}
                      {index === displayedLines.length - 2 && (
                        <span className="blinking-cursor mb-1"></span>
                      )}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
            <div
              className="flex flex-wrap gap-4 animate-slide-up mt-12 justify-center md:justify-start px-4"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-[#551b1b] text-white hover:bg-[#B55338] border-2 border-[#5B2C06] font-medium"
              >
                {t('hero_btn_contact')}
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-[#551b1b] text-white hover:bg-[#B55338] border-2 border-[#5B2C06] font-medium"
              >
                {t('hero_btn_projects')}
              </Button>
            </div>
          </div>
          <div
            className="flex gap-4 animate-slide-up mt-8 justify-start md:justify-center lg:justify-start px-4"
            style={{ animationDelay: "0.6s" }}
          >
            <div
              className="flex justify-center lg:justify-end items-end animte-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="w-[300px] sm:w-[360px] md:w-[420px] lg:w-[500px] xl:w-[580px] ">
                <img
                  src="/images/jh-backgorund-red.png"
                  alt="João Henrique"
                  className="w-full h-auto object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
