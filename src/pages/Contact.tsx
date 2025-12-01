import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 fade-in">
            <p className="text-sm tracking-widest text-muted-foreground mb-4">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Let's Create Together
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Ready to start your architectural journey? Reach out to discuss your project 
              and discover how we can bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 fade-in-up">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif mb-8">Visit Our Studio</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-muted-foreground">
                        RMZ MILLENIA BUSINESS PARK-II<br />
                        143, MGR Salai, Perungudi<br />
                        Chennai, Tamil Nadu 600096
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-muted-foreground">+91 9003043199</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-muted-foreground">info@oneno.in</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Instagram className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Instagram</p>
                      <a 
                        href="https://www.instagram.com/oneno_architects/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        @oneno_architects
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9 AM - 6 PM</p>
                  <p>Saturday & Sunday: By Appointment</p>
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
