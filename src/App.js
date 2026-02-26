import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Triptypes from "./Component/Pages/Triptypes";
import Cabtypes from "./Component/Pages/Cabtypes";
import Ourservices from "./Component/Pages/Ourservices";

function App() {
  return (
    <div className="App">
      
    <Header />
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/trip" element={<Triptypes />} />
  <Route path="/cabs" element={<Cabtypes />}/>
  <Route path="/services" element={<Ourservices />} />
</Routes>
<Footer />
   
      
    </div>
  );
}

export default App;
