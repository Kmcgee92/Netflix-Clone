import React from "react";

import styles from "../../scss/landingPage.module.scss";
const LandingPage = () => {
  return (
    <>
      <div className={styles.backdrop}>
      <div className={styles.bannerShadow}  />
        <div className={styles.banner}>
          <div className={styles.header}>
            <div className={styles.logo}>Nexflix</div>
            <button>Sign In</button>
          </div>
          <div className={styles.container}>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h3>Watch anywhere. Cancel anytime.</h3>
              <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
              <div>
                <input placeholder="Email address"/>
                <button>get started•</button>
              </div>
          </div>
        </div>
      </div>
      <div className={styles.bannerShadow}  />
      <div className={styles.divider}  />
      <div>
        hello
      </div>
      <div className={styles.divider}  />
      <div>
        hello
      </div>
      <div className={styles.divider}  />
        <div>
          hello
        </div>
      <div className={styles.divider}  />
      <div>
        <footer>
          Questions? checkout my profile <a href='kaseymcgee.io'>KaseyMcGee.io</a>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
