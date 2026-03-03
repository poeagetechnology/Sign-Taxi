import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Logo from "../Aset/Sign Taxi.png";
import CarImage from "../Aset/car.png";

export default function AuthHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    try {
      await logout();
      setDropdownOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              alt="SignTaxi"
              className="h-12 w-auto hover:opacity-80 transition"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
            <Link to="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-red-600 transition">
              About Us
            </Link>

            {Object.keys(megaMenus).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 hover:text-red-600 transition">
                  {menu}
                  <ChevronDown size={16} />
                </button>
              </div>
            ))}

            <button className="hover:text-red-600 transition">
              Become a Partner
            </button>

            {/* LOGIN / PROFILE */}
            {!user ? (
              <div className="flex gap-3 ml-4">
                <Link
                  to="/login"
                  className="px-6 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 rounded-full border-2 border-red-600 text-red-600 font-semibold hover:bg-red-50 transition"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="relative ml-4">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 hover:bg-red-200 transition"
                >
                  <User size={18} className="text-red-600" />
                  <span className="text-red-600 font-semibold text-sm">
                    {user.displayName}
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-xl p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900">
                      {user.displayName}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>
                    <hr className="my-3" />
                    <Link
                      to="/profile"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded transition text-sm"
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/rides"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded transition text-sm"
                    >
                      My Rides
                    </Link>
                    <Link
                      to="/settings"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded transition text-sm"
                    >
                      Settings
                    </Link>
                    <hr className="my-3" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded transition text-sm"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
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
                <img src={CarImage} alt="Car" className="w-96 object-contain" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
