import React from "react";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <div>
      <h6 className="text-success fonts">
        {props.menuTitle ? props.menuTitle : " "}
      </h6>
      <ul className="list-unstyled mt-4 fonts">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="text-secondary fonts ">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
