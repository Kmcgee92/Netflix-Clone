import React from "react";
// mui
import EditIcon from "@material-ui/icons/Edit";


const ProfileSelection = (props) => {
  const { handleEditProfile, profileId, handleSetProfile, name, src } = props;
  return (
    <>
      {!handleEditProfile ? (
        <div onClick={() => handleSetProfile(name, src, profileId)}>
          <img src={src} alt={src} />
          <div>{name}</div>
        </div>
      ) : (
        <div onClick={() => handleEditProfile(name, src, profileId)}>
          <img src={src} alt={src} />
          <EditIcon
            fontSize={"default"}
            style={{
              position: "absolute",
              transform: "translateY(-80%)",
              color: "white",
            }}
          />
          <div>{name}</div>
        </div>
      )}
    </>
  );
};

export default ProfileSelection;
