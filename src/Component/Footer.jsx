import React from "react";
import SignLogo from "../Aset/Sign Taxi.png";
import Skyline from "../Aset/Skyline.png";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const cities = [
    "Coimbatore",
    "Chennai",
    "Trichy",
    "Madurai",
    "Erode",
    "Salem",
    "Tirupur",
    "Vellore",
    "Karur",
    "Tirunelveli",
    "Hosur",
    "Pollachi",
    "Thanjavur",
    "Dindigul",
    "Villupuram",
  ];

  const whatsappMessage = `
🚖 Welcome to SIGN TAXI!

Thank you for contacting us.
Please share your pickup & drop location.
We are happy to assist you.
`;

  return (
    <footer className="relative bg-white dark:bg-white text-gray-200 dark:text-black  transition-colors duration-500 overflow-hidden">
      {/* Animated Skyline */}
      <div className="w-full overflow-hidden border-b border-gray-200 dark:border-black">
        <div
          className="flex gap-20 w-max"
          style={{ animation: "skyline 40s linear infinite" }}
        >
          <img src={Skyline} className="h-20" alt="skyline" />
          <img src={Skyline} className="h-20" alt="skyline" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <img src={SignLogo} alt="Sign Taxi" className="h-12 mb-6" />
          <p className="text-sm leading-relaxed">
            Premium, reliable and well-maintained taxi services across Tamil
            Nadu. Experience comfort and safety every ride.
          </p>
        </div>

        {/* Trips */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-blue-500">
            Trips
          </h4>
          <ul className="space-y-2 text-sm">
            {["Oneway", "Round Trip", "Hourly Rental", "Airport Taxi"].map(
              (item, i) => (
                <li
                  key={i}
                  className="relative w-fit cursor-pointer 
                after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:w-0 after:bg-gradient-to-r 
                after:from-orange-500 after:to-red-500 
                hover:after:w-full after:transition-all"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Cities Auto Scroll */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-blue-500">
            Service Cities
          </h4>

          <div className="overflow-hidden">
            <div
              className="flex gap-8 w-max text-sm"
              style={{ animation: "marquee 25s linear infinite" }}
            >
              {[...cities, ...cities].map((city, i) => (
                <span key={i}>{city}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-blue-500">
            Contact Us
          </h4>

          <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-red-600 mt-1 flex-shrink-0" />
              <a
                href="tel:+918300399599"
                className="hover:text-red-600 transition"
              >
                +91 83003 99599
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3">
              <FaWhatsapp className="text-green-600 mt-1 flex-shrink-0" />
              <a
                href={`https://wa.me/918300399599?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-600 transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-600 mt-1 flex-shrink-0" />
              <p>
                Annapoorani Hotel, 17/A1 <br />
                Near Airport Service Road <br />
                Civil Aerodrome Post, Sitra <br />
                Coimbatore, Tamil Nadu 641014
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Sign Taxi. All rights reserved.</p>

        <p className="mt-2">
          Crafted with ❤️ by{" "}
          <a
            href="https://poeagetechnology.com"
            target="_blank"
            rel="noreferrer"
          >
            Poeage
          </a>
        </p>
      </div>

      {/* WhatsApp Floating */}
      <a
        href={`https://wa.me/918300399599?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 
        text-white w-14 h-14 flex items-center justify-center 
        rounded-full shadow-2xl text-2xl transition hover:scale-110"
      >
        💬
      </a>

      {/* Animations */}
      <style>
        {`
          @keyframes skyline {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </footer>
  );
}
