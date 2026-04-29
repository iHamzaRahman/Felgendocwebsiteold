import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ReactNode } from 'react';

interface GradientButtonProps {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: 'filled' | 'outline';
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export function GradientButton({
  to,
  href,
  children,
  variant = 'filled',
  external = false,
  className = '',
  onClick
}: GradientButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap";

  // Internal link using React Router
  if (to) {
    if (variant === 'filled') {
      return (
        <Link to={to}>
          <motion.div
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} text-[#0A0A0A] shadow-gold ${className}`}
            style={{ background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #E8C068 100%)' }}
          >
            {children}
          </motion.div>
        </Link>
      );
    }

    return (
      <Link to={to} className={className}>
        <motion.div
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 border-[#C9A84C] text-gradient-gold bg-transparent"
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  // External link using anchor tag
  if (variant === 'filled') {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} text-[#0A0A0A] shadow-gold ${className}`}
        style={{ background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #E8C068 100%)' }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 border-[#C9A84C] text-gradient-gold bg-transparent ${className}`}
    >
      {children}
    </motion.a>
  );
}
