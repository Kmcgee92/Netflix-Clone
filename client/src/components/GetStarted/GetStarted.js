import React from "react";
import { NavLink } from "react-router-dom";

//core components 
import ProfileSelector from '../ProfileSelector/ProfileSelector'
import LandingPage from '../LandingPage/LandingPage'

const GetStarted = () => {
  const id = null;
  return (
    <div>
      <NavLink to="/browse" style={{ color: "white", fontSize: "30px" }}>
        Browse
      </NavLink>
      {!id ? <ProfileSelector /> : <LandingPage />}
    </div>
  );
};

export default GetStarted;
