import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useInView } from './hooks/useInView';
import { Clock, CheckCircle2, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LeasingSection() {
  const { ref, isInView } = useInView();

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      text: 'Schnelle Bearbeitung (oft am selben Tag)'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      text: 'Professionelle Ergebnisse die beim Gutachten bestehen'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: 'Faire Preise – deutlich günstiger als Händler-Nachberechnungen'
    }
  ];

  return (
    <section id="aufbereitung" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/30 to-transparent rounded-2xl blur-3xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771556907732-38360a440f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium Felgenreparatur für Leasingfahrzeuge"
                className="relative rounded-2xl shadow-2xl shadow-[#C9A84C]/20"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full"
            >
              <span className="text-[#C9A84C] text-sm font-semibold tracking-wide uppercase">
                Leasing-Rückgabe
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-[#F5F5F5]"
            >
              Leasingfahrzeug abgeben?{' '}
              <span className="text-gradient-gold">Kommen Sie vorher zu uns.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#A8AFBA] leading-relaxed"
            >
              Kratzer und Bordsteinschäden an Felgen führen bei der Leasingrückgabe oft zu teuren
              Nachberechnungen. Wir reparieren Ihre Felgen professionell – schnell, sauber und zu
              einem fairen Preis. So übergeben Sie Ihr Fahrzeug ohne unangenehme Überraschungen.
            </motion.p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg hover:border-[#C9A84C]/40 transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(139, 105, 20, 0.1), rgba(201, 168, 76, 0.2))' }}>
                    <div className="text-gradient-gold">
                      {benefit.icon}
                    </div>
                  </div>
                  <p className="text-[#F5F5F5] pt-1.5">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/kontakt">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 text-[#0A0A0A] rounded-lg font-bold text-lg transition-all shadow-gold"
                  style={{ background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #E8C068 100%)' }}
                >
                  Termin vor Rückgabe sichern
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
