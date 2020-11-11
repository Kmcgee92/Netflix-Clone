import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//redux
import {useSelector, useDispatch} from 'react-redux'

//styles
import styles from '../../scss/poster.module.scss'

//mui
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { addObjectToWatchlist } from "../../Redux/actions/watchlistActions";

const Poster = (props) => {
  const userId = useSelector((state) => state.auth.id);
  const watchlist = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();
  const history = useHistory();

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

  const [inWatchlist, setInWatchlist] = useState(false);

  const handleAddToWatchList = () => {
    setInWatchlist(true);
    dispatch(addObjectToWatchlist(userId, props.object));
  };
  const managePosterClick = () => {
    handleTrailer(props.object);
  };
  useEffect(()=>{
    if(watchlist.length > 0){
      watchlist.forEach((title)  => {
        if (title.tmdb_id == id)  {
          setInWatchlist(true);
        }
      });
      return () => ""
    }
  },[watchlist])

  return (
    <>
      <div style={{ transform: `translate(${offset}%)` }} className={classProp}>
        {poster && (
          <div className={styles.container}>
            <img onClick={managePosterClick} src={`${path}${poster_path}`} />
            <div className={styles.posterOverlay}>
              {inWatchlist ? (
                <div
                  onClick={()=> history.push('/watchlist')}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  In Watchlist
                </div>
              ) : (
                <div onClick={handleAddToWatchList}>
                  <AddCircleOutlineIcon />
                </div>
              )}
              <div>Details</div>
            </div>
          </div>
        )}
        {backdrop && (
          <div className={styles.container}>
            <img onClick={managePosterClick} src={`${path}${backdrop_path}`} />
            <div className={styles.posterOverlay}>
              {inWatchlist ? (
                <div
                  onClick={() => history.push("/watchlist")}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  In Watchlist
                </div>
              ) : (
                <div onClick={handleAddToWatchList}>
                  <AddCircleOutlineIcon />
                </div>
              )}
              <div>Details</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Poster;
