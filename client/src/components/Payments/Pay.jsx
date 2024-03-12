import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useClerk } from "@clerk/clerk-react";
import Lottie from 'lottie-react'
import ani from '../../payment animation.json'
import { useSearchParams } from "react-router-dom";

const Pay = () => {
  const [searchParam] =useSearchParams();
  const amount=searchParam.get('amount');

  const { user } = useClerk();

  const Stripe_Publishable_Key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

  const stripePromise = loadStripe(Stripe_Publishable_Key);

  const options = {
    mode: "payment",
    amount: Math.round(amount),
    currency: "inr",
  };

  return (
    <div className="w-100">
      <div className="paydiv d-flex justify-content-center align-items-center w-100">
        <Lottie
        animationData={ani} className="m-2" style={{width:'300px',height:'1000px'}}></Lottie>
        <p className="payhead">Welcome {user.firstName}</p>
      </div>
      <Elements stripe={stripePromise} options={options}>
        <CheckOutForm amount={amount} />
      </Elements>
    </div>
  );
};

export default Pay;
