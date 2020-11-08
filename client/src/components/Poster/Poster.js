import React, { useState, useEffect } from "react";

//styles
import styles from '../../scss/poster.module.scss'

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

  const managePosterClick = () => {
    handleTrailer(props.object)
  }


  return (
    <>
      <div
        style={{ transform: `translate(${offset}%)` }}
        className={classProp}
      >
        {poster && (
          <img
            onClick={managePosterClick}
            src={`${path}${poster_path}`}
          />
        )}
        {backdrop && (
          <img
            onClick={managePosterClick}
            src={`${path}${backdrop_path}`}
          />
        )}
      </div>
    </>
  );
};

export default Poster;
