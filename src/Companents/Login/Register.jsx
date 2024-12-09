import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Importing useNavigate
import "./Login.css";

const PopupModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook for redirection

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post('http://localhost:4000/userspost', values); // Backend API endpoint
        console.log('Registration successful:', response.data);
        alert("User registered successfully!");
        resetForm();
        setShow(false); // Close the modal after successful registration

        // Redirect to the portal page after successful registration
        setTimeout(() => {
          navigate('/');  // Use navigate to go to the portal page
        }, 2000);  // Adding a delay before redirection (optional)
      } catch (error) {
        console.error('Error registering user:', error.response?.data || error.message);
        alert("Error: " + (error.response?.data?.message || error.message));
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="trains" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="my-4">Register</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            {/* Username */}
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.username && formik.errors.username}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.password && formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.confirmPassword}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopupModal;
