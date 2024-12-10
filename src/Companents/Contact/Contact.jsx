import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  return (
    <>
    <h1>CONTACT US</h1>
    <Container className="mt-5">
      <h3>For Railway tickets booked through IRCTC</h3>

      <h5>Customer Care Numbers:</h5>
      <ListGroup>
        <ListGroup.Item>14646</ListGroup.Item>
        <ListGroup.Item>08044647999</ListGroup.Item>
        <ListGroup.Item>08035734999</ListGroup.Item>
      </ListGroup>
      <p><strong>Language:</strong> Hindi and English</p>

      <p>
        <strong>Enhanced interface for IRCTC related queries:</strong>
        <a href="https://equery.irctc.co.in" target="_blank" rel="noopener noreferrer">
          https://equery.irctc.co.in
        </a>
      </p>

      <h5>General Information:</h5>
      <p>
        <strong>E-tickets / I-tickets:</strong> 
        <a href="https://equery.irctc.co.in" target="_blank" rel="noopener noreferrer">
          https://equery.irctc.co.in
        </a>
      </p>

      <p>
        <strong>For Cancellation of E-tickets:</strong> 
        <a href="mailto:etickets@irctc.co.in">etickets@irctc.co.in</a>
      </p>

      <p>
        <strong>For IRCTC iMudra Prepaid Wallet & Card:</strong>
        <a href="https://equery.irctc.co.in" target="_blank" rel="noopener noreferrer">
          https://equery.irctc.co.in
        </a>
      </p>

      <h5>For complaint regarding IRCTC Loyalty credit card, kindly contact as below:</h5>
      
      <Row>
        <Col md={6}>
          <h6>LOYALTY CREDIT CARD: IRCTC-SBI</h6>
          <p><strong>Contact Number:</strong> 0124-39021212 / 18001801295</p>
          <p>
            <strong>Email/URL:</strong> 
            <a href="mailto:customercare@sbicard.com">customercare@sbicard.com</a>
          </p>
        </Col>
        <Col md={6}>
          <h6>LOYALTY CREDIT CARD: IRCTC-BOB</h6>
          <p><strong>Contact Number:</strong> 1800225100 / 18001031006</p>
          <p>
            <strong>Email/URL:</strong> 
            <a href="mailto:crm@bobfinancial.com">crm@bobfinancial.com</a>
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h6>LOYALTY CREDIT CARD: IRCTC-HDFC</h6>
          <p><strong>Contact Number:</strong> 18002026161 / 18602676161</p>
          <p>
            <strong>Email/URL:</strong>
            <a href="https://www.hdfcbank.com/personal/need-help/contact-us" target="_blank" rel="noopener noreferrer">
              HDFC Contact
            </a>
          </p>
        </Col>
      </Row>

      <p>
        <strong>For other queries related to IRCTC Loyalty Co-branded Program, kindly email:</strong>
        <a href="mailto:loyaltyprogram@irctc.co.in">loyaltyprogram@irctc.co.in</a>
      </p>

      <h5>Registered Office / Corporate Office:</h5>
      <p>
        Indian Railway Catering and Tourism Corporation Ltd.,<br />
        B-148, 11th Floor, Statesman House,<br />
        Barakhamba Road, New Delhi 110001
      </p>

      <Button variant="primary" onClick={() => window.location.href = '/'}>Back to Home</Button>
    </Container>
    </>
  );
};

export default Contact;


