import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  service: string;
  delay?: number;
}

export function BeforeAfterCard({ beforeImage, afterImage, service, delay = 0 }: BeforeAfterCardProps) {
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
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{ background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #E8C068 100%)' }}>
            <span className="text-[#0A0A0A]">NACHHER</span>
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
          className="absolute top-0 bottom-0 w-1 cursor-col-resize"
          style={{
            left: `${sliderPosition}%`,
            background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)'
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
            style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}>
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
