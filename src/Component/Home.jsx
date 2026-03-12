import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { X, Phone, MessageSquare } from "lucide-react";
import SignLogo from "../Aset/Sign Taxi.png";
import Car1 from "../Aset/car1.png";
import Car2 from "../Aset/car2.png";
import Car3 from "../Aset/car3.png";
import Car4 from "../Aset/car4.png";
import Car5 from "../Aset/car5.png";
import Triptypes from "./Pages/Triptypes";
import Cabtypes from "./Pages/Cabtypes";
import Ourservices from "./Pages/Ourservices";

export default function SignTaxiHome() {
  /* ---------------- SLIDER ---------------- */

  const slides = [
    {
      title: "24/7 Direct Customer Support",
      subtitle: "Premium Toyota Innova Crysta",
      image: Car1,
      bg: "from-red-600 to-red-500",
    },
    {
      title: "No Ride Cancellations",
      subtitle: "Luxury Hyundai Verna",
      image: Car2,
      bg: "from-black via-gray-900 to-black",
    },
    {
      title: "Corporate & Airport Transfers",
      subtitle: "Elite Kia Carens",
      image: Car3,
      bg: "from-blue-700 to-indigo-600",
    },
    {
      title: "Affordable City Rides",
      subtitle: "Swift Dzire Sedan",
      image: Car4,
      bg: "from-purple-700 to-pink-600",
    },
    {
      title: "Outstation Premium Trips",
      subtitle: "Mahindra XUV700",
      image: Car5,
      bg: "from-yellow-500 to-orange-500",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [showOffer, setShowOffer] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  /* ---------------- BOOKING FORM ---------------- */

  const today = new Date().toISOString().split("T")[0];

  const [tripType, setTripType] = useState("Oneway");

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: today,
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  /* ---------------- VALIDATION ---------------- */

  const validate = () => {
    let newErrors = {};

    if (!formData.from) newErrors.from = "Enter pickup location";
    if (!formData.to) newErrors.to = "Enter drop location";
    if (!formData.date) newErrors.date = "Select date";
    if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter valid 10 digit number";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Enter valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- WHATSAPP REDIRECT ---------------- */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `
🚖 SIGN TAXI Booking Request

Trip Type: ${tripType}

Pickup Location: ${formData.from}
Drop Location: ${formData.to}
Date: ${formData.date}
Mobile: ${formData.mobile}
Email: ${formData.email}
`;

    const whatsappURL =
      "https://wa.me/918300399599?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="w-full overflow-hidden">
      <Helmet>
        <title>
          Sign Taxi – Best Taxi Service in Coimbatore | 24/7 Call Taxi
        </title>
        <meta
          name="description"
          content="Book affordable cabs with Sign Taxi Coimbatore. 24/7 service for airport transfers, outstation trips, and local rides. Reliable, safe, and professional drivers."
        />
        <link rel="canonical" href="https://signtaxi.co.in/" />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className={`relative w-full h-[90vh] bg-gradient-to-r ${slides[current].bg} text-white transition-all duration-1000`}
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 h-full grid md:grid-cols-2 items-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;
            if (swipe < -50) {
              setCurrent((prev) => (prev + 1) % slides.length);
            } else if (swipe > 50) {
              setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
            }
          }}
        >
          <div>
            <img src={SignLogo} alt="Sign Taxi" className="h-16 mb-6" />
            <h1 className="text-4xl md:text-6xl font-extrabold">
              {slides[current].title}
            </h1>
            <p className="mt-4 text-xl">{slides[current].subtitle}</p>
          </div>

          <div className="flex justify-center relative group">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].image}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="w-[500px] cursor-grab active:cursor-grabbing"
              />
            </AnimatePresence>

            {/* Modern Arrows Overlay */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(
                    (prev) => (prev - 1 + slides.length) % slides.length,
                  );
                }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center pointer-events-auto hover:bg-white/20 transition-all active:scale-95"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent((prev) => (prev + 1) % slides.length);
                }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center pointer-events-auto hover:bg-white/20 transition-all active:scale-95"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BOOKING SECTION */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <div className="flex gap-4 mb-6">
          {["Oneway", "Outstation", "Rental"].map((type) => (
            <button
              key={type}
              onClick={() => setTripType(type)}
              className={`px-6 py-2 rounded-t-xl ${
                tripType === type ? "bg-white text-red-600" : "bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 rounded-3xl shadow-2xl p-8 grid md:grid-cols-5 gap-4"
        >
          <div>
            <input
              value={formData.from}
              onChange={(e) =>
                setFormData({ ...formData, from: e.target.value })
              }
              placeholder="Pickup Location"
              className="w-full px-4 py-3 rounded-xl border"
            />
            {errors.from && (
              <p className="text-red-500 text-xs">{errors.from}</p>
            )}
          </div>

          <div>
            <input
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              placeholder="Drop Location"
              className="w-full px-4 py-3 rounded-xl border"
            />
            {errors.to && <p className="text-red-500 text-xs">{errors.to}</p>}
          </div>

          <div>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border"
            />
            {errors.date && (
              <p className="text-red-500 text-xs">{errors.date}</p>
            )}
          </div>

          <div>
            <input
              placeholder="Phone Number"
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border"
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs">{errors.mobile}</p>
            )}
          </div>

          <div>
            <input
              placeholder="Email ID"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          <div className="md:col-span-5 flex justify-center mt-4">
            <button
              type="submit"
              className="px-10 py-3 bg-black text-white rounded-full"
            >
              Book Now
            </button>
          </div>
        </form>

        <Triptypes />
        <Cabtypes />
        <Ourservices />
      </section>

      {/* OFFER POPUP */}
      <AnimatePresence>
        {showOffer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-[380px] w-full shadow-2xl overflow-hidden relative border border-gray-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowOffer(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-md hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-xl flex items-center justify-center transition-all z-[11] shadow-sm border border-gray-100"
              >
                <X size={16} />
              </button>

              <div className="p-0 text-center">
                {/* Map Integration */}
                <div className="h-40 w-full relative group">
                  <iframe
                    title="Karur to Coimbatore"
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d501511.970222047!2d76.9632!3d10.9996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3baae245df84b2cb%3A0xe67755866f28148b!2sKarur%2C%20Tamil%20Nadu!3m2!1d10.9601!2d78.0766!4m5!1s0x3ba859af2f971cb5%3A0x2d460b5776d6ec0a!2sCoimbatore%2C%20Tamil%20Nadu!3m2!1d11.0168!2d76.9558!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    className="grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
                </div>

                <div className="p-6 pt-2">
                  <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black mb-4 uppercase">
                    Route Special
                  </div>

                  <h2 className="text-2xl font-black text-gray-900 leading-tight">
                    Karur <span className="text-red-600">→</span> Kovai
                  </h2>

                  <div className="my-5">
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest block">
                      Starting from
                    </span>
                    <div className="text-5xl font-black text-gray-900 flex items-center justify-center gap-1">
                      <span className="text-xl">₹</span>2133
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-6 px-4">
                    <div className="text-left">
                      <p className="text-[9px] text-gray-400 font-black uppercase">
                        Time
                      </p>
                      <p className="text-sm font-black text-gray-900">1h 59m</p>
                    </div>
                    <div className="h-6 w-px bg-gray-200"></div>
                    <div className="text-right">
                      <p className="text-[9px] text-gray-400 font-black uppercase">
                        Dist.
                      </p>
                      <p className="text-sm font-black text-gray-900">120 KM</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="tel:+918300399599"
                      className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-xl font-black text-[11px] uppercase tracking-wider hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Phone size={14} /> Call
                    </a>
                    <a
                      href="https://wa.me/918300399599"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-green-500 text-white py-3 px-4 rounded-xl font-black text-[11px] uppercase tracking-wider hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageSquare size={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
