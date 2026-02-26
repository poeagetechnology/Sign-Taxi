import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Car1 from "../../Aset/car1.png";
import Car2 from "../../Aset/car2.png";
import Car3 from "../../Aset/car3.png";
import Car4 from "../../Aset/car4.png";
import Car5 from "../../Aset/car5.png";

export default function Cabtypes() {
  const [selected, setSelected] = useState(null);
  const [distance, setDistance] = useState("");
  const [fare, setFare] = useState(null);

  const cabs = [
    {
      title: "Sedan",
      desc: "Business Class Ride",
      pricePerKm: 18,
      image: Car1,
      details: "Premium AC sedan perfect for corporate travel and airport transfers.",
    },
    {
      title: "Mini",
      desc: "Economy Class Ride",
      pricePerKm: 14,
      image: Car2,
      details: "Affordable compact car ideal for short city rides.",
    },
    {
      title: "Rentals",
      desc: "Long Family Trips",
      pricePerKm: 20,
      image: Car3,
      details: "Flexible hourly rental packages for family trips.",
    },
    {
      title: "Pink Taxi",
      desc: "By Women, for Women",
      pricePerKm: 16,
      image: Car4,
      details: "Dedicated women driver service ensuring safe travel.",
    },
    {
      title: "Traveller",
      desc: "Perfect Family Trips",
      pricePerKm: 25,
      image: Car5,
      details: "Spacious vehicle ideal for group and outstation trips.",
    },
  ];

  const calculateFare = () => {
    if (!distance || isNaN(distance)) return;
    const total = distance * selected.pricePerKm;
    setFare(total);
  };

  const handleBook = () => {
    const message = `
🚖 SIGN TAXI Booking

Vehicle: ${selected.title}
Distance: ${distance} km
Estimated Fare: ₹${fare}

Please confirm booking.
`;

    window.open(
      `https://wa.me/918300399599?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSelected(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-4xl font-bold">
          <span className="text-red-600">Cab Types</span> for Every Traveler
        </h2>
        <p className="text-gray-500 mt-4">
          Premium vehicles for every journey.
        </p>
      </div>

      {/* Fade Edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-10 w-max hover:[animation-play-state:paused]"
          style={{ animation: "marquee 25s linear infinite" }}
        >
          {[...cabs, ...cabs].map((cab, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(cab);
                setDistance("");
                setFare(null);
              }}
              className="cursor-pointer bg-white rounded-3xl shadow-xl p-8 w-[280px] flex-shrink-0 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-lg font-semibold">{cab.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{cab.desc}</p>

              <div className="mt-6 flex justify-center">
                <img
                  src={cab.image}
                  alt={cab.title}
                  className="w-full h-36 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-3xl p-10 max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold">{selected.title}</h3>

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-48 object-contain mt-6"
              />

              <p className="mt-4 text-gray-600">{selected.details}</p>

              <p className="mt-4 font-semibold">
                ₹{selected.pricePerKm} per km
              </p>

              {/* Distance Input */}
              <div className="mt-6">
                <input
                  type="number"
                  placeholder="Enter distance (km)"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl"
                />
              </div>

              <button
                onClick={calculateFare}
                className="mt-4 w-full bg-gray-200 py-2 rounded-xl"
              >
                Calculate Fare
              </button>

              {fare && (
                <div className="mt-4 text-center text-lg font-bold text-red-600">
                  Estimated Fare: ₹{fare}
                </div>
              )}

              <button
                onClick={handleBook}
                disabled={!fare}
                className="mt-6 w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition disabled:opacity-50"
              >
                Book via WhatsApp
              </button>

              <a
                href="tel:+918300399599"
                className="mt-4 block text-center text-blue-600 font-semibold"
              >
                📞 Call Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

    </section>
  );
}