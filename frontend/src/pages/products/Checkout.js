// Checkout.js
import React, { useState } from "react";
import axios from "axios";

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/checkout/", {
        ...formData,
        items: cartItems,
      });
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Checkout error:", error);
      alert("There was an error with your order.");
    }
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="form-select"
          >
            <option value="card">Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
