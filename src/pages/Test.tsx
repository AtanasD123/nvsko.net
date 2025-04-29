import NavigationBar from "@/components/NavigationBar";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, GraduationCap, Briefcase } from "lucide-react";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "Tailwind", "Svelte", "HTML", "Vue"];
  const backendSkills = ["Azure", "Python", "C", "Rust", "Node.js", "GraphQL"];

  return (
    <>
      <NavigationBar />

      <section
        id="about"
        className="min-h-screen bg-background dark:bg-background-dark py-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-migra mb-12 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-center animate-fadeInSlow">
            About Me
          </h2>

          <Card className="p-8 mb-10 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border-transparent bg-card dark:bg-card-dark">
            <ul className="list-disc list-inside space-y-4 text-foreground dark:text-foreground/80 text-justify marker:text-primary text-lg">
              <li className="first-letter:text-2xl first-letter:font-bold">
                Hi! I'm <span className="font-semibold">Atanas (Nasko)</span>, a Computer Science graduate from Rutgers University.
              </li>
              <li>
                My passion lies in <span className="font-medium text-primary">Software & Computer Security</span> and <span className="font-medium text-primary">Machine Learning</span>.
              </li>
              <li>
                I love building end-to-end applications—coding is my creative outlet.
              </li>
              <li>
                Off-duty, I explore hidden travel gems, play soccer, and produce music.
              </li>
            </ul>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 animate-fadeInSlow">
            <Card className="p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 border-transparent bg-card dark:bg-card-dark">
              <h3 className="flex items-center text-2xl font-semibold mb-4 text-primary">
                <GraduationCap className="mr-3 h-6 w-6" /> Education
              </h3>
              <p className="text-foreground dark:text-foreground/80">
                <strong>B.Sc. in Computer Science & Economics</strong><br />
                Rutgers University (2021–2025)
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Coursework: Computer Security, Operating Systems, Distributed Systems, Algorithms, Machine Learning, Deep Learning
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 border-transparent bg-card dark:bg-card-dark">
              <h3 className="flex items-center text-2xl font-semibold mb-4 text-primary">
                <Briefcase className="mr-3 h-6 w-6" /> Experience
              </h3>
              <div className="space-y-4 text-foreground dark:text-foreground/80">
                <div>
                  <h4 className="font-medium">Research Assistant (2022–2025)</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized in Homomorphic Encryption research, optimizing secure computations.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Teaching Assistant (2024–2025)</h4>
                  <p className="text-sm text-muted-foreground">
                    Guided 200+ students in Unix and Computer Architecture.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-fadeInSlow">
            <Card className="p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border-transparent bg-card dark:bg-card-dark">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-foreground">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-primary/20 dark:bg-primary/10 text-primary dark:text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-foreground">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-secondary/20 dark:bg-secondary/10 text-secondary dark:text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Card */}
          <div className="mt-8 animate-fadeInSlow">
            <Card className="p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border-transparent bg-card dark:bg-card-dark">
              <h3 className="flex items-center text-2xl font-semibold mb-4 text-primary">
                <Mail className="mr-3 h-6 w-6 text-primary dark:text-primary-foreground" />
                Contact
              </h3>
              <ul className="space-y-3 text-foreground dark:text-foreground/80">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-foreground dark:text-foreground/80" />
                  <a
                    href="mailto:atanas@example.com"
                    className="underline decoration-primary dark:decoration-primary-foreground text-foreground dark:text-foreground/80"
                  >
                    atanas@example.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-2 text-foreground dark:text-foreground/80" />
                  <a
                    href="https://www.linkedin.com/in/atanasdamianov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-primary dark:decoration-primary-foreground text-foreground dark:text-foreground/80"
                  >
                    linkedin.com/in/atanasdamianov
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-foreground dark:text-foreground/80" />
                  <a
                    href="https://github.com/AtanasD123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-primary dark:decoration-primary-foreground text-foreground dark:text-foreground/80"
                  >
                    github.com/AtanasD123
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
