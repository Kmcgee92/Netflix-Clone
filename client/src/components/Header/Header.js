import React from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";

//redux
// import { useSelector, useDispatch } from "react-redux";
// import { addBookmarkToUser } from "../../Redux/actions/eventsActions";

// nodejs library that concatenates classes
// import classNames from "classnames";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
//styles
import "../../scss/header.scss";


const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="logo">NexFlix</div>
    </div>
  );
};

export default Header;
