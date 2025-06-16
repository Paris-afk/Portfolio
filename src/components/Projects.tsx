'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { getPublicPath } from '@/utils/paths';

const Projects = () => {
  const projects = [
    {
      title: 'Welco',
      description:
        "Welco est la première plateforme de récupération de colis entre voisins. Elle est la solution du dernier mètre qui référence les personnes disponibles pour récupérer les colis de ses voisins, de manière sécurisée, en contrepartie d’une rémunération. Cette application dédiée aux particuliers vous permet de profiter de votre temps libre pour réceptionner des colis en toute simplicité et partager bien plus que cela.",
      image: getPublicPath('welco_prueba.png'),
      technologies: ['Flutter', 'Bloc', 'Node JS', 'Mongo'],
      ios: 'https://apps.apple.com/fr/app/welco-relais-particuliers/id1528343005',
      android: 'https://play.google.com/store/apps/details?id=io.welco.app&hl=fr',
    },
    {
      title: 'Web App Facebook',
      description:
        "Application web basée sur Facebook avec localStorage, utilisant Bootstrap et React.",
      image: getPublicPath('FB_prueba.png'),
      technologies: ['React', 'Bootstrap', 'localStorage'],
      github: 'https://github.com/Paris-afk/FB_Front',
      live: 'https://paris-afk.github.io/FB_Front/#/wall',
    },
    {
      title: 'Vue Crypto',
      description:
        "Application web réalisée avec Vue.js et consommant une API de cryptomonnaies.",
      image: getPublicPath('crypto_prueba.png'),
      technologies: ['Vue.js', 'API', 'JavaScript'],
      github: 'https://github.com/Paris-afk/Vue_Crypto',
      live: 'https://paris-afk.github.io/Vue_Crypto/#/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes projets
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Voici quelques-uns de mes projets récents qui démontrent mes compétences en développement web.
            Chaque projet illustre différents aspects du développement web moderne.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Capture d'écran de ${project.title}`}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span className="text-sm">Capture d&apos;écran du projet</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {/* Welco: solo links de descarga, sin code */}
                  {project.ios && project.android ? (
                    <>
                      <a
                        href={project.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                        <span>iOS</span>
                      </a>
                      <a
                        href={project.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                        <span>Android</span>
                      </a>
                    </>
                  ) : (
                    <>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                        >
                          <Github size={20} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                        >
                          <ExternalLink size={20} />
                          <span>Démo</span>
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
