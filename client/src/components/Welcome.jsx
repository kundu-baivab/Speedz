import React,{forwardRef} from 'react'
// import { Link } from "react-router-dom"
import about from '../images/about.jpg';

const Welcome = forwardRef((props,ref) => {
  return (
    <div ref={ref}>
      <section class="bg-light ftco-section ftco-about">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${about})`}}>
              </div>
              <div class="col-md-6 wrap-about ftco-animate">
                <div class="heading-section heading-section-white pl-md-5">
                  <span class="subheading">About us</span>
                  <h2 class="mb-4">Welcome to Speed</h2>

                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  {/* <p><Link to="#" class="btn btn-primary py-3 px-4">Search Vehicle</Link></p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
})

export default Welcome
