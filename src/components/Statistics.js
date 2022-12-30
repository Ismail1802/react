import React from "react";
import StatisticsItem from "./UI/StatisticsItem";
import classes from "./Statistics.module.css";
import brand from "../images/icon-brand-recognition.svg";
import detail from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";

const Statistics = () => {
  const dummy_text = [
    {
      id: 0,
      img: brand,
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links dont mean a thing. Brandedlinks help instil confidence in your content.",
    },
    {
      id: 1,
      img: detail,
      title: "Detailed Record",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 2,
      img: fully,
      title: "Fully Customizable",
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <article className={classes["second-article"]}>
      <div className={classes["stats-div"]}>
        <h2>Advanced Statistics</h2>
        <p className={classes["stats-p"]}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className={classes.stats}>
        <ul className={classes["stats-ul"]}>
          {dummy_text.map((el) => (
            <StatisticsItem
              key={el.id}
              img={el.img}
              title={el.title}
              text={el.text}
            />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Statistics;
