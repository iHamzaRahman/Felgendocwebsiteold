import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GradientButton } from './GradientButton';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

interface PrimaryServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  delay: number;
}

function PrimaryServiceCard({ image, title, description, link, delay }: PrimaryServiceCardProps) {
  const { ref, isInView } = useInView();

  return (
    <Link to={link} className="h-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay }}
        className="group bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-xl overflow-hidden hover:border-[#C9A84C]/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col"
      >
        <div className="relative h-72 overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        </div>

        <div className="p-8 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold text-gradient-gold mb-4 group-hover:text-[#E8C068] transition-colors">
            {title}
          </h3>
          <p className="text-[#A8AFBA] leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export function Services() {
  const { ref, isInView } = useInView();

  const primaryServices = [
    {
      title: 'Felgenreparatur',
      description: 'Professionelle Reparatur von Kratzern, Schlägen und Bordsteinschäden. Mit modernster Technik bringen wir Ihre Felgen zurück in neuwertigen Zustand.',
      image: 'https://images.unsplash.com/photo-1767274353823-c6266f765e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/felgenreparatur'
    },
    {
      title: 'Pulverbeschichtung',
      description: 'Hochwertige Pulverbeschichtung in über 200 RAL-Farben. Langlebig, kratzfest und witterungsbeständig für Felgen und Motorradteile.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd29ya3Nob3AlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc2ODEwNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/felgenreparatur'
    },
    {
      title: 'CNC-Felgen abdrehen',
      description: 'Präzises maschinelles Abdrehen mit CNC-Technik. Für eine perfekt glatte Oberfläche und exakte Ergebnisse nach Bordsteinschäden.',
      image: 'https://images.unsplash.com/photo-1768577615397-f9916e9b2152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/felgenreparatur'
    },
    {
      title: 'Fahrzeugaufbereitung',
      description: 'Komplette Innen- und Außenaufbereitung. Von Lackversiegelung über Polsterreinigung bis zur professionellen Lederaufbereitung.',
      image: 'https://images.unsplash.com/photo-1759673735031-b6eabfc82261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4MTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/fahrzeugaufbereitung'
    }
  ];

  const secondaryServices = [
    'Sandstrahlen',
    'Entfernung von Bordsteinschäden',
    'Nano-Lackversiegelung',
    'Keramik-Lackversiegelung',
    'Lackbehandlung & Politur',
    'Innenraumreinigung',
    'Lederaufbereitung',
    'Smart Repair',
    'Teilfolierung',
    'Dellendoktor',
    'Motorradteile pulverbeschichten'
  ];

  return (
    <section id="felgen" className="py-24 bg-[#111111]">
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
            className="inline-block relative p-[2px] rounded-full overflow-hidden mb-4"
            style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}
          >
            <div className="px-4 py-2 bg-[#111111] rounded-full">
              <span className="text-sm font-semibold tracking-wide uppercase text-gradient-gold">
                Leistungen
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-[#A8AFBA] max-w-3xl mx-auto">
            Von der Felgenreparatur bis zur vollständigen Fahrzeugaufbereitung – alles aus einer Hand.
          </p>
        </motion.div>

        {/* Primary Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {primaryServices.map((service, index) => (
            <PrimaryServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Secondary Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6 text-center">
            Weitere Leistungen
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }} />
                <span className="text-[#A8AFBA]">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <GradientButton to="/kontakt">
            <span>Jetzt Beratung anfragen</span>
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
