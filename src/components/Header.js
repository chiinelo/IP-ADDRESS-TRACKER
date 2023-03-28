import React, { useState, useEffect } from "react";
import styles from "../styles/header.module.css";
import arrow from "../images/Path.png";

const Header = () => {
  const [color, setColor] = useState("#000");
  const [inputValue, setInputValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleClick = () => {
    setColor("#899");
    console.log("Button clicked!");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (inputValue !== "") {
      setColor("#899");
      setButtonDisabled(false);
    } else {
      setColor("#000");
      setButtonDisabled(true);
    }
  }, [inputValue]);

  return (
    <div>
      <div className={`${styles.Header}`}>
        <p className={`${styles.headerText}`}>IP Address Tracker</p>

        <div>
          <form className={` d-flex d-sm-flex d-md-block`}>
            <input
              type="text"
              placeholder="IP Address"
              className={`${styles.ipInputText} p-3`}
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className={`${styles.inputbutton}`}
              style={{ backgroundColor: color }}
              onClick={handleClick}
              disabled={buttonDisabled}
            >
              <img src={arrow} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Header;
