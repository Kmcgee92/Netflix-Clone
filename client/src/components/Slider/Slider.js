import React, { useState } from "react";
import "../../scss/slider.scss";

const Slider = () => {
  const array = [
    <div className="imgParent">
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/profilePic.jpg"
      />
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/chicago-fire.jpg"
      />

      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/profilePic.jpg"
      />
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/chicago-fire.jpg"
      />
    </div>,
    <div className="imgParent">
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/profilePic.jpg"
      />
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/chicago-fire.jpg"
      />

      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/profilePic.jpg"
      />
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/chicago-fire.jpg"
      />
    </div>,
    <div className="imgParent">
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/profilePic.jpg"
      />
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/chicago-fire.jpg"
      />

      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/profilePic.jpg"
      />
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/chicago-fire.jpg"
      />
    </div>,
    <div className="imgParent">
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/profilePic.jpg"
      />
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/chicago-fire.jpg"
      />

      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/profilePic.jpg"
      />
      <img
        className="imgChild"
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/chicago-fire.jpg"
      />
    </div>,
  ];
  const [offset, setOffset] = useState(0);

  const goLeft = () => {
    offset === 0
      ? setOffset(-100 * (array.length - 1))
      : setOffset((x) => x + 100);
  };
  const goRight = () => {
    console.log(offset);
    offset === -100 * (array.length - 1)
      ? setOffset(0)
      : setOffset((x) => x - 100);
  };
  return (
    <div className="slider">
      {array.map((el, i) => (
        <div
          key={i}
          className="slide"
          style={{ transform: `translate(${offset}%)` }}
        >
          {el}
        </div>
      ))}
      <button id="goLeft" onClick={goLeft}>
        left
      </button>
      <button id="goRight" onClick={goRight}>
        right
      </button>
    </div>
  );
};

export default Slider;
