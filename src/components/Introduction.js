import React from "react";
import mainImage from "../images/illustration-working.svg";
import classes from "./Introduction.module.css";

const Introduction = () => {
  return (
    <article className={classes["main-article"]}>
      <section className={classes["inner_section"]}>
        <div className={classes["main-image-div"]}>
          <img className={classes["main-image"]} src={mainImage} alt="main" />
        </div>
        <div className={classes["main-text-desktop"]}>
          <h1 className={classes["main-text"]}>More than just shorter links</h1>
          <p className={classes.pishki}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className={classes["get-started"]}>Get Started</button>
        </div>
      </section>
    </article>
  );
};

export default Introduction;
