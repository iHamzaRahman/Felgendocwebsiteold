import { motion } from 'motion/react';

interface GalleryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function GalleryFilter({ categories, activeCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full font-semibold text-sm transition-all ${
              isActive
                ? 'text-[#0A0A0A] shadow-gold'
                : 'relative p-[2px] overflow-hidden bg-[#1A1A1A] text-[#A8AFBA] hover:border-[#C9A84C]/40'
            }`}
            style={
              isActive
                ? {
                    background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #E8C068 100%)',
                  }
                : {
                    background: 'linear-gradient(135deg, rgba(139, 105, 20, 0.2), rgba(201, 168, 76, 0.2))'
                  }
            }
          >
            {isActive ? (
              <span className="px-6 py-3 block">{category}</span>
            ) : (
              <div className="px-6 py-3 bg-[#0A0A0A] rounded-full w-full">
                {category}
              </div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
