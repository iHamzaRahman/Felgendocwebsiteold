import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  badge?: string;
}

export function PageHero({ title, subtitle, description, backgroundImage, badge }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block relative p-[2px] rounded-full overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}
            >
              <div className="px-4 py-2 bg-[#0A0A0A] rounded-full">
                <span className="text-sm font-semibold tracking-wide uppercase text-gradient-gold">
                  {badge}
                </span>
              </div>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gradient-gold"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-[#F5F5F5] max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-[#A8AFBA] max-w-4xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
