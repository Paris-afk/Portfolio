'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const WorkExperience = () => {
  const workExperience = [
    {
      company: 'Welco',
      position: 'Développeur FullStack',
      period: 'Sep 2023 - Present',
      location: 'Lyon, France',
      type: 'CDI',
      description: 'Développement d\'une application mobile pour une plateforme de livraison collaborative où les voisins récupèrent les colis de manière sécurisée contre une rémunération. Startup de logistique et e-commerce.',
      achievements: [
        'Participation à toutes les étapes de développement de l\'application mobile (front-end et back-end)',
        'Collaboration avec l\'équipe UX pour l\'amélioration de l\'expérience utilisateur',
        'Réalisation des notes de release et soumissions aux stores',
        'Réalisation des tests unitaires et fonctionnels',
        'Optimisation des performances et correction des bugs'
      ],
      technologies: ['Flutter', 'Dart', 'TypeScript', 'Node.js', 'MongoDB', 'Git', 'GitLab CI/CD', 'gRPC', 'Google Cloud'],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      company: 'Welco',
      position: 'Développeur FullStack (Alternance)',
      period: 'Sep 2022 - Sep 2023',
      location: 'Lyon, France',
      type: 'Alternance',
      description: 'Développement d\'une application mobile pour une plateforme de livraison collaborative où les voisins récupèrent les colis de manière sécurisée contre une rémunération.',
      achievements: [
        'Apprentissage et maîtrise des technologies Flutter et Node.js',
        'Collaboration étroite avec l\'équipe de développement',
        'Contribution au développement front-end et back-end',
        'Participation aux phases de test et de débogage'
      ],
      technologies: ['Flutter', 'Dart', 'TypeScript', 'Node.js', 'MongoDB', 'Git', 'gRPC'],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      company: 'ISITA-Monterrey',
      position: 'Développeur FullStack',
      period: 'May 2021 - Sep 2022',
      location: 'Monterrey, Mexique',
      type: 'CDI',
      description: 'Développement d\'une plateforme d\'e-commerce pour le Tec de Monterrey, avec des solutions de paiement en ligne et des outils de gestion de produits et d\'utilisateurs. Conseil en informatique et développement de plateformes mobiles.',
      achievements: [
        'Développement du site e-commerce pour le Tec de Monterrey',
        'Création de microservices pour la plateforme',
        'Création de composants personnalisés non-natifs sur la plateforme VTEX',
        'Intégration de solutions de paiement en ligne'
      ],
      technologies: ['React.js', 'Node.js', 'Express', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'PostgreSQL'],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      company: 'SETUR',
      position: 'Développeur FullStack (Stage)',
      period: 'Feb 2020 - Aug 2020',
      location: 'Chartres de Bretagne, France',
      type: 'Stage',
      description: 'Développement de l\'application Urban Think®, un outil de simulation pour l\'évaluation de projets d\'aménagement urbain, permettant de modéliser les quartiers et les villes. Secteur urbanisme et ingénierie du territoire.',
      achievements: [
        'Développement et intégration de l\'interface utilisateur pour la simulation 3D',
        'Collaboration avec les équipes SIG pour intégrer les données géospatiales',
        'Tests et débogage pour garantir la fiabilité des simulations',
        'Manipulation de données géospatiales complexes'
      ],
      technologies: ['Vue.js 2', 'Laravel', 'JavaScript', 'PHP', 'PostgreSQL', 'PostGIS', 'Git', 'QGIS'],
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const languages = [
    {
      name: 'Espagnol',
      level: 'Natif',
      description: 'Langue maternelle',
    },
    {
      name: 'Français',
      level: 'Avancé',
      description: 'Fluidité professionnelle',
    },
    {
      name: 'Anglais',
      level: 'Intermédiaire',
      description: 'Compréhension technique',
    },
  ];

  return (
    <section id="work-experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expérience professionnelle
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mon parcours professionnel en développement logiciel, du rôle de développeur junior aux postes seniors, 
            avec un focus sur la création de solutions impactantes et le leadership d&apos;équipes.
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="mb-16">
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {job.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {job.position}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-2">
                          {job.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {job.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>
                    
                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Réalisations clés :
                      </h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies utilisées :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Langues
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {language.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">
                      {language.level}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {language.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
