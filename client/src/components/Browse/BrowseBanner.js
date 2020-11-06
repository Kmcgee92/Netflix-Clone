import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Youtube from "react-youtube";

//styles
import styles from "../../scss/browseBanner.module.scss";
//mui 
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GitHubIcon from "@material-ui/icons/GitHub";

const BrowseBanner = (props) => {
  const history = useHistory()
  const { title, backdrop, rating, overview } = props;
  const [video, setVideo] = useState(false);
  const opts = {
    width: "100%",
    height: "800",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleVideo = () => {
    if (video) {
      setVideo(false);
    } else setVideo(true);
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.placeholder}>
          {video ? (
            <>
              <Youtube
                // hardcoded video for christmas!
                videoId={"JTHWAQG6Gxw"}
                opts={opts}
              />
              <section>
                <h1>{title}</h1>
                <h4>{overview}</h4>
                <div className={styles.span}>
                  <div>
                    <div onClick={handleVideo} className={styles.playButton}>
                      <PlayArrowIcon />
                      Pause
                    </div>
                    <a href="https://github.com/Kmcgee92/Netflix-Clone">
                      <div className={styles.github}>
                        <GitHubIcon />
                        GitHub
                      </div>
                    </a>
                  </div>
                  <div className={styles.rating}>{rating}</div>
                </div>
              </section>
            </>
          ) : (
            <>
              <img src={`https://image.tmdb.org/t/p/original/${backdrop}`} />

              <section>
                <h1>Hope you enjoy mom!</h1>
                <h4>{overview}</h4>
                <div className={styles.span}>
                  <div>
                    <div onClick={handleVideo} className={styles.playButton}>
                      <PlayArrowIcon />
                      Play
                    </div>
                    <a href="https://github.com/Kmcgee92/Netflix-Clone">
                      <div className={styles.github}>
                        <GitHubIcon />
                        GitHub
                      </div>
                    </a>
                  </div>
                  <div className={styles.rating}>{rating}</div>
                </div>
              </section>
            </>
          )}
        </div>
        <div className={styles.bannershadow} />
      </div>
    </>
  );
};

export default BrowseBanner;
