import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";


//redux
import { useSelector, useDispatch } from "react-redux";
import { logout, updateUserProfile } from "../../Redux/actions/authActions";

//styles
import styles from "../../scss/browseHeader.module.scss";

//mui
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import SearchIcon from "@material-ui/icons/Search";

// nodejs library that concatenates classes
import classNames from "classnames";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const [profile, setProfile] = useState(false);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    if (reduxState.profiles.length > 0) {
      const currentProfile = reduxState.profiles.filter((el, i) => {
        return el.id == reduxState.auth.profile;
      });
      setProfile(...currentProfile);
    }
  }, [reduxState]);

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  const handleActiveProfile = (profileId) => {
    dispatch(updateUserProfile(reduxState.auth.id, profileId));
  };

  const defaultProfile =
    "https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile0.png";


  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

      const scrollEffect = classNames({
        [styles.headerBlack]: blackHeader,
        [styles.noHeaderBlack]: !blackHeader,
      });
  return (
    <>
      <div className={styles.headerShadow} />
      <header className={scrollEffect}>
        <div className={styles.leftSide}>
          <div className={styles.logo} />
          <a href="#">Home</a>
          <a href="/history">History</a>
          <a href="/watchlist">My List</a>
        </div>
        <div className={styles.rightSide}>
          <div>
            <SearchIcon style={{ cursor: "not-allowed" }} />
          </div>
          <div>
            <img
              className={styles.present}
              src={
                "https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/whiteGift.png"
              }
            />
          </div>
          <div>
            <NotificationsOffIcon style={{ cursor: "not-allowed" }} />
          </div>
          <div className={styles.profile}>
            {profile ? <img src={profile.src} /> : <img src={defaultProfile} />}
            <div className={styles.dropdown}>
              <span className={styles.dropbtn}>
                <img src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/triangle2.png" />
              </span>
              <div className={styles.dropdownContent}>
                <img
                  className={styles.pointer}
                  src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/test-images/triangle2.png"
                />
                {reduxState.profiles.map((profile, i) => (
                  <div

                                       onClick={()  => handleActiveProfile(profile.id)}
                  
                     className={styles.dropdownItem}
                  
                     key={i}
                  
                  >
                    <img src={profile.src}></img>
                    <div>{profile.name}</div>
                  </div>
                ))}
                <a href="/">Manage Profiles</a>
                <footer>
                  <div>
                    <a href="/">Account</a>
                  </div>
                  <div>
                    <a href="/pagenotfound!">Help Center</a>
                  </div>
                  {reduxState.auth.id ? (
                    <div onClick={() => handleLogout()}>
                      Sign Out of Nexflix
                    </div>
                  ) : (
                    <div onClick={() => history.push("/login")}>Sign in</div>
                  )}
                </footer>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
