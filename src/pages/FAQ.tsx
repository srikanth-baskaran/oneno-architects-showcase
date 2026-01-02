import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is the first step to working with an architect?",
          answer: "The process begins with an initial consultation where we discuss your vision, requirements, budget, and timeline. This helps us understand your project and determine how we can best serve your needs. You can schedule a consultation through our contact page or call us directly."
        },
        {
          question: "Do I need an architect for my project?",
          answer: "While not legally required for all projects, an architect adds significant value through professional planning, regulatory compliance, cost efficiency, and design expertise. For projects involving structural changes, multiple floors, or commercial use, professional architectural services are highly recommended."
        },
        {
          question: "How do I prepare for the initial consultation?",
          answer: "Gather any reference images, site documents, or sketches you may have. Think about your must-haves, nice-to-haves, and budget range. Having a clear understanding of your requirements helps us provide better guidance during our first meeting."
        }
      ]
    },
    {
      category: "Fees & Budget",
      questions: [
        {
          question: "How much does an architect charge?",
          answer: "Architectural fees typically range from 5-8% of the total construction cost, depending on project complexity and scope of services. We provide detailed fee proposals after understanding your specific requirements during the initial consultation."
        },
        {
          question: "What is included in the architectural fee?",
          answer: "Our fees typically include concept design, detailed drawings, 3D visualisations, material specifications, regulatory approvals, and site supervision. The exact scope is defined in our proposal based on your project needs."
        },
        {
          question: "Are there any additional costs I should expect?",
          answer: "Depending on the project, there may be costs for structural engineering, MEP consultants, soil testing, or municipal approval fees. We clearly outline all anticipated costs in our proposal so there are no surprises."
        },
        {
          question: "How can I ensure my project stays within budget?",
          answer: "We develop detailed cost estimates early in the design phase and provide regular updates. Our BOQ (Bill of Quantities) helps track expenses, and we recommend maintaining a 10-15% contingency for unforeseen circumstances."
        }
      ]
    },
    {
      category: "Timeline & Process",
      questions: [
        {
          question: "How long does the design phase take?",
          answer: "The design phase typically takes 4-8 weeks for residential projects, depending on complexity. This includes concept development, revisions, detailed drawings, and regulatory submissions. Larger or more complex projects may require additional time."
        },
        {
          question: "What approvals are required for construction?",
          answer: "Requirements vary by location but typically include building permits, structural approvals, and fire safety clearances. We handle all regulatory submissions and coordinate with local authorities on your behalf."
        },
        {
          question: "How often will we meet during the project?",
          answer: "During the design phase, we typically meet weekly or bi-weekly for reviews and discussions. During construction, site visits are scheduled based on project progress, usually weekly for residential projects."
        },
        {
          question: "What happens if I want to make changes during construction?",
          answer: "Changes during construction are possible but may impact timeline and budget. We document all change requests, assess their implications, and provide updated estimates before proceeding. Early planning helps minimise mid-project changes."
        }
      ]
    },
    {
      category: "Design & Services",
      questions: [
        {
          question: "What design services do you offer?",
          answer: "We provide comprehensive architectural and interior design services including space planning, architectural drawings, 3D visualisation, material selection, furniture design, MEP coordination, and construction supervision."
        },
        {
          question: "Can you work with my existing contractor?",
          answer: "Yes, we can work with your preferred contractor. We provide detailed drawings and specifications, and supervise construction to ensure quality. We can also recommend trusted contractors if needed."
        },
        {
          question: "Do you provide interior design as well?",
          answer: "Yes, we offer complete interior design services including furniture layout, finishes selection, lighting design, and décor. Our integrated approach ensures consistency between architecture and interiors."
        },
        {
          question: "Can you help with renovations and not just new construction?",
          answer: "Absolutely. We handle renovation projects of all scales, from single-room updates to complete home transformations. Renovations often require additional expertise in working with existing structures and conditions."
        }
      ]
    },
    {
      category: "After Completion",
      questions: [
        {
          question: "What happens after the project is complete?",
          answer: "We conduct a final inspection, prepare a punch list for any remaining items, and ensure everything meets our quality standards. We also provide complete documentation including as-built drawings and warranty information."
        },
        {
          question: "Do you offer post-occupancy support?",
          answer: "Yes, we remain available for any queries or minor adjustments after handover. Our relationship with clients extends beyond project completion, and we're here to help with any future needs."
        },
        {
          question: "How do I maintain my newly designed space?",
          answer: "We provide maintenance guidelines for all materials and finishes used in your project. For specific items like custom joinery or specialised systems, we include manufacturer recommendations and warranty details."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase">Support</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-[1.1]">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about working with architects, our process, fees, and what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-16 md:pb-24 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div 
                key={section.category} 
                className="fade-in-up"
                style={{ animationDelay: `${sectionIndex * 0.1}s` }}
              >
                <h2 className="text-xl sm:text-2xl font-serif mb-6 pb-3 border-b border-border">
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {section.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${section.category}-${index}`}
                      className="border border-border px-5 data-[state=open]:border-foreground/20"
                    >
                      <AccordionTrigger className="text-left text-base py-5 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-12 bg-foreground text-background">
        <div className="container mx-auto max-w-3xl text-center fade-in">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">Still Have Questions?</h2>
          <p className="text-base text-background/70 mb-8 max-w-xl mx-auto">
            We're here to help. Reach out to us directly and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="h-14 px-10 text-sm tracking-wide bg-background text-foreground hover:bg-background/90" 
              asChild
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-10 text-sm tracking-wide border-background/30 text-background hover:bg-background/10 bg-transparent" 
              asChild
            >
              <Link to="/process">View Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
