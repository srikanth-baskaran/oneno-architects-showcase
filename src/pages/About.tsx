import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TeamMemberCard, type TeamMember } from "@/components/TeamMemberCard";
import srivithyaImage from "@/assets/team/srivithya.jpg";

const About = () => {
  const values = [
    { title: "Functional Planning", description: "Spaces designed around how you live and work" },
    { title: "Aesthetic Clarity", description: "Clean, timeless design that endures" },
    { title: "Technical Precision", description: "Every detail engineered for excellence" },
    { title: "Sustainable Approach", description: "Responsible design for future generations" }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Ar. Srivithya Pichai",
      role: "Principal Architect & Founder",
      image: srivithyaImage,
      bio: "An architect with a passion for merging modern design principles with future-ready technologies to deliver efficient, functional, and aesthetically refined spaces. With expertise spanning industrial architecture, testing facilities, and operational building planning, she brings multi-disciplinary coordination across Architecture, PEB, Structure, and MEP systems.",
      stats: [
        { label: "Residential", value: "44", iconType: "home" },
        { label: "Commercial", value: "16", iconType: "building" },
        { label: "Industrial", value: "12", iconType: "factory" },
        { label: "Completed", value: "72+", iconType: "briefcase" }
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
        { period: "2022 – 2023", title: "KDDI India – Delhi", description: "Designed corporate office projects adhering to Japanese workplace standards." },
        { period: "2023 – Present", title: "Oneno Architects (OPC) Pvt. Ltd.", description: "Leading projects across industrial, corporate, and residential sectors." }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Company Hero */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">About Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-[1.1]">
              Curating Timeless Memories
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              Oneno Architects (OPC) Private Limited is a multidisciplinary architectural and interior design firm based in Chennai, specialising in Residential, Commercial, Workspace, and Industrial projects.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Chennai, Tamil Nadu
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-12 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Philosophy</p>
            <h2 className="text-3xl sm:text-4xl font-serif">Our Values</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-in-up">
            {values.map((value, index) => (
              <div key={value.title} className="p-6 border border-border bg-background" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-base font-serif mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-serif">Our Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Residential", description: "Homes designed for comfort, elegance, and personalised living — from villas to apartments." },
              { title: "Commercial", description: "Purpose-built environments that reflect brand identity — retail, hospitality, and public spaces." },
              { title: "Corporate Workspace", description: "Productive office environments aligned with international workplace standards." },
              { title: "Industrial", description: "Testing facilities, operational buildings, and factory layouts with technical precision." }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="p-6 border border-border hover:border-foreground/20 transition-colors fade-in-up"
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
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in">
            <p className="text-xs tracking-[0.2em] text-background/50 mb-3 uppercase">Leadership</p>
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">The People Behind</h2>
            <p className="text-sm text-background/60 max-w-lg mx-auto">
              Click on a team member to learn more about their expertise and journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl text-center fade-in">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4">Ready to Begin Your Project?</h2>
          <p className="text-sm text-muted-foreground mb-6">
            We would be delighted to discuss how we can bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm hover:bg-foreground/90 transition-colors"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
