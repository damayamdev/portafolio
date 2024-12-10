import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
        <Briefcase size={20} className="text-blue-400" />
        Experiencia laboral
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative pl-6 border-l border-gray-700"
          >
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-blue-400 rounded-full" />
            <div className="bg-[#2D2D2D] rounded-lg p-4">
              <h3 className="font-semibold text-white">{exp.role}</h3>
              <p className="text-blue-400">{exp.company}</p>
              <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};