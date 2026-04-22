import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  rating: number;
  text: string;
  author: string;
  date: string;
  delay: number;
}

function TestimonialCard({ rating, text, author, date, delay }: TestimonialCardProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />

      <div className="relative bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-xl p-8 h-full hover:border-[#C9A84C]/40 transition-all duration-300 hover:transform hover:-translate-y-2">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-12 h-12 text-[#C9A84C]" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.3, delay: delay + 0.1 * i }}
            >
              <Star className="w-5 h-5 fill-[#C9A84C] text-[#C9A84C]" />
            </motion.div>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-[#F5F5F5] leading-relaxed mb-6 relative z-10">
          "{text}"
        </p>

        {/* Author & Date */}
        <div className="flex items-center justify-between pt-4 border-t border-[#C9A84C]/10">
          <div>
            <p className="text-[#F5F5F5] font-semibold">{author}</p>
            <p className="text-[#999999] text-sm">{date}</p>
          </div>
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const { ref, isInView } = useInView();

  const testimonials = [
    {
      rating: 5,
      text: 'Hervorragende Arbeit! Meine beschädigten Felgen sehen aus wie neu. Schneller Service und faire Preise. Absolut empfehlenswert!',
      author: 'Michael S.',
      date: 'März 2026'
    },
    {
      rating: 5,
      text: 'Professionelle Beratung und Top-Ergebnis. Die CNC-Bearbeitung ist wirklich präzise. Meine Leasing-Rückgabe verlief ohne Probleme.',
      author: 'Sarah K.',
      date: 'Februar 2026'
    },
    {
      rating: 5,
      text: 'Sehr zufrieden! Schnelle Terminvergabe, kompetente Beratung und das Ergebnis ist perfekt. Definitiv mein Go-To für Felgenreparatur.',
      author: 'Thomas B.',
      date: 'Januar 2026'
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-[#C9A84C]/10 border-2 rounded-full mb-4"
            style={{ borderImage: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068) 1' }}
          >
            <span className="text-sm font-semibold tracking-wide uppercase text-gradient-gold">
              Bewertungen
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-[#A8AFBA] max-w-3xl mx-auto">
            Überzeugen Sie sich von der Qualität unserer Arbeit
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              author={testimonial.author}
              date={testimonial.date}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://share.google.com/5dGtkoQw8lQ4IluAy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C9A84C] text-[#C9A84C] rounded-lg font-bold text-lg hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Alle Bewertungen auf Google ansehen
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
