import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TurkishDivider from './TurkishDivider';

const barbers = [
  {
    name: 'Murat',
    title: 'Master Barber & Owner',
    specialty: 'Traditional Turkish cuts & hot towel shaves',
    image: '/images/team/murat.jpeg',
  },
  {
    name: 'Kamil',
    title: 'Master Barber',
    specialty: 'Precision fades & modern styles',
    image: '/images/team/kamil.jpeg',
  },
  {
    name: 'Fadi',
    title: 'Master Barber',
    specialty: 'Beard sculpting & facial treatments',
    image: '/images/team/fadi.jpeg',
  },
  {
    name: 'Ozgur',
    title: 'Master Barber',
    specialty: 'Classic cuts & grooming expertise',
    image: '/images/team/ozgur.jpeg',
  },
  {
    name: 'Ferhat',
    title: 'Master Barber',
    specialty: 'Expert styling & grooming',
    image: '/images/team/ferhat.jpeg',
  },
  {
    name: 'RD',
    title: 'Master Barber',
    specialty: 'Professional cuts & detailing',
    image: '/images/team/rd.jpeg',
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TurkishDivider />
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-royal-gold mb-6">
            Meet Your Master Barbers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A team of artisans, each bringing their unique mastery to the chair.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-sm border-2 border-royal-gold/20 group-hover:border-royal-gold/60 transition-all duration-300">
                {barber.image ? (
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-80 bg-gradient-to-br from-warm-brown/40 to-charcoal/60 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-royal-gold/20 flex items-center justify-center">
                        <span className="text-4xl font-serif text-royal-gold">
                          {barber.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-royal-gold mb-2">
                  {barber.name}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
                  {barber.title}
                </p>
                <p className="text-gray-500 italic text-sm">
                  {barber.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Each barber brings their own artistry and expertise. Book with your preferred master.
          </p>
          <a
            href="https://booksy.com/en-us/1061273_pasha-barbershop_barber-shop_36433_plano#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-royal-gold hover:bg-deep-gold text-charcoal font-semibold px-10 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 text-lg tracking-wide"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
