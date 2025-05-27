'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Développement Frontend',
      description: 'React.js, Vue.js, HTML5, CSS3, Bootstrap, Tailwind CSS',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Développement Backend',
      description: 'Node.js, TypeScript, PHP, MongoDB, SQL, gRPC',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Développement Mobile',
      description: 'Flutter, Dart',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'DevOps & Outils',
      description: 'Git, CI/CD, Google Cloud, GitLab, VSCode',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Je suis un développeur full-stack passionné avec une expérience en technologies web modernes. 
            J&apos;aime créer des applications efficaces, évolutives et conviviales qui résolvent des problèmes concrets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mon parcours
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              J&apos;ai commencé mon parcours en programmation avec une curiosité sur le fonctionnement des sites web. 
              Au fil des années, j&apos;ai développé une expertise dans les technologies frontend et backend, 
              me permettant de créer des applications web complètes depuis zéro.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              J&apos;apprends constamment de nouvelles technologies et bonnes pratiques pour rester à jour 
              avec le paysage en constante évolution du développement web. Je crois en l&apos;écriture de code propre et maintenable, 
              et en la création d&apos;expériences utilisateur intuitives.
            </p>
            <a
              href="/CV Paris Lopez.pdf"
              download="CV_Paris_Lopez.pdf"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Télécharger CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-blue-600 mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
