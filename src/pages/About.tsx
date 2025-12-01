import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 fade-in">
            <p className="text-sm tracking-widest text-muted-foreground mb-4">ABOUT US</p>
            <h1 className="text-5xl md:text-6xl font-serif mb-8">
              Curating Timeless Memories
            </h1>
          </div>

          {/* Main Content */}
          <div className="space-y-12 fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Oneno Architects (OPC Private Limited) is a multidisciplinary architectural and interior design firm specialising in Residential, Commercial, Workspace, and Industrial Projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                We combine functional planning, aesthetic clarity, and technical precision to deliver consistent, high-quality design solutions. Our work focuses on efficient space utilisation, refined detailing, and sustainable design practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                With a strong emphasis on client collaboration, we ensure each project reflects both the user's needs and the design intent. Our commitment is to create spaces that are functional, elegant, and enduring.
              </p>
            </div>

            {/* Specializations */}
            <div className="pt-8">
              <h3 className="text-2xl font-serif mb-6">Our Expertise</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Residential</h4>
                  <p className="text-sm text-muted-foreground">Crafting homes that balance comfort, elegance, and user-centric design</p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Commercial</h4>
                  <p className="text-sm text-muted-foreground">Creating productive environments that reflect brand identity and functionality</p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Workspace</h4>
                  <p className="text-sm text-muted-foreground">Designing collaborative spaces that enhance productivity and employee wellbeing</p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Industrial</h4>
                  <p className="text-sm text-muted-foreground">Delivering technical precision for specialized industrial requirements</p>
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

export default About;
