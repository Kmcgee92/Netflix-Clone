import React, { useState } from "react";

//redux
import {useSelector, useDispatch} from 'react-redux'
import {clearHistory} from '../../Redux/actions/historyActions'

//components
import BrowseHeader from '../Browse/BrowseHeader'
import Poster from '../Poster/Poster'
//styles
import styles from "../../scss/history.module.scss";
const History = () => {
  const dispatch = useDispatch()
  const history = useSelector((state) => state.history);
  const id = useSelector((state)=> state.auth.id)
  const [historyWarning, setHistoryWarning] = useState(false)


  const path = `https://image.tmdb.org/t/p/w200`;

    const handleDetails = (movie) => {
      console.log(movie);
      console.log("need details page");
    };
    
    const clearHistoryModal = (boolean) => {
      setHistoryWarning(!historyWarning)
      if(boolean){
        dispatch(clearHistory(id))
      }
    };
  return (
    <>
      <BrowseHeader />
      <div className={styles.historyWrapper}>
        <div className={styles.header}>
          <h2>History</h2>
          <div onClick={()  =>  clearHistoryModal(false)}>Clear History</div>
        </div>
        <section>
          {history.length > 0
            ? history.map((movie, i) => (
                <div key={i} className={styles.container}>
                  <div className={styles.poster}>
                    <div className={styles.posterOverlay}>
                      <div></div>
                      <div onClick={() => handleDetails(movie)}>details</div>
                    </div>
                    <img src={`${path}${movie.poster}`} />
                  </div>
                </div>
              ))
            : null}
        </section>
      </div>
      {historyWarning && <div className={styles.warningOverlay}>
        <div className={styles.warningContainer}>
          <h2>You are about to clear your History.</h2>
          <div>
            <button onClick={()=> clearHistoryModal(true)}>Confirm</button>
            <button onClick={()=> clearHistoryModal(false)}>Cancel</button>
          </div>
        </div>
      </div>}
    </>
  );
};

export default History;
