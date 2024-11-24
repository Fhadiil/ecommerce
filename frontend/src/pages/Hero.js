import React from "react";

const Hero = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://buysellgraphic.com/images/graphic_preview/thumb/ecommerce_website_banner_template_customers_sketch_flat_design_55246.jpg"
            className="d-block w-100"
            alt="Promotion 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Discover the Latest Trends</h5>
            <p>Shop now and enjoy exclusive offers!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg"
            className="d-block w-100"
            alt="Promotion 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Big Discounts on Electronics</h5>
            <p>Grab your favorites before the sale ends!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://solutiondots.com/wp-content/uploads/2014/09/banner-ecommerce.jpg"
            className="d-block w-100"
            alt="Promotion 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Upgrade Your Home</h5>
            <p>Top-quality furniture at unbeatable prices.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
