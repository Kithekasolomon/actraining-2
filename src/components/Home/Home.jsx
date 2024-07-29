import React from "react";
import Hero from "./Hero/Hero";
import Hblog from "./HBlog";
import Habout from "./Habout";
import AboutCard from "../About/AboutCard";
import Testimonal from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Habout />
      <Testimonal />
      <Hblog />
    </>
  );
};

export default Home;
