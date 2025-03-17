import React from 'react';
import { FaCode, FaGraduationCap, FaReact, FaNodeJs, FaDatabase, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiNextdotjs } from 'react-icons/si';

const AboutMe = () => {
  const techStack = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-blue-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Figma', icon: FaFigma, color: 'text-pink-400' },

  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Tarumanagara University',
      year: '2021 - 2024',
      description: 'Graduated with honors, focusing on Full Stack Development and UI/UX Design.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 md:px-8" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FaCode className="text-3xl text-blue-400" />
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Tech Stack</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <tech.icon className={`text-4xl ${tech.color} mb-4`} />
                <h4 className="text-lg font-medium text-white">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FaGraduationCap className="text-3xl text-purple-400" />
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Education</h3>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h4 className="text-xl font-semibold text-white mb-2 md:mb-0">{edu.degree}</h4>
                  <span className="text-purple-400 font-medium">{edu.year}</span>
                </div>
                <p className="text-lg text-blue-300 mb-2">{edu.institution}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;