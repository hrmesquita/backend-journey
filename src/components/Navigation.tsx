import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-section-divider py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-medium text-heading hover:text-primary transition-colors">
          HM
        </a>
        
        <nav className="hidden sm:flex items-center gap-8">
          <a href="#experience" className="text-sm text-muted-foreground hover:text-heading transition-colors">
            Experience
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-heading transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-heading transition-colors">
            Projects
          </a>
          <a 
            href="mailto:hrainhamesquita@gmail.com" 
            className="text-sm font-medium text-primary hover:text-link-hover transition-colors"
          >
            Contact
          </a>
        </nav>

        <a 
          href="mailto:hrainhamesquita@gmail.com" 
          className="sm:hidden text-sm font-medium text-primary hover:text-link-hover transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navigation;
