import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Frontend Developer & Continuous Learner
            </h3>

            <p className="text-muted-foreground">
              I am a passionate Frontend Developer with hands-on experience
              building responsive, user-friendly, and modern web applications
              using HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS.
            </p>

            <p className="text-muted-foreground">
              As part of my learning journey, I have developed projects such as
              an e-commerce application with API integration, responsive
              layouts, and interactive user interfaces. I enjoy transforming
              ideas into engaging digital experiences and writing clean,
              maintainable code.
            </p>
            <p className="text-muted-foreground">
              I am continuously learning technologies like React, Next.js,
              Node.js, and Python, and I am eager to contribute to real-world
              projects while growing as a developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building modern and responsive web applications with
                    React.js and Next.js.Building fast and SEO-friendly
                    applications using Next.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Integration</h4>
                  <p className="text-muted-foreground">
                    Integrating REST APIs to display and manage dynamic data..
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    Exploring new technologies and best practices to improve
                    development skills and deliver better solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
