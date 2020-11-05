import React from "react";

const Poster = (props) => {
  const { offset, width } = props;
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

  return <img src={`${path}${poster_path}`} />;
};

export default Poster;
