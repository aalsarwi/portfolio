import React from 'react';
import { Download, MapPin, Phone, Mail, Linkedin, FileText } from 'lucide-react';
import { FaCalendarAlt, FaBriefcase, FaTasks } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-gray-700 to-slate-900">
      <div className="max-w-7xl mx-auto px-6"> {/* Increased max width for more room */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center"> {/* Expanded left column */}
          {/* Left Column */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 whitespace-nowrap">
              Mechanical Engineering
            </h1>
            <p className="text-blue-300 mb-6">@ Western University, Canada</p>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              Motivated mechanical engineering student passionate about developing innovative solutions 
              by combining CAD design, embedded systems, and manufacturing. Currently seeking co-op opportunities in mechanical design, automation, and product development.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Developed and analyzed frequency sensors with LabVIEW</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Modeled and Designed CAD projects with SolidWorks</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Applied Ardunio for applications to measure physical quantities</span>
              </li>
            </ul>
          </div>
          {/* Resume Button */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <a 
              href="/Abdulmuizz ALSARWI Resume .pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-3 bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span className="font-semibold">View Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column - Quick Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Quick Overview</h2>

          {/* Experience & Projects Section */}
          <div className="flex justify-center gap-12 mb-10">
            {/* Experience */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-slate-600">
                <FaBriefcase className="text-blue-600 text-xl" />
                <span className="font-medium text-slate-700">Experience</span>
              </div>
              <span className="text-blue-600 font-semibold mt-2">3+ Years</span>
            </div>

            {/* Projects Completed */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-slate-600">
                <FaTasks className="text-blue-600 text-xl" />
                <span className="font-medium text-slate-700">Projects Completed</span>
              </div>
              <span className="text-blue-600 font-semibold mt-2">10+ Projects</span>
            </div>
          </div>

          {/* Core Skills Section */}
          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-2xl mx-auto mb-10">
            <h3 className="flex items-center justify-center gap-2 text-black-700 font-semibold text-xl mb-4">
              Core Skills
            </h3>

            {/* Mini Widgets */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-blue-100 rounded-full px-4 py-2 shadow-sm text-center">
                <span className="font-semibold text-slate-800 text-sm">AutoCAD</span>
              </div>

              <div className="bg-blue-100 rounded-full px-4 py-2 shadow-sm text-center">
                <span className="font-semibold text-slate-800 text-sm">SolidWorks</span>
              </div>

              <div className="bg-blue-100 rounded-full px-4 py-2 shadow-sm text-center">
                <span className="font-semibold text-slate-800 text-sm">LabVIEW</span>
              </div>

              <div className="bg-blue-100 rounded-full px-4 py-2 shadow-sm text-center">
                <span className="font-semibold text-slate-800 text-sm">MATLAB</span>
              </div>

              <div className="bg-blue-100 rounded-full px-4 py-2 shadow-sm text-center">
                <span className="font-semibold text-slate-800 text-sm">Java</span>
              </div>

              <div className="bg-blue-100 rounded-full px-4 py-2 shadow-sm text-center">
                <span className="font-semibold text-slate-800 text-sm">Python</span>
              </div>

              <div className="bg-blue-100 rounded-full px-4 py-2 shadow-sm text-center">
                <span className="font-semibold text-slate-800 text-sm">Fusion 360</span>
              </div>

              {/* Add more mini widgets as needed */}
              <div className="bg-blue-100 rounded-full px-4 py-2 shadow-sm text-center">
                <span className="font-semibold text-slate-800 text-sm">Arduino</span>
              </div>
            </div>
          </div>

          {/* Availability Section */}
          <div className="mt-8 p-5 bg-green-100 rounded-lg text-center">
            <span className="flex items-center justify-center gap-2 text-green-700 font-semibold mb-2">
              <FaCalendarAlt className="text-green-700 text-xl" /> Available for Coop
            </span>
            <span className="text-black font-medium">
              Summer 2026 (8-16 months)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
