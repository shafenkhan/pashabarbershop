import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCut, FaRegGem, FaFire, FaSpa, FaEye } from 'react-icons/fa';
import { GiRazor, GiBeard } from 'react-icons/gi';

const services = [
  {
    icon: FaCut,
    title: 'Signature Haircut',
    description: 'Precision fades, sculpted with care.',
    detail: 'Tailored to your style, executed with mastery.',
  },
  {
    icon: GiBeard,
    title: 'Hair + Beard Combo',
    description: 'Balanced. Defined. Complete.',
    detail: 'The perfect harmony of style and sophistication.',
  },
  {
    icon: FaRegGem,
    title: 'The Turkish Delight Experience',
    description: 'Steam. Wax. Towel. A royal ritual.',
    detail: 'An immersive journey of relaxation and refinement.',
  },
  {
    icon: GiRazor,
    title: 'Hot Towel Shave',
    description: 'Old-school mastery, modern precision.',
    detail: 'A timeless tradition for the discerning gentleman.',
  },
  {
    icon: FaFire,
    title: 'Beard Treatment',
    description: 'From rugged to refined.',
    detail: 'Sculpting, trimming, and conditioning perfection.',
  },
  {
    icon: FaSpa,
    title: 'Facial Treatment',
    description: 'Revitalize. Restore. Renew.',
    detail: 'Luxury grooming that goes beyond the surface.',
  },
  {
    icon: FaEye,
    title: 'Eyebrow Threading & Waxing',
    description: 'Sharp lines, softer finish.',
    detail: 'Precision detailing for a polished look.',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-warm-brown/10">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-royal-gold mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every service is a ritual. Every detail, intentional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-warm-brown/40 to-charcoal/60 p-8 rounded-sm border border-royal-gold/20 hover:border-royal-gold/60 transition-all duration-300 hover:shadow-2xl hover:shadow-royal-gold/10"
              >
                <Icon className="text-royal-gold text-5xl mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-2xl font-semibold text-royal-gold mb-3">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-300 italic mb-3">
                  {service.description}
                </p>
                <p className="text-gray-400 text-sm">
                  {service.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://pashabarbershop.booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-charcoal font-semibold px-10 py-4 rounded-sm transition-all duration-300 text-lg tracking-wide"
          >
            View Full Menu on Booksy
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
