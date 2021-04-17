import React from "react";
import { useForm } from "react-hook-form";
import "./Review.css";

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      product: data.product,
      details: data.details,
    };
    fetch("https://infinite-sierra-60197.herokuapp.com/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("your review success");
        }
      });
  };

  return (
    <div className="container bg-success p-5">
      <h1>Review</h1>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Full Name"
              className="form-control"
              type="text"
              {...register("name")}
            />
            <br />
            <input
              type="text"
              placeholder="Company Name"
              className="form-control"
              {...register("product")}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <br />

            <input
              placeholder="Description"
              className="form-control details"
              type="text"
              {...register("details")}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
