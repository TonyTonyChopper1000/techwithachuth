// Footer Component
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdPhotoAlbum } from 'react-icons/md';
const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-10 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Your Name</h3>
            <p className="text-gray-300">Web Developer & Designer</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <AiFillGithub className="text-xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <AiFillLinkedin className="text-xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <AiFillMail className="text-xl" />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300">© {new Date().getFullYear()} AA❤️ Forever  
. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-1">Made with my HP Victus (1st Laptop)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;l