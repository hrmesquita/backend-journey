import profilePhoto from "@/assets/profile-photo.jpg";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-[1fr,auto] gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 opacity-0 animate-fade-in">
            <p className="text-primary text-sm tracking-widest uppercase mb-4 font-medium">
              Software Engineer
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Hugo <span className="text-primary">Mesquita</span>
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              Backend engineer with ~3 years crafting high-performance distributed systems. 
              I build microservices that scale and pipelines that don't break at 3am.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl mb-10">
              Based in Porto, Portugal. Currently focused on Java-based architectures, 
              system performance optimization, and cloud-native infrastructure.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="mailto:hrainhamesquita@gmail.com" 
                className="inline-flex items-center gap-2 text-primary hover:text-link-hover transition-colors font-medium group"
              >
                <span>Get in touch</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </a>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://linkedin.com/in/your-linkedin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="https://github.com/your-github" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/10 mx-auto md:mx-0 transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={profilePhoto} 
                  alt="Hugo Mesquita" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full -z-10 transition-all duration-500 group-hover:scale-125 group-hover:bg-primary/15" />
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/5 rounded-full -z-10 transition-all duration-700 group-hover:scale-150" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
