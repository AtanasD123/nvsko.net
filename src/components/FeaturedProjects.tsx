
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Website",
    description: "Literally what you are looking at",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/AtanasD123/personal-playground-portal"
  },
  {
    title: "Project Two",
    description: "Work in Progress: Link to my Github",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "https://github.com/AtanasD123"
  },
  {
    title: "Project Three",
    description: "Work in Progress: Link to my Github",
    tags: ["Python", "Django", "PostgreSQL"],
    link: "https://github.com/AtanasD123"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-sans font-bold mb-12">What I've been workin on</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideInUp" style={{animationDelay: `${170}ms`}}>
        {projects.map((project, index) => (
          <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className=""
        >
          <Card key={index} className="p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all border border-primary/50" style={{animationDelay: `${index * 100}ms`}}>
            <h3 className="text-xl font-playfair font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm hover:scale-105 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;

