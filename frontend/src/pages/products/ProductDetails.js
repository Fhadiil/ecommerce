import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext); // Access addToCart
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);

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
    if (quantity > 0) {
      addToCart({ ...product, quantity });
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`http://127.0.0.1:8000${product.image}`}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <h3 className="text-success">${product.price}</h3>
          <p>{product.description}</p>
          <div className="d-flex align-items-center mb-3">
            <label htmlFor="quantity" className="me-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              max={product.stock}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="form-control"
              style={{ width: "80px" }}
            />
          </div>
          <button className="btn btn-success" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
