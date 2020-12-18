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
  const [editProfile, setEditProfile] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({});

  const handleAddProfile = () => {
    setFormState(true);
  };
  const handleEditProfile = (name, src, profileId) => {
    setEditProfile(true);;
    setCurrentProfile({  name,  src,  profileId  });;
    setFormState(true);;
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
        {!formState ? (
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
                  handleEditProfile={handleEditProfile}
                />
              ))}
              {profiles.length >= 6 ? (
                <></>
              ) : (
                <div className={styles.addProfileBox}>
                  <div>
                    <AddCircleOutlineIcon
                      style={{ width: "-20px", transform: "translateY(-40%)" }}
                      onClick={handleAddProfile}
                      fontSize={"large"}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className={styles.manage_profiles}>
              <button onClick={closeManager}>Done</button>
            </div>
          </div>
        ) : null}
      </div>
      {formState && (
        <ProfileForm
          title={editProfile ? "Edit Profile" : "Create Profile"}
          profile={currentProfile}
        />
      )}
    </>
  );
};

export default ProfileManager;
