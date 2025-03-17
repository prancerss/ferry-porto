import React from 'react';
import { FaGithub  } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiReadCvLogoFill } from "react-icons/pi";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" id="home">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left animate-fade-in md:w-3/5">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Hello, I'm Ferry Wilson</h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 animate-slide-up delay-100">Full Stack Developer & UI/UX Designer.</p>
            <p className="text-lg text-purple-300 max-w-2xl mb-12 animate-slide-up delay-200">
              I'm a Fresh Graduate at Tarumanagara University with a Bachelor of Computer Science.
            </p>
            <div className="flex gap-6 mb-12 animate-slide-up delay-300">
              <a href="https://drive.google.com/file/d/193XeluTwFX0YHHJvR0Nh2cA0MT0ytSF8/view?usp=sharingw" target="_blank" rel="noopener noreferrer" 
                 className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2">
                <PiReadCvLogoFill className='w-5 h-5'/> Download My CV
              </a>
              <a href="#contact"
                 onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}
                 className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-300 flex items-center gap-2">
                <MdEmail className="w-5 h-5" /> Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-2/5 animate-fade-in delay-200">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <img
                src={process.env.PUBLIC_URL + "/assets/Foto-Profile.jpg"}
                alt="Ferry Wilson"
                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full border-4 border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;