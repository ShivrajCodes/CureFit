import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Doctors from "./components/Doctors";
import About from "./components/About";
import News1 from "./components/News1";
import Footer from "./components/Footer";
import Hospitals from "./components/hospitals2";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News1 />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
