'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJava, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiNextdotjs, SiFigma, SiExpress, SiTailwindcss } from 'react-icons/si';

export default function Home() {
  const projects = [
    {
      title: "The Haat Bazaar",
      description: "A full-featured e-commerce platform for artificial jewellery with admin dashboard, user authentication, and payment integration.",
      tech: ["Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind", "Figma"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2070",
      link: "https://thehaatbazaar.com"
    },
    {
      title: "Moonstone Hammock",
      description: "Revamped website for a chain of glamping sites with modern design and enhanced backend functionality.",
      tech: ["Next.js", "Spring Boot", "SQL", "Figma"],
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=2070",
      link: "https://moonstonehammock.com"
    },
    {
      title: "Natours",
      description: "Tour booking platform with comprehensive tour management, user authentication, and payment integration.",
      tech: ["Pug.js", "Node.js", "Express.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2074",
      link: "https://natours.netlify.app"
    },
    {
      title: "Vedic Healing and Wellness",
      description: "Platform for booking vedic healing sessions with integrated scheduling and information system.",
      tech: ["Next.js", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2094",
      link: "https://vhm-y8ed.vercel.app"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 max-w-4xl"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Sanskar Soni
          </h1>
          <h2 className="text-3xl font-semibold mb-6">Software Engineer</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Crafting robust web solutions with MERN Stack, Spring Boot, and Next.js
          </p>
          <div className="flex justify-center items-center space-x-6 text-gray-600 dark:text-gray-300 mb-8">
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:sanskarsoni89@gmail.com" className="hover:text-purple-600">sanskarsoni89@gmail.com</a>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+919887279510" className="hover:text-purple-600">+91 9887279510</a>
            </div>
          </div>
          <div className="flex justify-center space-x-6 text-3xl">
            <a href="https://github.com/sanskarsoni51">
            <FaGithub className="hover:text-purple-600 cursor-pointer transition-colors" />
            </a>
            <a href="www.linkedin.com/in/sanskarsoni51">
            <FaLinkedin className="hover:text-purple-600 cursor-pointer transition-colors" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <FaReact className="text-5xl text-blue-500 mb-2" />
              <span>React</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <SiNextdotjs className="text-5xl mb-2" />
              <span>Next.js</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <FaNodeJs className="text-5xl text-green-500 mb-2" />
              <span>Node.js</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <SiMongodb className="text-5xl text-green-600 mb-2" />
              <span>MongoDB</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <FaJava className="text-5xl text-red-500 mb-2" />
              <span>Java</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <SiSpringboot className="text-5xl text-green-600 mb-2" />
              <span>Spring Boot</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <SiExpress className="text-5xl mb-2" />
              <span>Express.js</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <SiTailwindcss className="text-5xl text-blue-400 mb-2" />
              <span>Tailwind CSS</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            I'm always excited to take on new challenges and create innovative solutions. Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:sanskarsoni89@gmail.com"
              className="flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <FaEnvelope />
              Email Me
            </a>
            <a 
              href="tel:+919887279510"
              className="flex items-center gap-2 bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaPhone />
              Call Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}