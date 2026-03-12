import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import Logo from "../Aset/Sign Taxi.png";

export default function AuthHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
            <Link to="/about" className="hover:text-red-600 transition">
              About
            </Link>
            <Link to="/services" className="hover:text-red-600 transition">
              Services
            </Link>

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
          <div className="lg:hidden flex items-center gap-4">
            {!user && (
              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider"
              >
                Login
              </Link>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE SIDE DRAWER */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
              />
              {/* Drawer Content */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[300px] bg-white z-[70] lg:hidden shadow-2xl flex flex-col"
              >
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <img src={Logo} alt="Logo" className="h-8" />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-gray-500 hover:text-red-600 transition"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {user && (
                    <div className="mb-8 p-4 bg-red-50 rounded-2xl border border-red-100">
                      <p className="text-xs font-black text-red-600 uppercase tracking-widest mb-1">
                        Signed in as
                      </p>
                      <p className="font-bold text-gray-900">
                        {user.displayName}
                      </p>
                    </div>
                  )}

                  <div className="space-y-1">
                    <Link
                      to="/"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-xl font-bold transition"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-xl font-bold transition"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-xl font-bold transition"
                    >
                      Our Services
                    </Link>
                    {user && (
                      <>
                        <Link
                          to="/profile"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-xl font-bold transition"
                        >
                          My Profile
                        </Link>
                        <Link
                          to="/rides"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-xl font-bold transition"
                        >
                          My Rides
                        </Link>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100">
                  {!user ? (
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to="/login"
                        onClick={() => setMobileOpen(false)}
                        className="bg-gray-900 text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        onClick={() => setMobileOpen(false)}
                        className="border-2 border-red-600 text-red-600 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center"
                      >
                        Sign Up
                      </Link>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileOpen(false);
                      }}
                      className="w-full bg-red-600 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
