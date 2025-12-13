import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Building2, Home, Factory, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    { title: "Functional Planning", description: "Spaces designed for how you actually live and work" },
    { title: "Aesthetic Clarity", description: "Clean, timeless design that ages gracefully" },
    { title: "Technical Precision", description: "Every detail engineered for quality" },
    { title: "Sustainable Practices", description: "Responsible design for future generations" }
  ];

  const teamMembers = [
    {
      name: "Ar. Srivithya Pichai",
      role: "Principal Architect & Founder",
      bio: "An architect with a passion for merging modern design principles with future-ready technologies to deliver efficient, functional, and aesthetically refined spaces. With expertise spanning industrial architecture, testing facilities, and operational building planning, she brings multi-disciplinary coordination across Architecture, PEB, Structure, and MEP systems.",
      stats: [
        { label: "Residential", value: "44", icon: Home },
        { label: "Commercial", value: "16", icon: Building2 },
        { label: "Industrial", value: "12", icon: Factory },
        { label: "Completed", value: "72+", icon: Briefcase }
      ],
      expertise: [
        { category: "Architecture", items: ["Industrial Buildings", "Residential Planning", "Site Zoning", "Structural Design"] },
        { category: "Interiors", items: ["Furniture Layout & Joinery", "False Ceiling & Lighting", "Material Selection", "Workspace Planning"] },
        { category: "Engineering", items: ["PEB Coordination", "RCC Structures", "Electrical & Plumbing", "Machine Layout"] },
        { category: "Visualization", items: ["3D Exterior Views", "Interior Renders", "Technical Documentation", "Presentation Drawings"] }
      ],
      career: [
        { period: "2017 – 2020", title: "OneStorey, Bangalore", description: "Developed core competencies in architecture, interiors, and client management." },
        { period: "2020 – 2023", title: "Partnership – Chennai", description: "Led Chennai operations, design delivery, and technical documentation." },
        { period: "2022 – 2023", title: "KDDI India – Delhi", description: "Executed corporate office projects adhering to Japanese workplace standards." },
        { period: "2023 – Present", title: "Oneno Architects (OPC) Pvt. Ltd.", description: "Leading projects across industrial, corporate, and residential sectors." }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Company Hero */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">About Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-[1.1]">
              Curating Timeless Memories
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Oneno Architects (OPC) Private Limited is a multidisciplinary architectural and interior design firm based in Chennai, specializing in Residential, Commercial, Workspace, and Industrial projects.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Chennai, Tamil Nadu
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-12 bg-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Philosophy</p>
            <h2 className="text-3xl sm:text-4xl font-serif">Our Values</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-in-up">
            {values.map((value, index) => (
              <div key={value.title} className="p-5 border border-border bg-background" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-sm font-serif mb-2">{value.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
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
              { title: "Residential", description: "Homes that balance comfort, elegance, and user-centric design. From villas to apartments." },
              { title: "Commercial", description: "Productive environments reflecting brand identity. Gyms, retail spaces, and banquet halls." },
              { title: "Corporate Workspace", description: "Collaborative spaces aligned with international workplace standards." },
              { title: "Industrial", description: "Testing facilities, operational buildings, and factory layouts with technical precision." }
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

      {/* People Behind */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12 bg-foreground text-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 fade-in">
            <p className="text-xs tracking-[0.2em] text-background/50 mb-3 uppercase">Leadership</p>
            <h2 className="text-3xl sm:text-4xl font-serif">The People Behind</h2>
          </div>

          {teamMembers.map((member) => (
            <div key={member.name} className="fade-in-up">
              {/* Member Header */}
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-serif mb-2">{member.name}</h3>
                <p className="text-sm text-background/60">{member.role}</p>
              </div>

              {/* Bio */}
              <p className="text-center text-sm sm:text-base text-background/80 leading-relaxed max-w-3xl mx-auto mb-10">
                {member.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {member.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 border border-background/10">
                    <stat.icon className="h-4 w-4 mx-auto mb-2 text-accent" />
                    <div className="text-2xl sm:text-3xl font-serif mb-1">{stat.value}</div>
                    <p className="text-xs text-background/50">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Career Timeline */}
              <div className="mb-12">
                <h4 className="text-center text-xs tracking-[0.2em] text-background/50 mb-6 uppercase">Career Journey</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {member.career.map((item) => (
                    <div key={item.title} className="p-4 border border-background/10">
                      <p className="text-xs text-accent mb-1">{item.period}</p>
                      <h5 className="text-sm font-serif mb-1">{item.title}</h5>
                      <p className="text-xs text-background/60 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div>
                <h4 className="text-center text-xs tracking-[0.2em] text-background/50 mb-6 uppercase">Technical Expertise</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {member.expertise.map((category) => (
                    <div key={category.category} className="p-4 border border-background/10">
                      <h5 className="text-sm font-serif mb-3">{category.category}</h5>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item} className="flex items-start gap-1.5 text-xs text-background/60">
                            <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-2xl text-center fade-in">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4">Ready to Start Your Project?</h2>
          <p className="text-sm text-muted-foreground mb-6">Let's discuss how we can bring your vision to life.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm hover:bg-foreground/90 transition-colors"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;