import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center mt-4">
          <p>Your cart is empty!</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/")}
          >
            Go to Shop
          </button>
        </div>
      ) : (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between align-items-center">
            <h4>Total: ${calculateTotalPrice().toFixed(2)}</h4>
            <div>
              <button className="btn btn-warning btn-sm me-3" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="btn btn-primary btn-sm" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
