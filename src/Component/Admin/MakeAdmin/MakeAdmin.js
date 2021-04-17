import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const value = {
      email: data.email,
    };
    fetch("https://infinite-sierra-60197.herokuapp.com/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Add your Service");
        }
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3>Make Admin</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <input
                className="form-control bg-warning"
                type="submit"
                value="Admin"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
