import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "./Image";
import Slider from "react-slick";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

const SlickSlider = (props) => {
  const sliderRef = useRef();
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextButton onClick={() => next()} />,
    prevArrow: <PrevButton onClick={() => previous()} />,
  };
  return (
    props.show && (
      <Slider {...settings} ref={sliderRef}>
        <Image src="image2.jpg" />
        <Image src="image3.jpg" />
        <Image src="image4.jpg" />
        <Image src="image1.jpg" />
      </Slider>
    )
  );
};

export default SlickSlider;
