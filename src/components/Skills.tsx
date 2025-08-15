import { Code, Database, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      color: "text-blue-500"
    },
    {
      title: "Backend",
      icon: Code,
      skills: ["PHP", "Java", "API REST", "Architecture MVC"],
      color: "text-green-500"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Android", "iOS", "Cross-platform"],
      color: "text-purple-500"
    },
    {
      title: "Base de données",
      icon: Database,
      skills: ["MySQL", "SQL", "Design BDD", "Optimisation"],
      color: "text-orange-500"
    }
  ];

  const tools = [
    "Git", "GitHub", "VS Code", "Android Studio", 
    "Postman", "Figma", "XAMPP", "Firebase"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Mes Compétences</h2>
        
        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card rounded-2xl p-6 card-shadow card-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4`}>
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge block text-center"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Outils & Technologies</h3>
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="skill-badge"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Apprentissage Continu
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionné par l'évolution technologique, je reste constamment à l'affût des 
              nouvelles tendances et technologies. Mon objectif est de maîtriser les outils 
              les plus récents pour créer des solutions innovantes et performantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;