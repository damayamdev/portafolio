import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { LazyImage } from '../components/ui/LazyImage';

const projects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    technologies: ['React', 'Node.js', 'MongoDB'],
    languages: ['TypeScript', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    technologies: ['Vue.js', 'Firebase', 'Tailwind'],
    languages: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  },
  {
    id: '3',
    title: 'AI Chat Interface',
    description: 'Modern chat interface with AI-powered responses',
    technologies: ['React', 'OpenAI', 'WebSocket'],
    languages: ['TypeScript', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  },
];

const allTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies)));
const allLanguages = Array.from(new Set(projects.flatMap(p => p.languages)));

export const Projects = () => {
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedLang, setSelectedLang] = useState<string[]>([]);

  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const toggleLang = (lang: string) => {
    setSelectedLang(prev =>
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    );
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                         project.description.toLowerCase().includes(search.toLowerCase());
    const matchesTech = selectedTech.length === 0 ||
                       selectedTech.some(tech => project.technologies.includes(tech));
    const matchesLang = selectedLang.length === 0 ||
                       selectedLang.some(lang => project.languages.includes(lang));
    return matchesSearch && matchesTech && matchesLang;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 bg-[#2D2D2D] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`p-2 rounded-md transition-colors ${
            showFilters ? 'bg-blue-500 text-white' : 'bg-[#2D2D2D] text-gray-400 hover:text-white'
          }`}
        >
          <Filter size={20} />
        </button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#2D2D2D] rounded-lg p-4 space-y-4"
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.map(tech => (
                  <button
                    key={tech}
                    onClick={() => toggleTech(tech)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedTech.includes(tech)
                        ? 'bg-blue-500 text-white'
                        : 'bg-[#363636] text-gray-400 hover:text-white'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {allLanguages.map(lang => (
                  <button
                    key={lang}
                    onClick={() => toggleLang(lang)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedLang.includes(lang)
                        ? 'bg-green-500 text-white'
                        : 'bg-[#363636] text-gray-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#2D2D2D] rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all"
          >
            <LazyImage
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm bg-blue-500/20 text-blue-400 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};