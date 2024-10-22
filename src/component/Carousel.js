import React from "react";
import bannerImageOne from "../assets/banner-images/hero__banner2.jpg";
import bannerImageTwo from "../assets/banner-images/hero__banner3.jpg";
import bannerImageThree from "../assets/banner-images/hero__banner4.jpg";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        <div className="carousel-indicators custom-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <img src={bannerImageOne} style={{ }} />
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <img src={bannerImageTwo} style={{ }} />
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <img src={bannerImageThree} style={{ }} />
          </button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={bannerImageOne}
              className="d-block w-100"
              alt="First Slide"
            />
            <h1>To enable autoplay for your carousel in React using Bootstrap</h1>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={bannerImageTwo}
              className="d-block w-100"
              alt="Second Slide"
            />
             <h1>To enable autoplay for your carousel in React using Bootstrap</h1>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img
              src={bannerImageThree}
              className="d-block w-100"
              alt="Third Slide"
            />
             <h1>To enable autoplay for your carousel in React using Bootstrap</h1>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
