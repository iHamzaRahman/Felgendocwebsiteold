import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ReactNode } from 'react';

interface ServiceDetailCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceDetailCard({ icon, title, description, delay = 0 }: ServiceDetailCardProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="absolute inset-0 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, rgba(139, 105, 20, 0.1), rgba(201, 168, 76, 0.2))' }} />

      <div className="relative bg-[#1A1A1A] border-2 border-[#C9A84C]/30 rounded-xl p-8 h-full hover:border-[#C9A84C]/50 hover:transform hover:-translate-y-2 transition-all duration-300">

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#C9A84C]/20"
          style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}
        >
          <div className="text-[#0A0A0A]">
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gradient-gold mb-4">{title}</h3>

        {/* Description */}
        <p className="text-[#A8AFBA] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
