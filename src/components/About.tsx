import { GraduationCap, Code, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="section-title">À propos de moi</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow card-hover">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Education */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Formation</h3>
                <p className="text-muted-foreground">
                  Étudiant en Informatique
                  <br />
                  Madagascar
                </p>
              </div>

              {/* Passion */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  Développement Web
                  <br />
                  & Mobile
                </p>
              </div>

              {/* Experience */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Focus</h3>
                <p className="text-muted-foreground">
                  Solutions Innovantes
                  <br />
                  & Modernes
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Passionné par l'informatique depuis mon plus jeune âge, je poursuis actuellement 
                mes études en informatique à Madagascar. Mon parcours m'a permis de développer 
                une expertise solide dans le développement web et mobile.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                J'aime créer des solutions technologiques qui résolvent des problèmes réels 
                et améliorent l'expérience utilisateur. Chaque projet est pour moi une 
                opportunité d'apprendre et d'innover.
              </p>

              <div className="bg-secondary/50 rounded-xl p-6 mt-8">
                <h4 className="text-xl font-semibold mb-4 text-primary">Technologies maîtrisées</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="font-medium">Frontend</div>
                  <div className="font-medium">Backend</div>
                  <div className="font-medium">Mobile</div>
                  <div className="font-medium">Base de données</div>
                  
                  <div className="text-muted-foreground">HTML, CSS, JavaScript</div>
                  <div className="text-muted-foreground">PHP, Java</div>
                  <div className="text-muted-foreground">Flutter, Dart</div>
                  <div className="text-muted-foreground">MySQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;