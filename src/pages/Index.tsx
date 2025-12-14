import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building2, Clock } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";
import { projectsData } from "@/data/projectsData";

const Index = () => {
  const featuredProjects = projectsData
    .filter(project => project.isFeatured)
    .map(project => ({
      id: project.id,
      title: project.title,
      category: project.category,
      image: project.coverImage,
      year: project.year,
      location: project.location
    }));

  const stats = [
    { icon: Building2, value: "72+", label: "Projects Delivered" },
    { icon: Users, value: "50+", label: "Clients Served" },
    { icon: Award, value: "7+", label: "Years of Experience" },
    { icon: Clock, value: "100%", label: "Commitment to Quality" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Full viewport on mobile */}
      <section className="relative min-h-screen flex items-end pb-16 sm:pb-20 md:items-center md:pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern architectural design by Oneno Architects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent md:bg-foreground/40" />
        </div>

        <div className="relative z-10 w-full px-5 sm:px-6 lg:px-12">
          <div className="container mx-auto max-w-5xl">
            <div className="fade-in-up">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-background/80 mb-4 uppercase font-light">
                Architecture & Interior Design
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-background mb-6 leading-[1.1]">
                Where Design<br className="hidden sm:block" /> Becomes Experience.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-background/85 mb-8 md:mb-10 font-light max-w-xl leading-relaxed">
                Contemporary architecture that blends innovation with timeless elegance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 h-14 px-8 text-sm tracking-wide"
                  asChild
                >
                  <Link to="/projects">
                    View Our Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/50 text-background hover:bg-background/10 h-14 px-8 text-sm tracking-wide bg-transparent"
                  asChild
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="bg-foreground text-background py-12 sm:py-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="h-6 w-6 mx-auto mb-3 opacity-60" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-background/70 tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 md:mb-16 gap-4">
            <div className="fade-in">
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-2 uppercase">Portfolio</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Featured Projects</h2>
            </div>
            <Button variant="ghost" className="self-start sm:self-auto text-sm tracking-wide group" asChild>
              <Link to="/projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 fade-in-up">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">Our Philosophy</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Curating Timeless Memories
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            We integrate functional planning, aesthetic clarity, and technical precision to deliver 
            consistent, high-quality design solutions. Our practice emphasises efficient space utilisation,
            refined detailing, and sustainable design principles.
          </p>
          <Button variant="outline" className="h-12 px-8 text-sm tracking-wide" asChild>
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-2 uppercase">What We Do</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Our Expertise</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Residential", desc: "Thoughtfully designed homes that balance comfort, elegance, and personal expression" },
              { title: "Commercial", desc: "Environments that reinforce brand identity while maximising functionality" },
              { title: "Corporate Workspace", desc: "Productive spaces aligned with international workplace standards" },
              { title: "Industrial", desc: "Technical precision meeting specialised operational requirements" },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group p-6 sm:p-8 border border-border hover:border-foreground/20 transition-colors duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg sm:text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 leading-tight fade-in">
            Ready to Begin Your Project?
          </h2>
          <p className="text-base sm:text-lg text-background/70 mb-10 max-w-xl mx-auto fade-in-delayed">
            We would be delighted to discuss how thoughtful design can transform your space.
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 h-14 px-10 text-sm tracking-wide fade-in-delayed"
            asChild
          >
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
