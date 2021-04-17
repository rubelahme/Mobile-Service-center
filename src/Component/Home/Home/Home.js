import React from "react";
import Footer from "../Footer/Footer";
import HomeSection from "../HomeSection/HomeSection";
import HomeService from "../HomeService/HomeService";
import Nabver from "../Nabver/Nabver";
import PhoneService from "../PhoneService/PhoneService";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Nabver></Nabver>
      <HomeSection></HomeSection>
      <HomeService></HomeService>
      <PhoneService></PhoneService>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
