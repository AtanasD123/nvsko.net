import { Card } from "@/components/ui/card";
import { Mail, GraduationCap, Briefcase} from "lucide-react";


export const About = () => {
  
  const frontendSkills = ["React", "TypeScript", "Tailwind", "Svelte", "HTML", "Vue"];
  const backendSkills = ["Azure", "Python", "C", "Rust", "Node.js", "GraphQL"];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20" id="about">
      <div className="max-w-3xl mx-auto px-4 pt-1.5"> {/* ml-[17.25rem] */}
        <div className=" items-center pb-5">
          <h1 className="text-4xl font-migra text-center animate-fadeInSlow">About</h1>
        </div>

        <div className="animate-fadeInSlow mb-5" style={{animationDelay: `${100}ms`}}>
        <Card className="p-8 hover:-translate-y-0.5 transition-all hover:shadow-xl border border-primary/50">
        <ul className="max-w-xl space-y-3 space-x-1 list-disc list-inside text-justify text-muted-foreground marker:text-primary marker:text-xl">
            <li className="text-foreground">
                Hi! My name is Atanas&nbsp;(Nasko), and I’m a Computer Science graduate from Rutgers University-New Brunswick.
            </li>

            <li className="text-foreground">
                My career interests revolve around Software/Computer Security&nbsp;+ ML.
            </li>

            <li className="text-foreground">
                I’m an avid programmer; building software from start to finish can keep me immersed for hours.
            </li>

            <li className="text-foreground mb-20">
                I love traveling and discovering rarely visited places. In my free time you’ll find me playing soccer or producing music.
            </li>
            </ul>
        </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <div className="hover:scale-105 transition-all transform">
            <Card className="p-6 hover:shadow-lg transform transition border-primary/50 animate-fadeInSlow"
             style={{animationDelay: `${150}ms`}}>
              <h3 className="flex items-center text-2xl font-semibold mb-4">
                <GraduationCap className="mr-3 h-6 w-6 mb-1 text-primary" /> Education
              </h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">B.A. in CompSci & Economics</strong><br />
                Rutgers University (2021–2025)
              </p>
              <p className="mt-3 text-muted-foreground">
                <strong className="text-foreground">Coursework:</strong> Computer Security, Operating Systems, Distributed Systems, Algorithms, Machine and Deep Learning
              </p>
              
            </Card>
            </div>

            <div className="hover:scale-105 transition-all transform">
            <Card className="p-6 hover:shadow-lg transform hover:scale-105 transition border-primary/50 animate-fadeInSlow" 
             style={{animationDelay: `${150}ms`}}>
              <h3 className="flex items-center text-2xl font-semibold mb-4">
                <Briefcase className="mr-3 h-6 w-6 mb-0.25 text-primary" /> Work Experience
              </h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Research Assistant (2022–2025)</strong><br />
                Specialized in Encryption research, optimizing secure crypto computations
              </p>
              <p className="mt-3 text-muted-foreground">
                <strong className="text-foreground">Teaching Assistant (2024–2025):</strong> Guided 200+ students in Unix and Computer Architecture.
              </p>
            </Card>
            </div>
          </div>
        
          <div className="animate-fadeInSlow" style={{animationDelay: `${200}ms`}}>
          <Card className="p-6 hover:shadow-xl transform hover:shadow-xl hover:-translate-y-0.5 transition border-primary/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Frontend</h2>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm hover:scale-105 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-foreground">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm hover:scale-105 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
      </div>
      
    </section>
  );
};

export default About;
