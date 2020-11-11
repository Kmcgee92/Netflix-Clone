import React, { useState, useEffect } from "react";

//redux
import {useSelector, useDispatch} from 'react-redux'
import {addObjectToHistory} from '../../Redux/actions/historyActions'

//components
import Poster from '../Poster/Poster'
//trailer components
import Youtube from "react-youtube";
import { firstAttempt } from "./movieFetch";
// styles
import styles from "../../scss/slider.module.scss";
// mui
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


const Slider = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const {
    title,
    url,
    width,
    backdrop,
    tall,
    small,
    translated,
    poster,
  } = props;

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
    offset > 0
      ? setOffset(-100 * (fetched.length - 8))
      : setOffset((x) => x + 100);
  };
  const goRight = () => {
    offset === -100 * (fetched.length - 8)
      ? setOffset(0)
      : setOffset((x) => x - 100);
  };

  const opts = {
    width: "100%",
    height: "400px",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleTrailer = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }
    await firstAttempt(movie, setTrailerUrl);
    dispatch(addObjectToHistory(auth.id, movie));
  };

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {fetched.map((object, i) => (
          <Poster
            classProp={styles.poster}
            handleTrailer={handleTrailer}
            object={object}
            key={i}
            offset={offset}
            width={width}
            poster={poster}
            backdrop={backdrop}
            tall={tall}
            small={small}
            translated={translated}
          />
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
};

export default Slider;

