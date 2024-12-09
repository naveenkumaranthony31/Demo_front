import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const train = location.state?.train; 
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  if (!train) {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <h2>No train selected!</h2>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const { name, cardNumber, expiryDate, cvv } = formData;

    if (!name || !cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all the required fields.");
      return;
    }

    alert("Payment Successful!"); 
    navigate("/success"); 
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center p-4 border rounded shadow-lg bg-light">
        <h2>Payment Page</h2>
        <div className="mt-3">
          <p><strong>Train Name:</strong> {train.name}</p>
          <p><strong>Train Number:</strong> {train.number}</p>
          <p><strong>Departure:</strong> {train.departure}</p>
          <p><strong>Arrival:</strong> {train.arrival}</p>
          <p><strong>Days:</strong> {train.days}</p>
        </div>
        <form onSubmit={handlePayment} className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name on Card</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter cardholder's name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">Card Number</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="Enter card number"
              required
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input
                type="password"
                className="form-control"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="Enter CVV"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-3">
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
