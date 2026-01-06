const education = [
  {
    title: "Java Foundations Associate",
    institution: "Oracle",
    year: "2024",
  },
  {
    title: "Cybersecurity 101",
    institution: "Code For All_",
    year: "2023",
  },
  {
    title: "Full Stack Programming Bootcamp",
    institution: "Code For All_",
    year: "2022",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4 opacity-0 animate-fade-in">
          Education & Certifications
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Continuous learning and professional development.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <div 
              key={index}
              className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <span className="text-xs font-mono text-primary mb-2 block">
                {item.year}
              </span>
              <h3 className="font-sans font-semibold text-heading mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
