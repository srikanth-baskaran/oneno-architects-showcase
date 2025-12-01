import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 md:mb-16 fade-in">
            <p className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-3 md:mb-4">ABOUT US</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 leading-tight">
              Curating Timeless Memories
            </h1>
          </div>

          {/* Main Content */}
          <div className="space-y-8 md:space-y-12 fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Oneno Architects (OPC Private Limited) is a multidisciplinary architectural and interior design firm specialising in Residential, Commercial, Workspace, and Industrial Projects.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
                We combine functional planning, aesthetic clarity, and technical precision to deliver consistent, high-quality design solutions. Our work focuses on efficient space utilisation, refined detailing, and sustainable design practices.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
                With a strong emphasis on client collaboration, we ensure each project reflects both the user's needs and the design intent. Our commitment is to create spaces that are functional, elegant, and enduring.
              </p>
            </div>

            {/* Specializations */}
            <div className="pt-4 md:pt-8">
              <h3 className="text-xl sm:text-2xl font-serif mb-4 md:mb-6">Our Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="p-4 md:p-6 border border-border rounded-lg">
                  <h4 className="font-medium mb-2 text-base">Residential</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Crafting homes that balance comfort, elegance, and user-centric design</p>
                </div>
                <div className="p-4 md:p-6 border border-border rounded-lg">
                  <h4 className="font-medium mb-2 text-base">Commercial</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Creating productive environments that reflect brand identity and functionality</p>
                </div>
                <div className="p-4 md:p-6 border border-border rounded-lg">
                  <h4 className="font-medium mb-2 text-base">Workspace</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Designing collaborative spaces that enhance productivity and employee wellbeing</p>
                </div>
                <div className="p-4 md:p-6 border border-border rounded-lg">
                  <h4 className="font-medium mb-2 text-base">Industrial</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Delivering technical precision for specialized industrial requirements</p>
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
