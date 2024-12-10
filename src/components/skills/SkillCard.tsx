import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const levelColors = {
  Beginner: 'bg-yellow-500/20 text-yellow-400',
  Intermediate: 'bg-blue-500/20 text-blue-400',
  Advanced: 'bg-green-500/20 text-green-400',
  Expert: 'bg-purple-500/20 text-purple-400',
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#2D2D2D] rounded-lg p-4 hover:ring-2 hover:ring-blue-500 transition-all"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
        <span className={clsx('px-2 py-1 text-sm rounded', levelColors[skill.level])}>
          {skill.level}
        </span>
      </div>
      <p className="mt-2 text-gray-400">{skill.description}</p>
      <div className="mt-4 flex items-center text-gray-400">
        <CheckCircle2 size={16} className="mr-2" />
        <span className="text-sm">Verified skill</span>
      </div>
    </motion.div>
  );
};