import { useLanguage } from "../translator/LanguageTranslator";

export const SkillsSection = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: t('skill_cat_lang'),
      skills: [
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "Java", icon: "/icons/java.svg" },
        { name: "SQL", icon: "/icons/sql.svg" },
        { name: "Typescript", icon: "/icons/type.svg" },
      ],
    },
    {
      title: t('skill_cat_web'),
      skills: [
        { name: "Vue", icon: "/icons/vue.svg" },
        { name: "SpringBoot", icon: "/icons/spring.svg" },
        { name: "AWS", icon: "/icons/aws.svg" },
        { name: "Angular", icon: "/icons/angular.svg" },
      ],
    },
    {
      title: t('skill_cat_tools'),
      skills: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "Postman", icon: "/icons/postman.svg" },
        { name: "Power BI", icon: "/icons/power.svg" },
        { name: "Figma", icon: "/icons/figma.svg" },
      ],
    },
    {
      title: t('skill_cat_other'),
      skills: [
        { name: "HTML5", icon: "/icons/html.svg" },
        { name: "CSS3", icon: "/icons/css.svg" },
        { name: "Sass", icon: "/icons/sass.svg" },
        { name: "React" , icon: "/icons/react.svg" },
      ],
    },
  ];
  return (
    <section id="skills" className="py-20 bg-crimson-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-luckiest text-white text-center mb-16 animate-slide-up">
          {t('skills_title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-0105 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-earth-800 mb-6 border-b border-earth-200 pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 p-3 rounded-lg bg-earth-50 hover:bg-earth-100 transition-all duration-200 hover:scale-105 animate-fade-in"
                    style={{
                      animationDelay: `${
                        categoryIndex * 0.1 + skillIndex * 0.05
                      }s`,
                    }}
                  >
                    {/* <span
                      className="text-2xl animate-bounce-gentle"
                      style={{ animationDelay: `${skillIndex * 0.02}s` }}
                    >
                      {skill.icon}
                    </span> */}
                    <img className="text-2xl wd-10 h-10" 
                    src={ skill.icon} alt={skill.name} style={{animationDelay: `${skillIndex * 0.02}s`}}/>
                    <span className="text-black font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
