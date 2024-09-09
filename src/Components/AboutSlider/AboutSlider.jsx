import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Uncle from "../../assets/imgs/dayi.png";
import "./aboutslider.css";
import Emi from "../../assets/imgs/Emi.png";
import Qardas from "../../assets/imgs/qardas.png";
// Custom next button
const NextArrow = ({ onClick }) => {
  return (
    <button className="arrow-btn next-arrow" onClick={onClick}>
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  );
};

// Custom previous button
const PrevArrow = ({ onClick }) => {
  return (
    <button className="arrow-btn prev-arrow" onClick={onClick}>
     <i class="fa-solid fa-arrow-left"></i>
    </button>
  );
};

function AutoPlayMethods() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />, // Custom next arrow
    prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />, // Custom prev arrow
  };

  return (
    <div className="slider-wrapper">
      <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          <div className="card">
            <div className="card-image">
              <img
                src={Uncle}
                alt="Jenny Wilson"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card-info">
              <h5>Jenny Wilson</h5>
              <p>CEO & FOUNDER</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src={Emi}
                alt="Jenny Wilson"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card-info">
              <h5>Robert Fox</h5>
              <p>SENIOR FARMER MANAGER</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src={Qardas}
                alt="Jenny Wilson"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card-info">
              <h5>Robert Fox</h5>
              <p>Worker</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src={Uncle}
                alt="Jenny Wilson"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card-info">
              <h5>Jenny Wilson</h5>
              <p>CEO & FOUNDER</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src={Qardas}
                alt="Jenny Wilson"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card-info">
              <h5>Jenny Wilson</h5>
              <p>CEO & FOUNDER</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src={Emi}
                alt="Jenny Wilson"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card-info">
              <h5>Jenny Wilson</h5>
              <p>CEO & FOUNDER</p>
            </div>
          </div>
          
        </Slider>
      </div>
      <NextArrow onClick={() => sliderRef.current.slickNext()}  />
    </div>
  );
}

export default AutoPlayMethods;
