import React, { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For page navigation
import "./Login.css";

const PopupModal = () => {
  const [show, setShow] = useState(false);
  const [loginMessage, setLoginMessage] = useState(""); // For success/error messages
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false); // To track login success
  const [showResult, setShowResult] = useState(false); // For showing result card after login

  const navigate = useNavigate(); // Hook to navigate programmatically

  // Formik for handling form state and validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:4000/login", values); // Backend login API
        if (response.status === 200) {
          setLoginMessage("Login successful!");
          setIsLoginSuccessful(true);
          setShowResult(true);
          alert("Login successful!"); // Show alert for successful login
          
          setTimeout(() => {
            handleClose(); // Close the modal after successful login
            navigate("/"); // Navigate to the home page after successful login
          }, 2000); // Wait for 2 seconds before redirecting
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setLoginMessage("Invalid email or password.");
          setIsLoginSuccessful(false);
        } else {
          setLoginMessage("An error occurred. Please try again later.");
          setIsLoginSuccessful(false);
        }
        setShowResult(true);
        alert(loginMessage); // Show alert with error message

        // Automatically navigate to the Register page on login failure
        setTimeout(() => {
          navigate("/register"); // Redirect to the registration page (make sure the route exists)
        }, 2000); // Wait for 2 seconds before redirecting to register
      }
    },
  });

  // Modal open and close functions
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setLoginMessage(""); // Clear messages on modal open
    setShowResult(false); // Hide login result card on modal open
    setShow(true);
  };

  // Function to handle navigation to the registration page
  const handleRegisterRedirect = () => {
    navigate("/register"); // Redirect to the registration page (make sure the route exists)
  };

  return (
    <div>
      {/* Button to open login modal */}
      <Button className="trains" onClick={handleShow}>
        Login
      </Button>

      {/* Login Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            {/* Email Field */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.password && formik.errors.password}
              />
              {formik.touched.password && formik.errors.password && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
              Login
            </Button>
            {/* Show Login result card */}
            {showResult && (
              <Card className="mt-3" style={{ border: isLoginSuccessful ? "1px solid green" : "1px solid red" }}>
                <Card.Body>
                  <Card.Title>{isLoginSuccessful ? "Success!" : "Error"}</Card.Title>
                  <Card.Text>{loginMessage}</Card.Text>
                  {!isLoginSuccessful && (
                    <Button variant="link" onClick={handleRegisterRedirect}>Create an Account</Button>
                  )}
                </Card.Body>
              </Card>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopupModal;
