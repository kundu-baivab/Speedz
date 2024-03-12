import React from 'react'
import "../../CssFiles/style.css";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            SP<span>EEDZ</span>
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button> */}
          <header className='pr-5'>
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {/* <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto align-items-center">
                <li className="nav-item"><Link className="nav-link">History</Link></li>
                <li className="nav-item"><Link className="nav-link">Help</Link></li>
                
              </ul>
            </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
