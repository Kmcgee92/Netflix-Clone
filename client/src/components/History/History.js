import React, { useState } from "react";

//redux
import {useSelector, useDispatch} from 'react-redux'

//components
import BrowseHeader from '../Browse/BrowseHeader'
import Poster from '../Poster/Poster'
//styles
import styles from "../../scss/history.module.scss";
const History = () => {
  const history = useSelector((state) => state.history);
  console.log("inside history", history);
    const path = `https://image.tmdb.org/t/p/w400`;
  return (
    <>
      <BrowseHeader />
      <div className={styles.historyWrapper}>
        <div className={styles.header}>
          <h2>History</h2>
          <div>Clear History</div>
        </div>
        <section>
          {history
            ? history.map((movie, i) => (
                <div key={i} className={styles.container}>
                  <div className={styles.poster}>
                    <div className={styles.posterOverlay}>
                      <div></div>
                      <div>details</div>
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

export default History;
