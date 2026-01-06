const projects = [
  {
    title: "Secret Santa Hub",
    year: "2024",
    description: "A platform for holiday celebrations or team activities gift-giving. Participants get matched and notified via email.",
    tech: ["Next.js", "Python", "Email Integration"],
  },
  {
    title: "Project TBD",
    year: "Coming Soon",
    description: "More projects in the works. Check back soon for updates on what I'm building.",
    tech: ["To be announced"],
    placeholder: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-narrow">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4 opacity-0 animate-fade-in">
          Projects
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Side projects and experiments outside of work.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article 
              key={index}
              className={`group p-6 rounded-lg border border-border bg-background hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in ${project.placeholder ? 'opacity-60' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-sans text-lg font-semibold text-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground font-mono">
                  {project.year}
                </span>
              </div>
              
              <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, tIndex) => (
                  <span 
                    key={tIndex}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                    {tIndex !== project.tech.length - 1 && <span className="ml-2 text-border">·</span>}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
