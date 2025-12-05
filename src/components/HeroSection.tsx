import { useEffect, useState } from "react";

const terminalLines = [
  "user@joaohenrique:~$ Hi!",
  "Software Engineer ",
  "",
  "user@joaohenrique:~$ ls skills",
  "Fullstack-Developer VueJs Javascript Java Springboot SQL",
  "",
  "user@joaohenrique:~$ ls learning",
  "Angular Typescript AWS",
  "user@joaohenrique:~$ ",
];

export const HeroSection = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];
    const typingTimeout = setTimeout(() => {
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
    if(charIndex + 1 < currentLine.length){
        setCharIndex(charIndex + 1);
    }else {
        setCurrentLineIndex((i) => i + 1);
        setCharIndex(0);
        setDisplayedLines((prev) => [...prev, ""]);
    }
    }, 25);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, currentLineIndex]);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const formatTerminalLine = (line: string) => {
    if (line.startsWith("user@joaohenrique")) {
      const parts = line.split("~");
      return (
        <>
          <span className="">user@joaohenrique:</span>
          <span>~</span>
          <span>{parts[1]}</span>
        </>
      );
    }
    return <span>{line}</span>;
  };
  return (
    <section>
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <h1>Hi! I'm João Henrique!</h1>
              <p>Computer Engineer, Developer and Software Architect</p>
            </div>

            <div className="">
              <div className="">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <span>Bash</span>
              </div>
              <div className="">
                <pre>
                  {displayedLines.map((line, index) => (
                    <div key={index}>
                      {formatTerminalLine(line)}
                      {index === displayedLines.length - 1 && (
                        <span className="blinking-cursor"></span>
                      )}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
            <div className="">
              <button onClick= {() => scrollToSection("contact")}>Contact</button>
              <button onClick={() => scrollToSection("projects")}>View Projects</button>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
