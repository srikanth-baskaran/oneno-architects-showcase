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
              Crafting Spaces with Purpose
            </h1>
          </div>

          {/* Main Content */}
          <div className="space-y-12 fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the principle that architecture should elevate the human experience, 
                Oneno Architects has been at the forefront of contemporary design for over a decade. 
                Our portfolio spans residential masterpieces, commercial landmarks, and innovative 
                interior spaces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <div>
                <h3 className="text-2xl font-serif mb-4">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in a collaborative design process that begins with deep listening. 
                  Understanding your vision, needs, and the unique context of each site allows us 
                  to create architecture that is both innovative and deeply rooted in purpose.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-4">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Timeless design over fleeting trends</li>
                  <li>• Sustainable and responsible practices</li>
                  <li>• Meticulous attention to detail</li>
                  <li>• Collaboration and transparency</li>
                </ul>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 py-16 border-y border-border">
              <div className="text-center">
                <div className="text-4xl font-serif mb-2">50+</div>
                <div className="text-sm text-muted-foreground tracking-wide">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif mb-2">15</div>
                <div className="text-sm text-muted-foreground tracking-wide">Design Awards</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif mb-2">10+</div>
                <div className="text-sm text-muted-foreground tracking-wide">Years Experience</div>
              </div>
            </div>

            {/* Team Section */}
            <div className="pt-8">
              <h3 className="text-2xl font-serif mb-6">Our Team</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our studio brings together architects, designers, and consultants who share a 
                passion for excellence. Led by award-winning principals with international experience, 
                we combine creative vision with technical expertise to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
