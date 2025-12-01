import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Modern Villa",
      category: "Residential",
      image: project1,
      year: "2024",
    },
    {
      title: "Urban Office Complex",
      category: "Commercial",
      image: project2,
      year: "2023",
    },
    {
      title: "Minimalist Interior",
      category: "Interior Design",
      image: project3,
      year: "2024",
    },
    {
      title: "Coastal Residence",
      category: "Residential",
      image: project1,
      year: "2023",
    },
    {
      title: "Tech Headquarters",
      category: "Commercial",
      image: project2,
      year: "2024",
    },
    {
      title: "Boutique Hotel",
      category: "Hospitality",
      image: project3,
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-24 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-16 fade-in">
            <p className="text-sm tracking-widest text-muted-foreground mb-4">OUR WORK</p>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Completed Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A showcase of our diverse portfolio spanning residential, commercial, 
              and interior design projects.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 fade-in-up">
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
