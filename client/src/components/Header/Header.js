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
import styles from "../../scss/header.module.scss";


const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      <div className={styles.logo}>NexFlix</div>
    </div>
  );
};

export default Header;
