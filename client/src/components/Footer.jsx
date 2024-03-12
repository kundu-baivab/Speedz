import React,{forwardRef} from 'react'
import { Link } from "react-router-dom"
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = forwardRef((props,ref) => {
  // displayName: 'Footer',
  return (
    <div ref={ref}>
      <footer class="ftco-footer ftco-bg-dark ftco-section">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2"><Link to="#" class="logo">SP<span>EED</span></Link></h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <ul class="ftco-footer-social align-items-center list-unstyled mt-5">
                    <li class="animate"><Link to="#"><CiTwitter/></Link></li>
                    <li class="animate"><Link to="#"><LuFacebook/></Link></li>
                    <li class="animate"><Link to="#"><FaSquareInstagram/></Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-md">
                <div class="ftco-footer-widget mb-4 ml-md-5">
                  <h2 class="ftco-heading-2">Information</h2>
                  <ul class="list-unstyled">
                    <li><Link to="#" class="py-2 d-block">About</Link></li>
                    <li><Link to="#" class="py-2 d-block">Services</Link></li>
                    <li><Link to="#" class="py-2 d-block">Term and Conditions</Link></li>
                    <li><Link to="#" class="py-2 d-block">Best Price Guarantee</Link></li>
                    <li><Link to="#" class="py-2 d-block">Privacy &amp; Cookies Policy</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-md">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Customer Support</h2>
                  <ul class="list-unstyled">
                    <li><Link to="#" class="py-2 d-block">FAQ</Link></li>
                    <li><Link to="#" class="py-2 d-block">Payment Option</Link></li>
                    <li><Link to="#" class="py-2 d-block">Booking Tips</Link></li>
                    <li><Link to="#" class="py-2 d-block">How it works</Link></li>
                    <li><Link to="#" class="py-2 d-block">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-md">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Have a Questions?</h2>
                  <div class="block-23 mb-3">
                    <ul>
                      <li className='px-4'><IoLocationOutline className='animate'/>
                        <span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                      </li>
                      <li className='px-4'><IoCallOutline className='animate mr-2'/>
                        <span class="text">+2 392 3929 210</span>
                      </li>
                      <li className='px-4'><MdOutlineEmail className='animate mr-2'/>
                        <span class="text">info@yourdomain.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center">

                <p className='footplate mb-2'>
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Developer - Baivab Kundu 
                </p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
})

export default Footer
