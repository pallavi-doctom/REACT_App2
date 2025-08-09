// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace this with real authentication logic
    console.log("Login submitted:", formData);

    // Redirect to home page after successful login
    navigate("/home");
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#0f172a", color: "#f1f5f9", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Header */}
      <header style={{ backgroundColor: "#111a30", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
        <h1 style={{ fontSize: "1.5rem", color: "#5a9ac4", letterSpacing: "1px", margin: 0 }}>NEXO Inventory</h1>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <a href="/features" style={navLinkStyle}>Features</a>
          <a href="/about" style={navLinkStyle}>About</a>
          <a href="/signup" style={navLinkStyle}>SignUp</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Streamlining Supply Chains, One Connection at a Time</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#cbd5e1" }}>
          Live, Predictive, and Transparent Inventory Management
        </p>
      </section>

      {/* Login Form */}
      <section style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", padding: "2rem", backgroundColor: "#1b2840", borderRadius: "12px", maxWidth: "400px", width: "100%" }}>
          <form style={{ display: "flex", flexDirection: "column", width: "100%" }} onSubmit={handleSubmit}>
            <label htmlFor="username" style={{ marginBottom: "0.5rem", fontWeight: 500 }}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <label htmlFor="password" style={{ marginBottom: "0.5rem", fontWeight: 500 }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "1rem", color: "#94a3b8", fontSize: "0.9rem", marginTop: "auto" }}>
        &copy; 2025 NEXO Inventory | Built for Integrated Supply Chains
      </footer>
    </div>
  );
};

// Reusable styles
const navLinkStyle = {
  color: "#f1f5f9",
  textDecoration: "none",
  fontWeight: 500,
  position: "relative",
};

const inputStyle = {
  padding: "0.75rem",
  border: "none",
  borderRadius: "8px",
  marginBottom: "1rem",
  backgroundColor: "#49556d",
  color: "#f1f5f9",
};

const buttonStyle = {
  padding: "0.75rem",
  backgroundColor: "#5a9ac4",
  border: "none",
  borderRadius: "8px",
  color: "#0f172a",
  fontWeight: "bold",
  cursor: "pointer",
};

export default LoginPage;
