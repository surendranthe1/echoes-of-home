import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import landingImage from '../images/landing-image.png';  


export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 text-white min-h-screen">
      {/* Navbar */}
      <div className="bg-blue-950 shadow-md">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 text-center flex flex-col items-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">Echoes of Home</h1>

        <p className="text-xl sm:text-2xl font-medium mb-2">Location:</p>
        <p className="text-2xl sm:text-3xl font-semibold mb-6">
          309–311 William St, West Melbourne VIC 3003
        </p>

        <p className="italic text-lg sm:text-xl mb-8">
          “This bench was once David’s Home”
        </p>

        <img
          src={landingImage}
          alt="David sleeping on bench"
          className="w-full max-w-xl lg:max-w-2xl mx-auto mb-8 rounded-2xl shadow-xl"
        />

        <p className="text-base sm:text-lg text-blue-100 mb-8">
          Scan complete. Tap below to hear his story
        </p>

        <button
          onClick={() => navigate("/ar")}
          className="bg-green-600 hover:bg-green-500 text-white px-10 py-5 text-2xl sm:text-3xl font-bold rounded-2xl shadow-lg transition-colors"
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Landing;
