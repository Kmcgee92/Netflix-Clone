import React, {useState} from "react";
import { Redirect, useHistory } from "react-router-dom";
//redux
import {useSelector, useDispatch} from 'react-redux'
import {login} from '../../Redux/actions/authActions'
// styles
import styles from "../../scss/landingPage.module.scss";
// mui
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

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
            <div
              onClick={() => history.push("/browse")}
              style={{ cursor: "pointer" }}
              className={styles.logo}
            >
              Nexflix
            </div>
            <div>
              <button className={styles.demo} onClick={handleDemo}>
                Try My Demo
              </button>
              <button onClick={() => history.push("/login")}>Sign In</button>
            </div>
          </div>
          <div className={styles.container}>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            {error ? (
              <span className={styles.error}>Please provide an email.</span>
            ) : null}
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
          </div>
        </div>
      </div>
      <div className={styles.bannerShadow} />
      <div className={styles.scrollSection}>
        <div className={styles.divider} />
        <section>
          <div>
            <h1> Enjoy on your TV.</h1>
            <h4>Watch on Smart TVs, Playstation, Xbox,</h4>
            <h4>Chromecase, Apple TV, Blu-ray players, and</h4>
            <h4>more.</h4>
          </div>
          <img src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/Screen+Shot+2020-11-07+at+1.53.33+PM.png" />
        </section>
        <div className={styles.divider} />
        <section>
          <img src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/Screen+Shot+2020-11-06+at+11.23.13+AM.png" />
          <div>
            <h1>Download your shows </h1>
            <h1>to watch offline.</h1>
            <h4> Save your favorites easily and always have</h4>
            <h4>something to watch.</h4>
          </div>
        </section>
        <div className={styles.divider} />
        <section>
          <div>
            <h1>Watch everywhere.</h1>
            <h4> Stream unlimited movies and TV shows on</h4>
            <h4> your phone, tablet, laptop, and TV without</h4>
            <h4> paying more.</h4>
          </div>
          <img src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/Screen+Shot+2020-11-06+at+11.23.03+AM.png" />
        </section>
        <div className={styles.divider} />
        <div className={styles.secondStarter}>
          <div className={styles.secondStarterRows}>
            <span>
              Ready to watch? Enter your email to create your membership.
            </span>
          </div>
          <div className={styles.secondStarterRows}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
            <button onClick={letsGetStarted}>
              get started
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.faq}></div>

      <div className={styles.footerMargin}>
        <footer className={styles.landingFooter}>
          <section>
            <div className={styles.questions}>
              questions? check out my repo!
              <a
                className={styles.githubLink}
                href="https://github.com/Kmcgee92/Netflix-Clone"
              >
                KmcGee92
              </a>
            </div>
            <div className={styles.socialMedia}>
              <div>
                <a href="https://www.facebook.com/kasey.mcgee.73">
                  <FacebookIcon
                    style={{ fontSize: 40 }}
                    className={styles.mediaLink}
                  />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/mcgeekasey/">
                  <InstagramIcon
                    style={{ fontSize: 40 }}
                    className={styles.mediaLink}
                  />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/Kmcgee92">
                  <TwitterIcon
                    style={{ fontSize: 40 }}
                    className={styles.mediaLink}
                  />
                </a>
              </div>
            </div>
            <div className={styles.netflixFooter}>
              <div>
                <span>Audio and Subtitles</span>
                <span>Audio Description</span>
                <span>Help Center</span>
                <span>Gift Cards</span>
              </div>
              <div>
                <span>Media Center</span>
                <span>Investor Relations</span>
                <span>Jobs</span>
                <span>Terms of Use</span>
              </div>
              <div>
                <span>Privacy</span>
                <span>Legal Notices</span>
                <span>Cookie Preferences</span>
                <span>Corporate Information</span>
              </div>
              <div>
                <span>Contact Us</span>
              </div>
            </div>
            <div className={styles.copyright}>
              © made in 2020 by Kasey McGee
            </div>
          </section>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"></img>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
