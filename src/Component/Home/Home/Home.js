import React from "react";
import ContactFrom from "../ContactFrom/ContactFrom";
import Footer from "../Footer/Footer";
import HomeSection from "../HomeSection/HomeSection";
import HomeService from "../HomeService/HomeService";
import Nabver from "../Nabver/Nabver";
import PhoneService from "../PhoneService/PhoneService";
import SarviceSafe from "../ServiceSafe/SarviceSafe";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Nabver></Nabver>
      <HomeSection></HomeSection>
      <HomeService></HomeService>
      <PhoneService></PhoneService>
      <SarviceSafe></SarviceSafe>
      <Testimonials></Testimonials>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  );
};

export default Home;
