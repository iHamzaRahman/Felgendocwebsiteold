import { PageHero } from '../components/PageHero';
import { GradientButton } from '../components/GradientButton';
import { motion } from 'motion/react';
import { useInView } from '../components/hooks/useInView';
import { Award, Target, Users, Zap, Clock, Shield, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

export function UeberUnsPage() {
  const { ref, isInView } = useInView();

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Qualität',
      description: 'Höchste Ansprüche an Handwerkskunst und Material – jede Arbeit wird mit größter Sorgfalt ausgeführt.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Präzision',
      description: 'Mit modernster CNC-Technik und professioneller Ausrüstung garantieren wir exakte Ergebnisse.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Kundenservice',
      description: 'Individuelle Beratung, transparente Kommunikation und persönliche Betreuung bei jedem Projekt.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Wir setzen auf neueste Technologien und Verfahren, um beste Ergebnisse zu erzielen.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Zuverlässigkeit',
      description: 'Pünktliche Fertigstellung und verbindliche Termine – auf uns können Sie sich verlassen.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Erfahrung',
      description: 'Langjährige Expertise in der Felgenreparatur und Fahrzeugaufbereitung.'
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        badge="Über uns"
        title="FelgenDoc Göttingen – Ihr Spezialist für Perfektion"
        subtitle="Tradition trifft Innovation"
        backgroundImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd29ya3Nob3AlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc2ODEwNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      {/* Company Story */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
              Willkommen bei FelgenDoc Göttingen
            </h2>
            <p className="text-xl text-[#A8AFBA] leading-relaxed">
              Seit Jahren ist FelgenDoc Göttingen die erste Adresse für professionelle Felgenreparatur und
              Fahrzeugaufbereitung in der Region Göttingen und Umgebung. Was mit einer Leidenschaft für
              Perfektion begann, hat sich zu einem etablierten Fachbetrieb entwickelt, der höchste Qualität
              und individuelle Kundenbetreuung vereint.
            </p>
            <p className="text-xl text-[#A8AFBA] leading-relaxed">
              Wir verstehen, dass Ihr Fahrzeug mehr ist als nur ein Fortbewegungsmittel – es ist ein
              Ausdruck Ihrer Persönlichkeit. Deshalb behandeln wir jedes Projekt mit der gleichen Sorgfalt
              und Hingabe, als wäre es unser eigenes. Ob Felgenreparatur, Pulverbeschichtung oder komplette
              Fahrzeugaufbereitung – bei uns ist Ihr Auto in besten Händen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{ background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #E8C068 100%)' }}>
              <span className="text-[#0A0A0A]">UNSERE MISSION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-6">
              Perfektion in jedem Detail
            </h2>
            <p className="text-xl text-[#A8AFBA] max-w-3xl mx-auto leading-relaxed">
              Unsere Mission ist es, Ihrem Fahrzeug durch erstklassige Handwerkskunst, modernste Technologie
              und persönliche Betreuung zu neuem Glanz zu verhelfen. Jede Felge, die wir reparieren, jede
              Oberfläche, die wir veredeln, trägt unseren Anspruch an Perfektion in sich.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-[#A8AFBA] max-w-3xl mx-auto">
              Was uns auszeichnet und antreibt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[#111111] p-8 rounded-xl border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 transition-all hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-[#0A0A0A]"
                  style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
                  {value.title}
                </h3>
                <p className="text-[#A8AFBA] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
              Warum FelgenDoc Göttingen?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}></div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Modernste Technik</h3>
                  <p className="text-[#A8AFBA]">
                    CNC-Maschinen, professionelle Pulverbeschichtungsanlagen und hochwertige Materialien für
                    beste Ergebnisse.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}></div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Faire Preise</h3>
                  <p className="text-[#A8AFBA]">
                    Transparente Kalkulation und faire Preisgestaltung – ohne versteckte Kosten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}></div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Schnelle Bearbeitung</h3>
                  <p className="text-[#A8AFBA]">
                    Kurze Wartezeiten und effiziente Abläufe – Ihr Fahrzeug ist schnell wieder einsatzbereit.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}></div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Individuelle Beratung</h3>
                  <p className="text-[#A8AFBA]">
                    Persönliche Ansprechpartner und maßgeschneiderte Lösungen für jedes Anliegen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}></div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Garantierte Zufriedenheit</h3>
                  <p className="text-[#A8AFBA]">
                    Wir stehen zu unserer Arbeit – Ihre Zufriedenheit ist unser Anspruch.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}></div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Regional verwurzelt</h3>
                  <p className="text-[#A8AFBA]">
                    Wir kennen die Region Göttingen und sind für unsere Kunden vor Ort da.
                  </p>
                </div>
              </div>
            </motion.div>
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
              Lernen Sie uns kennen
            </h2>
            <p className="text-xl text-[#A8AFBA]">
              Überzeugen Sie sich selbst von unserer Expertise und lassen Sie sich unverbindlich beraten
            </p>

            <div className="flex flex-col gap-4 items-center max-w-md mx-auto w-full">
              <GradientButton to="/kontakt" className="w-full">
                <Phone className="w-5 h-5" />
                <span>Jetzt Kontakt aufnehmen</span>
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
