import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  return (
    <nav className="py-6 px-8 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-extrabold">
        <span className="block text-yellow-400">Echoes</span>
        <span className="block -mt-1.5 text-white">of home</span>
      </Link>
      
      {/* Navigation Items */}
      <div className="flex items-center space-x-8">
        <div className="relative">
          <button 
            className="flex items-center text-white hover:text-yellow-200 transition-colors text-lg"
            onClick={() => {
              setAboutDropdownOpen(!aboutDropdownOpen);
              setProgramsDropdownOpen(false);
            }}
          >
            About us
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {aboutDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <Link to="/about/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Our Mission
              </Link>
              <Link to="/about/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Our Team
              </Link>
              <Link to="/about/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Our History
              </Link>
            </div>
          )}
        </div>
        
        <div className="relative">
          <button 
            className="flex items-center text-white hover:text-yellow-200 transition-colors text-lg"
            onClick={() => {
              setProgramsDropdownOpen(!programsDropdownOpen);
              setAboutDropdownOpen(false);
            }}
          >
            Our programs
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {programsDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <Link to="/programs/housing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Housing Solutions
              </Link>
              <Link to="/programs/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Education
              </Link>
              <Link to="/programs/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Support Services
              </Link>
            </div>
          )}
        </div>
        
        <Link 
          to="/login" 
          className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-medium hover:bg-yellow-300 transition-colors shadow-md text-lg"
        >
          Login
        </Link>
        
        <Link 
          to="/join" 
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-400 transition-colors shadow-md text-lg"
        >
          Join Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;