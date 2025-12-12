import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2, MapPin, Building2, Home, Factory, Briefcase } from "lucide-react";

const About = () => {
  const expertise = [
    {
      category: "Architecture",
      items: ["Industrial Buildings", "Residential Planning", "Site Zoning", "Structural Design"]
    },
    {
      category: "Interiors",
      items: ["Furniture Layout & Joinery", "False Ceiling & Lighting", "Material Selection", "Workspace Planning"]
    },
    {
      category: "Engineering",
      items: ["PEB Coordination", "RCC Structures", "Electrical & Plumbing", "Machine Layout Integration"]
    },
    {
      category: "Visualization",
      items: ["3D Exterior Views", "Interior Renders", "Technical Documentation", "Presentation Drawings"]
    }
  ];

  const careerTimeline = [
    {
      period: "2017 – 2020",
      title: "OneStorey, Bangalore",
      description: "Built strong foundations in architecture, interiors, working drawings, and client coordination."
    },
    {
      period: "2020 – 2023",
      title: "Partnership With OneStorey – Chennai",
      description: "Handled Chennai project operations, design delivery, documentation, and coordination."
    },
    {
      period: "2022 – 2023",
      title: "KDDI India – Delhi Projects",
      description: "Project Designer for corporate office projects, focusing on spatial planning and Japanese workplace standards."
    },
    {
      period: "2023 – Present",
      title: "Oneno Architects – Principal Architect",
      description: "Leading architectural and interior projects across industrial, corporate, and residential sectors."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in text-center">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">Principal Architect</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-[1.1]">
              Ar. Srivithya Pichai
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
              <MapPin className="h-4 w-4" />
              <span>Bangalore · Chennai · Delhi · Manesar · Pune</span>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
              A young and enthusiastic architect combining modern design ideologies with future-ready technologies to create efficient, functional, and visually coherent spaces.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Specializing in Industrial architecture, testing facilities, and operational building planning. With experience in multi-disciplinary coordination—Architecture, PEB, Structure, and MEP—I approach each project with precision and strong ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-12 bg-foreground text-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 fade-in">
            <p className="text-xs tracking-[0.2em] text-background/50 mb-3 uppercase">Project Footprint</p>
            <h2 className="text-3xl sm:text-4xl font-serif">Experience That Speaks</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center fade-in-up">
            <div>
              <Home className="h-5 w-5 mx-auto mb-2 text-accent" />
              <div className="text-3xl sm:text-4xl font-serif mb-1">44</div>
              <p className="text-xs text-background/60">Residential</p>
            </div>
            <div>
              <Building2 className="h-5 w-5 mx-auto mb-2 text-accent" />
              <div className="text-3xl sm:text-4xl font-serif mb-1">16</div>
              <p className="text-xs text-background/60">Commercial</p>
            </div>
            <div>
              <Factory className="h-5 w-5 mx-auto mb-2 text-accent" />
              <div className="text-3xl sm:text-4xl font-serif mb-1">12</div>
              <p className="text-xs text-background/60">Industrial</p>
            </div>
            <div>
              <Briefcase className="h-5 w-5 mx-auto mb-2 text-accent" />
              <div className="text-3xl sm:text-4xl font-serif mb-1">72+</div>
              <p className="text-xs text-background/60">Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Journey</p>
            <h2 className="text-3xl sm:text-4xl font-serif">Career Growth</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {careerTimeline.map((item, index) => (
              <div 
                key={item.title}
                className="p-5 border border-border fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-xs text-accent tracking-wider mb-2">{item.period}</p>
                <h3 className="text-base font-serif mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Skills</p>
            <h2 className="text-3xl sm:text-4xl font-serif">Technical Expertise</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {expertise.map((category, index) => (
              <div 
                key={category.category}
                className="p-4 sm:p-5 border border-border bg-background fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-sm font-serif mb-3">{category.category}</h3>
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-serif">Our Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Residential",
                description: "Homes that balance comfort, elegance, and user-centric design. From villas to apartments."
              },
              {
                title: "Commercial",
                description: "Productive environments reflecting brand identity. Gyms, retail spaces, and banquet halls."
              },
              {
                title: "Corporate Workspace",
                description: "Collaborative spaces aligned with international workplace standards including Japanese design."
              },
              {
                title: "Industrial",
                description: "Testing facilities, operational buildings, and factory layouts with technical precision."
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="p-5 border border-border hover:border-foreground/20 transition-colors fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xs text-muted-foreground tracking-wider">0{index + 1}</span>
                <h3 className="text-lg font-serif mt-1 mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-14 md:py-20 px-5 sm:px-6 lg:px-12 bg-accent text-background">
        <div className="container mx-auto max-w-3xl text-center fade-in">
          <p className="text-lg sm:text-xl md:text-2xl font-serif leading-relaxed mb-4">
            "Every project represents my passion for creating purposeful spaces. I design environments that align with present needs while being adaptable for the future."
          </p>
          <p className="text-sm text-background/80">— Ar. Srivithya Pichai</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;