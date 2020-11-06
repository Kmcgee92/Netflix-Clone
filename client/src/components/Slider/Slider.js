import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
//components
import Poster from '../Poster/Poster'
// styles
import styles from "../../scss/slider.module.scss";

// mui
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


const Slider = (props) => {
  const { title, url, width } = props;

  const [offset, setOffset] = useState(0);
  const [fetched, setFetched] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

  //request all movies for this slider
  useEffect(() => {
    const retriever = async () => {
      const res = await fetch(`/api/TMDB/${url}`);
      if (res.ok) {
        const data = await res.json();
        setFetched(([]) => [...data.results]);
      }
    };
    retriever();
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

    const opts = {
      width: "100%",
      height: "200px",
      playerVars: {
        autoplay: 1,
      },
    };

    const handleTrailer = (movie) => {
      let extracted;
      if(movie.name !== undefined){
        extracted = movie.name
      }else if (movie.original_name!== undefined){
        extracted = movie.original_name
      }else if (movie.title !== undefined){
        extracted = movie.title
      }else if (movie.original_title !== undefined){
        extracted = movie.original_title
      }
      let data = extracted
      if(extracted.includes(" ")){
        data = extracted.split(" ")
        if (data[0].toLowerCase() == "the"){
          data = data[1] 
        }else{
          data = data[0]
        }
      }
      if (trailerUrl) {
        setTrailerUrl("");
      }
      movieTrailer(
        data,
        { multi: true } || "https://www.youtube.com/watch?v=eW7Twd85m2g"
      )
        .then((url) => {
          let urlParams;
          if (url[1]) {
            urlParams = new URLSearchParams(new URL(url[1]).search);
          } else {
            urlParams = new URLSearchParams(new URL(url[0]).search);
          }
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
      setTrailerUrl(true);
    };
      
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {fetched.map((object, i) => (
          <Poster 
              handleTrailer={handleTrailer}
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
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </>
  );
};;

export default Slider;

