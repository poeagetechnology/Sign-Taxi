import React from "react";
import {
  FaUserTie,
  FaAward,
  FaStar,
} from "react-icons/fa";
import HU from '../../Aset/car2.png'
import IN from '../../Aset/car1.png'
import MH from '../../Aset/car5.png'

export default function About() {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <div
        className="h-[350px] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            SIGN TAXI
          </h1>

          <p className="mt-3 text-lg">
            Reliable Airport & Outstation Taxi Service
          </p>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* EXPERIENCE */}
        <div className="bg-white shadow-xl rounded-3xl p-10 mb-12 flex items-center gap-6">

          <div className="bg-black text-white p-5 rounded-full">
            <FaAward className="text-3xl" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              18+ Years of Taxi Experience
            </h2>

            <p className="text-gray-600 mt-2">
              SIGN TAXI has been serving customers for more than
              18 years providing reliable taxi services across
              Tamil Nadu.
            </p>
          </div>

        </div>

        {/* COUNTER */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-black">
              10,000+
            </h2>
            <p className="text-gray-600 mt-2">
              Rides Completed
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-black">
              18+
            </h2>
            <p className="text-gray-600 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-black">
              2
            </h2>
            <p className="text-gray-600 mt-2">
              Branch Locations
            </p>
          </div>

        </div>

        {/* FLEET */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Fleet
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <img
                src={HU}
                className="rounded-xl mb-4"
                alt="Sedan"
              />
              <h3 className="text-xl font-semibold">Sedan</h3>
              <p className="text-gray-600 text-sm">
                Comfortable city & airport rides
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <img
                src={MH}
                className="rounded-xl mb-4"
                alt="SUV"
              />
              <h3 className="text-xl font-semibold">SUV</h3>
              <p className="text-gray-600 text-sm">
                Perfect for family travel
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <img
                src={IN}
                className="rounded-xl mb-4"
                alt="Innova"
              />
              <h3 className="text-xl font-semibold">Innova</h3>
              <p className="text-gray-600 text-sm">
                Premium long distance travel
              </p>
            </div>

          </div>

        </div>

        {/* OWNER */}
        <div className="bg-white shadow-lg rounded-3xl p-10 mb-16">

          <div className="flex items-center gap-3 mb-4">
            <FaUserTie className="text-2xl text-black"/>
            <h2 className="text-xl font-semibold">
              Owner
            </h2>
          </div>

          <p className="text-lg font-medium">
            Mr. Prabakaran
          </p>

          <p className="text-gray-600 mt-2">
            Founder of SIGN TAXI with more than 18 years
            of experience in the taxi service industry.
          </p>

        </div>

        {/* REVIEWS */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold text-center mb-10">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {["Very reliable taxi service!", "Great drivers and clean cars!", "Best airport taxi in Coimbatore"].map(
              (review, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">

                  <div className="flex mb-3 text-yellow-400">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <p className="text-gray-600">
                    {review}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

        {/* GOOGLE MAP */}
        <div>

          <h2 className="text-3xl font-bold text-center mb-8">
            Our Branch Locations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Karur */}
            <iframe
              title="Karur Branch"
              src="https://maps.google.com/maps?q=karur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[300px] rounded-2xl border"
            ></iframe>

            {/* Coimbatore */}
            <iframe
              title="Coimbatore Branch"
              src="https://maps.google.com/maps?q=coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[300px] rounded-2xl border"
            ></iframe>

          </div>

        </div>

      </div>

    </div>
  );
}