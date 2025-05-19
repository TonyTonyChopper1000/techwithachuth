import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdPhotoAlbum } from 'react-icons/md';
import React from "react";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce website built with React and Node.js.",
      image: "/api/placeholder/500/300",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A clean and elegant portfolio website showcasing my work and skills.",
      image: "/api/placeholder/500/300",
      technologies: ["React", "Tailwind CSS", "Vite"]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality.",
      image: "/api/placeholder/500/300",
      technologies: ["React", "Redux", "Firebase"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-10 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <FaProjectDiagram className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;