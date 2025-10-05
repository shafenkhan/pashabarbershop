import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaInstagram, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'James Martinez',
    rating: 5,
    text: "Murat is a true artist. Best fade I've ever had. The hot towel treatment is incredible.",
  },
  {
    name: 'Ryan Thompson',
    rating: 5,
    text: 'This place is an experience. From the service to the atmosphere, everything is top-tier.',
  },
  {
    name: 'David Chen',
    rating: 5,
    text: 'Finally found my barbershop. Murat takes his time and gets it perfect every single time.',
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-royal-gold mb-6">
            The Pasha Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            See what our clients are saying and follow our journey.
          </p>
          <a
            href="https://www.instagram.com/pashabarbershop_tx/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-royal-gold hover:text-deep-gold transition-colors text-lg"
          >
            <FaInstagram className="text-2xl" />
            @pashabarbershop_tx
          </a>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-warm-brown/40 to-charcoal/60 p-8 rounded-sm border border-royal-gold/20 relative"
            >
              <FaQuoteLeft className="text-royal-gold/30 text-4xl mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-royal-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-royal-gold font-semibold">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="overflow-hidden rounded-sm group">
            <img
              src="/images/gallery/gallery-1.jpeg"
              alt="Pasha Barbershop"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-sm group">
            <img
              src="/images/gallery/gallery-2.jpeg"
              alt="Professional grooming"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-sm group">
            <img
              src="/images/gallery/gallery-3.webp"
              alt="Expert barbering"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-sm group">
            <img
              src="/images/gallery/gallery-4.webp"
              alt="Master craftsmanship"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            Share your experience with{' '}
            <span className="text-royal-gold font-semibold">#PashaPlano</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
