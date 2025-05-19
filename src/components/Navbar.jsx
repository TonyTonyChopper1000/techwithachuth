import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdPhotoAlbum } from 'react-icons/md';
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="py-5 px-6 md:px-10 flex justify-between items-center sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Your Name</h1>
      <ul className="flex items-center">
        <li>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 ml-8 text-gray-800 dark:text-white"
          >
            {darkMode ? <BsSun /> : <BsFillMoonStarsFill />}
          </button>
        </li>
        <li>
          <a 
            href="#" 
            className="ml-8 px-4 py-2 bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 rounded-md font-medium"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;