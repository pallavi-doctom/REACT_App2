import React, { useState } from "react";

export default function UpdateInventory() {
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 3000);
  };

  return (
    <>
      <style>{`
        :root {
          --bg-dark: #0f172a;
          --nav-bg: #1e293b;
          --input-bg: #334155cc;
          --accent-blue: #38bdf8;
          --text-light: #f1f5f9;
          --text-secondary: #94a3b8;
          --glass-bg: rgba(30, 41, 59, 0.6);
        }
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: var(--text-light);
          background-size: 400% 400%;
          animation: bgMove 20s ease infinite;
          overflow-x: hidden;
        }
        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        header {
          background-color: #1e293b;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        header h1 {
          font-size: 1.5rem;
          color: #38bdf8;
          letter-spacing: 1px;
          margin: 0;
        }
        nav {
          display: flex;
          gap: 1.5rem;
        }
        nav a {
          color: #f1f5f9;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
          font-size: 0.95rem;
        }
        nav a::after {
          content: '';
          display: block;
          width: 0%;
          height: 2px;
          background-color: #38bdf8;
          position: absolute;
          bottom: -5px;
          left: 0;
          transition: width 0.3s ease-in-out;
        }
        nav a:hover {
          color: #38bdf8;
        }
        nav a:hover::after {
          width: 100%;
        }
        .slide-container {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
          transform: translateX(100%);
        }
        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0%);
          }
        }
        .container {
          margin: 2rem auto;
          width: 90%;
          max-width: 600px;
          padding: 2.5rem;
          background: var(--glass-bg);
          backdrop-filter: blur(15px);
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          animation: fadeInContent 1.2s ease;
        }
        @keyframes fadeInContent {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        h2 {
          text-align: center;
          color: var(--accent-blue);
          margin-bottom: 2rem;
        }
        .form-group {
          position: relative;
          margin-bottom: 2rem;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 1rem 0.75rem;
          background-color: var(--input-bg);
          border: none;
          border-radius: 0.6rem;
          color: var(--text-light);
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          box-shadow: 0 0 10px var(--accent-blue);
          transform: scale(1.02);
        }
        .form-group label {
          position: absolute;
          top: 1rem;
          left: 0.75rem;
          color: var(--text-secondary);
          pointer-events: none;
          transition: 0.3s ease;
        }
        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label,
        .form-group textarea:focus + label,
        .form-group textarea:not(:placeholder-shown) + label {
          top: -0.8rem;
          left: 0.6rem;
          background-color: var(--nav-bg);
          padding: 0 0.5rem;
          font-size: 0.75rem;
          color: var(--accent-blue);
        }
        button {
          width: 100%;
          padding: 1rem;
          background-color: var(--accent-blue);
          border: none;
          border-radius: 0.8rem;
          color: var(--bg-dark);
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px var(--accent-blue);
        }
        .popup {
          display: none;
          text-align: center;
          margin-top: 1.5rem;
          padding: 1rem;
          background-color: #0ea5e9;
          color: var(--bg-dark);
          font-weight: bold;
          border-radius: 0.5rem;
          animation: fadePopup 1s ease-out;
        }
        .popup.show {
          display: block;
        }
        @keyframes fadePopup {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <header>
        <h1>NEXO Inventory</h1>
        <nav>
          <a href="Home">Home</a>
          <a href="inventory">Inventory</a>
          <a href="supplychain">Supply Chain</a>
          <a href="analytics">Analytics</a>
          <a href="alerts">Alerts</a>
          <a href="settings">Settings</a>
        </nav>
      </header>

      <div className="slide-container">
        <div className="container">
          <h2>Update Product Stock</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="productId" name="productId" placeholder=" " required />
              <label htmlFor="productId">Product ID</label>
            </div>

            <div className="form-group">
              <input type="text" id="productName" name="productName" placeholder=" " required />
              <label htmlFor="productName">Product Name</label>
            </div>

            <div className="form-group">
              <input type="number" id="currentStock" name="currentStock" placeholder=" " required />
              <label htmlFor="currentStock">Current Stock</label>
            </div>

            <div className="form-group">
              <input type="number" id="stockToAdd" name="stockToAdd" placeholder=" " required />
              <label htmlFor="stockToAdd">Add Quantity</label>
            </div>

            <div className="form-group">
              <input type="text" id="location" name="location" placeholder=" " />
              <label htmlFor="location">Warehouse Location</label>
            </div>

            <button type="submit">🛠 Update Inventory</button>
            <br /><br />
            <button type="button" onClick={() => (window.location.href = "dashboard")}>
              ← Back to Dashboard
            </button>
          </form>
          <div className={`popup${showMsg ? " show" : ""}`}>
            ✅ Inventory Updated Successfully!
          </div>
        </div>
      </div>
    </>
  );
}
