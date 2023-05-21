import React from "react";
import Banner from "./contents/Banner";
import Gallery from "./contents/Gallery";
import Shop from "./contents/Shop";
import { useLoaderData } from "react-router-dom";
import TestimonialSection from "./contents/TestimonialSection";
import FeaturedToysSection from "./contents/FeaturedToysSection";

const Home = () => {
  const toyData = useLoaderData();

  return (
    <div>
      <Banner />
      <Gallery />
      <Shop toyData={toyData} />
      <FeaturedToysSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
