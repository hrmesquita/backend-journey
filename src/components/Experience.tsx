const experiences = [
  {
    company: "Indra via CodeWin",
    role: "Software Engineer",
    period: "Jun 2024 — Present",
    description: "Building backend services for a port logistics management platform using Java and Spring Boot. Implementing end-to-end features from data ingestion to API design.",
    highlights: [
      "Integrating external client APIs and exposing REST endpoints",
      "Contributing to QA-driven release cycles with >85% test coverage",
      "Collaborating with analysts and client teams on data handling",
    ],
  },
  {
    company: "Critical TechWorks",
    role: "Software Engineer",
    period: "Mar 2023 — Mar 2024",
    description: "Designed and implemented high-throughput microservices for inter-service communication in a distributed platform.",
    highlights: [
      "Built Quarkus microservice handling async validation and persistence",
      "Benchmarked JSON deserialization with ~32% performance improvement",
      "Built CI/CD pipelines with Docker and Jenkins",
      "Deployed services in multi-environment Kubernetes setup",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container-narrow">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4 opacity-0 animate-fade-in">
          <span className="text-primary">Experience</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Where I've been shaping systems and shipping code.
        </p>
        
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 pb-12 last:pb-0 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[7px] top-3 bottom-0 w-px bg-timeline-line" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-timeline-dot border-4 border-background transition-transform duration-300 hover:scale-125" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-sans text-lg font-semibold text-heading">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
