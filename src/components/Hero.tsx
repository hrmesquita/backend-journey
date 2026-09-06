import { useEffect, useRef } from "react";
import { createDraggable } from "animejs";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  const avatarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = avatarRef.current;
    if (!target) return;

    const draggable = createDraggable(target, {
      container: [-24, 24, 24, -24],
    });

    return () => {
      draggable.revert();
    };
  }, []);

  return (
    <section className="min-h-[85vh] flex items-center section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-[1fr,auto] gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 opacity-0 animate-fade-in">
            <p className="text-primary text-sm tracking-widest uppercase mb-4 font-medium">
              Software & AI Engineer
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Hugo <span className="text-primary">Mesquita</span>
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              Software & AI Engineer working on the systems behind production AI.
              I build backend platforms where architecture, security, and reliability matter as much as the model.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl mb-10">
              Based in Porto, Portugal. Currently at MaioLabs, focused on production AI systems,
              multi-tenant architecture, identity and access control, tenant isolation, and auditability.
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
                  href="https://www.linkedin.com/in/hrainhamesquita/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="https://github.com/hrmesquita" 
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
            <div className="relative group" ref={avatarRef}>
              <div className="absolute -top-2 -right-2 pointer-events-none">
                <span className="inline-flex items-center rounded-full border border-border/40 bg-background/60 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground/70 shadow-sm backdrop-blur-sm animate-pop-subtle whitespace-nowrap opacity-75">
                  drag me!!
                </span>
              </div>
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
