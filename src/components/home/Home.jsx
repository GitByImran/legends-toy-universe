import React from "react";
import Banner from "./contents/Banner";
import Gallery from "./contents/Gallery";
import Shop from "./contents/Shop";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const toyData = useLoaderData();

  return (
    <div>
      <Banner />
      <Gallery />

      <Shop toyData={toyData} />
    </div>
  );
};

export default Home;
