import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

interface Technology {
  name: string;
  category: string;
  icon: string;
}

interface TechStackProps {
  technologies: Technology[];
}

export const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  const categories = Array.from(new Set(technologies.map(tech => tech.category)));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
        <Code size={20} className="text-blue-400" />
        Pila tecnológica
      </h2>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-lg text-gray-300 mb-3">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies
                .filter(tech => tech.category === category)
                .map(tech => (
                  <div
                    key={tech.name}
                    className="bg-[#2D2D2D] p-3 rounded-lg flex items-center gap-3"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6"
                    />
                    <span className="text-gray-300">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};