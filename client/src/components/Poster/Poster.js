import React, { useState, useEffect } from "react";

//styles
import styles from '../../scss/poster.module.scss'

//mui
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Poster = (props) => {
  const {
    poster,
    backdrop,
    tall,
    small,
    translated,
    offset,
    width,
    handleTrailer,
    classProp,
  } = props;
  const path = `https://image.tmdb.org/t/p/w${width}`;
  const {
    adult,
    backdrop_path,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = props.object;

  const handleAddToWatchList = () => {
    console.log("lets go!");
  };
  const managePosterClick = () => {
    handleTrailer(props.object)
  }


  return (
    <>
      <div style={{ transform: `translate(${offset}%)` }} className={classProp}>
        {poster && (
          <div className={styles.container}>
            <img onClick={managePosterClick} src={`${path}${poster_path}`} />
            <div className={styles.posterOverlay}>
              <div onClick={handleAddToWatchList}>
                <AddCircleOutlineIcon />
              </div>
              <div>Details</div>
            </div>
          </div>
        )}
        {backdrop && (
          <div className={styles.container}>
            <img onClick={managePosterClick} src={`${path}${backdrop_path}`} />
            <div className={styles.posterOverlay}>
              <div onClick={handleAddToWatchList}>
                <AddCircleOutlineIcon />
              </div>
              <div>Details</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Poster;
