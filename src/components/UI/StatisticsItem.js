import React from "react";
import classes from "./StatisticsItem.module.css";
const StatisticsItem = ({ img, title, text }) => {
  return (
    <div className={classes.eti}>
      <li className={classes.lishki}>
        <div className={classes["brand-div"]}>
          <img className={classes.brand} src={img} alt="stat-brend"></img>
        </div>
        <h3>{title}</h3>
        <p className={classes["stat-p"]}>{text}</p>
      </li>
    </div>
  );
};

export default StatisticsItem;
