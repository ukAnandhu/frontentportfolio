import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Application",
    description:
      "A modern e-commerce web application built with React.js and Next.js featuring product listings, API integration, shopping cart functionality, and a responsive user interface.",
    image: "/projects/ecommerseapplication.png",
    tags: [
      "Nextjs",
      "TypeScript",
      "TailwindCSS",
      "React-Query",
      "shadcn/ui",
      "api integration",
    ],
    demoUrl: "https://ecommerse-website-7c8szr07r-anandhu-s-projects3.vercel.app/",
    githubUrl: "https://github.com/ukAnandhu/ecommerse-website",
  },
  {
    id: 2,
    title: "Movie List Application",
    description:
      "A responsive movie discovery application built with React.js that allows users to browse, search, and explore movies using a movie API. The application features real-time search, movie details, and a clean, user-friendly interface optimized for all devices.",
    image: "/projects/movielist.png",
    tags: ["reactjs", "tailwindcss", "axios", "api integration"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "PGraph-Powered Technology Knowledge Explorer",
    description:
      "Built a responsive knowledge explorer using Next.js, TypeScript, Tailwind CSS, and CognoDB. Implemented technology search, category filtering, skill relationships, prerequisites, learning resources, job-role mappings, and multi-hop connected learning paths using a graph database",
    image: "/projects/graphapplication.png",
    tags: ["Reactjs", "TailwindCSS", "Lucide-react","TypeScript","CognoDB","Neo4j Driver","REST APIs"],
    demoUrl: "https://graph-application-git-main-anandhu-s-projects3.vercel.app/",
    githubUrl: "https://github.com/ukAnandhu/graph-application/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-2 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I have built to strengthen my frontend
          development skills. These projects showcase my experience with
          React.js, Next.js, API integration, and responsive web design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ukAnandhu"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
