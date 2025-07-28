import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaDatabase, FaChartBar, FaBrain, FaPython, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaServer } from 'react-icons/fa';
import { SiTensorflow, SiTableau, SiMongodb, SiDocker, SiKubernetes, SiJupyter, SiPandas, SiScikitlearn, SiPytorch, SiPostgresql, SiRedis, SiJenkins } from 'react-icons/si';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Mock Link component for demo
  const Link = ({ to, children, className, ...props }) => (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  );

  const skills = [
    { name: 'Python', icon: FaPython, color: 'from-blue-400 to-blue-600', delay: 0.1, category: 'language' },
    { name: 'React', icon: FaReact, color: 'from-cyan-400 to-cyan-600', delay: 0.2, category: 'frontend' },
    { name: 'TensorFlow', icon: SiTensorflow, color: 'from-orange-400 to-orange-600', delay: 0.3, category: 'ml' },
    { name: 'PyTorch', icon: SiPytorch, color: 'from-red-400 to-red-600', delay: 0.4, category: 'ml' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: 'from-yellow-400 to-orange-600', delay: 0.5, category: 'ml' },
    { name: 'Docker', icon: FaDocker, color: 'from-blue-500 to-blue-700', delay: 0.6, category: 'devops' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'from-blue-600 to-indigo-700', delay: 0.7, category: 'devops' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'from-indigo-400 to-indigo-600', delay: 0.8, category: 'database' },
    { name: 'MongoDB', icon: SiMongodb, color: 'from-green-400 to-green-600', delay: 0.9, category: 'database' },
    { name: 'Node.js', icon: FaNodeJs, color: 'from-green-500 to-green-700', delay: 1.0, category: 'backend' },
    { name: 'AWS', icon: FaAws, color: 'from-yellow-400 to-orange-500', delay: 1.1, category: 'cloud' },
    { name: 'Git', icon: FaGitAlt, color: 'from-red-500 to-orange-600', delay: 1.2, category: 'tool' },
  ];

  const features = [
    {
      icon: FaChartBar,
      title: 'Data Science',
      description: 'Extracting insights from complex datasets using statistical analysis and ML',
      color: 'from-purple-500 to-pink-600',
      gradient: 'bg-gradient-to-br'
    },
    {
      icon: FaBrain,
      title: 'Reinforcement Learning',
      description: 'Building intelligent agents that learn through interaction and rewards',
      color: 'from-green-500 to-teal-600',
      gradient: 'bg-gradient-to-tr'
    },
    {
      icon: FaServer,
      title: 'DevOps',
      description: 'Automating infrastructure and streamlining deployment pipelines',
      color: 'from-blue-500 to-indigo-600',
      gradient: 'bg-gradient-to-bl'
    },
    {
      icon: FaCode,
      title: 'Full Stack Development',
      description: 'Creating scalable web applications from frontend to backend',
      color: 'from-orange-500 to-red-600',
      gradient: 'bg-gradient-to-tl'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-200/20 to-gray-50"></div>
        <motion.div
          className="absolute top-0 -left-4 w-96 h-96 bg-purple-400/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

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
              <Link to="/">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Achuth Dintakurthi
                </h1>
              </Link>
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
                    <Link 
                      to={`/${item.toLowerCase()}`} 
                      className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.svg
                      key="close"
                      initial={{ rotate: -90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 90 }}
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="menu"
                      initial={{ rotate: 90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: -90 }}
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['Works', 'Blogs', 'Contact', 'Others'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={`/${item.toLowerCase()}`} 
                      className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Person Who Belives 
                </span>
                <motion.span 
                  className="block text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Data is Everything 
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                "In today's digital economy, data is everything - it drives decisions, shapes strategies, and determines success."
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/works" 
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View My Work
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/about" 
                    className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
                  >
                    Who is Achuth !?
                  </Link>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[
                  { icon: FaGithub, href: '#', label: 'GitHub' },
                  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                  { icon: FaTwitter, href: '#', label: 'Twitter' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Multiple Animated Rings - Centered */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-purple-500/20"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div 
                  className="absolute inset-4 rounded-full border-2 border-blue-500/20"
                  animate={{ 
                    rotate: -360,
                    scale: [1, 0.95, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div 
                  className="absolute inset-8 rounded-full border border-pink-500/20"
                  animate={{ 
                    rotate: 180,
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Dotted Orbit Ring */}
                <motion.div 
                  className="absolute inset-2 rounded-full"
                  animate={{ rotate: -720 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`dot-${i}`}
                      className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 45}deg) translateX(180px) translateY(-50%)`
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.25,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
                
                {/* Main Profile Container - Centered */}
                <motion.div 
                  className="absolute w-80 h-80 flex items-center justify-center"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
                  }}
                >
                  {/* Glowing Pulse Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Secondary Glow */}
                  <motion.div 
                    className="absolute inset-[-30px] bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full blur-3xl"
                    animate={{
                      scale: [1.1, 1.4, 1.1],
                      opacity: [0.2, 0.4, 0.2],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Morphing Gradient Background */}
                  <motion.div 
                    className="absolute inset-[-10px] rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)'
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-[3px]">
                    <div className="w-full h-full bg-white rounded-full p-2 shadow-2xl">
                      <motion.img 
                        src="https://free-3dtextureshd.com/wp-content/uploads/2025/01/96.jpg.webp" 
                        alt="Profile" 
                        className="w-full h-full object-cover rounded-full"
                        whileHover={{ 
                          scale: 1.05, 
                          rotate: 5,
                          boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Energy Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                  {[0, 1, 2, 3].map((i) => (
                    <motion.line
                      key={`line-${i}`}
                      x1="50%"
                      y1="50%"
                      x2={i % 2 === 0 ? "85%" : "15%"}
                      y2={i < 2 ? "20%" : "80%"}
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      strokeDasharray="5 5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Tech Icons with Enhanced Animations */}
                {[
                  { Icon: FaDatabase, position: 'top-0 right-0', delay: 0.2, color: 'from-blue-400 to-blue-600', orbit: 1 },
                  { Icon: FaChartBar, position: 'bottom-0 left-0', delay: 0.4, color: 'from-green-400 to-green-600', orbit: -1 },
                  { Icon: FaBrain, position: 'top-1/4 -left-12', delay: 0.6, color: 'from-purple-400 to-purple-600', orbit: 1.5 },
                  { Icon: FaCode, position: 'bottom-1/3 -right-8', delay: 0.8, color: 'from-orange-400 to-orange-600', orbit: -1.2 }
                ].map(({ Icon, position, delay, color, orbit }, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${position} w-16 h-16 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-xl`}
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, orbit * 360],
                      opacity: 1,
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
                      rotate: { duration: 20, repeat: Infinity, ease: "linear", delay },
                      opacity: { duration: 0.5, delay },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + index * 0.2 }
                    }}
                    whileHover={{ scale: 1.3, rotate: 15, zIndex: 10 }}
                    style={{
                      transform: `translate(${mousePosition.x * (0.3 + index * 0.1)}px, ${mousePosition.y * (0.3 + index * 0.1)}px)`
                    }}
                  >
                    <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>
                ))}
                
                {/* Additional Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + (i % 2) * 80}%`
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, (i % 2 === 0 ? 20 : -20), 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section 
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              What I Do
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 ${feature.gradient} ${feature.color} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg">
                  <motion.div 
                    className={`w-14 h-14 ${feature.gradient} ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: skill.delay * 0.5,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div className={`relative bg-gradient-to-br ${skill.color} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}>
                  <skill.icon className="w-12 h-12 text-white mx-auto mb-3" />
                  <p className="text-center text-white font-semibold text-sm">{skill.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Build Something
            <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to transform your data into insights?
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}