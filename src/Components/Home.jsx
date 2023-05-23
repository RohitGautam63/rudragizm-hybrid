import React from "react";
import CarouselFadeExample from "./CarouselFadeExample";
import About from "./About";
import Footer from "./Footer";
import Intro from "./Intro";
import "./companyabout.css";
const Home = () => {
  return (
    <>
      <Intro />
      <CarouselFadeExample />
      
      <About />
      <Footer />
    </>
  );
};
export default Home;
