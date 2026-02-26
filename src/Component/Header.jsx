import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../Aset/Sign Taxi.png";
import CarImage from "../Aset/car.png"; // add your car image here

export default function PremiumHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const megaMenus = {
    Services: {
      title: "Book a Ride",
      items: [
        "Oneway Trip",
        "Round Trip",
        "Hourly Rental",
        "Airport Taxi",
        "Corporate Travel",
        "Bike Taxi",
      ],
    },
    Cities: {
      title: "Cities",
      items: [
        "Chennai",
        "Coimbatore",
        "Madurai",
        "Salem",
        "Trichy",
        "Tirunelveli",
        "Erode",
        "Vellore",
        "Tirupur",
        "Thanjavur",
      ],
    },
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src={Logo} alt="SignTaxi" className="h-12 w-auto" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
          <button className="hover:text-red-600 transition">Home</button>
          <button className="hover:text-red-600 transition">About Us</button>

          {Object.keys(megaMenus).map((menu) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-red-600 transition">
                {menu}
                <ChevronDown size={16} />
              </button>
            </div>
          ))}

          <button className="hover:text-red-600 transition">
            Become a Partner
          </button>

          <button className="ml-4 px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition font-semibold">
            Download App
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* FULL WIDTH MEGA MENU */}
      <AnimatePresence>
        {activeMenu && megaMenus[activeMenu] && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 w-full bg-red-600 text-white shadow-2xl"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-2 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  {megaMenus[activeMenu].title}
                </h2>

                <div className="grid grid-cols-2 gap-6 text-lg font-medium">
                  {megaMenus[activeMenu].items.map((item, i) => (
                    <div
                      key={i}
                      className="hover:underline cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <button className="mt-10 px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition">
                  Explore All
                </button>
              </div>

              {/* Right Image */}
              <div className="flex justify-end relative">
                <div className="absolute bottom-0 right-0 w-80 h-20 bg-yellow-400 rounded-full blur-2xl opacity-70" />
                <img
                  src={CarImage}
                  alt="Car"
                  className="relative w-96 object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          <div>Home</div>
          <div>About Us</div>
          <div>Services</div>
          <div>Cities</div>
          <div>Become a Partner</div>
          <button className="w-full mt-4 px-6 py-2 rounded-full bg-yellow-400 font-semibold">
            Download App
          </button>
        </div>
      )}
    </header>
  );
}