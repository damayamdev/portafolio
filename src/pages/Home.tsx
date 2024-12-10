import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="bg-[#2D2D2D] rounded-lg p-8 shadow-lg border border-[#3D3D3D]">
        <div className="flex items-center mb-6">
          <Terminal size={32} className="text-green-400 mr-4" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Hola, Soy Daniel Amaya Marín
          </h1>
        </div>
        <div className="space-y-6 text-gray-300">
          <div className="space-y-4">
            <p className="text-xl">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-400">desarrollador</span> = {'{'}
            </p>
            <p className="ml-8">
              <span className="text-purple-400">rol:</span>{' '}
              <span className="text-green-300">'Full Stack Developer'</span>,
            </p>
            <p className="ml-8">
              <span className="text-purple-400">localidad:</span>{' '}
              <span className="text-green-300">'Antioquia - Colombia'</span>,
            </p>
            <p className="ml-8">
              <span className="text-purple-400">Habilidades como dev:</span> [
              <span className="text-green-300">'TypeScript'</span>,{' '}
              <span className="text-green-300">'React JS'</span>,{' '}
              <span className="text-green-300">'HTML'</span>,{' '}
              <span className="text-green-300">'Node.js'</span>,{' '}
              <span className="text-green-300">'CSS'</span>,{' '}
              <span className="text-green-300">'Tailwind'</span>]
            </p>
            <p className="ml-8">
              <span className="text-purple-400">Habilidades como QA Automations:</span> [
              <span className="text-green-300">'Selenium'</span>,{' '}
              <span className="text-green-300">'Serenity Screemplay'</span>,{' '}
              <span className="text-green-300">'Cypress'</span>,{' '}
              <span className="text-green-300">'Playwright'</span>]
            </p>
            <p>{'}'}</p>
          </div>

          <div className="flex space-x-4 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-[#363636] rounded-lg hover:bg-[#404040] transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-[#363636] rounded-lg hover:bg-[#404040] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com"
               className="p-2 bg-[#363636] rounded-lg hover:bg-[#404040] transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/projects"
              className="bg-[#2D2D2D] p-6 rounded-lg hover:bg-[#363636] transition-colors border border-[#3D3D3D]">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
          Ver proyectos <ExternalLink size={18} className="ml-2" />
          </h2>
          <p className="text-gray-400">Explore mis últimos proyectos.</p>
        </Link>

        <Link to="/skills"
              className="bg-[#2D2D2D] p-6 rounded-lg hover:bg-[#363636] transition-colors border border-[#3D3D3D]">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
          Conocimientos y experiencia <ExternalLink size={18} className="ml-2" />
          </h2>
          <p className="text-gray-400">Consulte mis competencias técnicas y mi experiencia</p>
        </Link>
      </div>
    </motion.div>
  );
};