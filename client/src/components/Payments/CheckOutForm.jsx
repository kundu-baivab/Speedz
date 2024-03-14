import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useClerk } from "@clerk/clerk-react";
import {useState} from 'react';

const CheckOutForm = ({amount}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useClerk();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) return;

    const { error: submitError } = await elements.submit();

    if (submitError) {
      return;
    }

    setIsLoading(true);


    const res = await fetch(`https://speedz.onrender.com/payment`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
      },
      body: JSON.stringify({ 
        amount: amount,
        name:`${user.firstName} ${user.lastName}`,
        email:user.emailAddresses[0].emailAddress,
       }),
    });

    const {client_secret:clientSecret}= await res.json()

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });

    const { error } = await stripe.confirmPayment({
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/success", 
      },
      // redirect:'if_required',
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    console.log(error)

    setIsLoading(false);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 ">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <button
          className="mt-2 d-flex justify-content-center w-100 pay-btn"
          type="submit"
          disabled={isLoading || !stripe || !elements}
        >
          <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
        </button>
        {/* {message && <div id="payment-message">{message}</div>} */}
      </form>
    </div>
  );
};

export default CheckOutForm;
