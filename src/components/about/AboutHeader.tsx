import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Calendar } from 'lucide-react';

interface ProfileInfo {
  name: string;
  email: string;
  location: string;
  experience: string;
}

interface AboutHeaderProps {
  profile: ProfileInfo;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({ profile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#2D2D2D] rounded-lg p-6 mb-6"
    >
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center overflow-hidden">
          <User size={40} className="text-blue-400" />
          <img className='w-24 h-24 ' src="/foto.jpeg" alt="Foto de pefil" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
          <div className="flex flex-wrap gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{profile.experience}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};