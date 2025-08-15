import { ExternalLink, Github } from 'lucide-react';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import mobileAppImage from '@/assets/project-mobile-app.jpg';
import dashboardImage from '@/assets/project-dashboard.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Site E-commerce Moderne",
      description: "Plateforme de vente en ligne complète avec gestion des produits, panier d'achat, système de paiement et interface administrateur.",
      image: ecommerceImage,
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "App Mobile de Gestion du Personnel",
      description: "Application Flutter pour la gestion des entrées et sorties du personnel avec système d'authentification et tableau de bord.",
      image: mobileAppImage,
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 3,
      title: "Dashboard Gestion des Notes",
      description: "Interface administrateur pour le suivi et la gestion des notes des étudiants avec graphiques et rapports détaillés.",
      image: dashboardImage,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-card rounded-2xl overflow-hidden card-shadow card-hover ${
                project.featured ? 'md:col-span-1 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="p-3 bg-card rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      title="Voir le code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-card rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      title="Voir la démo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      Projet phare
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    className="text-sm text-primary hover:text-primary/80 font-medium flex items-center transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code source
                  </a>
                  <a
                    href={project.demo}
                    className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center"
          >
            <Github className="w-5 h-5 mr-2" />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;