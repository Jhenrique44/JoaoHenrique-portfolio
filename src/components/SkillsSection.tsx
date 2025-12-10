export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "💛" },
        { name: "C/C++", icon: "⚡" },
        { name: "Java", icon: "☕" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "HTML5", icon: "🧡" },
        { name: "Wordpress", icon: "🌐" },
        { name: "Node.js", icon: "💚" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "📊" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💙" },
        { name: "Figma", icon: "🎨" },
      ],
    },
    {
      title: "Other Technologies",
      skills: [
        { name: "MySQL", icon: "🐬" },
        { name: "Linux", icon: "🐧" },
        { name: "Arduino", icon: "🔧" },
        { name: "Power BI", icon: "📶" },
      ],
    },
  ];
  return (
    <section id="skills" className="py-20 bg-crimson-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-luckiest text-white text-center mb-16 animate-slide-up">
          Featured Skills
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
                    <span
                      className="text-2xl animate-bounce-gentle"
                      style={{ animationDelay: `${skillIndex * 0.02}s` }}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-earth-700 font-medium">
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
