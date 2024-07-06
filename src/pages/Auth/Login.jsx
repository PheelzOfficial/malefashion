// import React from 'react'
import { useState } from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import { ContextData } from "../../Context/useContext";
import "./Login.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonLoader from "../../component/Loader/ButtonLoader";

const Login = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { addUser, setMyToken } = ContextData();
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  // await addUser(response.data.user);
  // await setMyToken(response.data.token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginUser = async () => {
    setLoading(true);

    try {
      const empty = [];
      if (!formData.email || formData.email.trim() === "") {
        empty.push("Email is required");
      }

      if (!formData.password || formData.password.trim() === "") {
        empty.push("Password is required");
      }

      if (empty.length > 0) {
        empty.forEach((item) => {
          toast.error(item);
        });
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:3333/api/v1/login",
        formData
      );

      if (response && response.status === 200 && response.data) {
        await addUser(response.data.user);
        await setMyToken(response.data.token);
        toast.success("Login Successful");
        setLoading(false);
        Navigate("/");
        return;
      } else {
        toast.error("Error Occured !");
        setLoading(false);
        return;
      }
    } catch (err) {
      if (err.response) {
        // console.log("Error Response Data:", err.response.data);
        // console.log("Error Response Status:", err.response.status);
        // console.log("Error Response Headers:", err.response.headers);
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
      <div className="my-body">
        <div className="my-wrapper">
          <form action="#">
            <h2>Login</h2>
            <div className="input-field">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label className="my-label">Enter your email</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <label className="my-label">Enter your password</label>
            </div>
            <div className="forget">
              <label className="my-label" htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
              <a href="#">Forgot password?</a>
            </div>
            {loading ? (
              <div className="my-button">
                <ButtonLoader />
              </div>
            ) : (
              <div onClick={loginUser} className="my-button">
                Log In
              </div>
            )}
            <div className="register">
              <p>
                Dont have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
