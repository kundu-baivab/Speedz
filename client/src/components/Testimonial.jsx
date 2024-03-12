import React,{forwardRef} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import p1 from '../images/person_1.jpg'
import p2 from '../images/person_2.jpg'
import p3 from '../images/person_3.jpg'
import p4 from '../images/person_4.jpg'

const Testimonial = forwardRef((props,ref) => {
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
  return (
    <div ref={ref} id='testimonial'>
      <section class="ftco-section testimony-section bg-light">
          <div class="container mb-5">
            <div class="row justify-content-center mb-5">
              <div class="col-md-7 text-center heading-section ftco-animate">
                <span class="subheading">Testimonial</span>
                <h2 class="mb-3">Happy Clients</h2>
              </div>
            </div>
                <Slider {...settings}>
                  <div class="item px-3">
                    <div class="testimony-wrap rounded text-center py-4 pb-5">
                      <div class="user-img mb-2" style={{backgroundImage: `url(${p1})`}}>
                      </div>
                      <div class="text pt-4">
                        <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p class="name">Roger Scott</p>
                        <span class="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                  <div class="item px-3">
                    <div class="testimony-wrap rounded text-center py-4 pb-5">
                      <div class="user-img mb-2" style={{backgroundImage: `url(${p2})`}}>
                      </div>
                      <div class="text pt-4">
                        <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p class="name">Peter Scott</p>
                        <span class="position">Interface Designer</span>
                      </div>
                    </div>
                  </div>
                  <div class="item px-3">
                    <div class="testimony-wrap rounded text-center py-4 pb-5">
                      <div class="user-img mb-2" style={{backgroundImage: `url(${p3})`}}>
                      </div>
                      <div class="text pt-4">
                        <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p class="name">Matthew Scott</p>
                        <span class="position">UI Designer</span>
                      </div>
                    </div>
                  </div>
                  <div class="item px-3">
                    <div class="testimony-wrap rounded text-center py-4 pb-5">
                      <div class="user-img mb-2" style={{backgroundImage: `url(${p4})`}}>
                      </div>
                      <div class="text pt-4">
                        <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p class="name">Alex Scott</p>
                        <span class="position">Web Developer</span>
                      </div>
                    </div>
                  </div>
                </Slider>
          </div>
        </section>
    </div>
  )
})

export default Testimonial
