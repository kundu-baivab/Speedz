import React,{forwardRef} from 'react'
import { Link } from "react-router-dom"
import { FaRoute } from "react-icons/fa";
import { PiHandshake } from "react-icons/pi";
import { MdOutlineCarRental } from "react-icons/md";

const Form = forwardRef((props,fref) => (
    <div ref={fref}>
      <section class="bg-light">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-md-12	featured-top">
                <div class="align-items-center">
                  {/* <div class="col-md-4 d-flex align-items-center">
                    <form action="#" class="request-form bg-primary">
                      <h2>Make your trip</h2>
                      <div class="form-group">
                        <label for="" class="label">Pick-up location</label>
                        <input type="text" class="form-control" placeholder="City, Airport, Station, etc"/>
                      </div>
                      <div class="form-group">
                        <label for="" class="label">Drop-off location</label>
                        <input type="text" class="form-control" placeholder="City, Airport, Station, etc"/>
                      </div>
                      <div class="d-flex">
                        <div class="form-group">
                          <label for="" class="label">Pick-up date</label>
                          <input type="text" class="form-control" id="book_pick_date" placeholder="Date"/>
                        </div>
                        <div class="form-group">
                          <label for="" class="label">Drop-off date</label>
                          <input type="text" class="form-control" id="book_off_date" placeholder="Date"/>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="" class="label">Pick-up time</label>
                        <input type="text" class="form-control" id="time_pick" placeholder="Time"/>
                      </div>
                      <div class="form-group">
                        <input type="submit" value="Rent A Car Now" class="btn btn-secondary py-3 px-4"/>
                      </div>
                    </form>
                  </div> */}
                  <div class="services align-items-center">
                    <div class="services-wrap rounded-right w-100">
                      <h3 class="heading-section mb-4">Better Way to Rent Your Perfect Cars</h3>
                      <div class="row d-flex mb-4">
                        <div class="col-md-4 d-flex align-self-stretch ftco-animate">
                          <div class="services w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                              <FaRoute className='icon-route' />
                            </div>
                            <div class="text w-100">
                              <h3 class="heading mb-2">Choose Your Pickup Location</h3>
                            </div>
                          </div>      
                        </div>
                        <div class="col-md-4 d-flex align-self-stretch ftco-animate">
                          <div class="services w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                              <PiHandshake className='icon-handshake' />
                            </div>
                            <div class="text w-100">
                              <h3 class="heading mb-2">Select the Best Deal</h3>
                            </div>
                          </div>      
                        </div>
                        <div class="col-md-4 d-flex align-self-stretch ftco-animate">
                          <div class="services w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                              <MdOutlineCarRental className='icon-rent' />
                            </div>
                            <div class="text w-100">
                              <h3 class="heading mb-2">Reserve Your Rental Car</h3>
                            </div>
                          </div>      
                        </div>
                      </div>
                      <p>
                        <Link to="/bookingcar" class="btn btn-primary py-3 px-4">Reserve Your Perfect Car</Link>
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
)

export default Form
