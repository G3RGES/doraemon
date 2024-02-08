/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
    </div>
  );
};

export default App;
