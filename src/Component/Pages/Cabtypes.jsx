import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  X,
  MapPin,
  Calculator,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";

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
      details:
        "Premium AC sedan perfect for corporate travel and airport transfers.",
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
      "_blank",
    );
    setSelected(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <Helmet>
        <title>Our Fleet - Sedan, SUV & Premium Cabs | Sign Taxi</title>
        <meta
          name="description"
          content="Choose from our wide fleet of vehicles including Sedan, SUV, Toyota Innova, and luxury cars. Premium taxi services in Coimbatore with best-in-class comfort."
        />
        <link rel="canonical" href="https://signtaxi.co.in/cabs" />
      </Helmet>

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
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2.5rem] max-w-xl w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative border border-gray-100"
            >
              {/* Top Banner */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-3 text-[10px] font-black tracking-[0.2em] uppercase">
                <span className="flex items-center justify-center gap-2">
                  <Zap size={12} className="text-yellow-400 fill-yellow-400" />
                  Instant Fare Estimation
                  <Zap size={12} className="text-yellow-400 fill-yellow-400" />
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-12 right-6 w-10 h-10 bg-gray-100/80 backdrop-blur-sm hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-2xl flex items-center justify-center transition-all duration-300 z-10 shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="p-8 pt-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
                    {selected.desc}
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 drop-shadow-sm">
                    {selected.title}
                  </h3>
                </div>

                <div className="relative group mb-8">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent rounded-full blur-2xl opacity-50"></div>
                  <motion.img
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-48 object-contain relative drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-600">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">
                        Per KM
                      </p>
                      <p className="text-gray-900 font-bold text-lg">
                        ₹{selected.pricePerKm}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4 text-left">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-600">
                      <Calculator size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">
                        Est. Fare
                      </p>
                      <p className="text-gray-900 font-bold text-lg">
                        {fare ? `₹${fare}` : "---"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors">
                      <MapPin size={18} />
                    </div>
                    <input
                      type="number"
                      placeholder="Enter Estimated Distance (KM)"
                      value={distance}
                      onChange={(e) => {
                        const val = e.target.value;
                        setDistance(val);
                        if (val && !isNaN(val)) {
                          setFare(val * selected.pricePerKm);
                        } else {
                          setFare(null);
                        }
                      }}
                      className="w-full pl-14 pr-6 py-5 bg-gray-50 border-2 border-transparent focus:border-red-500 focus:bg-white rounded-2xl transition-all duration-300 font-bold text-gray-900 outline-none placeholder:text-gray-400"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={handleBook}
                      disabled={!fare}
                      className="flex-[2] bg-red-600 text-white py-5 px-8 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:grayscale disabled:scale-100"
                    >
                      <MessageSquare size={18} /> Book on WhatsApp
                    </button>
                    <button
                      onClick={() => setSelected(null)}
                      className="flex-1 bg-gray-900 text-white py-5 px-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-xl flex items-center justify-center active:scale-95"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <p className="mt-6 text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] opacity-60">
                  Signature Luxury Travel by Sign Taxi
                </p>
              </div>
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
