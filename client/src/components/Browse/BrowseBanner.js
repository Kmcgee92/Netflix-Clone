import React, { useState } from "react";
import Youtube from "react-youtube";
//styles
import styles from "../../scss/browseBanner.module.scss";
const BrowseBanner = () => {
  const [video, setVideo] = useState([]);
  const opts = {
    width: "100%",
    height: "800",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      <div className={styles.header}>
        {/* background image */}
        {/* title */}
        {/* div > 2 buttons */}
        {/* description */}
        <div className={styles.placeholder}>
          {/* <Youtube videoId={"JTHWAQG6Gxw"} opts={opts} /> */}
        </div>
        <div className={styles.bannershadow} />
      </div>
    </>
  );
};

export default BrowseBanner;

// {
//       "id": 738646,
//       "video": false,
//       "vote_count": 2,
//       "vote_average": 8,
//       "title": "Operation Christmas Drop",
//       "release_date": "2020-11-05",
//       "original_language": "en",
//       "original_title": "Operation Christmas Drop",
//       "genre_ids": [
//         35,
//         10751,
//         10749
//       ],
//       "backdrop_path": "/q9ZLjqti3UTt5ZC3qQMZhRNueGc.jpg",
//       "adult": false,
//       "overview": "While gathering evidence to support closing a tropical U.S. Air Force base, a congressional aide warms to its generous captain.",
//       "poster_path": "/1fUcKFDy58DhWYd5Y7Nu5DgpxaE.jpg",
//       "popularity": 40.968,
//       "media_type": "movie"
//     },
