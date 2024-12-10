import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
}

interface SkillCategoryProps {
  title: string;
  skills: readonly Skill[];
  icon: React.ReactNode;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <div className="flex items-center space-x-2 text-xl font-semibold text-white">
        {icon}
        <h2>{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};