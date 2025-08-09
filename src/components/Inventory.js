import React from "react";

export default function InventoryPage() {
  return (
    <div className="inventory-root">
      <style>{`
        .inventory-root {
          font-family: 'Inter', sans-serif;
          background: #0f172a;
          color: #f1f5f9;
          min-height: 100vh;
        }
        header {
          background: #1e293b;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 36px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }
        header h1 {
          font-size: 1.5rem;
          color: #38bdf8;
          font-weight: 700;
        }
        nav {
          display: flex;
          gap: 28px;
        }
        nav a {
          color: #f1f5f9;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.2s;
        }
        nav a:hover {
          color: #38bdf8;
        }
        nav a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: #38bdf8;
          transition: width 0.3s;
        }
        nav a:hover::after {
          width: 100%;
        }

        .container {
          padding: 28px 36px;
        }

        /* Overview Cards */
        .overview {
          display: flex;
          gap: 24px;
          margin-bottom: 34px;
        }
        .card {
          background: #1e293b;
          border-radius: 10px;
          flex: 1;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .card h3 {
          font-size: 1rem;
          margin-bottom: 8px;
          color: #94a3b8;
        }
        .card p {
          font-size: 2rem;
          color: #38bdf8;
          font-weight: 700;
        }

        /* Table */
        .inventory-table {
          margin-bottom: 28px;
        }
        .inventory-table h2 {
          font-size: 1.15rem;
          color: #38bdf8;
          margin-bottom: 10px;
        }
        .inventory-table table {
          width: 100%;
          border-collapse: collapse;
        }
        .inventory-table th, .inventory-table td {
          padding: 12px 8px;
          border-bottom: 1px solid #334155;
          text-align: left;
        }
        .inventory-table th {
          background: #1e293b;
        }
        .inventory-table td button {
          background: #38bdf8;
          color: #fff;
          border: none;
          padding: 6px 12px;
          margin: 2px;
          border-radius: 4px;
          font-size: 0.9rem;
          cursor: pointer;
        }

        /* Filters */
        .filters {
          margin-bottom: 30px;
        }
        .filters h2 {
          font-size: 1.1rem;
          color: #38bdf8;
          margin-bottom: 8px;
        }
        .filters form {
          display: flex;
          gap: 14px;
          align-items: center;
          background: #1e293b;
          padding: 14px 20px;
          border-radius: 8px;
        }
        .filters select {
          background: #0f172a;
          color: #f1f5f9;
          border: 1px solid #334155;
          border-radius: 4px;
          padding: 6px;
        }
        .filters button {
          background: #38bdf8;
          border: none;
          color: #fff;
          border-radius: 4px;
          padding: 6px 14px;
          cursor: pointer;
        }

        /* Form */
        #form h2 {
          font-size: 1.1rem;
          color: #38bdf8;
          margin-bottom: 8px;
        }
        #form form {
          background: #1e293b;
          border-radius: 8px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        #form input, #form select, #form textarea {
          background: #0f172a;
          color: #f1f5f9;
          border: 1px solid #334155;
          border-radius: 4px;
          padding: 8px;
        }
        #form button {
          background: #38bdf8;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 8px;
          cursor: pointer;
        }

        /* Alerts */
        .alerts h2 {
          font-size: 1.1rem;
          color: #38bdf8;
          margin-bottom: 8px;
        }
        .alerts ul {
          list-style: none;
          padding: 0;
        }
        .alerts li {
          background: #1e293b;
          border-radius: 6px;
          padding: 10px;
          margin-bottom: 6px;
        }

        /* Footer */
        footer {
          text-align: center;
          font-size: 0.9rem;
          color: #cbd5e1;
          margin-top: 30px;
        }
      `}</style>

      <header>
        <h1>NEXO Inventory</h1>
        <nav>
          <a href="home">Home</a>
          <a href="dashboard">Dashboard</a>
          <a href="supplychain">Supply Chain</a>
          <a href="analytics">Analytics</a>
          <a href="alerts">Alerts</a>
          <a href="settings">Settings</a>
        </nav>
      </header>
      <div className="container">
        <section className="overview">
          <div className="card"><h3>Total Items</h3><p>1200</p></div>
          <div className="card"><h3>In-Stock</h3><p>900</p></div>
          <div className="card"><h3>Low Stock</h3><p>150</p></div>
          <div className="card"><h3>Out-of-Stock</h3><p>50</p></div>
          <div className="card"><h3>Inventory Value</h3><p>$50,000</p></div>
        </section>

        <section className="inventory-table">
          <h2>Inventory List</h2>
          <table>
            <thead>
              <tr>
                <th>Item ID / SKU</th>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Reorder Level</th>
                <th>Price</th>
                <th>Expiry Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Product A</td>
                <td>High-quality item</td>
                <td>50</td>
                <td>30</td>
                <td>$25</td>
                <td>2025-12-31</td>
                <td>In Stock</td>
                <td>
                  <button>Update</button>
                  <button>Edit</button>
                  <button>Delete</button>
                  <button>View History</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="filters">
          <h2>Filters</h2>
          <form>
            <label htmlFor="category">Category:</label>
            <select id="category">
              <option value="all">All</option>
              <option value="cat1">Category 1</option>
              <option value="cat2">Category 2</option>
            </select>
            <label htmlFor="status">Status:</label>
            <select id="status">
              <option value="all">All</option>
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
            <button type="submit">Apply Filters</button>
          </form>
        </section>

        <section id="form">
          <h2>Add/Update Item</h2>
          <form>
            <label htmlFor="item-name">Name:</label>
            <input type="text" id="item-name" />

            <label htmlFor="description">Description:</label>
            <textarea id="description"></textarea>

            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" />

            <label htmlFor="price">Price:</label>
            <input type="number" id="price" />

            <label htmlFor="category">Category:</label>
            <select id="category">
              <option value="cat1">Category 1</option>
              <option value="cat2">Category 2</option>
            </select>

            <label htmlFor="supplier">Supplier:</label>
            <input type="text" id="supplier" />

            <label htmlFor="reorder">Reorder Level:</label>
            <input type="number" id="reorder" />

            <label htmlFor="expiry">Expiry Date (optional):</label>
            <input type="date" id="expiry" />

            <button type="submit">Save Item</button>
          </form>
        </section>

        <section className="alerts">
          <h2>Low Stock Alerts</h2>
          <ul>
            <li>Product A - 10 left</li>
            <li>Product B - 5 left</li>
          </ul>
        </section>
      </div>

      <footer>
        <p>&copy; 2025 Inventory Management. All rights reserved.</p>
      </footer>
    </div>
  );
}
