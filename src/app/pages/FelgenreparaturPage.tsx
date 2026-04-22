import { PageHero } from '../components/PageHero';
import { ServiceDetailCard } from '../components/ServiceDetailCard';
import { GradientButton } from '../components/GradientButton';
import { motion } from 'motion/react';
import { useInView } from '../components/hooks/useInView';
import { Wrench, Cpu, Wind, Sparkles, Bike, Shield, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

export function FelgenreparaturPage() {
  const { ref, isInView } = useInView();

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Felgenreparatur',
      description: 'Kratzer, Schläge, Risse und Korrosionsschäden – wir diagnostizieren den Schaden und reparieren ihn fachgerecht. Für alle gängigen Alufelgen und Stahlfelgen.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Felgen abdrehen (CNC-Technik)',
      description: 'Das maschinelle Abdrehen von Felgen mittels CNC-Technik sorgt für eine glatte, präzise Oberfläche. Ideal nach Bordsteinschäden oder für optische Perfektion vor einer Neulackierung.'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Sandstrahlen',
      description: 'Sandstrahlen entfernt Lack, Rost und alte Beschichtungen vollständig und schonend. Die ideale Vorbereitung für eine neue Pulverbeschichtung oder Lackierung.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Pulverbeschichtung von Felgen',
      description: 'Langlebige, kratzresistente Oberflächenbeschichtung in über 200 RAL-Farben. Pulverbeschichtung ist widerstandsfähiger als herkömmliche Lackierung und gibt Ihren Felgen ein neues, hochwertiges Aussehen.'
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: 'Pulverbeschichtung von Motorradteilen',
      description: 'Auch für Motorräder bieten wir professionelle Pulverbeschichtung an. Felgen, Rahmen und andere Metallteile werden sorgfältig behandelt und neu beschichtet.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Entfernung von Bordsteinschäden',
      description: 'Bordsteinschäden sind einer der häufigsten Gründe für Felgenreparaturen. Wir entfernen Kratzer, Abschürfungen und Beulen und stellen das ursprüngliche Erscheinungsbild Ihrer Felgen wieder her.'
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        badge="Unsere Kernkompetenz"
        title="Felgenreparatur & Oberflächen"
        subtitle="Der Spezialist in Göttingen – präzise, schnell, professionell"
        backgroundImage="https://images.unsplash.com/photo-1767274353823-c6266f765e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080"
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
            Eine beschädigte Felge ist mehr als ein optisches Problem. Kratzer, Beulen und Bordsteinschäden
            können die Fahrsicherheit beeinflussen und den Fahrzeugwert erheblich mindern. Bei FelgenDoc
            Göttingen reparieren wir Ihre Felgen professionell und bringen sie zurück in neuwertigen Zustand –
            mit modernster Technik und langjähriger Erfahrung.
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
              Unsere Leistungen im Detail
            </h2>
            <p className="text-xl text-[#A8AFBA] max-w-3xl mx-auto">
              Professionelle Felgenreparatur und Oberflächenbehandlung für höchste Ansprüche
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
              Bereit für perfekte Felgen?
            </h2>
            <p className="text-xl text-[#A8AFBA]">
              Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot
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
