import React from "react";
import { useNavigate } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 

const PaymentSuccess = () => {
  const navigate = useNavigate(); 
  const transactionDetails = {
    transactionId: "TXN12345678",
    amount: "$100.00",
    date: "2024-12-06",
    paymentMethod: "Credit Card",
  };

  const handleReturnHome = () => {
    alert("Returning to Home!");
    navigate("/"); 
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 text-center" style={{ maxWidth: "500px", borderRadius: "10px" }}>
        {/* Green Checkmark Icon */}
        <div className="text-success display-1 mb-3">
          <i className="bi bi-check-circle-fill"></i>
        </div>

        {/* Success Message */}
        <h3 className="mb-3">Payment Successful!</h3>
        <p className="text-muted">Thank you for your payment. Your transaction was successfully completed.</p>

        {/* Transaction Details */}
        <div className="mt-4">
          <h5 className="text-center mb-3">Transaction Details</h5>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span>Transaction ID:</span>
              <strong>{transactionDetails.transactionId}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Amount:</span>
              <strong>{transactionDetails.amount}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Date:</span>
              <strong>{transactionDetails.date}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Payment Method:</span>
              <strong>{transactionDetails.paymentMethod}</strong>
            </li>
          </ul>
        </div>

        {/* Return to Home Button */}
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleReturnHome}>
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
