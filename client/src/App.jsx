import "./App.css";
// import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BookingCar from "./pages/BookingCar";
import Payment from "./pages/Payment";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Success from "./pages/Success";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookingcar" element={<BookingCar />} />
          <Route
            path="/payment"
            element={
              <>
                <SignedIn>
                  <Payment />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route path="/success" element={<Success/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
