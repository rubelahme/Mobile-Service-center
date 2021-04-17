import React from "react";
import { Link } from "react-router-dom";
import phone from "../../../img/Phone.png";

const HomeSection = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="pt-5 mt-3">
            <h2 className="text-success fonts">Phone Service center</h2>
            <h5 className=" fonts menu-text">
              My store name is Ma Store. You will get all the Daran mobile
              services from my shop. All Daran mobile services are done in my
              shop. You will also get all Daran mobile recharges. And you will
              be able to buy new mobiles.
            </h5>
            <div className="py-2 ">
              <Link to={"/more"}>
                <button className="btn btn-success fonts">More Read...</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <img src={phone} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
