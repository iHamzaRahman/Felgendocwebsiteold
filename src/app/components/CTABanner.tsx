import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useInView } from './hooks/useInView';
import { Phone } from 'lucide-react';

export function CTABanner() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
        />
        <motion.div
          animate={{
            x: [100, 0, 100],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4"
          >
            Ihre Felge braucht Pflege?{' '}
            <span className="text-gradient-gold">Wir sind für Sie da.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[#A8AFBA] mb-8"
          >
            Kostenlose Erstberatung – persönlich oder telefonisch
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 items-center"
          >
            <Link to="/kontakt" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201, 168, 76, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-[#0A0A0A] rounded-full font-bold text-base sm:text-lg transition-all shadow-gold whitespace-nowrap inline-flex items-center justify-center w-full sm:w-auto"
                style={{ background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #E8C068 100%)' }}
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Jetzt Termin anfragen</span>
              </motion.div>
            </Link>

            <motion.a
              href="tel:+4917670363162"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-[#F5F5F5] text-[#F5F5F5] rounded-full font-bold text-base sm:text-lg hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">+49 (0) 176 70363162</span>
              <span className="sm:hidden">Anrufen</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
