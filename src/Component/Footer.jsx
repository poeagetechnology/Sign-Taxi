import React from "react";
import SignLogo from "../Aset/Sign Taxi.png";
import Skyline from "../Aset/Skyline.png";

export default function Footer() {

  const cities = [
    "Coimbatore","Chennai","Trichy","Madurai","Erode",
    "Salem","Tirupur","Vellore","Karur","Tirunelveli",
    "Hosur","Pollachi","Thanjavur","Dindigul","Villupuram"
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
          <img
            src={Skyline}
            className="h-20"
            alt="skyline"
          />
          <img
            src={Skyline}
            className="h-20"
            alt="skyline"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <img src={SignLogo} alt="Sign Taxi" className="h-12 mb-6" />
          <p className="text-sm leading-relaxed">
            Premium, reliable and well-maintained taxi services across Tamil Nadu.
            Experience comfort and safety every ride.
          </p>
        </div>

        {/* Trips */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-blue-500">Trips</h4>
          <ul className="space-y-2 text-sm">
            {["Oneway","Round Trip","Hourly Rental","Airport Taxi"]
              .map((item,i)=>(
              <li key={i}
                className="relative w-fit cursor-pointer 
                after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:w-0 after:bg-gradient-to-r 
                after:from-orange-500 after:to-red-500 
                hover:after:w-full after:transition-all"
              >
                {item}
              </li>
            ))}
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
              {[...cities, ...cities].map((city,i)=>(
                <span key={i}>{city}</span>
              ))}
            </div>
          </div>
        </div>

        {/* App Buttons */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-blue-500">
            Download App
          </h4>

          <div className="space-y-3">
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                className="h-10"
                alt="appstore"
              />
            </a>

            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                className="h-10"
                alt="playstore"
              />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm">

        <p>
          © {new Date().getFullYear()} Sign Taxi. All rights reserved.
        </p>

        <p className="mt-2">
          Crafted with ❤️ by{" "}
          <a
            href="https://poeagetechnology.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-500 hover:text-blue-600 transition"
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