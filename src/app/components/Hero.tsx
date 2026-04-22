import { motion } from 'motion/react';
import { Link } from 'react-router';
import { CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const trustItems = [
    'Kostenlose Beratung',
    'Schnelle Bearbeitung',
    'Für alle Fahrzeugmarken'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1767274353823-c6266f765e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Premium Felgenreparatur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-[#C9A84C]/10 border-2 rounded-full"
                style={{ borderImage: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068) 1' }}
              >
                <span className="text-sm font-semibold tracking-wide uppercase text-gradient-gold">
                  Premium Felgenspezialist
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              >
                <span className="text-[#F5F5F5]">Felgenreparatur & </span>
                <span className="text-gradient-gold">Fahrzeugveredelung</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-[#A8AFBA] leading-relaxed"
              >
                Ihr Spezialist in Göttingen
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-[#999999]"
              >
                Felgen reparieren, CNC-abdrehen, pulverbeschichten. Professionell, präzise, termingerecht.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 w-full max-w-md"
            >
              <Link to="/kontakt" className="w-full">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201, 168, 76, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-[#0A0A0A] rounded-lg font-bold text-base sm:text-lg transition-all shadow-gold inline-flex items-center justify-center gap-2 whitespace-nowrap w-full"
                  style={{ background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #E8C068 100%)' }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Jetzt Termin anfragen</span>
                </motion.div>
              </Link>

              <motion.a
                href="https://wa.me/4917670363162"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 rounded-lg font-bold text-base sm:text-lg transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap w-full"
                style={{ borderImage: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068) 1' }}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-gradient-gold">WhatsApp schreiben</span>
              </motion.a>
            </motion.div>

            {/* Trust Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6"
            >
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" style={{ color: '#C9A84C' }} />
                  <span className="text-[#F5F5F5] text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Decorative Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/20 to-transparent rounded-full blur-3xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768577615397-f9916e9b2152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium Wheel"
                className="relative rounded-2xl shadow-2xl shadow-[#C9A84C]/20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#C9A84C] rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
