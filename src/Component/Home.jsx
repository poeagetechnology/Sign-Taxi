import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    { title: "24/7 Direct Customer Support", subtitle: "Premium Toyota Innova Crysta", image: Car1, bg: "from-red-600 to-red-500" },
    { title: "No Ride Cancellations", subtitle: "Luxury Hyundai Verna", image: Car2, bg: "from-black via-gray-900 to-black" },
    { title: "Corporate & Airport Transfers", subtitle: "Elite Kia Carens", image: Car3, bg: "from-blue-700 to-indigo-600" },
    { title: "Affordable City Rides", subtitle: "Swift Dzire Sedan", image: Car4, bg: "from-purple-700 to-pink-600" },
    { title: "Outstation Premium Trips", subtitle: "Mahindra XUV700", image: Car5, bg: "from-yellow-500 to-orange-500" },
  ];

  const [current, setCurrent] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(interval);
}, [slides.length]);

  /* ---------------- BOOKING FORM ---------------- */

  const [tripType, setTripType] = useState("Oneway");

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const fromRef = useRef(null);
  const toRef = useRef(null);

  // Google Autocomplete
  useEffect(() => {
    if (window.google) {
      const fromAutocomplete = new window.google.maps.places.Autocomplete(fromRef.current);
      const toAutocomplete = new window.google.maps.places.Autocomplete(toRef.current);

      fromAutocomplete.addListener("place_changed", () => {
        const place = fromAutocomplete.getPlace();
        setFormData(prev => ({ ...prev, from: place.formatted_address }));
      });

      toAutocomplete.addListener("place_changed", () => {
        const place = toAutocomplete.getPlace();
        setFormData(prev => ({ ...prev, to: place.formatted_address }));
      });
    }
  }, []);

  // Device Location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      const geocoder = new window.google.maps.Geocoder();
      const latlng = { lat: latitude, lng: longitude };

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK" && results[0]) {
          setFormData(prev => ({ ...prev, from: results[0].formatted_address }));
        }
      });
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.from) newErrors.from = "From location required";
    if (!formData.to) newErrors.to = "To location required";
    if (!formData.date) newErrors.date = "Date required";
    if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Enter valid 10 digit number";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Enter valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit → WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `
🚖 SIGN TAXI Booking Request

Trip Type: ${tripType}
From: ${formData.from}
To: ${formData.to}
Date: ${formData.date}
Mobile: ${formData.mobile}
Email: ${formData.email}
`;

    const whatsappURL = `https://wa.me/918300399599?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="w-full overflow-hidden">

      {/* HERO */}
      <section className={`relative w-full h-[90vh] bg-gradient-to-r ${slides[current].bg} text-white`}>
        <div className="max-w-7xl mx-auto px-6 h-full grid md:grid-cols-2 items-center">

          <div>
            <img src={SignLogo} alt="Sign Taxi" className="h-16 mb-6" />
            <h1 className="text-4xl md:text-6xl font-extrabold">{slides[current].title}</h1>
            <p className="mt-4 text-xl">{slides[current].subtitle}</p>
          </div>

          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].image}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="w-[500px]"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {["Oneway", "Outstation", "Rental"].map(type => (
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

        <form onSubmit={handleSubmit}
          className="bg-gray-100 rounded-3xl shadow-2xl p-8 grid md:grid-cols-5 gap-4">

          {/* From */}
          <div>
            <div className="flex gap-2">
              <input
                ref={fromRef}
                name="from"
                value={formData.from}
                onChange={(e) => setFormData({...formData, from: e.target.value})}
                placeholder="From Location"
                className="w-full px-4 py-3 rounded-xl border"
              />
              <button type="button" onClick={getCurrentLocation}
                className="px-3 bg-red-600 text-white rounded-xl">
                📍
              </button>
            </div>
            {errors.from && <p className="text-red-500 text-xs">{errors.from}</p>}
          </div>

          {/* To */}
          <div>
            <input
              ref={toRef}
              name="to"
              value={formData.to}
              onChange={(e) => setFormData({...formData, to: e.target.value})}
              placeholder="To Location"
              className="w-full px-4 py-3 rounded-xl border"
            />
            {errors.to && <p className="text-red-500 text-xs">{errors.to}</p>}
          </div>

          {/* Date */}
          <div>
            <input type="date" name="date"
              onChange={(e)=>setFormData({...formData,date:e.target.value})}
              className="w-full px-4 py-3 rounded-xl border"/>
            {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
          </div>

          {/* Mobile */}
          <div>
            <input name="mobile"
              onChange={(e)=>setFormData({...formData,mobile:e.target.value})}
              placeholder="Mobile Number"
              className="w-full px-4 py-3 rounded-xl border"/>
            {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
          </div>

          {/* Email */}
          <div>
            <input name="email"
              onChange={(e)=>setFormData({...formData,email:e.target.value})}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border"/>
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div className="md:col-span-5 flex justify-center mt-4">
            <button type="submit"
              className="px-10 py-3 bg-black text-white rounded-full">
              Submit
            </button>
          </div>

        </form>

        <Triptypes />

        <Cabtypes />

        <Ourservices />

      </section>

    </main>
  );
}
