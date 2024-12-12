import { useState } from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'About us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Memberships', path: '/member' },
    { label: 'Academy', path: '/Academy' },
    { label: 'Contact us', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col fixed top-0 right-0 left-0 z-50 w-full bg-white">
      <div className="flex flex-row items-center justify-between h-10 border-b-2 border-gray-100 p-3">
        <h1 className="font-bold text-md md:text-2xl">
          <FmdGoodIcon className="text-yellow-500" /> Salon Finder
        </h1>
        <h1 className="text-md md:text-2xl font-bold">
          <CallIcon className="text-yellow-500" /> Call: +91-9560337775
        </h1>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-between p-5 px-10 shadow-2xl">
        <div>
          <img src="./Images/logo.PNG" alt="Logo" className="w-40 border-2 border-dashed border-black" />
        </div>
        {/* For larger screens */}
        <div className="flex space-x-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className="text-black font-semibold"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex flex-row">
          <button className="text-white bg-black p-3">BOOK APPOINTMENT</button>
        </div>
      </div>
      <div className="lg:hidden flex flex-col gap-3 p-px md:p-5">
        {/* Menu icon for small and medium screens */}
        <div className="lg:hidden flex flex-row items-center justify-between p-5">
          <img src="./Images/logo.PNG" className="w-16 md:w-40 border-dashed border-2 border-black" />
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon style={{ fontSize: '40px' }} />
          </button>
        </div>
        <div className="w-auto flex flex-col items-center justify-center">
          <button className="text-white bg-black p-3">BOOK APPOINTMENT</button>
        </div>
      </div>
      {/* Sidebar for small screens */}
      <div
        className={`fixed top-40 md:top-16 right-0 w-full h-96 md:w-64 md:h-full bg-gray-900 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-40`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsSidebarOpen(false)} // Close sidebar on clicking the close button
            className="text-white text-2xl"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className="text-white font-semibold text-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
