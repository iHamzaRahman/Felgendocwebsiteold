import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  service: string;
  delay: number;
}

function BeforeAfterCard({ beforeImage, afterImage, service, delay }: BeforeAfterCardProps) {
  const { ref, isInView } = useInView();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-col-resize select-none bg-[#1A1A1A] border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 transition-all"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Top Layer) */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={afterImage}
            alt="Nach der Reparatur"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#C9A84C] text-[#0A0A0A] rounded-full text-xs font-bold">
            NACHHER
          </div>
        </div>

        {/* Before Image (Clipped Layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <ImageWithFallback
            src={beforeImage}
            alt="Vor der Reparatur"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#999999] text-white rounded-full text-xs font-bold">
            VORHER
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#C9A84C] cursor-col-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#C9A84C] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-[#0A0A0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: delay + 0.2 }}
        className="mt-4 text-center"
      >
        <p className="text-[#A8AFBA] text-sm">{service}</p>
      </motion.div>
    </motion.div>
  );
}

export function BeforeAfterGallery() {
  const { ref, isInView } = useInView();

  const gallery = [
    {
      beforeImage: 'https://images.unsplash.com/photo-1763095789122-40845c1e5b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1767800297866-e4f4d4d23194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      service: 'Felgenreparatur · CNC-Abdrehen'
    },
    {
      beforeImage: 'https://images.unsplash.com/photo-1762803942877-77462d9b9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1775511012550-7593846bdd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      service: 'Pulverbeschichtung · Oberflächenbehandlung'
    },
    {
      beforeImage: 'https://images.unsplash.com/photo-1768341396286-a6322d588111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1767274353823-c6266f765e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx3aGVlbCUyMHJlcGFpciUyMHByZW1pdW0lMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NjgxMDcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      service: 'Bordsteinschäden · Komplettrestauration'
    }
  ];

  return (
    <section id="galerie" className="py-24 bg-[#111111]">
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
                Galerie
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Ergebnisse sprechen für sich
          </h2>
          <p className="text-xl text-[#A8AFBA] max-w-3xl mx-auto">
            Sehen Sie selbst: Unsere Vorher/Nachher-Bilder zeigen die Qualität unserer Arbeit
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gallery.map((item, index) => (
            <BeforeAfterCard
              key={index}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              service={item.service}
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
          <Link to="/galerie">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block p-[2px] rounded-full overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}
            >
              <div className="px-8 py-4 bg-[#0A0A0A] rounded-full font-bold text-lg w-full">
                <span className="text-gradient-gold">Weitere Bilder in der Galerie</span>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
