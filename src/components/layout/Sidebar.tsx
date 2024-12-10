import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight, FolderClosed, FileCode, Home, User, Code, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const navItems = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/about', label: 'Sobre mi', icon: User },
  { path: '/skills', label: 'Habilidades', icon: Code },
  { path: '/projects', label: 'Proyectos', icon: Briefcase },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: isOpen ? 250 : 50 }}
      className="h-screen bg-[#1E1E1E] border-r border-[#2D2D2D] flex-shrink-0 overflow-hidden"
    >
      <div className="p-2">
        {isOpen ? (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-gray-400 hover:text-white flex items-center p-2 rounded hover:bg-[#2D2D2D] mb-2"
            >
              <ChevronDown size={16} />
              <FolderClosed size={16} className="ml-2" />
              <span className="ml-2 text-sm">Explorador de proyectos</span>
            </button>

            <div className="pl-10 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      clsx(
                        'flex items-center p-2 rounded transition-colors text-sm',
                        isActive
                          ? 'bg-[#2D2D2D] text-white'
                          : 'text-gray-400 hover:text-white hover:bg-[#2D2D2D]'
                      )
                    }
                  >
                    <FileCode size={16} className="mr-2" />
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex justify-center p-2 text-gray-400 hover:text-white"
            >
              <ChevronRight size={16} />
            </button>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    clsx(
                      'flex justify-center p-2 transition-colors',
                      isActive
                        ? 'bg-[#2D2D2D] text-white'
                        : 'text-gray-400 hover:text-white'
                    )
                  }
                  title={item.label}
                >
                  <Icon size={20} />
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
};