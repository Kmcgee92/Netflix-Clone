import React, { useState, useEffect } from "react";

//components
import Poster from '../Poster/Poster'
// styles
import styles from "../../scss/slider.module.scss";

// mui
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


const Slider = (props) => {
  const { 
    title,
    url,
    width
  } = props;

  const [offset, setOffset] = useState(0);
  const [fetched, setFetched] = useState([]);

  //request all movies for this slider
  useEffect(() => {
    const retriever = async () => {
      const res = await fetch(`/api/TMDB/${url}`)
      if(res.ok){
        const data = await res.json()
        setFetched(([])=>[...data.results])
      }
    }
    retriever()
    
  }, [url]);

  const goLeft = () => {
    offset === 0
      ? setOffset(-100 * (fetched.length - 1))
      : setOffset((x) => x + 100);
  };
  const goRight = () => {
    offset === -100 * (fetched.length - 1)
      ? setOffset(0)
      : setOffset((x) => x - 100);
  };
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {fetched.map((object, i) => (
          <Poster
            object={object}
            key={i}
            offset={offset}
            width={width}

          />
          // <div
          //   key={i}
          //   className={styles.poster}
          //   style={{ transform: `translate(${offset}%)` }}
          // >
          //   {el}
          // </div>
        ))}
        <button id={styles.goLeft} onClick={goLeft}>
          <ArrowBackIosIcon />
        </button>
        <button id={styles.goRight} onClick={goRight}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
};

export default Slider;
