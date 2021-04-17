import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ManageService = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch("http://localhost:5000/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center p-1">Manage Service</h1>
        <div className="row">
          <div className="col">
            <table className="table table-striped table-dark">
              <thead>
                <tr className="bg-primary">
                  <th scope="col">#</th>
                  <th scope="col">Service Item</th>
                  <th scope="col">Amount</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {item.map((data, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>${data.Amount}</td>
                    <td>
                      <button onClick={() => handleDelete(data._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
