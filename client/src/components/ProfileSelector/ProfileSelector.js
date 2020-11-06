import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//redux
import {useSelector} from 'react-redux'
//core components
import ProfileSelection from "./ProfileSelection";

//styles
import styles from '../../scss/profileSelector.module.scss'

const ProfileSelector = () => {
  const history = useHistory();
  const profiles = useSelector((state) => state.profiles);
  const [currentProfile, setCurrentProfile] = useState();

  const handleSetProfile = (name, src) => {
    console.log(name, src);
    // will update user based on selection
    // bonus goal
    // dispatch(setProfile)
    history.push("/browse");
  };
  return (
    <>
      <div className={styles.header_shadow}></div>
      <div className={styles.header}>
        <a href="/browse">
          <div className={styles.logo}></div>
        </a>
      </div>
      <div className={styles.body}>
        <div className={styles.container}>
          {profiles.length > 0 ? (
            <h1>Who's watching?</h1>) : 
            (<h1>You dont have any profiles!</h1>)
          }
          <div className={styles.profiles}>
              {profiles.map((profile, id) => (
                  <ProfileSelection
                    key={id}
                    name={profile.name}
                    src={profile.src}
                    handleSetProfile={handleSetProfile}
                  />
                ))}
          </div>
          <div className={styles.manage_profiles}>
            <button>manage profiles</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSelector;
