import React from "react";

const categories = [
  { id: 1, name: "Electronics", image: "/images/electronics-icon.png" },
  { id: 2, name: "Fashion", image: "/images/fashion-icon.png" },
  { id: 3, name: "Home Appliances", image: "/images/home-icon.png" },
];

const CategoryHighlights = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shop by Category</h2>
      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-md-4 mb-4">
            <div className="card text-center border-0 shadow-sm">
              <img
                src={category.image}
                className="card-img-top p-4"
                alt={category.name}
                style={{ height: "150px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <a
                  href={`/category/${category.id}`}
                  className="btn btn-outline-primary"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryHighlights;
