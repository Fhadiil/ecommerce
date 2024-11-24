import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const [quantity, setQuantity] = useState(1); // State for quantity selection
  const [error, setError] = useState(null); // Error handling

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${id}/`);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details. Please try again later.");
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return <div className="alert alert-danger text-center mt-5">{error}</div>;
  }

  if (!product) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
            style={{ maxHeight: "500px", objectFit: "contain" }}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">Category: {product.category || "N/A"}</p>
          <p>{product.description}</p>
          <h3 className="text-success">${product.price}</h3>
          <p className="text-warning">
            {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
          </p>

          {/* Quantity Selector */}
          {product.stock > 0 && (
            <div className="d-flex align-items-center mb-3">
              <label htmlFor="quantity" className="me-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                value={quantity}
                min="1"
                max={product.stock}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                style={{ width: "80px" }}
              />
            </div>
          )}

          {/* Add to Cart Button */}
          {product.stock > 0 ? (
            <button
              className="btn btn-success btn-lg me-3"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          ) : (
            <button className="btn btn-secondary btn-lg" disabled>
              Out of Stock
            </button>
          )}

          {/* Share Product Button */}
          <button className="btn btn-outline-primary btn-lg">Share Product</button>
        </div>
      </div>

      {/* Related Products (Placeholder) */}
      <div className="mt-5">
        <h3>Related Products</h3>
        <div className="row">
          <p>Related products coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
