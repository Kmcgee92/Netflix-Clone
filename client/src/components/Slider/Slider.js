import React, { useState } from "react";
import "../../scss/slider.scss";

const Slider = () => {
  const array = [1, 2, 3, 4, 5];
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
