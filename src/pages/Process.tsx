import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, PenTool, Hammer, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      subtitle: "Understanding Your Vision",
      icon: Search,
      duration: "1-2 Weeks",
      description: "We begin by listening. Every great project starts with understanding your requirements, aspirations, and constraints. This phase establishes the foundation for everything that follows.",
      activities: [
        "Initial consultation and site visit",
        "Understanding functional requirements",
        "Budget and timeline discussion",
        "Site analysis and documentation",
        "Preliminary feasibility assessment"
      ]
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Shaping Your Space",
      icon: PenTool,
      duration: "4-8 Weeks",
      description: "Ideas take form. We translate your vision into detailed architectural drawings, 3D visualisations, and material specifications. Every detail is considered to ensure the design works beautifully.",
      activities: [
        "Concept development and space planning",
        "Architectural drawings and floor plans",
        "3D visualisation and walkthroughs",
        "Material and finish selection",
        "MEP coordination and structural planning",
        "Regulatory approvals and documentation"
      ]
    },
    {
      number: "03",
      title: "Develop",
      subtitle: "Building With Precision",
      icon: Hammer,
      duration: "Project Dependent",
      description: "Plans become reality. We coordinate with contractors, supervise construction, and ensure every element is executed to specification. Quality control at every stage guarantees lasting results.",
      activities: [
        "Contractor selection and coordination",
        "Construction supervision and site visits",
        "Quality control and material verification",
        "Progress monitoring and reporting",
        "Change management and problem-solving"
      ]
    },
    {
      number: "04",
      title: "Deliver",
      subtitle: "Completing Your Vision",
      icon: CheckCircle,
      duration: "2-4 Weeks",
      description: "The final chapter. We ensure every finish is perfect, every system works flawlessly, and you're completely satisfied with your new space. Our relationship continues beyond handover.",
      activities: [
        "Final inspection and punch list",
        "Furniture and décor placement",
        "Systems testing and handover",
        "Documentation and warranty compilation",
        "Post-occupancy support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">How We Work</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-[1.1]">
              Our Design Process
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A structured approach that transforms your vision into reality. Each phase builds upon the last, 
              ensuring clarity, quality, and a result that exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-16 md:pb-24 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="fade-in-up grid md:grid-cols-12 gap-6 md:gap-10 pb-12 md:pb-16 border-b border-border last:border-b-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number & Icon */}
                <div className="md:col-span-2">
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <div className="w-16 h-16 flex items-center justify-center border border-border">
                      <step.icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-5xl md:text-6xl font-serif text-muted-foreground/30">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <div className="mb-4">
                    <p className="text-xs tracking-[0.15em] text-accent uppercase mb-1">{step.duration}</p>
                    <h2 className="text-2xl sm:text-3xl font-serif mb-1">{step.title}</h2>
                    <p className="text-base text-muted-foreground">{step.subtitle}</p>
                  </div>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div>
                    <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-3">Key Activities</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12 bg-foreground text-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 fade-in">
            <p className="text-xs tracking-[0.2em] text-background/50 mb-3 uppercase">Timeline</p>
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">What to Expect</h2>
            <p className="text-background/60 max-w-xl mx-auto">
              Every project is unique, but here's a general timeline for a typical residential project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 fade-in-up">
            {[
              { phase: "Discovery", time: "1-2 Weeks" },
              { phase: "Design", time: "4-8 Weeks" },
              { phase: "Develop", time: "12-24 Weeks" },
              { phase: "Deliver", time: "2-4 Weeks" }
            ].map((item, index) => (
              <div key={item.phase} className="text-center p-6 border border-background/20">
                <span className="text-4xl sm:text-5xl font-serif block mb-2">{item.time}</span>
                <span className="text-sm text-background/60 uppercase tracking-wider">{item.phase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl text-center fade-in">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">Ready to Begin?</h2>
          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            Every great project starts with a conversation. Let's discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-10 text-sm tracking-wide" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-sm tracking-wide" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
