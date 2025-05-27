'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 max-w-md">
              Développeur Full Stack passionné par la création d&apos;expériences web incroyables 
              et la résolution de problèmes complexes grâce au code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liens rapides</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Accueil
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                À propos
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Expérience
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Projets
              </a>
              <a href="#education" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Formation
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connectez-vous avec moi</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Paris-afk?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/paris-lópez/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:paris.obed@hotmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Paris López. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Fait avec <Heart className="w-4 h-4 mx-1 text-red-500" /> en utilisant Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
