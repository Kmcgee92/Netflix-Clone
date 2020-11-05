import React from "react";
import { useHistory } from "react-router-dom";
//core components
import ProfileSelection from "./ProfileSelection";

//styles
import styles from '../../scss/profileSelector.module.scss'

const ProfileSelector = () => {
  const history = useHistory();

  const profiles = [
    {
      name: "Kasey",
      src:
        "https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile1.png",
    },
    {
      name: "Mylo",
      src:
        "https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile2.png",
    },
    {
      name: "Makayla",
      src:
        "https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile3.png",
    },
    {
      name: "Alec",
      src:
        "https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile4.png",
    },
    {
      name: "Jeff",
      src:
        "https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile5.png",
    },
  ];

  const handleSetProfile = (name, src) => {
    console.log(name, src);
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
          <h1>Who's watching?</h1>
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
