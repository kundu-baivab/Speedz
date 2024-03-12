import {forwardRef} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import car1 from "../images/car-1.jpg";
import car2 from "../images/car-2.jpg";
import car3 from "../images/car-3.jpg";
import car4 from "../images/car-4.jpg";
import car5 from "../images/car-5.jpg";
import car6 from "../images/car-6.jpg";
import car7 from "../images/car-7.jpg";
import car8 from "../images/car-8.jpg";
import car9 from "../images/car-9.jpg";
import car10 from "../images/car-10.jpg";
import car11 from "../images/car-11.jpg";
import car12 from "../images/car-12.jpg";

import CarItem from './CarItem';

const Featured = forwardRef((props,ref) => {
    // displayName: 'Featured',
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2500,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const carNumbers = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <div ref={ref}>
      <section className='bg-light'>
          <div className="container">
              <div class="row justify-content-center">
                <div class="col-md-12 heading-section text-center mb-5">
                  <span class="subheading">What we offer</span>
                  <h2 class="mb-2">Featured Vehicles</h2>
                </div>
              </div>
              <div className="slider-container">
                <Slider {...settings}>
                    {carNumbers.map(carNo => (
                      <CarItem key={carNo} carImage={getImageForCar(carNo)} />
                    ))}
                </Slider>
              </div>        
          </div>
        </section>
    </div>
  );
});

const getImageForCar = (carNo) => {
  switch (carNo) {
    case 1:
      return car1;
    case 2:
      return car2;
    case 3:
      return car3;
    case 4:
      return car4;
    case 5:
      return car5;
    case 6:
      return car6;
    case 7:
      return car7;
    case 8:
      return car8;
    case 9:
      return car9;
    case 10:
      return car10;
    case 11:
      return car11;
    case 12:
      return car12;
    default:
      return null;
  }
};

export default Featured
