import React from 'react';
import { Code2, Server, Wrench } from 'lucide-react';
import { SkillCategory } from '../components/skills/SkillCategory';
import { skillsData } from '../data/skills';

export const Skills = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#2D2D2D] p-6 rounded-lg mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Conocimientos y experiencia</h1>
        <p className="text-gray-400">
        Una visión general de mis habilidades técnicas y niveles de competencia en diferentes áreas del desarrollo de software.
        </p>
      </div>

      <SkillCategory
        title="Frontend Development"
        skills={skillsData.frontend}
        icon={<Code2 className="text-blue-400" size={24} />}
      />

      <SkillCategory
        title="Backend Development"
        skills={skillsData.backend}
        icon={<Server className="text-green-400" size={24} />}
      />

      <SkillCategory
        title="Tools & Technologies"
        skills={skillsData.tools}
        icon={<Wrench className="text-purple-400" size={24} />}
      />
    </div>
  );
};