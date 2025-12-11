import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12 md:mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="Oneno Architects" 
              className="h-14 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm text-background/60 leading-relaxed max-w-sm mb-6">
              A multidisciplinary architectural and interior design firm specialising in creating 
              spaces that are functional, elegant, and enduring.
            </p>
            <p className="text-xl sm:text-2xl font-serif text-background/80 italic">
              "Curating Timeless Memories"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50">Contact</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li>
                <a 
                  href="https://maps.google.com/?q=RMZ+MILLENIA+BUSINESS+PARK-II+Chennai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors leading-relaxed block"
                >
                  RMZ Millenia Business Park-II,<br />
                  Chennai, Tamil Nadu 600096
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919003043199" 
                  className="hover:text-background transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +91 9003043199
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@oneno.in" 
                  className="hover:text-background transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@oneno.in
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/oneno_architects/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors inline-flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  @oneno_architects
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {currentYear} Oneno Architects. All rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Mon–Fri: 9AM–6PM · Weekends: By Appointment
          </p>
        </div>
      </div>
    </footer>
  );
};
