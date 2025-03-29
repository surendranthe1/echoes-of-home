import { useNavigate } from "react-router-dom"; 
import facebookIcon from '../images/icon-fb.png'; 
import instagramIcon from '../images/icon-ig.png'; 
import linkedinIcon from '../images/icon-ln.png'; 
import twitterIcon from '../images/icon-tw.png';  
import Navbar from '../components/Navbar';

export function Donate() {
  const navigate = useNavigate();
  
  const handleDonate = (type: string) => {
    navigate("/confirm", { state: { donationType: type } });
  };
  
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
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
            <button
              onClick={() => handleDonate("Donate Funds")}
              className="bg-white text-blue-900 font-bold py-10 px-4 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-200 w-56 h-56 mx-auto flex items-center justify-center"
            >
              <span className="text-2xl">Donate Funds</span>
            </button>
            
            <button
              onClick={() => handleDonate("Donate Clothes")}
              className="bg-white text-blue-900 font-bold py-10 px-4 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-200 w-56 h-56 mx-auto flex items-center justify-center"
            >
              <span className="text-2xl">Donate Clothes</span>
            </button>
          </div>
          
          <button
            onClick={() => handleDonate("Volunteer")}
            className="bg-white text-blue-900 font-bold py-10 px-8 rounded-3xl shadow-lg mt-8 w-56 h-56 hover:shadow-xl transition-all transform hover:-translate-y-1 duration-200 flex items-center justify-center"
          >
            <span className="text-2xl">Volunteer</span>
          </button>
        </div>
        
        <div className="mt-16 max-w-lg mx-auto">
          <p className="text-lg text-blue-100 leading-relaxed">
            Join us in learning real stories of homelessness,{" "}
            <span className="text-pink-300 font-medium">creating empathy</span> and making a{" "}
            <span className="text-yellow-300 font-medium">positive impact</span>
            —together.
          </p>
        </div>
        
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
      </div>
    </div>
  );
}

export default Donate;