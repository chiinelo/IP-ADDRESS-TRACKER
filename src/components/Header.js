import React, { useState, useEffect } from "react";
import styles from "../styles/header.module.css";
import arrow from "../images/Path.png";
import Results from "../components/Results";

const Header = (props) => {
  const [color, setColor] = useState("#000");
  const [inputValue, setInputValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleClick = () => {
    setColor("#899");
    props.handleSubmit(inputValue);
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
              placeholder="Search for any IP address or domain"
              className={`${styles.ipInputText} p-3`}
              value={inputValue}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
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
      <Results {...props} />
    </div>
  );
};
export default Header;
