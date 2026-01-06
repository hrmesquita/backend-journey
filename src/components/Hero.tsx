import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-[1fr,auto] gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 opacity-0 animate-fade-in">
            <p className="text-subheading text-sm tracking-widest uppercase mb-4">
              Software Engineer
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Hugo Mesquita
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              Backend engineer with ~3 years crafting high-performance distributed systems. 
              I build microservices that scale and pipelines that don't break at 3am.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl mb-10">
              Based in Porto, Portugal. Currently focused on Java-based architectures, 
              system performance optimization, and cloud-native infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:hrainhamesquita@gmail.com" 
                className="inline-flex items-center gap-2 text-primary hover:text-link-hover transition-colors font-medium"
              >
                <span>Get in touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-section-divider shadow-lg mx-auto md:mx-0">
                <img 
                  src={profilePhoto} 
                  alt="Hugo Mesquita" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
