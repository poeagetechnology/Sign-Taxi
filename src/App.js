import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Triptypes from "./Component/Pages/Triptypes";
import Cabtypes from "./Component/Pages/Cabtypes";
import Ourservices from "./Component/Pages/Ourservices";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup";
import ForgotPassword from "./Component/Pages/ForgotPassword";
import Profile from "./Component/Pages/Profile";
import MyRides from "./Component/Pages/MyRides";
import ProtectedRoute from "./Component/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/trip" element={<Triptypes />} />
        <Route path="/cabs" element={<Cabtypes />} />
        <Route path="/services" element={<Ourservices />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rides"
          element={
            <ProtectedRoute>
              <MyRides />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
