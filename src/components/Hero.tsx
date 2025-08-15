import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '@/assets/safidy-profile.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Profile Image */}
          <div className="mb-8 floating-animation">
            <img
              src={profileImage}
              alt="RAKOTONIRINA Safidy Miharimanana"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover card-shadow"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">RAKOTONIRINA</span>
            <br />
            <span className="text-primary">Safidy Miharimanana</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Développeur passionné | HTML, CSS, JS, PHP, Java
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Étudiant en informatique à Madagascar, je crée des solutions web et mobiles 
            modernes avec une passion pour l'innovation technologique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={scrollToContact} className="btn-accent">
              <Mail className="w-5 h-5 mr-2" />
              Me contacter
            </button>
            <button className="btn-primary">
              <Download className="w-5 h-5 mr-2" />
              Télécharger CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-hover"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-hover"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:safidy@example.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-hover"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;