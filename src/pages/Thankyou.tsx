import { useNavigate } from "react-router-dom"; 
import facebookIcon from '../images/icon-fb.png'; 
import instagramIcon from '../images/icon-ig.png'; 
import linkedinIcon from '../images/icon-ln.png'; 
import twitterIcon from '../images/icon-tw.png';  
import Navbar from '../components/Navbar';
import heart  from "../images/Heart.png";
import thankyou from '../images/thank-you.png';  

export function ThankYou() {
  return (
    <div className="bg-blue-900 text-white min-h-screen bg-gradient-to-b from-blue-900 to-blue-800">
      {/* Import the Navbar component */}
      <div className="bg-blue-950 shadow-md">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 text-center">
        <img
          src={thankyou}
          alt="Thank you"
          className="w-100 h-100 mx-auto mb-10"
        />
  
        <h2 className="text-2xl font-semibold mb-6">You've helped someone take a step forward</h2>
  
        <img
            src={heart}
            alt="Heart"
            className="w-60 h-60 mx-auto mb-10"
            />

  
        {/* Social icons */}
        <div className="flex justify-center gap-8 mt-12">
          <a href="#" className="bg-yellow-400 rounded-full p-4 transform hover:scale-110 transition-transform duration-200 shadow-md">
            <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="#" className="bg-yellow-400 rounded-full p-4 transform hover:scale-110 transition-transform duration-200 shadow-md">
            <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
          </a>
          <a href="#" className="bg-yellow-400 rounded-full p-4 transform hover:scale-110 transition-transform duration-200 shadow-md">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="#" className="bg-yellow-400 rounded-full p-4 transform hover:scale-110 transition-transform duration-200 shadow-md">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
        
        <button 
          onClick={() => window.location.href = '/'} 
          className="mt-10 bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md text-lg"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}

export default ThankYou;