import React from "react";

const ProfileSelection = ({ profileId, handleSetProfile, name, src }) => {
  return (
    <div onClick={() => handleSetProfile(name, src, profileId)}>
      <img src={src} alt={src} />
      <div>{name}</div>
    </div>
  );
};

export default ProfileSelection;
