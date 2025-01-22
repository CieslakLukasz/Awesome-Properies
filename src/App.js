import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/Home/Home.js";
import Offers from "./pages/Offers/Offers.js";
import Map from "./pages/Map/Map.js";
import Contact from "./pages/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import "./App.less";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
