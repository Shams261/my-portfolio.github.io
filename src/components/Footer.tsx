"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024); // Default to current year

  useEffect(() => {
    // Update the year on the client side
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/Shams261",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/shams-tabrez-169829167/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope size={24} />,
      url: "mailto:shamsshoaib261@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer id="connect" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">
              Connect With Me
            </h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="bg-gray-800 hover:bg-indigo-600 text-white p-3 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-300">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Shams Tabrez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
