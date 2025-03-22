import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animation on component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content container */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
       
        
        
        {/* Main content */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Hello, I'm
            </span>
            <div className=" md:top-10 md:left-10">
          <img src='signatures.png' alt="logo" />
        </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
           Welcome to my world      
          </p>
          
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          On the path where dreams and futures blend, we journey toward the singularity's luminous end, where minds and machines in harmony transcend, and the infinite horizon of existence extends.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/comingsoon" 
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </Link>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border border-gray-500 rounded-full text-white font-medium hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>






        </div>

        
        
     
        
      </div>
    </div>
  );
};

export default LandingPage;