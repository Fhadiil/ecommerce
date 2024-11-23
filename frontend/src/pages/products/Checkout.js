import React, { useState } from "react";

const Checkout = () => {
    const [formData, setFormData] = useState({
        address: "",
        paymentMethod: "credit_card",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order placed:", formData);
        // API call to place order can be made here
    };

    return (
        <div className="container mt-5">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                    <select
                        name="paymentMethod"
                        id="paymentMethod"
                        className="form-select"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                    >
                        <option value="credit_card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="cash_on_delivery">Cash on Delivery</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
