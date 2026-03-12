import React from "react";
import Car from "../../Aset/car1.png"; // your taxi image

export default function Services() {
  const services = [
    "Oneway Trip",
    "Round Trip",
    "Hourly Rental",
    "Airport Taxi",
    "Corporate Travel",
    "Bike Taxi",
  ];

  const phone = "918300399599";

  const handleClick = (service) => {
    const message = `
🚖 SIGN TAXI Service Booking

Service: ${service}

Please share pickup & drop location.
`;

    const whatsapp =
      "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(whatsapp, "_blank");
  };

  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}

        <div>
          <h1 className="text-5xl font-bold mb-10">Book a Ride</h1>

          <div className="grid grid-cols-2 gap-8 text-lg">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleClick(service)}
                className="cursor-pointer hover:text-red-500 transition"
              >
                {service}
              </div>
            ))}
          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-10">
            <a
              href="tel:+918300399599"
              className="bg-white text-black px-6 py-3 rounded-full"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918300399599"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 px-6 py-3 rounded-full"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}

        <div className="flex justify-center">
          <img src={Car} alt="Taxi" className="w-[450px]" />
        </div>
      </div>
    </section>
  );
}
