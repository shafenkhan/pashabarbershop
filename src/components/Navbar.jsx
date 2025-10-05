import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiScissors } from 'react-icons/gi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-royal-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <GiScissors className="text-royal-gold text-2xl group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-serif text-xl md:text-2xl font-bold text-royal-gold">
              PASHA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-royal-gold transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://booksy.com/en-us/1061273_pasha-barbershop_barber-shop_36433_plano#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-royal-gold hover:bg-deep-gold text-charcoal font-semibold px-6 py-2 rounded-sm transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-royal-gold text-2xl"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-royal-gold transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://booksy.com/en-us/1061273_pasha-barbershop_barber-shop_36433_plano#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-royal-gold hover:bg-deep-gold text-charcoal font-semibold px-6 py-3 rounded-sm transition-all duration-300 text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
