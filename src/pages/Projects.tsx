import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Mr.Syed Villa",
      category: "Residential",
      image: project1,
      year: "2024",
      location: "Nungambakkam",
      description: "A modern residence featuring five bedrooms, two living areas, and an open kitchen–dining–living layout designed for seamless flow. The home follows a unified design language with warm tones and refined materials."
    },
    {
      title: "Vaibhav",
      category: "Residential",
      image: project3,
      year: "2024",
      location: "Bangalore",
      description: "A duplex villa designed as a contemporary luxury home with clean volumes, open layouts, and refined material detailing. The design emphasises natural light, functional planning, and seamless vertical flow."
    },
    {
      title: "The Sojitz Office",
      category: "Commercial",
      image: project2,
      year: "2024",
      description: "A forward-thinking corporate environment featuring multiple meeting rooms, collaborative workstations, and a new-concept open meeting area. The workspace blends clean lines, warm materials, and refined lighting."
    },
    {
      title: "TGMI",
      category: "Commercial",
      image: project1,
      year: "2024",
      description: "Office space designed to achieve maximum workstation capacity while maintaining comfort and efficient workflow. Integrates a display zone, testing laboratory, and controlled vibration testing zone."
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
              workspace, and industrial projects.
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
