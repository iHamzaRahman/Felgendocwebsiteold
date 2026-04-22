import { PageHero } from '../components/PageHero';
import { ServiceDetailCard } from '../components/ServiceDetailCard';
import { GradientButton } from '../components/GradientButton';
import { motion } from 'motion/react';
import { useInView } from '../components/hooks/useInView';
import { Shield, Gem, Paintbrush, Sparkles, Sofa, Wrench, Layers, Circle, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

export function FahrzeugaufbereitungPage() {
  const { ref, isInView } = useInView();

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Nano-Lackversiegelung',
      description: 'Langzeitschutz für Ihren Fahrzeuglack. Die Nano-Versiegelung erzeugt eine schützende Schicht, die Schmutz abweist und den Glanz Ihres Fahrzeugs erhält.'
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'Keramik-Lackversiegelung',
      description: 'Premium-Schutz für Anspruchsvolle. Keramikversiegelung bietet überlegenen Schutz gegen UV-Strahlen, Kratzer und chemische Einflüsse – bei bis zu mehrjähriger Haltbarkeit.'
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: 'Lackbehandlung',
      description: 'Polieren, Kratzer entfernen, Hologrammbeseitigung. Wir bringen Ihren Lack wieder zum Strahlen.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Innenraumreinigung',
      description: 'Professionelle Tiefenreinigung des Fahrzeuginnenraums. Sitze, Teppiche, Armaturenbrett – alles wird sorgfältig gereinigt und gepflegt.'
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: 'Lederaufbereitung',
      description: 'Leder reinigen, nähren und versiegeln. Wir sorgen dafür, dass Ihr Lederinterieur langfristig gepflegt und in bestem Zustand bleibt.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Smart Repair',
      description: 'Kleine Kratzer, Dellen und Lackschäden ohne vollständige Neulackierung beheben. Schnell, günstig und mit professionellem Ergebnis.'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Teilfolierung',
      description: 'Folieren von Motorhaube, Dach, Stoßfänger und anderen Fahrzeugteilen – für optische Highlights oder zum Schutz des Originallacks.'
    },
    {
      icon: <Circle className="w-8 h-8" />,
      title: 'Dellendoktor',
      description: 'Delle ohne Spuren entfernen. Unsere Dellentechnik stellt das Blechbild wieder her, ohne den Lack zu beschädigen.'
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        badge="Fahrzeugveredelung"
        title="Fahrzeugaufbereitung & Veredelung"
        subtitle="Ihr Auto, wie frisch aus dem Showroom"
        backgroundImage="https://images.unsplash.com/photo-1759673735031-b6eabfc82261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4MTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      {/* Introduction */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl text-[#A8AFBA] leading-relaxed"
          >
            Neben unserer Kernkompetenz in der Felgenreparatur bieten wir eine vollständige Fahrzeugaufbereitung
            an. Ob Lackversiegelung für dauerhaften Schutz, Innenraumreinigung oder Smart Repair für kleinere
            Beschädigungen – wir bringen Ihr Fahrzeug zurück in einen neuwertigen Zustand.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
              Unsere Aufbereitungsleistungen
            </h2>
            <p className="text-xl text-[#A8AFBA] max-w-3xl mx-auto">
              Von der Lackpflege bis zur Innenraumreinigung – professionelle Fahrzeugveredelung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceDetailCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">
              Bereit für ein perfekt gepflegtes Fahrzeug?
            </h2>
            <p className="text-xl text-[#A8AFBA]">
              Lassen Sie sich von unserer Expertise überzeugen – kostenlose Beratung und individuelle Angebote
            </p>

            <div className="flex flex-col gap-4 items-center max-w-md mx-auto w-full">
              <GradientButton to="/kontakt" className="w-full">
                <Phone className="w-5 h-5" />
                <span>Jetzt Termin anfragen</span>
              </GradientButton>

              <GradientButton href="https://wa.me/4917670363162" external variant="outline" className="w-full">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp schreiben</span>
              </GradientButton>
            </div>

            <div className="pt-8">
              <Link to="/" className="text-[#C9A84C] hover:text-[#E8C068] transition-colors inline-flex items-center gap-2">
                ← Zurück zur Startseite
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
