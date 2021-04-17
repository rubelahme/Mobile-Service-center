import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TestimonialsBody from "../TestimonialsBody/TestimonialsBody";

const Testimonials = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  return (
    <div className="container p-5">
      <div className="pb-5 text-center">
        <h1 className="text-success">Service Review All</h1>
      </div>
      <div className="row">
        {item.map((pd) => (
          <TestimonialsBody item={pd}></TestimonialsBody>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
