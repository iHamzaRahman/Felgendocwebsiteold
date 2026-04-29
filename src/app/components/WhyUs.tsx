import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Award, Cpu, Zap, Car } from 'lucide-react';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ReasonCard({ icon, title, description, delay }: ReasonCardProps) {
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
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="w-16 h-16 bg-gradient-to-br from-[#C9A84C] to-[#A8861E] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#C9A84C]/30"
        >
          <div className="text-[#0A0A0A]">
            {icon}
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">{title}</h3>
        <p className="text-[#A8AFBA] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function WhyUs() {
  const { ref, isInView } = useInView();

  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Spezialist, kein Allrounder',
      description: 'Felgen sind unser Kerngeschäft. Wir haben das Know-How, die Maschinen und die Erfahrung, die Generalisten nicht haben.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'CNC-Präzision',
      description: 'Felgen abdrehen mittels CNC-Technik – maschinelle Genauigkeit statt Handarbeit.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Schnelle Bearbeitung',
      description: 'Kurze Wartezeiten, klare Absprachen. Viele Reparaturen sind am selben oder nächsten Tag fertig.'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Für alle Marken und Modelle',
      description: 'BMW, Mercedes, Audi, VW, Porsche oder Honda – wir arbeiten für alle Fahrzeuge und Motorräder.'
    }
  ];

  return (
    <section id="ueber-uns" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#C9A84C]/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#C9A84C]/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <div className="px-4 py-2 bg-[#0A0A0A] rounded-full">
              <span className="text-sm font-semibold tracking-wide uppercase text-gradient-gold">
                Warum wir
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Warum FelgenDoc Göttingen?
          </h2>
          <p className="text-xl text-[#A8AFBA] max-w-3xl mx-auto">
            Wir sind nicht einfach eine weitere Werkstatt – wir sind Spezialisten mit Leidenschaft
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
