import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../Redux/actions/authActions";
//styles
import styles from "../../scss/signup.module.scss";

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email] = useState(history.location.state.email);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  console.log(name);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const auth = useSelector((state) => state.auth);

  const handleLogin = () => {
    if (!name) setNameError(true);
    if (!password) setPasswordError(true);
    if (name) setNameError(false);
    if (password) setPasswordError(false);
    if (!name || !password) return;
    else {
      dispatch(signup(name, email, password));
      history.push("/");
    }
  };

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.overlay}>
          <div className={styles.banner}>
            <div className={styles.header}>
              <div className={styles.logo}>Nexflix</div>
              <a href={"/login"}>Sign In</a>
            </div>
            <div className={styles.container}>
              <div className={styles.signinCard}>
                <div className={styles.cardContent}>
                  <h6>STEP 2 OF 2</h6>
                  <h3>Joining Nexflix is easy.</h3>
                  <h5>
                    Enter your password and you'll be watching in no time.
                  </h5>
                  <div>Email</div>
                  <span>{email}</span>
                  {nameError ? <i>What do we call you?</i> : null}
                  <input
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                  {passwordError ? <i>You need a password!</i> : null}
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <button onClick={handleLogin}>Continue</button>
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

export default Signup;
