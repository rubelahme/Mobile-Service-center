import React from "react";

const OrderDetails = (props) => {
  const { name, img, amount, details } = props.list;
  return (
    <div className="col-md-6 p-2">
      <div className="border p-3 text-center box text-dark">
        <div className="text-center">
          <img src={img} className="picture" alt="" />
        </div>
        <h2>{name}</h2>
        <h6>{details}</h6>
        <p>
          <span>Total Amount: ${amount}</span>
        </p>
        <div>
          <button className="btn btn-warning">Check</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
