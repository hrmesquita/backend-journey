import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";

const experiences = [
  {
    company: "MaioLabs",
    role: "Software & AI Engineer",
    period: "2026 - Present",
    highlights: [
      "Building the systems behind production AI, with backend architecture, security, reliability, and maintainability treated as first-class engineering concerns.",
      "Working on multi-tenant architectures where data models, authentication, permissions, queries, and logging are designed around explicit tenant boundaries from the start.",
      "Deepening focus on identity and access management, tenant isolation, and auditability for AI systems that serve multiple roles and handle sensitive data.",
    ],
  },
  {
    company: "Indra via CodeWin",
    role: "Software Engineer",
    period: "Jun 2024 - 2026",
    highlights: [
      "Built backend services for a port logistics management platform using Java and Spring Boot, integrating external client APIs and exposing REST endpoints. Implemented end-to-end backend features, including data ingestion, transformation, persistence, and API design.",
      "Contributed to QA-driven release cycles with frequent deployments, prioritizing code readability, maintainability, and test coverage (>85%)",
      "Collaborated with analysts and client teams to ensure correct integration and data handling",
    ],
  },
  {
    company: "Critical TechWorks",
    role: "Software Engineer",
    period: "Mar 2023 - Mar 2024",
    highlights: [
      "Designed and implemented a high-throughput Quarkus microservice for inter-service communication in a distributed platform.",
      "Designed and implemented a nested set (tree) data model to efficiently store and query hierarchical JSON data, optimizing read performance for complex tree-based queries",
      "Implemented asynchronous validation and persistence workflows to reduce blocking operations and improve responsiveness",
      "Benchmarked JSON deserialization approaches and identified a ~32% performance difference in micro-benchmarks, contributing to performance-informed design decisions",
      "Built CI/CD pipelines with Docker and Jenkins, ensuring >85% test coverage via automated unit and integration tests",
      "Deployed and operated services in a multi-environment Kubernetes setup (test / int / prod), collaborating closely with QA, PM, and UX",
    ],
  },
];

const Experience = () => {
  const timelineRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = timelineRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-experience-item]"));
    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      items.forEach((item) => {
        const line = item.querySelector<HTMLElement>("[data-experience-line]");
        const dot = item.querySelector<HTMLElement>("[data-experience-dot]");
        const content = item.querySelector<HTMLElement>("[data-experience-content]");

        if (line) {
          line.style.opacity = "1";
          line.style.transform = "scaleY(1)";
        }
        if (dot) {
          dot.style.opacity = "1";
        }
        if (content) {
          content.style.opacity = "1";
          content.style.transform = "none";
        }
      });
      return;
    }

    const tl = createTimeline({
      defaults: { duration: 450, easing: "out(2)" },
      autoplay: false,
    });

    tl.label("start");

    items.forEach((item, index) => {
      const line = item.querySelector<HTMLElement>("[data-experience-line]");
      const dot = item.querySelector<HTMLElement>("[data-experience-dot]");
      const content = item.querySelector<HTMLElement>("[data-experience-content]");
      const startAt = index === 0 ? "start" : "<+=50";

      if (line) {
        tl.add(
          line,
          { opacity: [0, 1], scaleY: [0, 1], transformOrigin: "top center" },
          startAt
        );
      }

      if (dot) {
        tl.add(dot, { opacity: [0, 1] }, "<+=50");
      }

      if (content) {
        tl.add(content, { opacity: [0, 1], translateY: [16, 0] }, "<+=30");
      }
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tl.play();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      tl.pause();
    };
  }, []);

  return (
    <section id="experience" className="section-padding bg-card" ref={timelineRef}>
      <div className="container-narrow">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4 opacity-0 animate-fade-in">
          <span className="text-primary">Experience</span>
        </h2>
        <p
          className="text-muted-foreground mb-12 max-w-2xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Where I've been shaping systems and shipping code.
        </p>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0" data-experience-item>
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div
                  className="absolute left-[7px] top-3 bottom-0 w-px bg-timeline-line origin-top scale-y-0 opacity-0"
                  data-experience-line
                />
              )}

              {/* Timeline dot */}
              <div
                className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-timeline-dot border-4 border-background transition-transform duration-300 hover:scale-125 opacity-0"
                data-experience-dot
              />

              <div className="opacity-0 translate-y-4" data-experience-content>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-heading">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-1.5 text-xs">-</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
