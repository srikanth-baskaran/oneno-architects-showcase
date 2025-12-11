import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/data/projectsData";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const categories = ["all", ...new Set(projectsData.map(p => p.category))];
  
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const projects = filteredProjects.map(project => ({
    id: project.id,
    title: project.title,
    category: project.category,
    image: project.coverImage,
    year: project.year,
    location: project.location
  }));

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-28 sm:pt-32 md:pt-40 section-padding">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-10 md:mb-16 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Our Work</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6">Projects</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A curated collection of our residential, commercial, and industrial projects. 
              Each design reflects our commitment to functional elegance and client collaboration.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-10 md:mb-14 fade-in">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm tracking-wide transition-all duration-300 capitalize ${
                  filter === cat 
                    ? "bg-foreground text-background" 
                    : "bg-transparent text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 fade-in-up">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
