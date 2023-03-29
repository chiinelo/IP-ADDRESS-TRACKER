import React from "react";
import styles from "../styles/results.module.css";

const Results = (props) => {
  console.log(props);
  return (
    <div className={`${styles.resultsbox} d-lg-flex `}>
      <div className={`${styles.container}`}>
        <h2>Ip Address</h2>
        <h3 className={`${styles.resultsinput}`}>{props.ip}</h3>
      </div>

      <div className={`${styles.container}`}>
        <h2>LOCATION</h2>
        <h3 className={`${styles.resultsinput}`}>{props.country}</h3>
      </div>
      <div className={`${styles.container}`}>
        <h2>TIMEZONE</h2>
        <h3 className={`${styles.resultsinput}`}>{props.timezone}</h3>
      </div>
      <div
        className={`${styles.container} border border-end-0 border-bottom-0 border-top-0`}
      >
        <h2 className={`${styles.resultsheading}`}>ISP</h2>
        <h3 className={`${styles.resultsanswer}`}>{props.isp}</h3>
      </div>
    </div>
  );
};

export default Results;
