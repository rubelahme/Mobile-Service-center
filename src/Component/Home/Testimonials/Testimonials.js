import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TestimonialsBody from "../TestimonialsBody/TestimonialsBody";
import "./Testimonials.css";

const Testimonials = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://infinite-sierra-60197.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  return (
    <section>
      <div className="container fonts p-5">
        <div className="pb-5 text-center">
          <h1 className="text-success fonts">Service Review All</h1>
        </div>
        <div className="row">
          {item.map((pd) => (
            <TestimonialsBody item={pd}></TestimonialsBody>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
