import React from "react";
import { NavLink } from "react-router-dom";

const GetStarted = () => {
  return (
    <div>
      <NavLink to="/browse" style={{ color: "white", fontSize: "30px" }}>
        Browse
      </NavLink>
      <img
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/netflix-background.jpg"
        alt="netflix background"
      />
    </div>
  );
};

export default GetStarted;
