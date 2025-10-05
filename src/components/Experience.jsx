import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/images/experience/pasha5.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-royal-gold leading-tight">
              More Than a Haircut.<br />
              An Experience.
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                We don't just cut hair. We restore confidence. Every visit at Pasha Barbershop
                is an escape — a return to yourself.
              </p>

              <p>
                From the moment you step through our doors, you're greeted with warmth,
                precision, and the kind of attention to detail that transforms routine into ritual.
              </p>

              <p className="text-royal-gold italic text-xl border-l-4 border-royal-gold pl-6">
                Leave looking sharper. Feeling lighter. Walking taller.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <div className="bg-warm-brown/60 backdrop-blur-sm p-8 rounded-sm border border-royal-gold/30">
                <h3 className="font-serif text-4xl font-bold text-royal-gold mb-2">15+</h3>
                <p className="text-gray-300">Years of Mastery</p>
              </div>
              <div className="bg-warm-brown/60 backdrop-blur-sm p-8 rounded-sm border border-royal-gold/30">
                <h3 className="font-serif text-4xl font-bold text-royal-gold mb-2">100%</h3>
                <p className="text-gray-300">Satisfaction Guarantee</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-warm-brown/60 backdrop-blur-sm p-8 rounded-sm border border-royal-gold/30">
                <h3 className="font-serif text-4xl font-bold text-royal-gold mb-2">5000+</h3>
                <p className="text-gray-300">Satisfied Clients</p>
              </div>
              <div className="bg-warm-brown/60 backdrop-blur-sm p-8 rounded-sm border border-royal-gold/30">
                <h3 className="font-serif text-4xl font-bold text-royal-gold mb-2">★★★★★</h3>
                <p className="text-gray-300">5-Star Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
