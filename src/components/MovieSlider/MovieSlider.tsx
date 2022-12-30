import React from "react";
import Slider from "react-slick";
const MovieSlider = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  return <div>MovieSlider</div>;
};

export default MovieSlider;
