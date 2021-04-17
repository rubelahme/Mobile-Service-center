import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ServiceList from "../ServiceList/ServiceList";

const HomeService = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://infinite-sierra-60197.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="p-5">
              <h1 className="text-success text-center py-2 fonts">
                Phone Service
              </h1>
              <h5 className="fonts menu-text ">
                All types of mobile services are provided. If any of the
                following mobiles are damaged, then apply for the following
                services...
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          {item.map((pd) => (
            <ServiceList item={pd}></ServiceList>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeService;
