import React from "react";

const TestimonialsBody = (props) => {
  const { name, product, details } = props.item;
  return (
    <div className="col-md-4 p-2">
      <div className="text-center box  border p-3 text-success">
        <h3>{name}</h3>
        <h5>{product}</h5>
        <h6>{details}</h6>
      </div>
    </div>
  );
};

export default TestimonialsBody;
