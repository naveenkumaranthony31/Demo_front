import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Train.css";

const PopupModal = () => {
  const [show, setShow] = useState(false); // State to control the modal visibility
  const navigate = useNavigate(); // Initialize the navigate function

  // Functions to handle modal open and close
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to handle navigation to the Booking page
  const handleNavigate = () => {
    navigate("/"); // This will navigate to the "/booking" route
    handleClose(); // Close the modal after navigating
  };

  return (
    <div>
      {/* Button to trigger the modal */}
      <Button className="trains" onClick={handleShow}>
        Trains
      </Button>

      {/* Modal Component */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Train List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Button to navigate to the Booking page */}
          <Button onClick={handleNavigate}>Book Ticket</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopupModal;
