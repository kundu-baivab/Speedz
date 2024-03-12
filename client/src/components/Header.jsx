import { useRef } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import Featured from "./Featured";
import Welcome from "./Welcome";
import Options from "./Options";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import TopView from "./TopView";
import Facts from "./Facts";

const Header = () => {
  const topRef = useRef(null);
  const carRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementref) => {
    if (elementref && elementref.current) {
      window.scrollTo({
        top: elementref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            SP<span>EEDZ</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  onClick={() => scrollToSection(topRef)}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => scrollToSection(carRef)}
                  className="nav-link"
                >
                  Cars
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => scrollToSection(aboutRef)}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => scrollToSection(servicesRef)}
                  className="nav-link"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => scrollToSection(testimonialRef)}
                  className="nav-link"
                >
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => scrollToSection(contactRef)}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <TopView ref={topRef} />
      <Form />
      <Featured ref={carRef} />
      <Welcome ref={aboutRef} />
      <Options ref={servicesRef} />
      <Facts />
      <Testimonial ref={testimonialRef} />
      <Footer ref={contactRef} />
    </div>
  );
};

export default Header;
