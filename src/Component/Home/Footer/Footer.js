import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const oralHealth = [
    { name: "Emergency Phone Service", link: "/emergency" },
    { name: "Check Up", link: "/Service" },
    { name: " Personal Service", link: "/personal-treatment" },
    { name: "Phone Service", link: "/Phone Service" },
    { name: "Check Up", link: "/Service" },
  ];
  const services = [
    { name: "Emergency Phone Care", link: "/emergency" },
    { name: "Check Up", link: "/Service" },
    { name: " Personal Service", link: "/Phone Service" },
    { name: "Phone Service", link: "/Phone Service" },
    { name: "Check Up", link: "/Service" },
  ];
  return (
    <footer className="footer-area footer border mt-3 clear-both">
      <div className="container p-5 ">
        <div className="row ">
          <div className="col-md-4">
            <FooterCol key={2} menuTitle="Services" menuItems={services} />
          </div>
          <div className="col-md-4">
            <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} />
          </div>
          <div className="col-md-4">
            <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
              <ul className="social-media list-inline">
                <li className="list-inline-item">
                  <a href="//facebook.com">
                    <FontAwesomeIcon
                      className="icon active-icon"
                      icon={faFacebookF}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="//google.com">
                    <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="//instagram.com">
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <h6>Call now</h6>
                <button className="btn btn-primary">+2025550295</button>
              </div>
            </FooterCol>
          </div>
        </div>
        <div className="copyRight text-light text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
