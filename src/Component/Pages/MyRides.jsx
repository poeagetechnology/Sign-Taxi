import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../context/AuthContext";
import { getUserRides } from "../../services/rideService";
import { motion } from "framer-motion";
import { MapPin, Calendar, DollarSign, Clock } from "lucide-react";

export default function MyRides() {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const fetchRides = async () => {
      try {
        setLoading(true);
        if (user) {
          const userRides = await getUserRides(user.uid);
          setRides(userRides);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, [user]);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your rides...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>My Rides - Sign Taxi</title>
        <meta name="description" content="View your ride history" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Rides</h1>
            <p className="text-gray-600">
              View your ride history and booking details
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {/* Rides List */}
          {rides.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow p-8 text-center"
            >
              <p className="text-gray-600 mb-4">
                You haven't booked any rides yet
              </p>
              <a
                href="/cabs"
                className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Book Your First Ride
              </a>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {rides.map((ride, index) => (
                <motion.div
                  key={ride.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Ride Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-5 h-5 text-red-600" />
                        <span className="font-semibold text-gray-900">
                          {ride.pickupLocation} → {ride.dropoffLocation}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          {new Date(
                            ride.createdAt?.toDate?.() || ride.createdAt,
                          ).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          {new Date(
                            ride.createdAt?.toDate?.() || ride.createdAt,
                          ).toLocaleTimeString()}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <DollarSign className="w-4 h-4" />₹
                          {ride.price || "N/A"}
                        </div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(ride.status)}`}
                        >
                          {ride.status?.charAt(0).toUpperCase() +
                            ride.status?.slice(1)}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 md:flex-col">
                      <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium">
                        View Details
                      </button>
                      {ride.status === "completed" && (
                        <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition text-sm font-medium">
                          Rate Ride
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
