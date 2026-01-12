import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-section-divider">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-2 text-heading">
              Let's <span className="text-primary">connect</span>
            </h2>
            <p className="text-muted-foreground">
              Open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:hrainhamesquita@gmail.com"
              className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hrainhamesquita/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-card border border-border text-foreground rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/hrmesquita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-card border border-border text-foreground rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-section-divider text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hugo Mesquita. Porto, Portugal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
