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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif text-background mb-6">
            Where Design Becomes Experience.
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 font-light">
            Contemporary architecture that blends innovation with timeless elegance
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
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
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <p className="text-sm tracking-widest text-muted-foreground mb-2">PORTFOLIO</p>
            <h2 className="text-4xl md:text-5xl font-serif">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 fade-in-up">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" asChild>
              <a href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 lg:px-12 bg-surface-elevated">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <p className="text-sm tracking-widest text-muted-foreground mb-4">OUR PHILOSOPHY</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            Curating Timeless Memories
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We combine functional planning, aesthetic clarity, and technical precision to deliver 
            consistent, high-quality design solutions. Our work focuses on efficient space utilisation, 
            refined detailing, and sustainable design practices. With a strong emphasis on client 
            collaboration, we ensure each project reflects both the user's needs and the design intent.
          </p>
          <Button variant="outline" asChild>
            <a href="/about">Learn More About Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
