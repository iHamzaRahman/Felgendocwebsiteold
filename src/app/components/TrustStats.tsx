import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

interface StatCardProps {
  number: string;
  label: string;
  delay: number;
}

function StatCard({ number, label, delay }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && number.includes('+')) {
      const target = parseInt(number.replace('+', ''));
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-xl p-8 text-center hover:border-[#C9A84C]/40 transition-all duration-300 hover:transform hover:scale-105">
        <motion.div
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-2 text-gradient-gold"
        >
          {number.includes('+') ? `${count}+` : number}
        </motion.div>
        <div className="text-[#A8AFBA] text-sm md:text-base font-medium">{label}</div>
      </div>
    </motion.div>
  );
}

export function TrustStats() {
  const stats = [
    { number: '271+', label: 'Reparierte Felgen' },
    { number: '100%', label: 'Kundenzufriedenheit' },
    { number: 'Göttingen', label: '& Umgebung' }
  ];

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
