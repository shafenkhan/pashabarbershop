import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { GiTurban } from 'react-icons/gi';
import TurkishDivider from './TurkishDivider';

const FriscoComingSoon = () => {
  return (
    <section id="frisco" className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-warm-brown/20 to-black">
      {/* Turkish Pattern Background */}
      <div className="absolute inset-0 turkish-pattern opacity-30" />

      {/* Animated Ottoman Ornaments */}
      <div className="absolute top-20 left-10 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200" className="text-royal-gold">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M100,20 L100,180 M20,100 L180,100" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-20 right-10 opacity-10">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg width="150" height="150" viewBox="0 0 200 200" className="text-ottoman-gold">
            <path d="M100 20 L120 80 L180 80 L130 120 L150 180 L100 140 L50 180 L70 120 L20 80 L80 80 Z"
                  stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Turkish Fez Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-block relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <GiTurban className="text-8xl text-turkish-red mx-auto drop-shadow-2xl" />
            </motion.div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-royal-gold rounded-full animate-pulse" />
          </div>
        </motion.div>

        <TurkishDivider />

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-royal-gold mb-6 leading-tight">
            FRISCO
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-royal-gold" />
            <p className="text-3xl md:text-4xl text-cream font-light tracking-widest">COMING SOON</p>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-royal-gold" />
          </div>
        </motion.div>

        {/* Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="bg-gradient-to-br from-warm-brown/40 to-charcoal/60 p-12 rounded-sm border-2 border-royal-gold/30 relative overflow-hidden">
            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" className="text-royal-gold">
                <path d="M0,0 L100,0 L0,100 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180">
              <svg viewBox="0 0 100 100" className="text-royal-gold">
                <path d="M0,0 L100,0 L0,100 Z" fill="currentColor" />
              </svg>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal-gold mb-6">
              The Sultan's Legacy Expands North
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed relative z-10">
              <p>
                From the heart of Plano, where authentic Turkish craftsmanship has become legend,
                we bring our royal tradition to Frisco.
              </p>

              <p className="text-cream font-serif text-2xl italic">
                "Where the red fez meets modern mastery."
              </p>

              <p>
                Watch for Murat's signature red Turkish cap — a symbol of heritage, honor, and the
                artistry that transforms every haircut into a ceremony.
              </p>

              <div className="flex items-center justify-center gap-2 text-royal-gold pt-4">
                <FaStar className="text-2xl" />
                <FaStar className="text-2xl" />
                <FaStar className="text-2xl" />
                <FaStar className="text-2xl" />
                <FaStar className="text-2xl" />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">
                Plano's #1 Rated Turkish Barbershop
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-8 bg-warm-brown/20 rounded-sm border border-royal-gold/20">
            <div className="text-4xl mb-4">🇹🇷</div>
            <h3 className="font-serif text-xl text-royal-gold mb-3">Authentic Turkish Heritage</h3>
            <p className="text-gray-400">Traditional techniques passed down through generations</p>
          </div>

          <div className="text-center p-8 bg-warm-brown/20 rounded-sm border border-royal-gold/20">
            <div className="text-4xl mb-4">👑</div>
            <h3 className="font-serif text-xl text-royal-gold mb-3">The Red Fez Tradition</h3>
            <p className="text-gray-400">Murat's signature cap — a mark of Ottoman mastery</p>
          </div>

          <div className="text-center p-8 bg-warm-brown/20 rounded-sm border border-royal-gold/20">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-serif text-xl text-royal-gold mb-3">Award-Winning Service</h3>
            <p className="text-gray-400">Bringing excellence from Plano to Frisco</p>
          </div>
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-royal-gold/10 backdrop-blur-sm px-8 py-4 rounded-sm border border-royal-gold/40 mb-8">
            <FaMapMarkerAlt className="text-royal-gold text-2xl" />
            <span className="text-xl text-cream font-serif">Frisco, Texas</span>
          </div>

          <p className="text-gray-400 text-lg mb-8">
            Exact location to be revealed soon. Join the waitlist to be the first to know.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://booksy.com/en-us/1061273_pasha-barbershop_barber-shop_36433_plano#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-royal-gold hover:bg-deep-gold text-charcoal font-bold px-10 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 text-lg tracking-wide"
            >
              Visit Our Plano Location
            </a>
            <a
              href="#contact"
              className="border-2 border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-charcoal font-semibold px-10 py-4 rounded-sm transition-all duration-300 text-lg tracking-wide"
            >
              Stay Updated
            </a>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-20"
        >
          <blockquote className="text-2xl md:text-3xl font-serif italic text-ottoman-gold max-w-3xl mx-auto">
            "The legacy continues. The throne awaits. Frisco, prepare for royalty."
          </blockquote>
          <p className="text-royal-gold uppercase tracking-widest text-sm mt-6">— The Pasha Team</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FriscoComingSoon;
