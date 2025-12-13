import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src={logoLight} 
              alt="Oneno Architects" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-background/60 leading-relaxed mb-3">
              Architecture & Interior Design Studio based in Chennai.
            </p>
            <p className="text-base font-serif text-background/80 italic">
              "Curating Timeless Memories"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-background/50">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Why Us?", path: "/why-us" },
                { name: "Projects", path: "/projects" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-background/50">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
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

          {/* Location */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-background/50">Studio</h4>
            <a 
              href="https://maps.google.com/?q=RMZ+MILLENIA+BUSINESS+PARK-II+Chennai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-background/70 hover:text-background transition-colors leading-relaxed block"
            >
              RMZ Millenia Business Park-II,<br />
              Perungudi, Chennai 600096
            </a>
            <p className="text-sm text-background/50 mt-3">
              Monday – Friday: 9AM – 6PM
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-background/40">
            © {currentYear} Oneno Architects (OPC) Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};