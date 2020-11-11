import React, { useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchlist } from "../../Redux/actions/watchlistActions";

//components
import BrowseHeader from "../Browse/BrowseHeader";
import Poster from "../Poster/Poster";
//styles
import styles from "../../scss/watchlist.module.scss";
const Watchlist = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);
  const userId = useSelector((state) => state.auth.id);
  const path = `https://image.tmdb.org/t/p/w300`;

  const handleDetails = (movie) => {
    console.log(movie);
  };

  useEffect(() => {
    return () => "";
  });
  return (
    <>
      <BrowseHeader />
      <div className={styles.historyWrapper}>
        <div className={styles.header}>
          <h2>WatchList</h2>
        </div>
        <section>
          {watchlist.length > 0
            ? watchlist.map((movie, i) => (
                <div key={i} className={styles.container}>
                  <div className={styles.poster}>
                    <div className={styles.posterOverlay}>
                      <div
                        onClick={() =>
                          dispatch(removeFromWatchlist(userId, movie.id))
                        }
                      >
                        Remove
                      </div>
                      <div onClick={() => handleDetails(movie)}>details</div>
                    </div>
                    <img src={`${path}${movie.poster}`} />
                  </div>
                </div>
              ))
            : null}
        </section>
      </div>
    </>
  );
};

export default Watchlist;
