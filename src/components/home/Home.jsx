import React, { useEffect } from "react";
import Banner from "./contents/Banner";
import Gallery from "./contents/Gallery";
import Shop from "./contents/Shop";
import { useLoaderData } from "react-router-dom";
import TestimonialSection from "./contents/TestimonialSection";
import FeaturedToysSection from "./contents/FeaturedToysSection";
import ChangeTitle from "../../ChangeTitle";

const Home = () => {
  const toyData = useLoaderData();

  return (
    <div>
      <ChangeTitle />
      <Banner />
      <Gallery />
      <Shop toyData={toyData} />
      <FeaturedToysSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
