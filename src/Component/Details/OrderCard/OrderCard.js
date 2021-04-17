import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyCheckoutForm from "../MyCheckoutForm/MyCheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51IeJAHKe9XTi9fW7i5oAvlb75daN9kviSt0u1lwYEXZ1Qvr9QaYS3IJXlO0PQO6pU8RWh9PFSXZdeWAr9Pu7Y9eo0049oxVyWd"
);

const OrderCard = ({ value }) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <MyCheckoutForm value={value} />
      </Elements>
    </div>
  );
};

export default OrderCard;
