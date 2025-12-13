import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle, IndianRupee, Clock, Ruler, ShieldAlert, Lightbulb, Building2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

const CounterAnimation = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {value}{suffix}
      </motion.span>
    </motion.span>
  );
};

const WhyUs = () => {
  const horrorStories = [
    {
      icon: IndianRupee,
      title: '"The Budget Kept Growing"',
      subtitle: "Cost Overruns",
      description: "Projects without proper planning frequently exceed budgets by 40-50%. Hidden costs emerge at every stage, turning initial estimates into distant memories.",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: '"Just Two More Weeks"',
      subtitle: "Timeline Delays",
      description: "Without structured project management, a 6-month timeline can extend to 18 months. Poor coordination between trades creates cascading delays.",
      color: "text-orange-500"
    },
    {
      icon: Ruler,
      title: '"The Space Will Adjust"',
      subtitle: "Spatial Planning Issues",
      description: "Inadequate space planning leads to rooms that cannot accommodate intended furniture or circulation. Poor layouts create daily inconveniences.",
      color: "text-yellow-600"
    },
    {
      icon: ShieldAlert,
      title: '"Who Needs Permits?"',
      subtitle: "Regulatory Complications",
      description: "Buildings without proper approvals face legal notices, demolition orders, or difficulty in future transactions. Compliance is not optional.",
      color: "text-purple-500"
    },
  ];

  const comparisons = [
    {
      aspect: "Planning",
      builder: "Basic sketches with limited detail",
      architect: "Comprehensive CAD drawings with 3D visualisation"
    },
    {
      aspect: "Budget",
      builder: "Rough estimates prone to escalation",
      architect: "Detailed BOQ with contingency planning"
    },
    {
      aspect: "Timeline",
      builder: "Uncertain delivery schedules",
      architect: "Structured project schedule with milestones"
    },
    {
      aspect: "Materials",
      builder: "Market-dependent material selection",
      architect: "Specified materials with quality standards"
    },
    {
      aspect: "Supervision",
      builder: "Client-managed coordination",
      architect: "Professional site supervision and quality control"
    },
    {
      aspect: "Value",
      builder: "Lower initial cost, higher long-term risk",
      architect: "Strategic investment, lasting quality"
    },
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "Intelligent Space Planning",
      description: "Every square foot optimised for function and flow. No wasted space, no awkward layouts — just intelligent design."
    },
    {
      icon: IndianRupee,
      title: "Cost Efficiency",
      description: "Proper planning reduces rework by up to 40%. The architect's fee is an investment that pays for itself."
    },
    {
      icon: Building2,
      title: "Future-Ready Design",
      description: "Planning for expansion? Want flexibility? Smart design anticipates future needs and keeps options open."
    },
    {
      icon: CheckCircle2,
      title: "Regulatory Compliance",
      description: "All approvals handled professionally. No municipal complications. Complete documentation for peace of mind."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">The Value of Architecture</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]">
              Why Choose<br />
              <span className="text-accent">Professional Design?</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Because informed decisions today prevent costly corrections tomorrow. 
            Let us explain what happens when professional planning is overlooked.
          </motion.p>
        </div>
      </section>

      {/* The Reality Check */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12 bg-foreground text-background">
        <div className="container mx-auto max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-20">
              <p className="text-xs tracking-[0.2em] text-background/50 mb-3 uppercase">Common Challenges</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
                What Can Go Wrong
              </h2>
              <p className="text-background/60 max-w-xl mx-auto">
                These scenarios are more common than you might think. Understanding the risks helps make informed decisions.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {horrorStories.map((story, index) => (
              <FadeInSection key={story.title} delay={index * 0.1}>
                <div className="p-6 sm:p-8 border border-background/20 hover:border-background/40 transition-colors group">
                  <story.icon className={`h-8 w-8 mb-4 ${story.color}`} />
                  <p className="text-sm text-background/50 mb-1">{story.subtitle}</p>
                  <h3 className="text-xl sm:text-2xl font-serif mb-3 group-hover:text-accent transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-background/70 leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Shocking Stats */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
                The Numbers Don't Lie
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: 70, suffix: "%", label: "of self-built homes have structural issues" },
              { value: 45, suffix: "%", label: "average budget overrun without planning" },
              { value: 3, suffix: "x", label: "longer timeline without proper management" },
              { value: 60, suffix: "%", label: "of rework due to poor initial planning" },
            ].map((stat, index) => (
              <FadeInSection key={stat.label} delay={index * 0.1}>
                <div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-accent mb-2">
                    <CounterAnimation value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12 bg-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">The Difference</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">
                Builder vs Architect
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-4">
            {/* Header */}
            <FadeInSection>
              <div className="grid grid-cols-3 gap-4 p-4 bg-foreground text-background rounded-sm">
                <div className="text-sm font-medium">Aspect</div>
                <div className="text-sm font-medium text-center">Local Builder</div>
                <div className="text-sm font-medium text-center">With Architect</div>
              </div>
            </FadeInSection>

            {comparisons.map((row, index) => (
              <FadeInSection key={row.aspect} delay={index * 0.05}>
                <div className="grid grid-cols-3 gap-4 p-4 border border-border hover:bg-card transition-colors">
                  <div className="font-medium text-sm sm:text-base">{row.aspect}</div>
                  <div className="text-sm text-muted-foreground flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="hidden sm:inline">{row.builder}</span>
                    <span className="sm:hidden">{row.builder.split(' ').slice(0, 3).join(' ')}...</span>
                  </div>
                  <div className="text-sm flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="hidden sm:inline">{row.architect}</span>
                    <span className="sm:hidden">{row.architect.split(' ').slice(0, 3).join(' ')}...</span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">The Smart Choice</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
                What You Actually Get
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                An architect's fee is typically 5-8% of construction cost. Here's why it's the best investment you'll make.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <FadeInSection key={benefit.title} delay={index * 0.1}>
                <motion.div 
                  className="p-6 sm:p-8 border border-border hover:border-accent/50 transition-all group cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <benefit.icon className="h-8 w-8 mb-4 text-accent" />
                  <h3 className="text-xl font-serif mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12 bg-accent text-background">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeInSection>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif leading-relaxed mb-6">
              "Good design is not just about aesthetics — it's about solving problems before they occur."
            </p>
            <p className="text-background/80 italic">
              — The Philosophy Behind Professional Architecture
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6">
              Make an Informed Decision
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Your project deserves professional planning. Let us discuss how thoughtful design can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-10 text-sm tracking-wide"
                asChild
              >
                <a href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-sm tracking-wide"
                asChild
              >
                <a href="/projects">View Our Portfolio</a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;
