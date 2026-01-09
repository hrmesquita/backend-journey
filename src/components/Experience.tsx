const experiences = [
  {
    company: "Indra via CodeWin",
    role: "Software Engineer",
    period: "Jun 2024 — Present",
    description: "Built backend services for a port logistics management platform using Java and Spring Boot, integrating external client APIs and exposing REST endpoints. Implemented end-to-end backend features, including data ingestion, transformation, persistence, and API design.",
    highlights: [
      "Contributed to QA-driven release cycles with frequent deployments, prioritizing code readability, maintainability, and test coverage (>85%)",
      "Collaborated with analysts and client teams to ensure correct integration and data handling",
    ],
  },
  {
    company: "Critical TechWorks",
    role: "Software Engineer",
    period: "Mar 2023 — Mar 2024",
    description: "Designed and implemented a high-throughput Quarkus microservice for inter-service communication in a distributed platform.",
    highlights: [
      "Implemented asynchronous validation and persistence workflows to reduce blocking operations and improve responsiveness",
      "Benchmarked JSON deserialization approaches and identified a ~32% performance difference in micro-benchmarks, contributing to performance-informed design decisions",
      "Designed data ingestion logic that parsed and persisted hierarchical JSON structures for efficient querying and downstream processing",
      "Built CI/CD pipelines with Docker and Jenkins, ensuring >85% test coverage via automated unit and integration tests",
      "Deployed and operated services in a multi-environment Kubernetes setup (test / int / prod), collaborating closely with QA, PM, and UX",
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
