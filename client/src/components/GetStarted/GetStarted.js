import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/actions/authActions";
//core components 
import ProfileSelector from '../ProfileSelector/ProfileSelector'
import LandingPage from '../LandingPage/LandingPage'

const GetStarted = () => {
  const id = useSelector((state) => state.auth.id);
  return (
    <div>
      {id ? <ProfileSelector /> : <LandingPage />}
      <div></div>
    </div>
  );
};

export default GetStarted;
