import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { GalleryFilter } from '../components/GalleryFilter';
import { BeforeAfterCard } from '../components/BeforeAfterCard';
import { GradientButton } from '../components/GradientButton';
import { motion } from 'motion/react';
import { galleryData, type GalleryItem } from '../../data/galleryData';
import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

export function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState<string>('Alle');

  const categories = ['Alle', 'Felgenreparatur', 'Pulverbeschichtung', 'Fahrzeugaufbereitung', 'Motorrad'];

  const filteredItems = activeCategory === 'Alle'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <PageHero
        badge="Unsere Arbeiten"
        title="Galerie – Unsere Arbeit spricht für sich"
        subtitle="Vorher-Nachher-Vergleiche unserer Projekte"
        backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3b3Jrc2hvcCUyMGdhbGxlcnl8ZW58MXx8fHwxNzc2ODEwNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
            Bilder sagen mehr als tausend Worte. Überzeugen Sie sich selbst von unserer Arbeit und sehen Sie, wie wir
            beschädigte Felgen, verblasste Lackierungen und abgenutzte Innenräume zurück in neuwertige Zustände bringen.
            Jedes Projekt wird mit höchster Sorgfalt und modernster Technik umgesetzt.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <GalleryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <BeforeAfterCard
                key={item.id}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                service={item.service}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-[#A8AFBA]">
                Keine Projekte in dieser Kategorie gefunden.
              </p>
            </motion.div>
          )}
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
              Ihr Projekt könnte das nächste sein
            </h2>
            <p className="text-xl text-[#A8AFBA]">
              Lassen Sie uns gemeinsam Ihr Fahrzeug zurück in den Neuzustand bringen
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
