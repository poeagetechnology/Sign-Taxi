import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TripTypes() {
  const trips = [
    {
      title: "Oneway Trip",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      description:
        "Book a single destination ride with transparent pricing and zero hidden charges. Perfect for airport drops and intercity travel.",
    },
    {
      title: "Round Trip",
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763",
      description:
        "Travel to your destination and return comfortably with flexible waiting time and affordable packages.",
    },
    {
      title: "Airport Transfer",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
      description:
        "On-time airport pickups and drops with professional drivers and luggage assistance.",
    },
    {
      title: "Hourly Rental",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      description:
        "Book a cab for multiple hours and travel anywhere within the city without worrying about distance limits.",
    },
    {
      title: "Corporate Travel",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      description:
        "Premium executive rides for business meetings, events, and company travel requirements.",
    },
    {
      title: "Outstation Trip",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      description:
        "Enjoy comfortable long-distance travel across cities with well-maintained SIGNTAXI vehicles. Ideal for family trips, pilgrimages, weekend getaways, and business travel with professional drivers and fixed upfront pricing.",
    },
  ];

  const [selectedTrip, setSelectedTrip] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
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
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
            >
              <img
                src={`${selectedTrip.image}?auto=format&fit=crop&w=800&q=80`}
                alt={selectedTrip.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedTrip.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedTrip.description}
                </p>
                <button
                  onClick={() => setSelectedTrip(null)}
                  className="mt-6 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
