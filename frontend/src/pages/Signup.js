import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <input name="username" placeholder="Username" onChange={handleChange} required /><br/>
      <input name="email" placeholder="Email" onChange={handleChange} required /><br/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br/>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
