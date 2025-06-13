import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Mock Link component for demo
  const Link = ({ to, children, className, ...props }) => (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
              <h1 className="text-2xl font-bold text-gray-900">Achuth Dintakurthi</h1>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/works" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Works</Link>
                <Link to="/blogs" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Blogs</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Contact</Link>
                <Link to="/others" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Others</Link>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
              <Link to="/works" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Works</Link>
              <Link to="/blogs" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Blogs</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Contact</Link>
              <Link to="/others" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Others</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen flex items-center relative">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Data
                <span className="block text-blue-600">Enthusiastic</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                "It's not about whether I can or not. I'm gonna do it because I want to."
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/works" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  View My Work
                </Link>
                <Link to="/about" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Who is Achuth !?
                </Link>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative flex items-center justify-center">
                {/* Main Profile Container */}
                <div className="relative">
                  {/* Rotating Ring 1 - Outer */}
                  <div className="absolute inset-0 w-96 h-96 rounded-full border-4 border-dashed border-blue-300/50 animate-spin" style={{ animationDuration: '20s' }}></div>
                  
                  {/* Rotating Ring 2 - Middle */}
                  <div className="absolute inset-4 w-88 h-88 rounded-full border-2 border-purple-300/40" style={{ 
                    animation: 'spin 15s linear infinite reverse',
                    borderStyle: 'dashed'
                  }}></div>
                  
                  {/* Main Profile Circle with Mouse Parallax */}
                  <div 
                    className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                    style={{
                      transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
                    }}
                  >
                    <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                      <img 
                        src="https://free-3dtextureshd.com/wp-content/uploads/2025/01/96.jpg.webp" 
                        alt="Profile" 
                        className="w-64 h-64 object-cover rounded-full hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Floating Data-themed Icons */}
                  <div 
                    className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce"
                    style={{
                      transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
                      animationDelay: '0s',
                      animationDuration: '3s'
                    }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                  </div>
                  
                  <div 
                    className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
                      animation: 'bounce 4s infinite'
                    }}
                  >
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  
                  <div 
                    className="absolute top-1/4 -left-12 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center shadow-lg"
                    style={{
                      transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
                      animation: 'pulse 3s infinite'
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  
                  <div 
                    className="absolute bottom-1/3 -right-6 w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`,
                      animation: 'bounce 2.5s infinite reverse'
                    }}
                  >
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  
                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 w-96 h-96">
                    <div 
                      className="absolute w-6 h-6 bg-blue-500 rounded-full shadow-lg"
                      style={{
                        top: '20%',
                        left: '80%',
                        animation: 'orbit 8s linear infinite',
                        transformOrigin: '-140px 140px'
                      }}
                    ></div>
                    <div 
                      className="absolute w-4 h-4 bg-purple-500 rounded-full shadow-lg"
                      style={{
                        top: '70%',
                        left: '15%',
                        animation: 'orbit 12s linear infinite reverse',
                        transformOrigin: '140px -140px'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS animations */}
        <style jsx>{`
          @keyframes orbit {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>
    </div>
  );
}