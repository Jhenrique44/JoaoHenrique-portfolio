import { useState } from "react";
import { CvModal } from "./CvModal";
import { Button } from "./utils/button";
import { Card } from "./utils/card";

type Experience = {
  title: string;
  role: string;
  image: string;
  url: string;
  period?: string;
};

export const ExperienceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const experiences: Experience[] = [
    {
      title: "Huawei Technologies Co., Ltd.",
      role: "Software Developer - Junior",
      image: "/images/Huawei.png",
      url: "https://www.huawei.com/en/",
      period: "Aug-2023 - Mar-2025",
    },
    {
      title: "Huawei Technologies Co., Ltd.",
      role: "Web Developer Intern",
      image: "/images/Huawei.png",
      url: "https://www.huawei.com/en/",
      period: "Aug-2021 - Jul-2023",
    },
  ];

  const handleExperienceClick = (url: string) => {
    if (url !== "#") window.open(url, "_blank");
  };
  const handleCVClick = () => {
    setIsModalOpen(true);
  };
  return (
    <section id="experience" className="py-20 px-6 bg-crimson-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-luckiest text-white text-center mb-15 animate-slide-up mb-16">
          Some of my experiences
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="bg-[#3b1414] border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleExperienceClick(experience.url)}
            >
              <div className="p-6">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-earth-100">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-earth-100 mb-2">
                  {experience.title}
                </h3>
                <p className="text-white text-sm font-medium mb-2">
                  {experience.role}
                </p>
                {experience.period && (
                  <p className="text-earth-400 text-xs">{experience.period}</p>
                )}
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B55338] mb-4 animate-bounce-gentle">
            <span className="text-white text-xl">↓</span>
          </div>
          <div>
            <Button
              className="bg-white text-brown-800 hover:bg-brown-300 border-2 border-white font-semibold text-base md:text-lg px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              onClick={handleCVClick}
            >
              Here! Download my CV
            </Button>
          </div>
        </div>
      </div>
      <CvModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      ></CvModal>
    </section>
  );
};
