import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Image>
        <img src="../images/slider-badag.jpg" alt="movie poster" />
      </Image>
      <Image>
        <img src="../images/slider-badging.jpg" alt="movie poster" />
      </Image>
      <Image>
        <img src="../images/slider-scale.jpg" alt="movie poster" />
      </Image>
      <Image>
        <img src="../images/slider-scales.jpg" alt="movie poster" />
      </Image>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 15px;
  .slick-list {
    overflow: visible;
  }
  .slick-arrow:before {
    font-size: 25px;
  }

  .slick-dots li button:before {
    font-size: 10px;
  }

  .slick-dots li button:before {
    color: rgb(150, 158, 171);
  }
  .slick-dots li.slick-active button:before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;

const Image = styled.div`
  cursor: pointer;
  /* margin: 0 10px; */

  img {
    border: 4px solid transparent;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 19px 38px,
      rgba(0, 0, 0, 0.3) 0px 15px 12px;
    transition: border 100ms ease;

    &:hover {
      border: 4px solid white;
    }
  }
`;
