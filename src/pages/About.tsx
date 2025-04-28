import NavigationBar from "@/components/NavigationBar";
import { Card } from "@/components/ui/card";
import { School } from "lucide-react";

export const About = () => {
  
  const frontendSkills = ["React", "TypeScript", "Tailwind", "Svelte", "HTML", "Vue"];
  const backendSkills = ["Azure", "Python", "C", "Rust", "Node.js", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4 pt-5"> {/* ml-[17.25rem] */}
        <h2 className="text-4xl font-migra mb-10 bg-clip-text text-center animate-fadeInSlow">
          About Me
        </h2>

        <div className="animate-fadeInSlow">
        <Card className="p-8 hover:-translate-y-0.5 transition-all hover:shadow-xl border border-primary/50">
        <ul className="max-w-xl space-y-3 space-x-1 list-disc list-inside text-justify text-muted-foreground marker:text-primary marker:text-xl">
            <li>
                Hi! My name is Atanas&nbsp;(Nasko), and I’m a Computer Science graduate from Rutgers University-New Brunswick.
            </li>

            <li>
                My career interests revolve around Software/Computer Security&nbsp;+ ML.
            </li>

            <li>
                I’m an avid programmer; building software from start to finish can keep me immersed for hours.
            </li>

            <li>
                I love traveling and discovering rarely visited places. In my free time you’ll find me playing soccer or producing music.
            </li>
                <br></br>
            </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:-translate-y-0.5 transition-all border border-transparent">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:-translate-y-0.5 transition-all border border-transparent">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 animate-fadeInSlow">
          <Card className="p-6 hover:-translate-y-0.5 transition-all hover:shadow-xl border border-primary/50">
            <h3 className="text-xl font-bold mb-4"> Education</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <p>
                <strong className="">Bachelor's in CompSci & Economics</strong>  Rutgers University (2021-2025)
              </p>
              <br></br>
              <p>
              <strong className="">Coursework:</strong> Computer Security, Operating Systems, IT, Distributed Systems, Algorithms and Design, Machine Learning, Deep Learning
              </p>
            </ul>
          </Card>

          <Card className="p-6 hover:-translate-y-0.5 transition-all hover:shadow-xl border border-primary/50">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold">
                <strong className="">Research Assistant (2022 - 2025)</strong>
                </h4>
                <p>
                   Specialized in advanced Homomorphic Encryption research, optimizing secure crypto computations
                </p>
              </div>

              <div>
                <h4 className="">
                <strong>Teaching Assistant (2024-2025)</strong>
                </h4>
                <p>
                  Taught 200+ students, Only non-Ph.D/Master's selected, Unix & Computer Architecture
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
