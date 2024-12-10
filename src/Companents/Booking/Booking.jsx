import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { MdChair } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup"; // For validation schema
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import axios from "axios";
import "./Booking.css";

// Validation schema using Yup
const validationSchema = Yup.object({
  fromStation: Yup.string().required("From station is required"),
  toStation: Yup.string().required("To station is required"),
  travelDate: Yup.date().required("Date is required"),
  travelClass: Yup.string().required("Class is required"),
  disabilityConcession: Yup.bool(),
});

const Booking = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:4000/login", {
          withCredentials: true, // If using cookies for session management
        });
        if (response.data.loggedIn) {
          setIsLoggedIn(true); // If user is logged in, allow access to booking page
        } else {
          setIsLoggedIn(false); // If not logged in, redirect to login page
          navigate("/login"); // Redirect to login page
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        navigate("/"); // Redirect to login page in case of error
      }
    };

    checkLoginStatus();
  }, [navigate]);

  // If user is not logged in, don't render the form
 

  // Formik for form handling
  const formik = useFormik({
    initialValues: {
      fromStation: "",
      toStation: "",
      travelDate: "",
      travelClass: "GENERAL",
      disabilityConcession: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission and navigate
      console.log("Form submitted with values:", values);
      navigate("/list"); // Navigate to a different page (for example, "/list")
    },
  });

  const checkboxOptions = [
    { id: "disabilityConcession", label: "Person With Disability Concession" ,icon:{FaWheelchair}},
    { id: "seniorCitizenConcession", label: "Senior Citizen Concession" },
    { id: "studentConcession", label: "Student Concession" },
    { id: "armedForcesConcession", label: "Armed Forces Concession" },
  ];

  return (
    <main className="py-4">
      <div className="container">
        <div className="card p-4 bookform">
          <h2 className="text-center">Book Ticket</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">From</label>
                <FaArrowUp style={{ color: "#aaa", marginRight: "5px" }} />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter station name"
                  name="fromStation"
                  value={formik.values.fromStation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fromStation && formik.errors.fromStation && (
                  <div className="text-danger">{formik.errors.fromStation}</div>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">To</label>
                <FaArrowDown style={{ color: "#aaa", marginRight: "5px" }} />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter station name"
                  name="toStation"
                  value={formik.values.toStation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.toStation && formik.errors.toStation && (
                  <div className="text-danger">{formik.errors.toStation}</div>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Date</label>
                <CiCalendarDate style={{ color: "#aaa", marginRight: "5px" }} />
                <input
                  type="date"
                  className="form-control"
                  name="travelDate"
                  value={formik.values.travelDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.travelDate && formik.errors.travelDate && (
                  <div className="text-danger">{formik.errors.travelDate}</div>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Class</label>
                <MdChair style={{ color: "#aaa", marginRight: "5px" }} />
                <select
                  className="form-select"
                  name="travelClass"
                  value={formik.values.travelClass}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="GENERAL">General</option>
                  <option value="SLEEPER">Sleeper</option>
                  <option value="AC">AC</option>
                </select>
                {formik.touched.travelClass && formik.errors.travelClass && (
                  <div className="text-danger">{formik.errors.travelClass}</div>
                )}
              </div>
            </div>

            {/* Checkbox options */}
            <div>
              {checkboxOptions.map((option) => (
                <div
                  key={option.id}
                  className="form-check mb-3 d-flex align-items-center"
                  style={{ gap: "20px" }}
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={option.id}
                    name={option.id}
                    checked={formik.values[option.id]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="form-check-label" htmlFor={option.id}>
                    {option.label}
                  </label>
                </div>
              ))}
            </div>

            {/* Submit button */}
            <div className="d-grid">
              <button type="submit" className="btn primary">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Booking;
