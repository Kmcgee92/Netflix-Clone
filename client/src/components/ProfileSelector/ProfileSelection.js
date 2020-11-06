import React from "react";

const ProfileSelection = ({ handleSetProfile, name, src }) => {
  return (
    <div onClick={() => handleSetProfile(name, src)}>
      <img src={src} alt={src} />
      <div>{name}</div>
    </div>
  );
};

export default ProfileSelection;