import { FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import { GiScissors } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-royal-gold/20">
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <GiScissors className="text-royal-gold text-3xl" />
              <h3 className="font-serif text-2xl font-bold text-royal-gold">
                PASHA BARBERSHOP
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Where old-world Turkish craftsmanship meets modern style.
              Experience the art of grooming, elevated.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pashabarbershop_tx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-gold hover:text-deep-gold transition-colors text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/pashabarbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-gold hover:text-deep-gold transition-colors text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://maps.google.com/?q=6921+Independence+Parkway,+Suite+180,+Plano,+TX+75023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-gold hover:text-deep-gold transition-colors text-2xl"
                aria-label="Location"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-royal-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-royal-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-royal-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-royal-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-royal-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-royal-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="tel:2145013715"
                  className="hover:text-royal-gold transition-colors"
                >
                  (214) 501-3715
                </a>
              </li>
              <li>
                6921 Independence Parkway<br />
                Suite 180<br />
                Plano, TX 75023
              </li>
              <li className="pt-2">
                <a
                  href="https://booksy.com/en-us/1061273_pasha-barbershop_barber-shop_36433_plano#ba_s=seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royal-gold hover:text-deep-gold transition-colors font-semibold"
                >
                  Book on Booksy →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-royal-gold/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Pasha Barbershop. All rights reserved.
          </p>
          <p className="mt-2 text-royal-gold/70">
            Designed with respect and craftsmanship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
