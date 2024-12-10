import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-48 overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeOut" }
            }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400"
              animate={{
                opacity: [0.5, 1],
                scale: [0.98, 1.02],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        loading="lazy"
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{
          opacity: isLoading ? 0 : 1,
          scale: isLoading ? 1.1 : 1,
        }}
        transition={{
          opacity: { duration: 0.5, ease: "easeOut" },
          scale: { duration: 0.7, ease: "easeOut" }
        }}
        onLoad={() => setIsLoading(false)}
        className={`${className} object-cover`}
        decoding="async"
      />
    </div>
  );
};