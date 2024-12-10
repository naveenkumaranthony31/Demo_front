import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const TrainList = () => {
  const navigate = useNavigate();

  // Data
  const trains = [
    { id: 1, name: "Kerala Express", number: "75601", departure: "11:21", arrival: "1:32", days: "2 days" },
    { id: 2, name: "Chennai Express", number: "67890", departure: "09:00", arrival: "11:45", days: "1 day" },
    { id: 3, name: "Mumbai Express", number: "54321", departure: "16:30", arrival: "20:15", days: "2 days" },
    { id: 4, name: "Bangalore Mail", number: "98765", departure: "22:00", arrival: "05:30", days: "Overnight" },
    { id: 5, name: "Hyderabad Express", number: "11223", departure: "06:15", arrival: "12:45", days: "Half day" },
  ]; 

  const handleBookNow = (train) => {
    // alert message
    const userConfirmed = window.confirm(
      `You are about to book a ticket for ${train.name} (${train.number}).\n\nDo you want to proceed to payment?`
    );

    if (userConfirmed) {
      navigate("/payment", { state: { train } });
    }
  };

  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <Row>
          {trains.map((train) => (
            <Col key={train.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>
                    {train.name} ({train.number})
                  </Card.Title>
                  <Card.Text>
                    <strong>Departure:</strong> {train.departure}<br />
                    <strong>Arrival:</strong> {train.arrival}<br />
                    <strong>Days:</strong> {train.days}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleBookNow(train)}>
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TrainList;
