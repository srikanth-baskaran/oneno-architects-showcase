import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2, MapPin, Building2, Home, Factory, Briefcase } from "lucide-react";
import srivithyaProfile from "@/assets/srivithya-profile.png";

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
      description: "Handled Chennai project operations, taking responsibility for design delivery, documentation, and coordination."
    },
    {
      period: "2022 – 2023",
      title: "KDDI India – Delhi Projects",
      description: "Contributed as Project Designer for KDDI India's corporate office projects, focusing on spatial planning and Japanese workplace standards."
    },
    {
      period: "2023 – Present",
      title: "Oneno Architects – Principal Architect",
      description: "Leading architectural and interior projects across industrial, corporate, and residential sectors with integrated coordination."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">Principal Architect</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]">
              Ar. Srivithya<br />Pichai
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-12 md:mt-16 fade-in-up">
            <div className="order-2 md:order-1">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
                I am a young and enthusiastic architect who combines modern design ideologies with future-ready technologies to create efficient, functional, and visually coherent spaces.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                With experience across Industrial, Corporate, and Residential projects, I focus on delivering clear, well-structured, and technical designs. My background in handling multi-disciplinary coordination—Architecture, PEB, Structure, and MEP—helps me approach each project with precision and strong project ownership.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I specialize in Industrial architecture, testing facilities, and operational building planning. I believe in designing environments that align with present needs while being adaptable for the future.
              </p>
              
              <div className="flex items-center gap-2 mt-8 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Bangalore · Chennai · Delhi · Manesar · Pune</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img 
                  src={srivithyaProfile} 
                  alt="Ar. Srivithya Pichai - Principal Architect" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-12 bg-foreground text-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 fade-in">
            <p className="text-xs tracking-[0.2em] text-background/50 mb-3 uppercase">Project Footprint</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Experience That Speaks</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in-up">
            <div>
              <Home className="h-6 w-6 mx-auto mb-3 text-accent" />
              <div className="text-4xl sm:text-5xl font-serif mb-1">44</div>
              <p className="text-sm text-background/60">Residential Projects</p>
            </div>
            <div>
              <Building2 className="h-6 w-6 mx-auto mb-3 text-accent" />
              <div className="text-4xl sm:text-5xl font-serif mb-1">16</div>
              <p className="text-sm text-background/60">Commercial</p>
            </div>
            <div>
              <Factory className="h-6 w-6 mx-auto mb-3 text-accent" />
              <div className="text-4xl sm:text-5xl font-serif mb-1">12</div>
              <p className="text-sm text-background/60">Industrial</p>
            </div>
            <div>
              <Briefcase className="h-6 w-6 mx-auto mb-3 text-accent" />
              <div className="text-4xl sm:text-5xl font-serif mb-1">72+</div>
              <p className="text-sm text-background/60">Completed Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Journey</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Career Growth</h2>
          </div>

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            {careerTimeline.map((item, index) => (
              <div 
                key={item.title}
                className="relative pl-6 border-l-2 border-border md:border-l-0 md:pl-0 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent md:hidden" />
                <p className="text-xs text-accent tracking-wider mb-2">{item.period}</p>
                <h3 className="text-lg sm:text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Skills</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Technical Expertise</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {expertise.map((category, index) => (
              <div 
                key={category.category}
                className="p-6 border border-border bg-background fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-serif mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
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
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">What We Do</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Our Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Residential",
                description: "Crafting homes that balance comfort, elegance, and user-centric design. From villas to apartments, we create living spaces that reflect individual personalities."
              },
              {
                title: "Commercial",
                description: "Creating productive environments that reflect brand identity and functionality. Our commercial designs enhance business operations and visitor experiences."
              },
              {
                title: "Corporate Workspace",
                description: "Designing collaborative spaces that enhance productivity and employee wellbeing. Modern offices aligned with international workplace standards."
              },
              {
                title: "Industrial",
                description: "Delivering technical precision for specialized industrial requirements. Testing facilities, operational buildings, and factory layouts that meet operational demands."
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="p-6 sm:p-8 border border-border hover:border-foreground/20 transition-colors duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xs text-muted-foreground tracking-wider">0{index + 1}</span>
                <h3 className="text-xl sm:text-2xl font-serif mt-2 mb-4">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12 bg-accent text-background">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed mb-6">
            "Every project represents my passion for creating purposeful spaces. I'm excited to collaborate, learn, and design with excellence."
          </p>
          <p className="text-background/80">— Ar. Srivithya Pichai</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;