import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Projects />
        {/* <Albums /> */}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;