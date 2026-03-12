import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { X, Info, CheckSquare, ShieldCheck, ArrowRight } from "lucide-react";

export default function TripTypes() {
  const trips = [
    {
      title: "Oneway Trip",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      description:
        "Book a single destination ride with transparent pricing and zero hidden charges. Perfect for airport drops and intercity travel.",
    },
    {
      title: "Round Trip",
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763",
      description:
        "Travel to your destination and return comfortably with flexible waiting time and affordable packages.",
    },
    {
      title: "Airport Transfer",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
      description:
        "On-time airport pickups and drops with professional drivers and luggage assistance.",
    },
    {
      title: "Hourly Rental",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      description:
        "Book a cab for multiple hours and travel anywhere within the city without worrying about distance limits.",
    },
    {
      title: "Corporate Travel",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      description:
        "Premium executive rides for business meetings, events, and company travel requirements.",
    },
    {
      title: "Outstation Trip",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      description:
        "Enjoy comfortable long-distance travel across cities with well-maintained SIGNTAXI vehicles. Ideal for family trips, pilgrimages, weekend getaways, and business travel with professional drivers and fixed upfront pricing.",
    },
  ];

  const [selectedTrip, setSelectedTrip] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <Helmet>
        <title>Trip Types - One Way, Round Trip & Outstation | Sign Taxi</title>
        <meta
          name="description"
          content="Choose from our wide range of trip types. We offer one-way drops, round trips, airport transfers, and outstation taxi services from Coimbatore."
        />
        <link rel="canonical" href="https://signtaxi.co.in/trip" />
      </Helmet>
      <h2 className="text-4xl font-bold text-center mb-12">
        Explore Trip Types
      </h2>

      {/* Trip Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {trips.map((trip, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden"
            onClick={() => setSelectedTrip(trip)}
          >
            <img
              src={`${trip.image}?auto=format&fit=crop&w=800&q=80`}
              alt={trip.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{trip.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Click to view details
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTrip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2.5rem] max-w-xl w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative border border-gray-100 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  src={`${selectedTrip.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={selectedTrip.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                {/* Close Button Overlay */}
                <button
                  onClick={() => setSelectedTrip(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-red-500 text-white rounded-2xl flex items-center justify-center transition-all duration-300 z-10 border border-white/20"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-6 left-8">
                  <span className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-2 shadow-lg">
                    Premium Service
                  </span>
                  <h3 className="text-3xl font-black text-white drop-shadow-md">
                    {selectedTrip.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                    <Info size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-2">
                      Service Overview
                    </h4>
                    <p className="text-gray-500 leading-relaxed font-medium">
                      {selectedTrip.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="text-red-600 mb-2">
                      <CheckSquare size={18} />
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block mb-1">
                      Pricing
                    </span>
                    <span className="text-gray-900 font-bold">Transparent</span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="text-red-600 mb-2">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block mb-1">
                      Safety
                    </span>
                    <span className="text-gray-900 font-bold">
                      Verified Drivers
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedTrip(null)}
                    className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group active:scale-95"
                  >
                    Close{" "}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="h-2 bg-gradient-to-r from-red-600 to-orange-500"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
