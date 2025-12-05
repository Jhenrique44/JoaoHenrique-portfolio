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
  const experiences: Experience[] = [
    {
      title: "",
      role: "",
      image: "",
      url: "",
      period: "",
    },
  ];

  const handleExperienceClick = (url: string) => { 
    if(url !== "#") window.open(url, '_blank');
  }
  const handleCVClick = () => { 
    window.open('')
  }
  return (
    <section>
      <div className="">
        <h2>Some of my experiences</h2>
        <div className="">
          {experiences.map((experience, index) => (
            <Card
                key={index}
                className=""
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleExperienceClick(experience.url)}
            >
              <div className="">
                <div className="">
                  <img src="" alt="" />
                </div>
                <h3>{experience.title}</h3>
                <p>{experience.role}</p>
                {experience.period && <p className="">{experience.period}</p>}
              </div>
            </Card>
          ))}
        </div>
        <div className="">
          <div className="">
            <span></span>
          </div>
          <div className="">
            <Button onClick={handleCVClick}>
                Here! Download my CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
