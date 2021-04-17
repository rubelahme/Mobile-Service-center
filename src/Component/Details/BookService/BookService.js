import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import OrderCard from "../OrderCard/OrderCard";
import { useContext } from "react";
import { createProvider } from "../../../App";
const BookService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user] = useContext(createProvider);
  const { id } = useParams();
  const [Add, setAdd] = useState([]);
  useEffect(() => {
    fetch("https://infinite-sierra-60197.herokuapp.com/users/" + id)
      .then((res) => res.json())
      .then((result) => {
        setAdd(result);
      });
  }, [id]);

  const value = {
    displayName: user.displayName,
    email: user.email,
    amount: Add.Amount,
    name: Add.name,
    img: Add.img,
  };

  const onSubmit = (data) => {};

  return (
    <div>
      <div className="container">
        <h1 className=" p-5 text-success">Service Add</h1>
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">User Name:</label>
              <input
                className="form-control"
                type="text"
                defaultValue={user.displayName}
                {...register("name")}
              />
              <label htmlFor="">Your broken mobile name:</label>
              <input
                className="form-control"
                type="text"
                defaultValue={Add.name}
                {...register("details", { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <label htmlFor="">Your Email</label>
              <input
                className="form-control"
                type="email"
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <p className="text-danger">
                Your service amount total ${Add.Amount}
              </p>
            </form>
            <div>
              <OrderCard value={value}></OrderCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
