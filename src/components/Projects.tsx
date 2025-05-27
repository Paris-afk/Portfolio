'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Plateforme E-Commerce',
      description: 'Une solution e-commerce complète construite avec Next.js, TypeScript et intégration Stripe. Comprend la gestion des produits, panier d\'achat et paiements sécurisés.',
      image: '/placeholder-project-1.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
      github: 'https://github.com/Paris-afk?tab=repositories',
      live: '#',
    },
    {
      title: 'Application de Gestion de Tâches',
      description: 'Une application collaborative de gestion de tâches avec mises à jour en temps réel, fonctionnalité glisser-déposer et fonctionnalités de collaboration d\'équipe.',
      image: '/placeholder-project-2.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com/Paris-afk?tab=repositories',
      live: '#',
    },
    {
      title: 'Tableau de Bord Météo',
      description: 'Un tableau de bord météo responsive qui affiche la météo actuelle et les prévisions pour plusieurs villes avec de belles visualisations de données.',
      image: '/placeholder-project-3.jpg',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS Modules'],
      github: 'https://github.com/Paris-afk?tab=repositories',
      live: '#',
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
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span className="text-sm">Capture d&apos;écran du projet</span>
                </div>
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Démo</span>
                  </a>
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
