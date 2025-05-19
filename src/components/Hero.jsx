import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdPhotoAlbum } from 'react-icons/md';
const Hero = () => {
  return (
    <section className="py-20 px-6 md:px-10 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">
          Hello, I'm <span className="text-blue-600 dark:text-blue-400">Achuth</span>
        </h2>
        <h3 className="text-2xl mb-6 text-gray-600 dark:text-gray-300">
          Data Scientist
        </h3>
        <p className="text-lg mb-10 text-gray-600 dark:text-gray-300 leading-relaxed">
         BIO - (needs to be added)
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a href="#" className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            <AiFillGithub />
          </a>
          <a href="#" className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            <AiFillLinkedin />
          </a>
          <a href="#" className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            <AiFillMail />
          </a>
        </div>
        <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden">
          {/* Replace with your image */}
          <img 
            src="/api/placeholder/400/400" 
            alt="Profile" 
            className="object-cover w-full h-full" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;