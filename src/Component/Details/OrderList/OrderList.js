import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createProvider } from "../../../App";
import OrderDetails from "../OrderDetails/OrderDetails";

const OrderList = () => {
  const [list, setList] = useState([]);
  const [user] = useContext(createProvider);
  useEffect(() => {
    fetch(
      `https://infinite-sierra-60197.herokuapp.com/order?email=${user.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        setList(result);
      });
  }, [user.email]);

  return (
    <div>
      <div className="container">
        <h1 className="p-5">Total Order: {list.length}</h1>
        <div className="row">
          {list.length === 0 && (
            <div>
              <h6 className="text-danger">
                Add Your Service first. After that you can see the list of your
                services.....
              </h6>
            </div>
          )}
          {list.map((pd) => (
            <OrderDetails list={pd} key={pd.email}></OrderDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
