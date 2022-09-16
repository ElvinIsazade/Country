import React, { useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";
import classes from "./Header.module.css";

const Header = ({ changeMode, darkMode }) => {
  const [moon, setMoon] = useState(true);
  const changeChecked = () => {
    setMoon(!moon);
  }


  return (
    <div className={classes.header}>
      <h1>Where in the world?</h1>
      <div className={classes.dark_toogle} onClick={changeMode}>
        <div className={classes.ball_container} onClick={changeChecked}>
          <FaMoon className={classes.moon} />
          <FaSun className={classes.sun} />
          <div className={!moon ? classes.baller : classes.ball}></div>
        </div>
        <p>Dark Mode</p>
      </div>
    </div>
  )
}

export default Header