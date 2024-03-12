import React,{forwardRef} from 'react'
import { GiCityCar } from "react-icons/gi";
import { FaCarOn } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { MdModeOfTravel } from "react-icons/md";

const Options = forwardRef((props,ref) => {
  return (
    <div ref={ref}>
      <section class="ftco-section">
          <div class="container">
            <div class="row justify-content-center mb-5">
              <div class="col-md-7 text-center heading-section ftco-animate">
                <span class="subheading">Services</span>
                <h2 class="mb-3">Our Latest Services</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="services services-2 w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <IoCarSportSharp className='service-icons'/>
                  </div>
                  <div class="text w-100">
                    <h3 class="heading mb-2">Wedding Ceremony</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="services services-2 w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <MdModeOfTravel className='service-icons' />
                  </div>
                  <div class="text w-100">
                    <h3 class="heading mb-2">City Transfer</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="services services-2 w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <FaCarOn className='service-icons' />
                  </div>
                  <div class="text w-100">
                    <h3 class="heading mb-2">Airport Transfer</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="services services-2 w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <GiCityCar className='service-icons' />
                  </div>
                  <div class="text w-100">
                    <h3 class="heading mb-2">Whole City Tour</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
})

export default Options
