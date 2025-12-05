export const SkillsSection = () => { 
    const skillCategories = [ 
    {
        title: " ",
        skills: [ { name: "", icon: ""}]

    },
    {
        title: " ",
        skills: [ { name: "", icon: ""}]
    },
    {
        title: " ",
        skills: [ { name: "", icon: ""}]
    },
    { 
        title: " ",
        skills: [ { name: "", icon: ""}]
    }
    ]

    return (
        <section>
            <div className="">
                <h2>Featured Skills</h2>
            <div className="">
                {skillCategories.map((category, categoryIndex) =>(
                    <div key= { categoryIndex } className="" style={{ animationDelay: `${categoryIndex * 0.1}s`}}>
                        <h3>{ category.title }</h3>
                        <div className="">
                            { category.skills.map((skill, skillIndex) => (
                                <div key= { skillIndex } className="" style={{animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`}}>
                                    <span style={{ animationDelay: `${skillIndex * 0.02}s`}}>{ skill.icon }</span>
                                    <span>{ skill.name }</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}
