import React, { useEffect, useState } from "react";
import "./AllOrderList.css";
const AllOrderList = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://infinite-sierra-60197.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  console.log(item);

  return (
    <div className="container">
      <h1 className="text-center p-1">All Order List</h1>
      <div className="row">
        <div className="col">
          <table class="table table-hover table-dark">
            <thead>
              <tr className="bg-primary">
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Service Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {item.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.displayName}</td>
                  <td>{data.email}</td>
                  <td>{data.name}</td>
                  <td>{data.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrderList;
