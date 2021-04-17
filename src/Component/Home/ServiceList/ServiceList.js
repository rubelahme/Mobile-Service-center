import React from "react";
import { useHistory } from "react-router";
import "./ServiceList.css";

const ServiceList = (props) => {
  const history = useHistory();
  const { name, Amount, details, img, _id } = props.item;
  const handleClick = (id) => {
    history.push("/details/" + id);
  };
  return (
    <div className="col-md-4 p-2 fonts">
      <div className="text-center  box border  p-3">
        <div className="menu-text">
          <div className="text-center">
            <img className="picture" src={img} alt="" />
          </div>
          <h4>{name}</h4>
          <p>{details}</p>
          <div className="row">
            <div className="col-sm-6">
              <h4>${Amount}</h4>
            </div>
            <div className="col-md-6">
              <div className="ml-auto">
                <button
                  className="btn btn-success"
                  onClick={() => handleClick(_id)}
                >
                  Add service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
