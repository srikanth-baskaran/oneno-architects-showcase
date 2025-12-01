import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/data/projectsData";

const Projects = () => {
  const projects = projectsData.map(project => ({
    id: project.id,
    title: project.title,
    category: project.category,
    image: project.coverImage,
    year: project.year,
    location: project.location,
    description: project.description
  }));

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16 fade-in">
            <p className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-3 md:mb-4">OUR WORK</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 leading-tight">
              Completed Projects
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              A showcase of our diverse portfolio spanning residential, commercial,
              workspace, and industrial projects.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 fade-in-up">
            {projects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} {...project} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
