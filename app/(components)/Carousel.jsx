import React from 'react';

const Carousel = () => {
  return (
    <>
      <div className="container mt-4">
        <div
          id="supplementCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#supplementCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#supplementCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#supplementCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#supplementCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://via.placeholder.com/800x400"
                className="d-block w-100"
                alt="PROTEİN TOZU"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>PROTEİN TOZU</h5>
                <p>Protein tozları ile kaslarınızı güçlendirin.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/800x400"
                className="d-block w-100"
                alt="KİLO & HACİM"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>KİLO & HACİM</h5>
                <p>Kilo ve hacim kazandırıcı ürünler.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/800x400"
                className="d-block w-100"
                alt="AMİNO ASİT"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>AMİNO ASİT</h5>
                <p>Amino asit takviyeleri ile performansınızı artırın.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/800x400"
                className="d-block w-100"
                alt="KREATİN"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>KREATİN</h5>
                <p>Kreatin ile gücünüzü zirveye taşıyın.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#supplementCarousel"
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
            data-bs-target="#supplementCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
