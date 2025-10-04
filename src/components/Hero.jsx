import { motion } from 'framer-motion';
import { FaScissors } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2574&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <FaScissors className="text-royal-gold text-4xl md:text-5xl mx-auto mb-8" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-royal-gold mb-6 leading-tight"
        >
          The Modern Sultan Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide"
        >
          Where old-world Turkish craftsmanship meets modern style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="https://pashabarbershop.booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-royal-gold hover:bg-deep-gold text-charcoal font-semibold px-10 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 text-lg tracking-wide"
          >
            Book Your Appointment
          </a>
          <a
            href="#services"
            className="border-2 border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-charcoal font-semibold px-10 py-4 rounded-sm transition-all duration-300 text-lg tracking-wide"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-royal-gold rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-royal-gold rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
