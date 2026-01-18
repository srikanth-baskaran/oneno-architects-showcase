import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
          {/* Brand */}
          <div>
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

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-background/50">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a 
                  href="tel:+919342663660" 
                  className="hover:text-background transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +91 9342663660
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/message/HKQGD2WEMXQ5P1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@oneno.in" 
                  className="hover:text-background transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  hello@oneno.in
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
              href="https://share.google/ywd5ftPHbkoXBBztJ" 
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