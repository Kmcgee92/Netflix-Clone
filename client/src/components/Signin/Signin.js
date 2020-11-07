import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/actions/authActions";

//styles
import styles from "../../scss/signin.module.scss";

//mui
import FacebookIcon from "@material-ui/icons/Facebook";
import { Redirect } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login(email, password));
    //work on reroute later
    // if (auth.login) {
    history.push("/");
    // }
  };

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.overlay}>
          <div className={styles.bannerShadow} />
          <div className={styles.banner}>
            <div className={styles.header}>
              <div
                onClick={() => history.push("/browse")}
                style={{ cursor: "pointer" }}
                className={styles.logo}
              >
                Nexflix
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.signinCard}>
                <div className={styles.cardContent}>
                  <h1>Sign In</h1>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <button onClick={handleLogin}>Sign in</button>
                  <div className={styles.signinContents}>
                    <div>
                      <input type="checkbox" className="filled-in"></input>
                      <span>Remember me</span>
                    </div>
                    <span>Need help?</span>
                  </div>
                  <footer>
                    <div>
                      <img src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/facebook-app-icon.png" />
                      <span>Login with Facebook</span>
                    </div>
                    <div>
                      New to Netflix? <a href={"/"}>Sign up now</a>.
                    </div>
                    <div>
                      <span>
                        This page is not protected by Google reCAPTCHA like the
                        actual Netflix!{" "}
                        <a href={"https://policies.google.com/privacy"}>
                          Learn more.
                        </a>
                      </span>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.bannerShadow} /> */}
      <div>
        <footer className={styles.footer}>
          <div>
            <i>Questions? checkout my repo:</i>
            <a href="https://github.com/Kmcgee92/Netflix-Clone">Kmcgee92</a>
          </div>
          <footer>
            <span>FAQ</span>
            <span>Help Center</span>
            <span>Terms of Use</span>
            <span>Privacy</span>
            <span>Cookie Preferences</span>
            <span>Corporate Information</span>
          </footer>
        </footer>
      </div>
    </>
  );
};

export default Signin;
