import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../Aset/Sign Taxi.png";
import CarImage from "../Aset/car.png";

export default function AuthHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [user, setUser] = useState(null);

  const megaMenus = {
    Services: {
      title: "Book a Ride",
      items: [
        "Oneway Trip",
        "Round Trip",
        "Hourly Rental",
        "Airport Taxi",
        "Corporate Travel",
        "Bike Taxi",
      ],
    },
    Cities: {
      title: "Cities",
      items: [
        "Chennai",
        "Coimbatore",
        "Madurai",
        "Salem",
        "Trichy",
        "Tirunelveli",
        "Erode",
        "Vellore",
        "Tirupur",
        "Thanjavur",
      ],
    },
  };

  /* ---------------- LOGIN SIMULATION ---------------- */

  const handleLogin = () => {
    const fakeUser = {
      name: "John Kumar",
      email: "john@gmail.com",
      photo: "https://i.pravatar.cc/150?img=3",
    };

    setUser(fakeUser);
    setShowLogin(false);
    setShowWelcome(true);

    setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <img src={Logo} alt="SignTaxi" className="h-12 w-auto" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
            <button className="hover:text-red-600">Home</button>
            <button className="hover:text-red-600">About Us</button>

            {Object.keys(megaMenus).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 hover:text-red-600">
                  {menu}
                  <ChevronDown size={16} />
                </button>
              </div>
            ))}

            <button className="hover:text-red-600">
              Become a Partner
            </button>

            {/* LOGIN / PROFILE */}
            {!user ? (
              <button
                onClick={() => setShowLogin(true)}
                className="ml-4 px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 font-semibold"
              >
                Login
              </button>
            ) : (
              <div className="relative group cursor-pointer">
                <img
                  src={user.photo}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />

                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-xl p-4 hidden group-hover:block">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <button
                    onClick={handleLogout}
                    className="mt-3 text-red-600 text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        {activeMenu && (
          <div
            className="absolute left-0 w-full bg-red-600 text-white shadow-2xl"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-2 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  {megaMenus[activeMenu].title}
                </h2>

                <div className="grid grid-cols-2 gap-6 text-lg">
                  {megaMenus[activeMenu].items.map((item, i) => (
                    <div key={i} className="hover:underline cursor-pointer">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <img
                  src={CarImage}
                  alt="Car"
                  className="w-96 object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center">
            <h2 className="text-2xl font-bold mb-6">
              Login to Sign Taxi
            </h2>

            <button
              onClick={handleLogin}
              className="w-full px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700"
            >
              Continue with Google
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="mt-4 text-gray-500 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* WELCOME POPUP */}
      {showWelcome && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white px-10 py-8 rounded-2xl shadow-2xl text-center">
            <h2 className="text-2xl font-bold text-green-600">
              Welcome to Sign Taxi 🚖
            </h2>
            <p className="mt-2 text-gray-600">
              Login Successful!
            </p>
          </div>
        </div>
      )}
    </>
  );
}