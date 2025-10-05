import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const FloatingBooking = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.a
          href="https://booksy.com/en-us/1061273_pasha-barbershop_barber-shop_36433_plano#ba_s=seo"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 bg-royal-gold hover:bg-deep-gold text-charcoal p-4 rounded-full shadow-2xl z-50 flex items-center gap-3 font-semibold transition-all duration-300"
          aria-label="Book appointment"
        >
          <FaCalendarAlt className="text-2xl" />
          <span className="hidden md:inline">Book with Murat</span>
        </motion.a>
      )}
    </>
  );
};

export default FloatingBooking;
