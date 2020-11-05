import React, {useState} from "react";
import { Redirect, useHistory } from "react-router-dom";
//redux
import {useSelector, useDispatch} from 'react-redux'
import {login} from '../../Redux/actions/authActions'
// styles
import styles from "../../scss/landingPage.module.scss";
// mui
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const LandingPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleDemo = () => {
    dispatch(login("testUser@test.io", "password"))
    history.push("/")
  }
  const letsGetStarted = () => {
    if (!email) {
      setError(true)
    }
    if (email) {
      history.push("/signup", { email });
    }
  }

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.bannerShadow} />
        <div className={styles.banner}>
          <div className={styles.header}>
            <div className={styles.logo}>Nexflix</div>
            <button onClick={() => history.push("/login")}>Sign In</button>
          </div>
          <div className={styles.container}>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
              {error ?<span className={styles.error}>Please provide an email.</span> : null}
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
              <button onClick={letsGetStarted}>
                get started
                <ArrowForwardIosIcon />
              </button>
            </div>
            <span>
              <button onClick={handleDemo}>Try My Demo</button>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.bannerShadow} />
      <div className={styles.divider} />
      <div>hello</div>
      <div className={styles.divider} />
      <div>hello</div>
      <div className={styles.divider} />
      <div>hello</div>
      <div className={styles.divider} />
      <div>
        <footer>
          Questions? checkout my profile{" "}
          <a href="kaseymcgee.io">KaseyMcGee.io</a>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
