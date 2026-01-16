const projects = [
  {
    title: "Secret Santa Hub",
    year: "2024",
    description: "A platform for holiday celebrations or team activities gift-giving. Participants get matched and notified via email.",
    tech: ["Next.js", "Python", "Email Integration"],
  },
  {
    title: "Rust Web Scraper",
    year: "Archived",
    description: "CLI web scraper in Rust that retrieves the cheapest product for a search term from a price-comparison site (undisclosed). Not actively maintained.",
    tech: ["Rust", "Cargo", "Web Scraping", "CLI"],
  },
];

const nestedSetExample = {
  title: "Nested set tree model",
  subtitle: "Hierarchy indexed for fast subtree reads",
  tree: [
    "Root (1,30)",
    "|-- Orders (2,15)",
    "|   |-- EU (3,8)",
    "|   |   |-- Order 1 (4,5)",
    "|   |   `-- Order 2 (6,7)",
    "|   `-- US (9,14)",
    "|       |-- Order 1 (10,11)",
    "|       `-- Order 2 (12,13)",
    "`-- Returns (16,29)",
    "    |-- Open (17,22)",
    "    |   |-- Order 1 (18,19)",
    "    |   `-- Order 2 (20,21)",
    "    `-- Closed (23,28)",
    "        |-- Order 1 (24,25)",
    "        `-- Order 2 (26,27)",
  ],
  rows: [
    { node: "Root", left: 1, right: 30 },
    { node: "Orders", left: 2, right: 15 },
    { node: "EU", left: 3, right: 8 },
    { node: "EU / Order 1", left: 4, right: 5 },
    { node: "EU / Order 2", left: 6, right: 7 },
    { node: "US", left: 9, right: 14 },
    { node: "US / Order 1", left: 10, right: 11 },
    { node: "US / Order 2", left: 12, right: 13 },
    { node: "Returns", left: 16, right: 29 },
    { node: "Open", left: 17, right: 22 },
    { node: "Open / Order 1", left: 18, right: 19 },
    { node: "Open / Order 2", left: 20, right: 21 },
    { node: "Closed", left: 23, right: 28 },
    { node: "Closed / Order 1", left: 24, right: 25 },
    { node: "Closed / Order 2", left: 26, right: 27 },
  ],
  query: "SELECT node FROM order_tree WHERE `left` > 9 AND `right` < 14 ORDER BY `left`;",
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-narrow">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4 opacity-0 animate-fade-in">
          <span className="text-primary">Projects</span>
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
                    className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div
          className="mt-12 rounded-2xl border border-border bg-gradient-to-br from-background via-card to-muted/40 p-6 md:p-8 shadow-lg shadow-primary/5 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-primary text-xs tracking-widest uppercase font-medium">
                Case Study
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-heading">
                {nestedSetExample.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                {nestedSetExample.subtitle}
              </p>
            </div>
            <span className="text-xs font-mono text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
              left / right indexes
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-background/80 p-4 md:p-5 shadow-sm">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Tree view
              </div>
              <pre className="text-xs leading-relaxed font-mono text-foreground/80 whitespace-pre overflow-x-auto">
                {nestedSetExample.tree.join("\n")}
              </pre>
            </div>
            <div className="rounded-xl border border-border bg-background/80 p-4 md:p-5 shadow-sm">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Index map
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-3 text-xs font-mono text-muted-foreground px-2">
                <span>Node</span>
                <span>left</span>
                <span>right</span>
              </div>
              <div className="mt-2 space-y-1 text-xs font-mono text-foreground/80">
                {nestedSetExample.rows.map((row, rowIndex) => (
                  <div
                    key={row.node}
                    className={`grid grid-cols-[minmax(0,1fr)_auto_auto] gap-3 rounded-md px-2 py-1 ${rowIndex % 2 === 0 ? "bg-muted/40" : "bg-transparent"}`}
                  >
                    <span>{row.node}</span>
                    <span>{row.left}</span>
                    <span>{row.right}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Example query (descendants under US):{" "}
            <code className="rounded bg-muted/60 px-2 py-1 font-mono text-[11px] text-foreground/80">
              {nestedSetExample.query}
            </code>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
