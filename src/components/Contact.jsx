import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-royal-gold mb-6">
            Visit Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Located in the heart of Plano. Your transformation awaits.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6 bg-warm-brown/30 p-6 rounded-sm border border-royal-gold/20">
              <FaMapMarkerAlt className="text-royal-gold text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-semibold text-royal-gold mb-2">
                  Address
                </h3>
                <p className="text-gray-300 text-lg">
                  6921 Independence Parkway, Suite 180<br />
                  Plano, TX 75023
                </p>
                <a
                  href="https://maps.google.com/?q=6921+Independence+Parkway,+Suite+180,+Plano,+TX+75023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royal-gold hover:text-deep-gold mt-2 inline-block text-sm"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-warm-brown/30 p-6 rounded-sm border border-royal-gold/20">
              <FaPhone className="text-royal-gold text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-semibold text-royal-gold mb-2">
                  Phone
                </h3>
                <a
                  href="tel:2145013715"
                  className="text-gray-300 text-lg hover:text-royal-gold transition-colors"
                >
                  (214) 501-3715
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-warm-brown/30 p-6 rounded-sm border border-royal-gold/20">
              <FaClock className="text-royal-gold text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-semibold text-royal-gold mb-3">
                  Hours
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between gap-8">
                    <span>Monday - Saturday</span>
                    <span className="text-royal-gold">10:30 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Sunday</span>
                    <span className="text-royal-gold">10:30 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[500px] rounded-sm overflow-hidden border-2 border-royal-gold/30"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.8869517486814!2d-96.83449842377396!3d33.01892197356911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3d1e8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2s6921%20Independence%20Pkwy%20Suite%20180%2C%20Plano%2C%20TX%2075023!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pasha Barbershop Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
