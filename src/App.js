// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import HomePage from "./components/Home";
import Dashboard from "./components/Dashboard"; // Import your Dashboard component
import Inventory from "./components/Inventory";
import SupplyChain from "./components/SupplyChain"
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
import Features from "./components/Features"
import Signup from "./components/Signup"

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page as default */}
        <Route path="/login" element={<LoginPage />} />

        {/* Placeholder routes for future pages */}
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />

        {/* Home page */}
        <Route path="/home" element={<HomePage />} />

        {/* Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Inventory Page*/}
        <Route path="/inventory" element={<Inventory />} />

        {/* SupplyChain Page*/}
        <Route path="/supplychain" element={<SupplyChain />} />  

        {/* SupplyChain Page*/}
        <Route path="/Analytics" element={<Analytics />} />     

         {/* Alerts Page*/}
        <Route path="/Alerts" element={<Alerts />} />  

        {/* Settings Page*/}
        <Route path="/Settings" element={<Settings />} /> 

        {/* Profile Page*/}
        <Route path="/Profile" element={<Profile />} />

        {/* Profile Page*/}
        <Route path="/Addproducts" element={<AddProduct />} />

        {/* Create Page*/}
        <Route path="/createshipment" element={<CreateShipment />} />

        {/* UpdateInventory Page*/}
        <Route path="/updateinventory" element={<UpdateInventory />} />

        {/* UpdateInventory Page*/}
        <Route path="/exportreport" element={<ExportReport />} />

        {/* UpdateInventory Page*/}
        <Route path="/runforecast" element={<RunForecast />} />

        {/* bookademo Page*/}
        <Route path="/bookademo" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
