import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../../Redux/actions/authActions";
//core components
import ProfileSelection from "./ProfileSelection";

//styles
import styles from '../../scss/profileSelector.module.scss'

const ProfileSelector = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const profiles = useSelector((state) => state.profiles);
  const userId = useSelector((state) => state.auth.id);

  const handleSetProfile = (name, src, profileId) => {
    dispatch(updateUserProfile(userId, profileId));
    // will update user based on selection
    history.push("/browse");
  };
  
  const handleManager = () => {
    history.push("/manageProfiles");
  };
  return (
    <>
      <div className={styles.header_shadow}></div>
      <div className={styles.header}>
        <a style={{ width: "180px" }} href="/browse">
          <div className={styles.logo}></div>
        </a>
      </div>
      <div className={styles.body}>
        <div className={styles.container}>
          {profiles.length > 0 ? (
            <h1>Who's watching?</h1>
          ) : (
            <h1>You dont have any profiles!</h1>
          )}
          <div className={styles.profiles}>
            {profiles.map((profile, id) => (
              <ProfileSelection
                key={id}
                profileId={profile.id}
                name={profile.name}
                src={profile.src}
                handleSetProfile={handleSetProfile}
              />
            ))}
          </div>
          <div className={styles.manage_profiles}>
            <button onClick={handleManager}>manage profiles</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSelector;
