// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import HomePage from "./components/Home";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import SupplyChain from "./components/SupplyChain";
import Analytics from "./components/Analytics";
import Alerts from "./components/Alerts";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import AddProduct from "./components/Addproducts";
import CreateShipment from "./components/CreateShipment";
import UpdateInventory from "./components/UpdateInventory";
import ExportReport from "./components/ExportReport";
import RunForecast from "./components/RunForcast";
import Demo from "./components/Demo";
import About from "./components/About";
import Features from "./components/Features";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page as default */}
        <Route path="/login" element={<LoginPage />} />

        {/* Placeholder routes */}
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />

        {/* Home page */}
        <Route path="/home" element={<HomePage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Inventory */}
        <Route path="/inventory" element={<Inventory />} />

        {/* Supply Chain */}
        <Route path="/supplychain" element={<SupplyChain />} />

        {/* Analytics */}
        <Route path="/analytics" element={<Analytics />} />

        {/* Alerts */}
        <Route path="/alerts" element={<Alerts />} />

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Add Products */}
        <Route path="/addproducts" element={<AddProduct />} />

        {/* Create Shipment */}
        <Route path="/createshipment" element={<CreateShipment />} />

        {/* Update Inventory */}
        <Route path="/updateinventory" element={<UpdateInventory />} />

        {/* Export Report */}
        <Route path="/exportreport" element={<ExportReport />} />

        {/* Run Forecast */}
        <Route path="/runforecast" element={<RunForecast />} />

        {/* Book a Demo */}
        <Route path="/bookademo" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
