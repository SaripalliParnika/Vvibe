import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "var(--primary)" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Feed</Link>
      <Link to="/upload" style={{ color: "#fff", marginRight: "15px" }}>Upload</Link>
      <Link to="/profile/123" style={{ color: "#fff" }}>Profile</Link>
    </nav>
  );
};

export default Navbar;

