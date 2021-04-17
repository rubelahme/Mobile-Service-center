import React from "react";
import phone from "../../../img/phoneimg.png";
import "./PhoneService.css";
const PhoneService = () => {
  return (
    <section>
      <div className="container fonts">
        <h1 className="py-5 text-center text-success">
          Phone History Wikipedia
        </h1>
        <div className="row">
          <div className="col-md-6 py-2">
            <img src={phone} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6">
            <p className=" text text-justify menu-text ">
              The Mobile Telephone Service was one of the earliest mobile
              telephone standards. It was operator assisted in both directions,
              meaning that if one were called from a land line the call would be
              routed to a mobile operator, who would route it to one's phone.
              Similarly, to make an outbound call one had to go through the
              mobile operator, who would ask for the mobile number and the
              number to be called, and would then place the call.
            </p>
            <p className=" text text-justify menu-text ">
              This service originated with the Bell System, and was first used
              in St. Louis on June 17, 1946. The original equipment weighed 80
              pounds (36 kg), and there were initially only 3 channels for all
              the users in the metropolitan area, later more licenses were added
              bringing the total to 32 channels across 3 bands.This service was
              used at least into the 1980s in large portions of North
              America.[1] On October 2, 1946, Motorola communications equipment
              carried the first calls on Illinois Bell Telephone Company's new
              car radiotelephone service in Chicago.[2][3] Due to the small
              number of radio frequencies available, the service quickly reached
              capacity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneService;
