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
  const baseStyles = "px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap";

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
      <Link to={to}>
        <motion.div
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${baseStyles} bg-transparent border-2 ${className}`}
          style={{ borderImage: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068) 1' }}
        >
          <span className="text-gradient-gold">{children}</span>
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
      className={`${baseStyles} bg-transparent border-2 ${className}`}
      style={{ borderImage: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068) 1' }}
    >
      <span className="text-gradient-gold">{children}</span>
    </motion.a>
  );
}
