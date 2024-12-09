import React from "react";
import Booking from "../Booking/Booking";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";


const Portal = () => {
  return (
    <div id="wrapper">
     <Navbar></Navbar>,
      <Booking></Booking>,
      <Contact></Contact>
      <footer className="bg-light text-center py-3">
        <p>© 2024 Indian Railways. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portal;
