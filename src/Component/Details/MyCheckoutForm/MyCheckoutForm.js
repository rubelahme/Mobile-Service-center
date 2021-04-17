import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = ({ value }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod, value);
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...value, paymentMethod }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            alert("Order success...");
          }
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <br />
      <button type="submit" className="btn btn-warning w-25" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
