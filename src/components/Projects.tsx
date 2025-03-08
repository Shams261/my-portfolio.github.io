"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
// Import Image when you have actual project images
// import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Text-Generator",
      description:
        "A machine learning project that generates coherent and contextually relevant text based on input data using advanced NLP techniques.",
      image: "/placeholder.jpg",
      technologies: [
        "Python",
        "NLP",
        "Machine Learning",
        "Jupyter Notebook",
        "HTML",
      ],
      github: "https://github.com/Shams261/Text-Generator",
      demo: null,
    },
    {
      title: "TweetSentimentAnalysis",
      description:
        "Analyzes and classifies the sentiment of tweets as positive or negative, providing insights into public opinion on various topics.",
      image: "/placeholder.jpg",
      technologies: [
        "Python",
        "NLP",
        "Machine Learning",
        "HTML",
        "Data Analysis",
      ],
      github: "https://github.com/Shams261/TweetSentimentAnalysis",
      demo: null,
    },
    {
      title: "Music-Genre-Classification",
      description:
        "Utilizes machine learning algorithms to accurately classify music tracks into their respective genres based on audio features.",
      image: "/placeholder.jpg",
      technologies: [
        "Python",
        "Machine Learning",
        "Audio Processing",
        "HTML",
        "CNN",
      ],
      github: "https://github.com/Shams261/Music-Genre-Classification",
      demo: null,
    },
    {
      title: "Weather App",
      description:
        "A web application that provides real-time weather updates and forecasts based on user location.",
      image: "/placeholder.jpg",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "API Integration",
        "Responsive Design",
      ],
      github: "https://github.com/Shams261/weather-app.github.io",
      demo: "https://shams261.github.io/weather-app.github.io",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="projects" title="My Projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              zIndex: 10,
            }}
          >
            <div className="relative h-48 bg-gray-200 dark:bg-gray-600 overflow-hidden">
              {/* Replace with actual project images when available */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white transition-transform duration-300 group-hover:scale-110">
                <FaCode size={48} />
              </div>
              {/* Uncomment when you have actual images */}
              {/* <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              /> */}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="mr-2" />
                  <span>Code</span>
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
