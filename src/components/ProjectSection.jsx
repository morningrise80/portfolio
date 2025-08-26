import { ArrowBigRight, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Pronto painting",
    description:
      "E-commerce app for hiring a new interior/exterior painting service.",
    images: ["/projects/project1.png", "/projects/project1-2.png"], // multiple images
    tags: ["Java", "Spring Boot", "Spring Security", "Thymeleaf"],
  },
  {
    id: 2,
    title: "Finance Tracker UI",
    description: "UI for tracking expenses and setting budget",
    image: "/projects/project2.png", // single image (still supported)
    tags: ["React.js", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 3,
    title: "T Shirt Customization UI",
    description:
      "T Shirt Customizer UI with 3D images and animation where the user is able to change the color, choose a custom logo and pick the logo location.",
    images: ["/projects/project3.png", "/projects/project3-2.png"], // side by side
    tags: ["React.js", "ThreeJS", "JS", "TailwindCSS"],
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here some school projects that I did.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            // Normalize: support either `images` (array) or single `image`
            const images =
              project.images ?? (project.image ? [project.image] : []);

            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                {/* Image area: shows 1 or 2 images side-by-side */}
                <div className="h-48 flex overflow-hidden">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className={`${
                        images.length > 1 ? "w-1/2" : "w-full"
                      } h-full object-cover transition-transform duration-500 group-hover:scale-110`}
                    />
                  ))}
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/morningrise80"
          >
            My GitHub <ArrowBigRight />
          </a>
        </div>
      </div>
    </section>
  );
};
