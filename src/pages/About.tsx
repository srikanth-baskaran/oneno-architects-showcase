import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    "Client-Centered Design",
    "Sustainable Practices",
    "Technical Excellence",
    "Timeless Aesthetics",
    "Collaborative Process",
    "Attention to Detail",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">About Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]">
              Curating Timeless<br />Memories
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-12 md:mt-20 fade-in-up">
            <div>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Oneno Architects (OPC Private Limited) is a multidisciplinary architectural and interior design firm specialising in Residential, Commercial, Workspace, and Industrial Projects.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                We combine functional planning, aesthetic clarity, and technical precision to deliver consistent, high-quality design solutions. Our work focuses on efficient space utilisation, refined detailing, and sustainable design practices.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                With a strong emphasis on client collaboration, we ensure each project reflects both the user's needs and the design intent. Our commitment is to create spaces that are functional, elegant, and enduring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="fade-in">
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Our Values</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 leading-tight">
                What Drives Us
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every project we undertake is guided by a core set of principles that ensure exceptional outcomes for our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-in-up">
              {values.map((value, index) => (
                <div 
                  key={value} 
                  className="flex items-center gap-3 py-3"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Expertise</p>
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
                title: "Workspace",
                description: "Designing collaborative spaces that enhance productivity and employee wellbeing. Modern offices that inspire creativity and foster teamwork."
              },
              {
                title: "Industrial",
                description: "Delivering technical precision for specialized industrial requirements. Functional spaces that meet operational demands without compromising on design."
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

      {/* Process */}
      <section className="section-padding bg-foreground text-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16 fade-in">
            <p className="text-xs tracking-[0.2em] text-background/60 mb-3 uppercase">How We Work</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Our Process</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              { step: "01", title: "Discover", desc: "Understanding your vision, requirements, and aspirations" },
              { step: "02", title: "Design", desc: "Crafting concepts that balance form, function, and budget" },
              { step: "03", title: "Develop", desc: "Detailed documentation and material specifications" },
              { step: "04", title: "Deliver", desc: "Meticulous execution ensuring quality at every stage" },
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl font-serif text-background/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Why Oneno</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Why Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 md:gap-12 text-center fade-in-up">
            <div>
              <div className="text-4xl sm:text-5xl font-serif mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-serif mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-serif mb-2">5+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
