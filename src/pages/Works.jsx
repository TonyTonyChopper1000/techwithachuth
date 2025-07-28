import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaSearch, FaFilter, FaCode, FaStar, FaTrophy, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Works() {
  const [activeSection, setActiveSection] = useState('projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Mock Link component fallback
  const RouterLink = Link || (({ to, children, className, ...props }) => (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  ));

  // Sample data
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Data Analytics Platform',
      description: 'A comprehensive platform for real-time data analysis using machine learning algorithms.',
      tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      category: 'machine-learning',
      image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=AI+Analytics',
      github: '#',
      demo: '#',
      stars: 45
    },
    {
      id: 2,
      title: 'Reinforcement Learning Trading Bot',
      description: 'An autonomous trading system that learns market patterns using deep Q-learning.',
      tech: ['Python', 'PyTorch', 'Docker', 'AWS'],
      category: 'reinforcement-learning',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Trading+Bot',
      github: '#',
      demo: '#',
      stars: 32
    },
    {
      id: 3,
      title: 'Full-Stack E-commerce Platform',
      description: 'A modern e-commerce solution with microservices architecture and real-time features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Kubernetes'],
      category: 'web-development',
      image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=E-commerce',
      github: '#',
      demo: '#',
      stars: 28
    }
  ];

  const linkedinPosts = [
    {
      id: 1,
      title: 'The Future of Data Science in 2024',
      excerpt: 'Exploring emerging trends in AI and machine learning that will shape the industry...',
      likes: 156,
      comments: 23,
      date: '2024-01-15',
      url: '#'
    },
    {
      id: 2,
      title: 'Building Scalable ML Pipelines',
      excerpt: 'Best practices for creating production-ready machine learning systems...',
      likes: 89,
      comments: 12,
      date: '2024-01-10',
      url: '#'
    }
  ];

  const githubRepos = [
    {
      id: 1,
      name: 'data-pipeline-framework',
      description: 'A flexible framework for building scalable data processing pipelines',
      language: 'Python',
      stars: 67,
      forks: 12,
      url: '#'
    },
    {
      id: 2,
      name: 'ml-model-registry',
      description: 'Version control and deployment system for machine learning models',
      language: 'TypeScript',
      stars: 43,
      forks: 8,
      url: '#'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2023-12-15',
      type: 'certification',
      icon: FaTrophy
    },
    {
      id: 2,
      title: 'Winner - Data Science Hackathon 2023',
      organization: 'Tech Innovation Summit',
      date: '2023-11-20',
      type: 'award',
      icon: FaStar
    }
  ];

  const sections = [
    { id: 'projects', label: 'Projects', count: projects.length },
    { id: 'linkedin', label: 'LinkedIn Posts', count: linkedinPosts.length },
    { id: 'github', label: 'GitHub Repos', count: githubRepos.length },
    { id: 'achievements', label: 'Achievements', count: achievements.length }
  ];

  const filters = {
    projects: ['all', 'machine-learning', 'reinforcement-learning', 'web-development', 'devops'],
    linkedin: ['all', 'technical', 'career', 'insights'],
    github: ['all', 'python', 'javascript', 'typescript', 'go'],
    achievements: ['all', 'certification', 'award', 'publication']
  };

  const filteredData = () => {
    let data = [];
    switch (activeSection) {
      case 'projects':
        data = projects;
        break;
      case 'linkedin':
        data = linkedinPosts;
        break;
      case 'github':
        data = githubRepos;
        break;
      case 'achievements':
        data = achievements;
        break;
      default:
        data = [];
    }

    // Filter by category
    if (selectedFilter !== 'all') {
      data = data.filter(item => 
        item.category === selectedFilter || 
        item.type === selectedFilter ||
        item.language?.toLowerCase() === selectedFilter
      );
    }

    // Filter by search query
    if (searchQuery) {
      data = data.filter(item =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return data;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <RouterLink to="/">
                <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'cursive', letterSpacing: '1px' }}>
                  Achuth Dintakurthi
                </h1>
              </RouterLink>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Works', 'Blogs', 'Contact', 'Others'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <RouterLink 
                      to={`/${item.toLowerCase()}`} 
                      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                        item === 'Works' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transform transition-transform duration-300 ${
                        item === 'Works' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                    </RouterLink>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                My Works
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Showcasing projects, insights, and achievements in data science and development
            </p>
          </motion.div>

          {/* Section Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setSelectedFilter('all');
                    setSearchQuery('');
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:text-gray-900 shadow-md hover:shadow-lg border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label} ({section.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-6">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder={`Search ${activeSection}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 text-lg rounded-2xl border-2 border-gray-100 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <motion.div
                className="flex items-center gap-2 text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <FaFilter className="text-blue-500" />
                <span>Filter by:</span>
              </motion.div>
              
              {filters[activeSection]?.map((filter, index) => (
                <motion.button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 border-2 ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {filter === 'all' && '🌟'}
                    {filter === 'machine-learning' && '🤖'}
                    {filter === 'reinforcement-learning' && '🎯'}
                    {filter === 'web-development' && '🌐'}
                    {filter === 'devops' && '⚙️'}
                    {filter === 'technical' && '💡'}
                    {filter === 'career' && '🚀'}
                    {filter === 'insights' && '📊'}
                    {filter === 'python' && '🐍'}
                    {filter === 'javascript' && '⚡'}
                    {filter === 'typescript' && '📘'}
                    {filter === 'go' && '🔷'}
                    {filter === 'certification' && '🏆'}
                    {filter === 'award' && '🥇'}
                    {filter === 'publication' && '📄'}
                    {filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Active Filters Display */}
            {(searchQuery || selectedFilter !== 'all') && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex flex-wrap items-center justify-center gap-2"
              >
                <span className="text-sm text-gray-500">Active filters:</span>
                
                {searchQuery && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    Search: "{searchQuery}"
                    <button
                      onClick={() => setSearchQuery('')}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      ✕
                    </button>
                  </motion.span>
                )}
                
                {selectedFilter !== 'all' && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    Category: {selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1).replace('-', ' ')}
                    <button
                      onClick={() => setSelectedFilter('all')}
                      className="ml-1 text-purple-600 hover:text-purple-800"
                    >
                      ✕
                    </button>
                  </motion.span>
                )}
                
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFilter('all');
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Clear all
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Content Grid */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredData().map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Render different card types based on section */}
                {activeSection === 'projects' && (
                  <>
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex gap-2">
                          <a href={item.github} className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
                            <FaGithub className="text-white" />
                          </a>
                          <a href={item.demo} className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
                            <FaEye className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-500" />
                          <span className="text-sm text-gray-600">{item.stars}</span>
                        </div>
                        <span className="text-sm text-gray-500 capitalize">{item.category.replace('-', ' ')}</span>
                      </div>
                    </div>
                  </>
                )}

                {activeSection === 'linkedin' && (
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FaLinkedin className="text-blue-600" />
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <span className="text-sm text-gray-500">{item.likes} likes</span>
                        <span className="text-sm text-gray-500">{item.comments} comments</span>
                      </div>
                      <a href={item.url} className="text-blue-600 hover:text-blue-800 transition-colors">
                        View Post
                      </a>
                    </div>
                  </div>
                )}

                {activeSection === 'github' && (
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FaGithub className="text-gray-800" />
                      <span className="text-sm text-gray-500">{item.language}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-500" />
                          <span className="text-sm text-gray-600">{item.stars}</span>
                        </div>
                        <span className="text-sm text-gray-600">{item.forks} forks</span>
                      </div>
                      <a href={item.url} className="text-blue-600 hover:text-blue-800 transition-colors">
                        View Repo
                      </a>
                    </div>
                  </div>
                )}

                {activeSection === 'achievements' && (
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full">
                        <item.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.organization}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm capitalize">
                        {item.type}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredData().length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}