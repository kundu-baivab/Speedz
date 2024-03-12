import React,{forwardRef} from 'react'
import bg1 from '../images/bg_1.jpg';

const TopView = forwardRef((props,ref) => (
    <div ref={ref}>
      <div class="hero-wrap ftco-degree-bg" style={{backgroundImage: `url(${bg1})` }}data-stellar-background-ratio="0.5">
          <div class="overlay"></div>
          <div class="container">
            <div class="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
              <div class="col-lg-8">
                <div class="text text-center">
                  <h1 class="">Fast &amp; Easy Way To Rent A Car</h1>
                  <p style={{fontSize: "18px;"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
)

export default TopView
