// import React from 'react'
import { useState } from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import toast from "react-hot-toast";
// import { ContextData } from "../../Context/useContext";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonLoader from "../../component/Loader/ButtonLoader";

const Register = () => {
  // http://localhost:5173/register
  const Navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // const { addUser, setMyToken } = ContextData();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const creatAcct = async () => {
    setLoading(true);
    try {
      const emptyField = [];
      if (!formData.firstName || formData.firstName.trim() === "") {
        emptyField.push("First Name");
      }
      if (!formData.lastName || formData.lastName.trim() === "") {
        emptyField.push("Last Name");
      }
      if (!formData.username || formData.username.trim() === "") {
        emptyField.push("Username");
      }
      if (!formData.email || formData.email.trim() === "") {
        emptyField.push("Email Address");
      }
      if (!formData.password || formData.password.trim() === "") {
        emptyField.push("Password");
      }
      if (!formData.confirmPassword || formData.confirmPassword.trim() === "") {
        emptyField.push("Confirm Password");
      }
      if (!formData.state || formData.state.trim() === "") {
        emptyField.push("State");
      }
      if (!formData.city || formData.city.trim() === "") {
        emptyField.push("City");
      }
      if (!formData.zipcode || formData.zipcode.trim() === "") {
        emptyField.push("Zip Code");
      }
      if (!formData.phoneNumber || formData.phoneNumber.trim() === "") {
        emptyField.push("Phone Number");
      }
      if (!formData.gender || formData.gender.trim() === "") {
        emptyField.push("Gender");
      }

      if (emptyField.length > 0) {
        emptyField.forEach((item) => {
          toast.error(`${item} can not be empty`);
        });
        setLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast.error("Password does not match");
        setLoading(false);
        return;
      }

      // console.log("Form Data:", formData); // Log the formData
      // eslint-disable-next-line no-unused-vars
      const { confirmPassword, ...dataToSend } = formData;
      const response = await axios.post(
        "http://localhost:3333/api/v1/register",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response);
      if (response && response.status === 200 && response.data) {
        toast.success("Registered Successfully, please Login");
        setLoading(false);
        Navigate("/login");
      } else {
        toast.error("Error Occured while creating account !");
        setLoading(false);
      }
    } catch (err) {
      if (err.response) {
        console.log("Error Response Data:", err.response.data);
        console.log("Error Response Status:", err.response.status);
        console.log("Error Response Headers:", err.response.headers);
        toast.error(`${err.response.data.message || err.message}`);
      } else {
        console.log("Error:", err.message);
        toast.error("Error Occurred");
      }
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div className="my-content">
        <div className="my-container">
          <div className="title">Registration</div>
          <div className="content">
            <form method="post">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name</span>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Last Name</span>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Username</span>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="number"
                    placeholder="Enter your number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Address</span>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">State</span>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">City</span>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Zip Code</span>
                  <input
                    type="text"
                    placeholder="Enter your zip code"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Gender</span>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option selected>Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Rather not say">Rather not say</option>
                  </select>
                </div>
              </div>
              {/* <div className="gender-details">
                <input type="radio" name="gender" value="male" id="dot-1" />
                <input type="radio" name="gender" value="female" id="dot-2" />
                <input
                  type="radio"
                  name="gender"
                  value="Prefer not to say"
                  id="dot-3"
                />
                <span className="gender-title">Gender</span>
                <div className="category">
                  <label htmlFor="dot-1">
                    <span className="dot one"></span>
                    <span className="gender">Male</span>
                  </label>
                  <label htmlFor="dot-2">
                    <span className="dot two"></span>
                    <span className="gender">Female</span>
                  </label>
                  <label htmlFor="dot-3">
                    <span className="dot three"></span>
                    <span className="gender">Prefer not to say</span>
                  </label>
                </div>
              </div> */}
              {loading ? (
                <div className="button">
                  <ButtonLoader />
                </div>
              ) : (
                <div className="button" onClick={creatAcct}>
                  <div className="submit-text">Register</div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
