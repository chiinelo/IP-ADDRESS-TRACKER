import React from "react";
import styles from "../styles/header.module.css";
import arrow from "../images/Path.png"

const Header = () => {
  return (
    <div>
      <div className={`${styles.Header}`}>
        <p className={`${styles.headerText}`}>IP Address Tracker</p>
        <div>
          <input
            type="text"
            placeholder="IP Address"
            className={`${styles.ipInputText} p-3`}
          />
          <button type="submit" className={`${styles.inputbutton}`}>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
