import React from "react";
import history, { useHistory } from "react-router-dom";

import styles from "../../scss/notFound.module.scss";
const NotFound = () => {
  const history = useHistory();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
      </header>
      <div className={styles.container}>
        <div className={styles.body}>
          <h1>Lost your way?</h1>
          <h5>
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </h5>
          <button onClick={() => history.push("/browse")}>NetFlix Home</button>
          <div className={styles.footer}>
            <div>
              <span>Error Code</span>
              <span className={styles.errorCode}>NSES-404</span>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.bg}>
        <img
          src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/mars-2016-582c22195abc3.jpeg"
          alt="mars"
        />
      </div>
    </>
  );
};

export default NotFound;
