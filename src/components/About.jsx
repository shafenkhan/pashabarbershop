import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TurkishDivider from './TurkishDivider';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-warm-brown/20 turkish-pattern">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <TurkishDivider />

            <h2 className="font-serif text-5xl md:text-6xl font-bold text-royal-gold mb-6">
              Crafted with Tradition,<br />Styled for Today.
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                At Pasha Barbershop, we honor the ancient art of Turkish grooming while embracing
                contemporary style. Our master barbers bring decades of combined experience,
                transforming each service into a ritual.
              </p>

              <p>
                Rooted in authentic Turkish techniques and refined through years of mastery, our team
                delivers precision, passion, and pride to every cut, shave, and detail. This isn't just
                a barbershop. It's a sanctuary for the modern man.
              </p>

              <blockquote className="border-l-4 border-royal-gold pl-6 italic text-xl text-royal-gold/90 my-8">
                "Every haircut tells a story — yours deserves to be royal."
              </blockquote>

              <p className="text-sm uppercase tracking-widest text-royal-gold font-semibold">
                — The Pasha Team
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src="/images/about/pasha2.jpeg"
                alt="Master barber at work"
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-royal-gold/30 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
