import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Studio",
      value: "RMZ Millenia Business Park-II, 143, Dr. M.G.R. Salai, Perungudi, Chennai, Tamil Nadu 600096",
      href: "https://share.google/ywd5ftPHbkoXBBztJ"
    },
    {
      icon: Phone,
      label: "Telephone",
      value: "+91 9342663660",
      href: "tel:+919342663660"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message us directly",
      href: "https://wa.me/message/HKQGD2WEMXQ5P1"
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@oneno.in",
      href: "mailto:hello@oneno.in"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-28 sm:pt-32 md:pt-40 section-padding">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 md:mb-20 fade-in">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Contact</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight">
              Let's Discuss<br />Your Project
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Whether you have a project in mind or would like to explore how we can work together, 
              we welcome the opportunity to connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      required
                      className="h-12 bg-transparent border-border focus:border-foreground transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      required
                      className="h-12 bg-transparent border-border focus:border-foreground transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    className="h-12 bg-transparent border-border focus:border-foreground transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Project Type</label>
                  <select 
                    name="project_type"
                    className="w-full h-12 px-3 bg-transparent border border-border focus:border-foreground transition-colors text-sm rounded-sm"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="workspace">Corporate Workspace</option>
                    <option value="industrial">Industrial</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Project Brief *</label>
                  <Textarea
                    name="message"
                    required
                    rows={5}
                    className="bg-transparent border-border focus:border-foreground transition-colors resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific considerations..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-14 px-10 text-sm tracking-wide"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-10 lg:pl-8 fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    target={item.label === "Address" ? "_blank" : undefined}
                    rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border group-hover:border-foreground/30 transition-colors">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm sm:text-base group-hover:text-accent transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="pt-8 border-t border-border">
                <div className="flex gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Office Hours</p>
                    <p className="text-sm sm:text-base">Monday – Friday: 9 AM – 6 PM</p>
                    <p className="text-sm text-muted-foreground">Saturday & Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="pt-8 border-t border-border">
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">Connect With Us</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/oneno_architects/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm hover:text-accent transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-foreground/30 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <span>@oneno_architects</span>
                  </a>
                  <a
                    href="https://share.google/ywd5ftPHbkoXBBztJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm hover:text-accent transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-foreground/30 transition-colors">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>Google Business</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
