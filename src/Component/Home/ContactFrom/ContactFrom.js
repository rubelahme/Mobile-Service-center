import React from "react";
import "./ContactFrom.css";
const ContactFrom = () => {
  return (
    <section>
      <div className="contact my-5">
        <div className="container fonts">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div>
                <h2 className="text-center pt-5 text-light">
                  Get The Latest Deals
                </h2>
                <p className="text-center  text-light">
                  and receive $20 coupon for first shopping
                </p>
                <div>
                  <form action="">
                    <input
                      className="form-control"
                      placeholder="Your Email Address"
                      type="email"
                      name=""
                      id=""
                    />
                    <br />
                    <input
                      type="submit"
                      className="form-control btn-warning"
                      value="Take  Coupon"
                    />
                    <br />
                    <input type="checkbox" name="" id="" />
                    <span className="text-light ml-2">
                      Enim quis fugiat consequat elit minim nisi eu occaecat
                      occaecat deserunt aliquip nisi ex deserunt.
                    </span>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;
