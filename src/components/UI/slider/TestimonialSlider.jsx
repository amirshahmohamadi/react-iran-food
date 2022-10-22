import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/amir.jpg";
import ava02 from "../../../assets/images/amir2.jpg";
import ava03 from "../../../assets/images/amir3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
        این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
        این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است

        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>امیر شامحمدی</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
        این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
        این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است

        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>امیرشامحمدی</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
        این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است
        این متن توسط زیبایی و کارایی اپلیکیشن ساختگی توسط امیر شامحمدی ساخته شده است

        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>امیرشامحمدی</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
