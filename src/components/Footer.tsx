import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Oneno Architects</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curating Timeless Memories
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Multidisciplinary architectural and interior design firm specialising in 
              Residential, Commercial, Workspace, and Industrial Projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-accent transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>RMZ MILLENIA BUSINESS PARK-II<br />143, MGR Salai, Perungudi<br />Chennai, Tamil Nadu 600096</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 9003043199</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@oneno.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/oneno_architects/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @oneno_architects
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Oneno Architects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
