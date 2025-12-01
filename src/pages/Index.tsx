import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Index = () => {
  const featuredProjects = [
    {
      title: "Mr.Syed Villa",
      category: "Residential",
      image: project1,
      year: "2024",
      location: "Nungambakkam"
    },
    {
      title: "The Sojitz Office",
      category: "Commercial",
      image: project2,
      year: "2024",
    },
    {
      title: "Vaibhav",
      category: "Residential",
      image: project3,
      year: "2024",
      location: "Bangalore"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-background mb-4 md:mb-6 leading-tight">
            Where Design Becomes Experience.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-background/90 mb-6 md:mb-8 font-light max-w-2xl mx-auto">
            Contemporary architecture that blends innovation with timeless elegance
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 h-12 px-6 md:h-14 md:px-8"
            asChild
          >
            <a href="/projects">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 fade-in">
            <p className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2">PORTFOLIO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 fade-in-up">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Button variant="outline" size="lg" className="h-12 px-6" asChild>
              <a href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-surface-elevated">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <p className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-3 md:mb-4">OUR PHILOSOPHY</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 md:mb-8">
            Curating Timeless Memories
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8 px-2">
            We combine functional planning, aesthetic clarity, and technical precision to deliver 
            consistent, high-quality design solutions. Our work focuses on efficient space utilisation, 
            refined detailing, and sustainable design practices. With a strong emphasis on client 
            collaboration, we ensure each project reflects both the user's needs and the design intent.
          </p>
          <Button variant="outline" className="h-11 px-6" asChild>
            <a href="/about">Learn More About Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
