import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Booking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-warm-brown/20 to-black">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <FaCalendarAlt className="text-royal-gold text-6xl mx-auto mb-8" />

          <h2 className="font-serif text-5xl md:text-6xl font-bold text-royal-gold mb-6">
            Book Your Experience
          </h2>

          <p className="text-xl text-gray-300 mb-4 leading-relaxed">
            Step into a world where tradition meets modern sophistication.
          </p>

          <p className="text-lg text-gray-400 mb-12">
            Every man deserves his ritual. Reserve your time with Murat today.
          </p>

          <div className="space-y-6">
            <a
              href="https://pashabarbershop.booksy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-royal-gold hover:bg-deep-gold text-charcoal font-bold px-12 py-5 rounded-sm transition-all duration-300 transform hover:scale-105 text-xl tracking-wide shadow-2xl"
            >
              Book on Booksy
            </a>

            <p className="text-gray-400 text-sm">
              Walk-ins welcome. Appointments recommended for the full experience.
            </p>
          </div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 bg-warm-brown/30 backdrop-blur-sm p-8 rounded-sm border border-royal-gold/30"
          >
            <h3 className="font-serif text-2xl font-semibold text-royal-gold mb-6">
              Hours of Operation
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div className="flex justify-between border-b border-royal-gold/20 pb-3">
                <span>Monday - Saturday</span>
                <span className="text-royal-gold font-semibold">10:30 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-royal-gold/20 pb-3">
                <span>Sunday</span>
                <span className="text-royal-gold font-semibold">10:30 AM - 6:00 PM</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
