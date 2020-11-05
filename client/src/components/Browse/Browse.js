import React from "react";

//core components
import Slider from "../Slider/Slider";
import Header from "../Header/Header";

const Browse = () => {
  return (
    <div>
      <Header />
      {/* banner */}
      <Slider title={"Nexflix-Originals"} />
      <Slider title={"Trending Now"} />
      <Slider title={"Top Rated"} />
      <Slider title={"Action Movies"} />
      <Slider title={"Comedy"} />
      <Slider title={"Horrow Films"} />
      <Slider title={"Romance"} />
      <Slider title={"Fantasy"} />
      {/* sliders */}
      {/* footer 30% of vh */}
    </div>
  );
};

export default Browse;


// nexflix-originals
// trending

// action-movies
// comedy-movies
// horror-movies
// romance-movies
// fantasy

