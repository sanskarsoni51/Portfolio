'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaArrowLeft, FaFileDownload } from 'react-icons/fa';
import Link from 'next/link';

export default function CV() {
  const experience = [
    {
      role: "Software Engineer",
      company: "Decorait Pvt. Limited",
      period: "Sep 2024 - Present",
      location: "Mumbai",
      achievements: [
        "Developed and optimized backend functionalities for Decorait, an AI-powered B2B2C platform interconnecting the decor ecosystem",
        "Implemented a real-time bell notification system using WebSockets, ensuring instant updates and improved user engagement",
        "Developed an Excel export functionality to generate reports related to product and inventory data, improving data accessibility and business insights",
        "Resolved various backend bugs and optimized existing features to improve user experience and functionality, ensuring a seamless interaction within the platform"
      ]
    },
    {
      role: "Software Engineer",
      company: "Locobuzz Solutions Private Limited",
      period: "Feb 2024 - Aug 2024",
      location: "Mumbai",
      achievements: [
        "Integrated Twitter and Meta APIs into the Locobuzz platform, enhancing the system's social media interaction capabilities",
        "Contributed to the development of SpringBoot services, including a bulk action feature that optimized the execution of multiple operations simultaneously",
        "Automated key platform processes using Cypress, reducing manual efforts and improving operational efficiency"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelors of Technology - Computer Science",
      institution: "Jaipur Engineering College and Research Center",
      location: "Jaipur",
      period: "Aug 2019 - Jun 2023",
      score: "CGPA: 8.3/10"
    },
    {
      degree: "Senior Secondary",
      institution: "Alok Senior Secondary School",
      location: "Chittorgarh",
      period: "Apr 2017 - Mar 2018",
      score: "87.4%"
    }
  ];

  const skills = [
    { category: "Languages/Database", items: ["C++", "Javascript", "SQL", "MongoDB"] },
    { category: "Web Technologies", items: ["HTML", "CSS"] },
    { category: "Technologies & Tools", items: ["Node.js", "SpringBoot", "Cypress", "AWS"] }
  ];

  return (
    <main className="min-h-screen py-12 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 group transition-colors"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Sanskar Soni
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">Software Engineer</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              <a href="tel:+919887279510" className="hover:text-purple-600">+91 9887279510</a>
            </p>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaBriefcase className="text-3xl text-purple-600" />
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-600">{exp.role}</h3>
                  <p className="text-lg font-medium">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaGraduationCap className="text-3xl text-purple-600" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-purple-600">{edu.degree}</h3>
                  <p className="text-lg font-medium">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-300">{edu.period}</p>
                  <p className="font-medium text-purple-600">{edu.score}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FaCode className="text-3xl text-purple-600" />
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-600">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}