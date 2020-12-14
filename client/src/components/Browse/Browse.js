import React from "react";
import { useHistory } from "react-router-dom";

//core components
import Slider from "../Slider/Slider";
import BrowseHeader from "./BrowseHeader";
import BrowseBanner from "./BrowseBanner";

//styles
import styles from '../../scss/browse.module.scss'

//mui
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useSelector } from "react-redux";

const Browse = () => {
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

  if (auth.msg) {
    history.push("/login");
    return <div></div>;
  }
  return (
    <>
      <BrowseHeader />
      <BrowseBanner
        title={"Operation Christmas Drop"}
        backdrop={"q9ZLjqti3UTt5ZC3qQMZhRNueGc.jpg"}
        rating={"tv-ma"}
        overview={
          "While gathering evidence to support closing a tropical U.S. Air Force base, a congressional aide warms to its generous captain."
        }
      />
      <div className={styles.wrapper}>
        <Slider
          title={"Trending Now"}
          url={"trending"}
          width={300}
          poster={true}
          backdrop={false}
          tall={true}
        />
        <Slider
          title={"Top Rated"}
          url={"top-rated"}
          width={200}
          poster={true}
          backdrop={false}
          tall={true}
        />
        <Slider
          title={"Nexflix Originals"}
          url={"nexflix-originals"}
          width={400}
          poster={true}
          tall={true}
        />
        <Slider
          title={"Action Movies"}
          url={"action-movies"}
          width={200}
          poster={true}
          tall={true}
        />
        <Slider
          title={"Comedy"}
          url={"comedy-movies"}
          width={200}
          poster={true}
          tall={true}
        />
        <Slider
          title={"Horrow Films"}
          url={"horror-movies"}
          width={400}
          backdrop
          tall={true}
        />
        <Slider
          title={"Romance"}
          url={"romance-movies"}
          width={400}
          backdrop={true}
          tall={true}
        />
        <Slider
          title={"Fantasy"}
          url={"fantasy"}
          width={400}
          backdrop={false}
          poster={true}
          tall={true}
        />
      </div>
      <footer className={styles.browseFooter}>
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
          <div className={styles.copyright}>© made in 2020 by Kasey McGee</div>
        </section>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"></img>
      </footer>
    </>
  );
};

export default Browse;


// nexflix-originals
// trending

// action-movies
// comedy-movies
// horror-movies
// romance-movies
// fantasy

