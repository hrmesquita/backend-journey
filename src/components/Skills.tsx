const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "SQL", "JavaScript", "Python", "Go"],
  },
  {
    title: "Backend & Architecture",
    skills: ["Microservices", "REST APIs", "Event-Driven Systems", "Clean Architecture", "Distributed Systems"],
  },
  {
    title: "Performance & Reliability",
    skills: ["System Throughput Optimization", "Async Processing", "Test Automation", "Code Quality"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "CI/CD", "Git", "SonarQube"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Neo4j", "Redis", "MongoDB"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4 opacity-0 animate-fade-in">
          <span className="text-primary">Skills</span> & Tools
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          The technologies I work with daily and the ones I'm exploring.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h3 className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1.5 bg-skill-bg text-foreground/80 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
