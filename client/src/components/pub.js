import React from "react";
import "./components.css";
const Pub = () => {
  return (
    <div className="m-3">
      <div
        id="carouselExampleIndicators"
        className="carousel slide w-50 m-auto"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              className="d-block w-100 imgPub"
              src="https://statics.lesinrocks.com/content/thumbs/uploads/2019/02/width-1200-height-630-watermark-2/photo-mag-2023685778.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgPub"
              src="https://www.tunisienumerique.com/wp-content/uploads/2019/10/Etoile-sportive-u17-1-1200x900.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgPub"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TuFv66pydgvd_7RHgGGB4IK3N9B2SLhtlA&usqp=CAU"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Pub;
