import React, { useState, useEffect } from "react";



const Poster = (props) => {
  const { offset, width, handleTrailer } = props;
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

  return (
    <>
      <div>
        <img
          onClick={() => handleTrailer(props.object)}
          src={`${path}${poster_path}`}
        />
      </div>
    </>
  );
};

export default Poster;
