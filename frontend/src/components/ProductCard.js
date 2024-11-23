import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="card h-100">
            <img
                src={product.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={product.name}
            />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <a href={`/products/${product.id}`} className="btn btn-primary">View Details</a>
            </div>
        </div>
    );
};

export default ProductCard;
