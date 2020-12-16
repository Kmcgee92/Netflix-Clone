import React from "react";
// mui
import EditIcon from "@material-ui/icons/Edit";


const ProfileSelection = (props) => {
  const { editProfile, profileId, handleSetProfile, name, src } = props;
  return (
    <>
      {!editProfile ? (
        <div onClick={() => handleSetProfile(name, src, profileId)}>
          <img src={src} alt={src} />
          <div>{name}</div>
        </div>
      ) : (
        <div onClick={() => editProfile(name, src, profileId)}>
          <img src={src} alt={src} />
          <EditIcon 
          fontSize={"large"}
          style={{position: "relative", right: "-40%", top: "-50%", color: "white"}}
          />
          <div style={{marginTop: "-35px"}}>{name}</div>
        </div>
      )}
    </>
  );
};

export default ProfileSelection;
