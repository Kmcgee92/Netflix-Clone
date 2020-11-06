import React from "react";

//core components
import Slider from "../Slider/Slider";
import BrowseHeader from "./BrowseHeader";
import BrowseBanner from "./BrowseBanner";

const Browse = () => {
  return (
    <div>
      <BrowseHeader />
      <BrowseBanner />
      <Slider
        title={"Nexflix-Originals"}
        url={"/nexflix-originals"}
        width={400}
      />
      <Slider title={"Trending Now"} url={"trending"} width={400} />
      <Slider title={"Top Rated"} url={"top-rated"} width={400} />
      <Slider title={"Action Movies"} url={"action-movies"} width={400} />
      <Slider title={"Comedy"} url={"comedy-movies"} width={400} />
      <Slider title={"Horrow Films"} url={"horror-movies"} width={400} />
      <Slider title={"Romance"} url={"romance-movies"} width={400} />
      <Slider title={"Fantasy"} url={"fantasy"} width={400} />
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

