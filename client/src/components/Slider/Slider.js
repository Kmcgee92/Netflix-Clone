import React, { useState } from "react";

// styles
import styles from "../../scss/slider.module.scss";

// mui
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


const Slider = (props) => {
  const {
    title,
  }= props;
  
  const array = [
    
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
    <>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.container}>
      {array.map((el, i) => (
        <div
          key={i}
          className={styles.poster}
          style={{ transform: `translate(${offset}%)` }}
        >
          {el}
        </div>
      ))}
      <button id={styles.goLeft} onClick={goLeft}>
        <ArrowBackIosIcon  />
      </button>
      <button id={styles.goRight} onClick={goRight}>
        <ArrowForwardIosIcon  />
      </button>
    </div>
    </>
  );
};

export default Slider;
