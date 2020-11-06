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
        title={"Trending Now"}
        url={"trending"}
        width={200}
        poster={true}
        backdrop={false}
        tall={true}
        />
      <Slider
        title={"Top Rated"}
        url={"top-rated"}
        width={200}
        poster={true}
        backdrop={false}
        tall={true}
        />
      <Slider
        title={"Nexflix-Originals"}
        url={"/nexflix-originals"}
        width={400}
        poster={true}
        tall={true}
        />
      <Slider
        title={"Action Movies"}
        url={"action-movies"}
        width={400}
        backdrop={true}
        tall={true}
        />
      <Slider
        title={"Comedy"}
        url={"comedy-movies"}
        width={400}
        backdrop={true}
        tall={true}
        />
      <Slider
        title={"Horrow Films"}
        url={"horror-movies"}
        width={400}
        backdrop
        tall={true}
        />
      <Slider
        title={"Romance"}
        url={"romance-movies"}
        width={400}
        backdrop={true}
        tall={true}
        />
      <Slider
        title={"Fantasy"}
        url={"fantasy"}
        width={400}
        backdrop={false}
        poster={true}
        tall={true}
        />
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

