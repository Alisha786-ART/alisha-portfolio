import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <nav className="w-full flex justify-between p-6 bg-gray-800 shadow-lg fixed top-0 z-10">
        <h1 className="text-2xl font-bold text-purple-400">Alisha.</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-purple-300 cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:text-purple-300 cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-purple-300 cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:text-purple-300 cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <motion.div
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-between mt-20 px-6 w-full max-w-6xl"
      >
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-semibold text-purple-300">Ready to Innovate 🚀</h2>
          <TypeAnimation
            sequence={["Frontend Developer", 2000, "UI/UX Designer", 2000]}
            wrapper="h2"
            className="text-4xl font-semibold text-purple-300"
            repeat={Infinity}
          />
          <h3 className="text-lg text-gray-300 mt-2">Computer Engineering Student</h3>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
            <FaCode className="text-gray-300 text-2xl" />
          </div>
          <button className="mt-6 px-6 py-3 bg-purple-500 hover:bg-purple-700 rounded-lg shadow-md transition">
            Download CV
          </button>
        </div>
        
        {/* Profile Image with Glowing Effect */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full rounded-full border-4 border-purple-500 shadow-lg animate-pulse"
          ></motion.div>
          <img
            src="https://png.pngtree.com/png-vector/20240506/ourmid/pngtree-cute-cartoon-girl-doing-office-work-on-transparent-background-png-image_12375933.png"
            alt="Alisha"
            className="w-full h-full rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>
      </motion.div>

      {/* About Section */}
      <section id="about" className="mt-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-purple-300">About Me</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          I am a passionate frontend developer and UI/UX designer with a strong foundation in computer engineering. I specialize in building
          user-friendly, responsive web and mobile applications. Currently, I am working as an App Development Intern at AICTE Eduskill,
          where I am gaining hands-on experience in Kotlin and Android development.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-purple-300">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Cafeworld Game Website</h3>
            <p className="mt-2 text-gray-300">Technologies: HTML, CSS, JavaScript</p>
            <p className="mt-2 text-gray-400">Developed a dynamic game-themed website for a virtual cafe world, featuring interactive UI, menu animations, and smooth navigation.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Farmers' App (Krishi Sakha)</h3>
            <p className="mt-2 text-gray-300">Technologies: Kotlin, Android Studio, Figma</p>
            <p className="mt-2 text-gray-400">Developed an app providing farmers with features like disease prediction, market analysis, weather forecasting, and cultivation techniques.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Family Security App</h3>
            <p className="mt-2 text-gray-300">Technologies: Kotlin, Android Studio</p>
            <p className="mt-2 text-gray-400">An app designed for family safety, featuring SOS, Guard-like options, real-time location tracking, alerts, and emergency features.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-purple-300">Contact Me</h2>
        <form className="mt-6 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg mb-3 bg-gray-800 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg mb-3 bg-gray-800 text-white" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded-lg bg-gray-800 text-white"></textarea>
          <button className="mt-4 px-6 py-3 bg-purple-500 hover:bg-purple-700 rounded-lg shadow-md transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
