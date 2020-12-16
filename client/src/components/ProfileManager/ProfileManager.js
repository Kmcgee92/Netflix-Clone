import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";

//core components
import ProfileSelection from "../ProfileSelector/ProfileSelection";
import ProfileForm from "../ProfileForm/ProfileForm"

//styles
import styles from "../../scss/ProfileManager.module.scss";

// mui
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const ProfileManager = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const profiles = useSelector((state) => state.profiles);
  const userId = useSelector((state) => state.auth.id);
  const [formState, setFormState] = useState(false);


  const handleAddProfile = () => {
    setFormState(true)
  }
  const editProfile = (name, src, profileId) => {
    console.log(name, src, profileId);
  };

  const closeManager = () => {
    history.push("/");
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
        {!formState ? 
        <div className={styles.container}>
          {profiles.length > 0 ? (
            <h1>Manage Profiles:</h1>
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
                editProfile={editProfile}
              />
            ))}
            {profiles.length >= 6 ? (
              <></>
            ) : (
              <div>
                <AddCircleOutlineIcon 
                onClick={handleAddProfile}
                fontSize={"large"} 
                />
              </div>
            )}
          </div>
          <div className={styles.manage_profiles}>
            <button onClick={closeManager}>Done</button>
          </div>
        </div>
          : null }
      </div>
      {formState && <ProfileForm/>}
    </>
  );
};

export default ProfileManager;
