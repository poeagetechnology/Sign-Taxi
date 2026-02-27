import React from "react";
import { motion } from "framer-motion";
import Maps from '../../Aset/Maps.png';

export default function Ourservices() {
  const citiesLeft = [
    "Coimbatore",
    "Chennai",
    "Trichy",
    "Madurai",
    "Erode",
    "Hosur",
    "Thanjavur",
    "Dindigul",
  ];

  const citiesRight = [
    "Salem",
    "Tirupur",
    "Karur",
    "Pollachi",
    "Vellore",
    "Tirunelveli",
    "Mettupalayam",
    "Villupuram",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold leading-tight">
            Our Serviceable <span className="text-orange-600">Cities</span>
            <br /> in Tamil Nadu
          </h2>

          <div className="grid grid-cols-2 gap-10 mt-12">
            <ul className="space-y-4">
              {citiesLeft.map((city, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
                >
                  <span className="w-3 h-3 border-2 border-blue-600 rounded-full group-hover:bg-blue-600 transition"></span>
                  {city}
                </li>
              ))}
            </ul>

            <ul className="space-y-4">
              {citiesRight.map((city, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
                >
                  <span className="w-3 h-3 border-2 border-blue-600 rounded-full"></span>
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* RIGHT MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Floating Map */}
          <motion.img
            src={Maps}
            alt="Tamil Nadu Map"
            className="w-[950px] transition duration-500"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-40 rounded-full animate-pulse"></div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}