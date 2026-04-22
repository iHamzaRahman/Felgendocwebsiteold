import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Settings, Sparkles } from 'lucide-react';
import { GradientButton } from './GradientButton';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay: number;
}

function ServiceItem({ icon, title, items, delay }: ServiceItemProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-xl p-8 hover:border-[#C9A84C]/40 transition-all duration-300 hover:transform hover:-translate-y-2"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all"
        style={{ background: 'linear-gradient(135deg, rgba(139, 105, 20, 0.1), rgba(201, 168, 76, 0.2))' }}
      >
        <div className="text-gradient-gold">
          {icon}
        </div>
      </motion.div>

      <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6">{title}</h3>

      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: delay + 0.3 + index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="mt-1.5 w-1.5 h-1.5 rotate-45"
              style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }} />
            <span className="text-[#A8AFBA]">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Services() {
  const { ref, isInView } = useInView();

  const services = [
    {
      icon: <Settings className="w-7 h-7" />,
      title: 'Felgen & Oberflächen',
      items: [
        'Felgenreparatur',
        'Felgen abdrehen (CNC-Technik)',
        'Sandstrahlen',
        'Pulverbeschichtung von Felgen',
        'Pulverbeschichtung von Motorradteilen',
        'Entfernung von Bordsteinschäden'
      ]
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: 'Fahrzeugaufbereitung & Smart Repair',
      items: [
        'Nano-Lackversiegelung',
        'Keramik-Lackversiegelung',
        'Lackbehandlung',
        'Innenraumreinigung',
        'Lederaufbereitung',
        'Smart Repair',
        'Teilfolierung',
        'Dellendoktor'
      ]
    }
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
            className="inline-block px-4 py-2 bg-[#C9A84C]/10 border-2 rounded-full mb-4"
            style={{ borderImage: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068) 1' }}
          >
            <span className="text-sm font-semibold tracking-wide uppercase text-gradient-gold">
              Leistungen
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-[#A8AFBA] max-w-3xl mx-auto">
            Von der Felgenreparatur bis zur vollständigen Fahrzeugaufbereitung – alles aus einer Hand.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              items={service.items}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <GradientButton to="/kontakt">
            Alle Leistungen ansehen
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
