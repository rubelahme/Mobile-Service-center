import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [img, setImage] = useState(null);

  const onSubmit = (data) => {
    let eventData = {
      name: data.name,
      details: data.details,
      Amount: data.Amount,
      img: img,
    };
    fetch("https://infinite-sierra-60197.herokuapp.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Add your Service");
        }
      });
  };

  const handleImg = (e) => {
    const imageData = new FormData();
    imageData.set("key", "3b61f7918dc1a39c2999937d1c16a97d");
    imageData.append("image", e.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", imageData).then((data) => {
      setImage(data.data.data.url);
    });
  };

  return (
    <div>
      <h1 className="pb-3 text-info fonts">Add Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="" className="fonts">
          Service Title
        </label>
        <input className="form-control" type="text" {...register("name")} />
        <label htmlFor="" className="fonts">
          Details
        </label>
        <input
          className="form-control"
          type="text"
          {...register("details", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <label htmlFor="" className="fonts">
          Amount
        </label>
        <input
          className="form-control"
          type="number"
          {...register("Amount", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <label htmlFor="" className="fonts">
          image
        </label>
        <br />
        <input type="file" {...register("file")} onBlur={handleImg} />
        <br />
        <br />
        <input
          className="w-25 btn btn-success fonts"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddService;
