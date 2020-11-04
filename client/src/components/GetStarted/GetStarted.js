import React from "react";
import { NavLink } from "react-router-dom";

//core components 
import ProfileSelector from '../ProfileSelector/ProfileSelector'
import LandingPage from '../LandingPage/LandingPage'

const GetStarted = () => {
  const id = null;
  return (
    <div>
      {id ? <ProfileSelector /> : <LandingPage />}
      <div></div>
    </div>
  );
};

export default GetStarted;
