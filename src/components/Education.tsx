'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Université de Corse',
      degree: 'Master 2 Informatique',
      period: '2022 - 2023',
      description: 'Parcours développeur fullstack web et mobile. Formation approfondie en développement d\'applications web et mobiles avec les dernières technologies.',
      achievements: ['Spécialisation fullstack', 'Projets web et mobile', 'Technologies modernes'],
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      institution: 'UTTAB (Mexique)',
      degree: 'Formation d\'ingénieur',
      period: '2020 - 2022',
      description: 'Ingénierie de développement et de gestion de logiciels multiplateformes. Formation complète en ingénierie logicielle et gestion de projets.',
      achievements: ['Développement multiplateforme', 'Gestion de projets', 'Architecture logicielle'],
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      institution: 'IUT de Nantes',
      degree: 'Licence Professionnelle MIAR',
      period: '2019 - 2020',
      description: 'Métiers de l\'informatique : applications réparties. Spécialisation dans le développement d\'applications distribuées et l\'architecture réseau.',
      achievements: ['Applications réparties', 'Architecture distribuée', 'Systèmes réseau'],
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Formation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ma formation académique en informatique et mon apprentissage continu en technologie.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {edu.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
