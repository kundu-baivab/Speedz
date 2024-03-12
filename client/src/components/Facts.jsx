import {useState} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Facts = () => {
    const [counton,setCount]=useState(false);
  return (
    <div>
      <ScrollTrigger onEnter={()=>setCount(true)} onExit={()=>setCount(false)}>
        {<section className="ftco-counter ftco-section img bg-light" id="section-counter">
                      <div className="overlay"></div>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                            <div className="block-18">
                              <div className="text text-border d-flex align-items-center">
                                <strong className="number">
                                  <CountUp start={0} end={60} duration={4} delay={0.5}></CountUp>
                                </strong>
                                <span className='detail'>Years <br/>Experience</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                            <div className="block-18">
                              <div className="text text-border d-flex align-items-center">
                                <strong className="number">
                                  <CountUp start={0} end={1090} duration={4} delay={0.5}></CountUp>
                                </strong>
                                <span className='detail'>Total <br/>Cars</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                            <div className="block-18">
                              <div className="text text-border d-flex align-items-center">
                                <strong className="number">
                                  <CountUp start={0} end={2590} duration={4} delay={0.5}></CountUp>
                                </strong>
                                <span className='detail'>Happy <br/>Customers</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                            <div className="block-18">
                              <div className="text d-flex align-items-center">
                                <strong className="number">
                                  <CountUp start={0} end={67} duration={4} delay={0.5}></CountUp>
                                </strong>
                                <span className='detail'>Total <br/>Branches</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>}
        </ScrollTrigger>
    </div>
  )
}

export default Facts
