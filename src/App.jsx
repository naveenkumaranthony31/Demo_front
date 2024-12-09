import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Portal from "./Companents/Portal/Portal";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./Companents/Login/Register";
import TrainList from "./Companents/TrainList/TrainList";
import Payment from "./Companents/Payment/Payment";
import Success from "./Companents/Payment/PaymentSuccess";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<TrainList />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
