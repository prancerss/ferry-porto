import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaFigma, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const MyProject = () => {
  const projects = [
    {
      name: 'Prototype Pinterest UI/UX',
      image: '/assets/project 1.png',
      description: 'Prototype UI/UX Design of Pinterest App by Adding Some New Features According to Creativity.',
      githubLink: 'https://www.figma.com/design/NGmMAOCmYXNziqVZo37XU3/PINTEREST?node-id=0-1&t=3fu0PnCqpMPavsAT-1',
      liveLink: 'https://www.figma.com/proto/NGmMAOCmYXNziqVZo37XU3/PINTEREST?node-id=0-1&t=3fu0PnCqpMPavsAT-1',
      techStack: [{ icon: FaFigma, name: 'Figma' }]
    },
    {
      name: 'Prototype Erigo Store UI/UX',
      image: '/assets/project 2.png',
      description: 'A sales website called Erigo Store was originally web-based only. Then, a UI/UX prototype was created in a mobile version with self-developed creativity.',
      githubLink: 'https://www.figma.com/design/sdaj3vqoaabLrdxMnKXFxb/ERIGO-UI?node-id=3-7&t=45GfKMv0fSnIhHv2-1',
      liveLink: 'https://www.figma.com/proto/sdaj3vqoaabLrdxMnKXFxb/ERIGO-UI?node-id=3-7&t=45GfKMv0fSnIhHv2-1',
      techStack: [{ icon: FaFigma, name: 'Figma' }]
    },
    {
      name: 'Sales Website',
      image: '/assets/project 3.png',
      description: 'A full-stack e-commerce website that helps companies sell their products. The admin dashboard allows for managing product data, orders, and sales reports. This project was developed as part of a final thesis assignment.',
      githubLink: '#',
      liveLink: '#',
      techStack: [
        { icon: FaReact, name: 'React' },
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: FaNodeJs, name: 'Node.js'}
      ]
    },
    {
        name: 'Jastipfully Landing Page',
        image: '/assets/project 4.png',
        description: 'A website that provides information about the company and the services it offers.',
        githubLink: '#',
        liveLink: 'https://jastipfully.com/',
        techStack: [
          { icon: FaReact, name: 'React' },
          { icon: SiTailwindcss, name: 'Tailwind CSS' },
        ]
      }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 md:px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text  py-6">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
              <div className="flex gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-1 bg-gray-700/50 px-2 py-1 rounded-md text-gray-300 hover:text-white transition-colors duration-200"
                    title={tech.name}
                  >
                    <tech.icon className="w-4 h-4" />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProject;